import { Stack, useRouter } from "expo-router";
import React, { use } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import products from "@/data/products.json";
const Details = () => {
  const { id } = useLocalSearchParams();
  const product = products.find((item) => item.id.toString() === id);
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
});

export default Details;
