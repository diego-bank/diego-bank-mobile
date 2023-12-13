import { Text, View } from 'react-native'
import './styles'
import React, { useState } from 'react'
import { Container, StyledText } from './styles'
import Input from '../../components/Input'
import Button from '../../components/Button'

import { api } from '../../services/api'
import { useAuthStore } from "../../stores/authStore";
import { useAccountStore } from '../../stores/accountStore'
import Toast from 'react-native-toast-message'

const Deposit = () => {
  const [value, setValue] = useState(0)

  const accessToken = useAuthStore(state => state.accessToken);
  const setAccountInformation = useAccountStore(state => state.setAccountInformation);
  const accountId = useAccountStore(state => state.id);

  async function deposit() {
    if (value != null && value != ""){
      const number = Number(value)

      await api.post('api/v1/accounts/deposit/', {
        "value": value,
      }, {
        headers: {
          Authorization: "Bearer " + accessToken
      }})
      .then((response) => {
        console.log(response.data)
        Toast.show({
          type: 'success',
          text1: 'Success',
          text2: response.data
        });
        setValue(Number(null))
        // accountInfo(accountId)
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

//   async function accountInfo(id) {
//     await api.get(`api/v1/accounts/${id}/`, {
//         headers: {
//             Authorization: "Bearer " + accessToken,
//         }
//     })
//     .then((response) => {
//         const agency = response.data.agency
//         const number = response.data.number
//         const balance = response.data.balance
        
//         setAccountInformation(
//             id,
//             number,
//             agency,
//             balance,
//         )
//         getTransactions();
//     })
//     .catch((e) => {
//         console.log(e);
//     })
// }

  return (
    <Container>
      <Input label={'Value'} type={'numeric'} onChangeText={(text) => setValue(text)} value={value} />
      <Button title={'Make Deposit'} color={'#8F3CFF'} onPress={() => deposit()} />
    </Container>
  )
}

export default Deposit