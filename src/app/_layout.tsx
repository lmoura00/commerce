import { CartProvider } from '@/context/cart-context';
import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const Layout = () => {
    const queryClient = new QueryClient()
    return (
        <QueryClientProvider client={queryClient}>
        <CartProvider>
        <Stack
            screenOptions={{
                headerBackTitle: 'Voltar',
                contentStyle: {
                    backgroundColor: '#f6f6f6',
                },
            }}>
            <Stack.Screen
                name="index"
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="details/[id]"
            />
        </Stack>
        </CartProvider>
        </QueryClientProvider>
    );
}

const styles = StyleSheet.create({})

export default Layout;
