import { Stack, useRouter } from "expo-router";
import React, { use } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { fetchProducts, fetchProductWithId } from "@/api/products";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import {useCart} from "@/context/cart-context";
const Details = () => {
  const { id } = useLocalSearchParams();
  const queryClient = useQueryClient();
  const {addToCart} = useCart();
  const productId = Array.isArray(id) ? id[0] : id;
  const { data: product, isLoading } = useQuery({
    queryKey: ["product"],
    queryFn: () => fetchProductWithId(productId),
    refetchOnWindowFocus: false,
    enabled: !!productId,
  });
  if (isLoading) {
    return (
      <View style={styles.containerLoading}>
        <Text style={styles.headerLoading}>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Stack.Screen
        name="details/[id]"
        options={{
          title: product?.name,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#f6f6f6",
          },
        }}
      />
      <Image source={{ uri: product?.image }} style={styles.image} />
      <Text style={styles.title}>{product?.name}</Text>
      <Text style={styles.description}>{product?.description}</Text>
      <Text style={styles.price}>
        {product?.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </Text>
      <TouchableOpacity style={styles.buttonAdd} onPress={() => {addToCart(product!); }}>
        <Text style={styles.buttonAddText}>Adicionar ao carrinho</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    gap: 16,
    paddingTop: 32,
    paddingBottom: 32,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 16,
    backgroundColor: "transparent",
    borderRadius: 12,
    objectFit: "contain",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 16,
  },
  containerLoading: {
    flex: 1,
    backgroundColor: "#f6f6f6",
    alignItems: "center",
    justifyContent: "center",
  },
  headerLoading: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#222",
    textAlign: "center",
    letterSpacing: 1,
  },
  buttonAdd: {
    backgroundColor: "#2e7d32",
    padding: 12,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  buttonAddText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  }
});

export default Details;
