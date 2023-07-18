import { ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { Button, Card, TextInput, useTheme } from 'react-native-paper'

export default function PersonalDetails() {
  const router = useRouter();
  const theme = useTheme();

  const nextPage = () => {
    router.push('/checkout/delivery');
  }

  return (
    <ScrollView contentContainerStyle={{ gap: 15 }} showsVerticalScrollIndicator={false}>
      <Card>
        <Card.Title title="Personal information" titleVariant="titleLarge" />
        <Card.Content style={{ gap: 10 }}>
          <TextInput
            placeholder='Name'
            label='Name'
            style={{ backgroundColor: theme.colors.background }}
          />
          <TextInput
            placeholder='Email'
            label='Email'
            style={{ backgroundColor: theme.colors.background }}
          />
        </Card.Content>
      </Card>
      <Button mode='contained' onPress={nextPage}>Next</Button>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})