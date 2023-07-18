import { StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router'
import { Button, Card, TextInput, useTheme, RadioButton } from 'react-native-paper'

export default function DeliveryDetails() {
  const [shipping, setShipping] = useState('free');

  const router = useRouter();
  const theme = useTheme();

  const nextPage = () => {
    router.push('/checkout/payment')
  }

  return (
    <ScrollView contentContainerStyle={{gap:15}} showsVerticalScrollIndicator={false}>
      <Card style={{backgroundColor:theme.colors.background}}>
        <Card.Title title={'Delivery address'} titleVariant='titleLarge' />
        <Card.Content style={{ gap: 10 }}>
          <TextInput
            label={'City'}
            style={{backgroundColor:theme.colors.background}}
          />
          <TextInput
            label={'Postal Code'}
            style={{backgroundColor:theme.colors.background}}
          />
          <TextInput
            label={'Address'}
            style={{backgroundColor:theme.colors.background}}
          />
        </Card.Content>
      </Card>
      <Card style={{backgroundColor:theme.colors.background}}>
        <Card.Title title={'Shipping options'} titleVariant='titleLarge' />
        <Card.Content style={{ gap: 10 }}>
          <RadioButton.Group value={shipping} onValueChange={(value)=>setShipping(value)}>
            <RadioButton.Item label='Free' value='free'/>
            <RadioButton.Item label='Fast' value='fast'/>
            <RadioButton.Item label='Same day' value='same_day'/>
          </RadioButton.Group>
        </Card.Content>
      </Card>
      <Button mode='contained' onPress={nextPage}>Next</Button>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})