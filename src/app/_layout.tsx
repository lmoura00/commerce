import { CartProvider } from '@/context/cart-context';
import { Stack, useRouter } from 'expo-router';
import React, { useReducer } from 'react';
import { StyleSheet, View } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {MaterialCommunityIcons} from "@expo/vector-icons"

const Layout = () => {
    const queryClient = new QueryClient()
    const router = useRouter();
    const handlePress = () => {
        router.push({ pathname: "/cart/page" });
    };
    return (
        <QueryClientProvider client={queryClient}>
        <CartProvider>
        <Stack
            screenOptions={{
                headerBackTitle: 'Voltar',
                contentStyle: {
                    backgroundColor: '#f6f6f6',
                },
                headerRight: () => (<MaterialCommunityIcons name="cart" size={24} color="black" onPress={() => handlePress()} />),
            }}>
            <Stack.Screen
                name="index"
                options={{
                    headerTitle: 'Produtos',
                }}
            />
            <Stack.Screen
                name="details/[id]"
            />
            <Stack.Screen
                name="cart/page"
                options={{
                    headerTitle: 'Meu carrinho',
                }}
            />
        </Stack>
        </CartProvider>
        </QueryClientProvider>
    );
}

const styles = StyleSheet.create({})

export default Layout;
