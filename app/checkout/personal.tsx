import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { Button, Card } from 'react-native-paper'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { PersonalInfoSchema, PersonalInfo } from '../../src/schema/checkout.schema'
import ControlledInput from '../../src/components/ControlledInput'
import { useCheckoutContext } from '../../src/contexts/CheckoutContext'

export default function PersonalDetails() {
  const { control, handleSubmit } = useForm<PersonalInfo>({
    resolver: zodResolver(PersonalInfoSchema),
  });

  const { setPersonal } = useCheckoutContext();

  const router = useRouter();

  const nextPage = (data: PersonalInfo) => {
    setPersonal(data);
    router.push('/checkout/delivery');
  }

  return (
    <ScrollView contentContainerStyle={{ gap: 15, maxWidth: 500, width: '100%' }} showsVerticalScrollIndicator={false}>
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
          <ControlledInput
            control={control}
            name='password'
            label='Password'
            secureTextEntry
          />
          <ControlledInput
            control={control}
            name='confirmPassword'
            label='ConfirmPassword'
            secureTextEntry
          />
        </Card.Content>
      </Card>
      <Button mode='contained' onPress={handleSubmit(nextPage)}>Next</Button>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})