import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { Button, Card, useTheme } from 'react-native-paper'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { PersonalInfoSchema, PersonalInfo } from '../../src/schema/checkout.schema'
import ControlledInput from '../../src/components/ControlledInput'

export default function PersonalDetails() {
  const { control, handleSubmit, formState: { errors } } = useForm<PersonalInfo>({
    resolver: zodResolver(PersonalInfoSchema),
  });

  const router = useRouter();
  const theme = useTheme();

  const nextPage = (data) => {
    console.log("data --> ", data);
    router.push('/checkout/delivery');
  }

  return (
    <ScrollView contentContainerStyle={{ gap: 15, maxWidth:500, width:'100%' }} showsVerticalScrollIndicator={false}>
      <Card>
        <Card.Title title="Personal information" titleVariant="titleLarge" />
        <Card.Content style={{ gap: 10 }}>
          <ControlledInput
            control={control}
            name='name'
            placeholder='Name'
            label='Name'
          />
          <ControlledInput
            control={control}
            name='email'
            placeholder='Email'
            label='Email'
          />
        </Card.Content>
      </Card>
      <Button mode='contained' onPress={handleSubmit(nextPage)}>Next</Button>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})