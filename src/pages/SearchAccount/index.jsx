import { Text, View } from 'react-native'
import './styles'
import React, { useState } from 'react'
import { Container, StyledText } from './styles'
import Input from '../../components/Input'
import Button from '../../components/Button'

import { api } from '../../services/api'
import { useAuthStore } from "../../stores/authStore";
import { useNavigation } from '@react-navigation/native'

const SearchAccount = () => {
  const [value, setValue] = useState(0)

  const accessToken = useAuthStore(state => state.accessToken);

  const {navigate} = useNavigation()

  async function searchAccount() {
    if (value != null && value != ""){

      await api.get(`api/v1/accounts/search/${value}/`, {
        headers: {
          Authorization: "Bearer " + accessToken
      }})
      .then((response) => {
        navigate("Transaction", {
          data: response.data
        })
      })
      .catch((error) => {
        console.log(error)
      })
    } else {
      console.log(value)
    }
  }

  return (
    <Container>
      <Input label={'Account Number'} type={'numeric'} onChangeText={(text) => setValue(text)} value={value} />
      <Button title={'Search Account'} color={'#8F3CFF'} onPress={() => searchAccount()} />
    </Container>
  )
}

export default SearchAccount