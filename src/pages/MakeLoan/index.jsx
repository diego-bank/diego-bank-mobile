import { Text, View } from 'react-native'
import './styles'
import React, { useState } from 'react'
import { Container, StyledText } from './styles'
import Input from '../../components/Input'
import Button from '../../components/Button'

import { api } from '../../services/api'
import { useAuthStore } from "../../stores/authStore";
import Toast from 'react-native-toast-message'

const MakeLoan = () => {
  const [value, setValue] = useState(0)
  const [payments, setPayments] = useState(0)

  const accessToken = useAuthStore(state => state.accessToken);

  async function loan() {
    if (value != null && value != ""){
      const number = Number(value)

      await api.post('api/v1/loans/', {
        "value": value,
        "payments": payments
      }, {
        headers: {
          Authorization: "Bearer " + accessToken
      }})
      .then((response) => {
        console.log(response.data)

        setValue(Number(null))
        setPayments(Number(null))

        Toast.show({
          type: 'success',
          text1: 'Success',
          text2: response.data
        });
      })
      .catch((error) => {
        console.log(error)
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: Object.values(error.response.data)[0]
        });
      })
    } else {
      console.log(value)
    }
  }

  return (
    <Container>
      <Input label={'Value'} type={'numeric'} onChangeText={(text) => setValue(text)} value={value} />
      <Input label={'Payments'} type={'numeric'} onChangeText={(text) => setPayments(text)} value={payments} />
      <Button title={'Make Loan'} color={'#8F3CFF'} onPress={() => loan()} />
    </Container>
  )
}

export default MakeLoan