import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Card, useTheme, TextInput, Checkbox } from 'react-native-paper'
import { useRouter } from 'expo-router'
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { PaymentInfo, PaymentInfoSchema } from '../../src/schema/checkout.schema';
import ControlledInput from '../../src/components/ControlledInput';
import { useCheckoutContext } from '../../src/contexts/CheckoutContext';

export default function PaymentDetails() {
  const { control, handleSubmit } = useForm<PaymentInfo>({
    resolver: zodResolver(PaymentInfoSchema),
  });

  const { onSubmitAll } = useCheckoutContext();
  const router = useRouter();
  const theme = useTheme();

  const nextPage = async (data: PaymentInfo) => {
    const success = await onSubmitAll(data);

    if (success) {
      router.push('/')
    } else {
      console.log("error")
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <Card style={{ backgroundColor: theme.colors.background }}>
        <Card.Content style={{ gap: 10 }}>
          <Card.Title title={'Payment details'} titleVariant='titleLarge' />
          <ControlledInput
            control={control}
            name='number'
            label={'Card number'}
            placeholder='4242 4242 4242 4242'
          />
          <View style={styles.dateCvv}>
            <ControlledInput
              control={control}
              name='expirationDate'
              label={'Expiration date'}
              placeholder="mm/yyyy"
            />
            <ControlledInput
              control={control}
              name='securityCode'
              label={'Security code'}
            />
          </View>
          <Controller
            control={control}
            name='saveInfo'
            render={({ field: { value, onChange } }) => (
              <Checkbox.Item
                label='Save payment information'
                onPress={() => onChange(!value)}
                status={value ? 'checked' : 'unchecked'}
              />
            )}
          />
        </Card.Content>
      </Card>
      <Button mode='contained' onPress={handleSubmit(nextPage)}>Next</Button>
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