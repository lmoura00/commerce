import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const Layout = () => {
    return (
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
    );
}

const styles = StyleSheet.create({})

export default Layout;
