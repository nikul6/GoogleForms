import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Card, useTheme, TextInput, Checkbox } from 'react-native-paper'
import { useRouter } from 'expo-router'

export default function PaymentDetails() {
  const router = useRouter();
  const theme = useTheme();

  const nextPage = () => {
    router.push('/')
  }

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <Card style={{ backgroundColor: theme.colors.background }}>
        <Card.Content style={{ gap: 10 }}>
          <Card.Title title={'Payment details'} titleVariant='titleLarge' />
          <TextInput
            label={'Card number'}
            placeholder='4242 4242 4242 4242'
            style={{ backgroundColor: theme.colors.background }}
          />
          <View style={styles.dateCvv}>
            <TextInput
              label={'Expiration date'}
              placeholder="mm/yyyy"
              style={{ backgroundColor: theme.colors.background, flex: 3 }}
            />
            <TextInput
              label={'Security code'}
              style={{ backgroundColor: theme.colors.background, flex: 2 }}
            />
          </View>
          <Checkbox.Item label='Save payment information' status='checked' />
        </Card.Content>
      </Card>
      <Button mode='contained' onPress={nextPage}>Next</Button>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 15,
    maxWidth: 500,
    width: '100%',
    alignSelf: 'center'
  },
  dateCvv: {
    flexDirection: 'row',
    gap: 15
  }
})