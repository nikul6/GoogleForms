import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

export default function CheckoutStack() {
  return (
    <>
      <StatusBar style='light' />
      <Stack screenOptions={{
        contentStyle: { padding: 15, backgroundColor: '#F0EBF8', flex: 1 },
        headerStyle: { backgroundColor: '#673AB8' },
        headerTitleStyle: { color: '#fff' },
        headerTintColor: '#F0EBF8'
      }}>
        <Stack.Screen name='personal' options={{ title: "Personal info" }} />
        <Stack.Screen name='delivery' options={{ title: "Delivery info" }} />
        <Stack.Screen name='payment' options={{ title: "Payment info" }} />
      </Stack>
    </>
  )
}

const styles = StyleSheet.create({})