import React, { useState } from 'react'
import { Container, StyledText, InfoView, InfoBox, InfoMin, Main, StyledTitle } from './styles'
import Input from '../../components/Input'
import Button from '../../components/Button'

import { api } from '../../services/api'
import { useAuthStore } from "../../stores/authStore";
import { useNavigation } from '@react-navigation/native'

const Transaction = ({route}) => {
  const [value, setValue] = useState(0)
  const [description, setDescription] = useState("")

  const {data} = route.params;

  const accessToken = useAuthStore(state => state.accessToken);

  const {navigate} = useNavigation()

  async function transaction() {

    if (value != null && value != "" && value != 0){

      await api.post(`api/v1/transactions/`, {
        "value": value,
        "recipient": data.id,
        "description": description
      } ,{
        headers: {
          Authorization: "Bearer " + accessToken
      }})
      .then((response) => {
        console.log(response.data)
        navigate("Transaction")
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
      
      <InfoView>
          <StyledTitle>{data.user.first_name} {data.user.last_name}</StyledTitle>
          <Input label={'Account Number'} value={data.number} editable={false}/>
          <Input label={'CPF'} value={data.user.cpf} editable={false}/>
          <Input label={'Email'} value={data.user.email} editable={false}/>
          <Input label={'Value'} type={'numeric'} onChangeText={(text) => setValue(text)} value={value}/>
          <Input label={'Description'} type={'default'} onChangeText={(text) => setDescription(text)} value={description}/>
      </InfoView>

      
      <Button title={'Make Transaction'} color={'#8F3CFF'} onPress={() => transaction()}></Button>
    </Container>
  )
}

export default Transaction