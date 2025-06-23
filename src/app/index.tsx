import React, { useEffect } from 'react';
import { StyleSheet, View, FlatList, Text, Pressable, Image } from 'react-native';
import products from '@/data/products.json';
import { useRouter } from 'expo-router';
import fetchProducts from '@/api/routes';
const Index = () => {
    const router = useRouter();
    const [products, setProducts] = React.useState([]);
    useEffect(() => {
        fetchProducts().then(data => setProducts(data)).catch(error => console.error(error));
        setProducts(products);
    }, []);
    const handleProductPress = (id: string) => {
        router.push({ pathname: "/details/[id]", params: { id } });
    };
    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ padding: 16, gap: 8 }} 
                numColumns={2}
                columnWrapperStyle={{ gap: 8 }}
                ListHeaderComponent={() => (
                    <View style={{ paddingVertical: 16 }}>
                        <Text style={styles.header}>Produtos</Text>
                    </View>
                )}
                renderItem={({ item }) => (
                    <Pressable style={styles.card} onPress={() => handleProductPress(item.id.toString())}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
                            {item.name}
                        </Text>
                        <Text style={styles.price}>{item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Text>
                    </Pressable>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f6f6',
        paddingTop: 25,
        marginBottom: 25,
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#222',
        textAlign: 'center',
        letterSpacing: 1,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        alignItems: 'center',
        flex: 0.5,
        marginHorizontal: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,  
        elevation: 3,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        marginTop: 12,
        marginBottom: 4,
        color: '#333',
        textAlign: 'center',
        maxWidth: 120, 
    },
    image: {
        width: "100%",
        height: 100,
        resizeMode: 'contain',
        borderRadius: 8,
        backgroundColor: '#fff',
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2e7d32',
        marginTop: 6,
    },
})

export default Index;
