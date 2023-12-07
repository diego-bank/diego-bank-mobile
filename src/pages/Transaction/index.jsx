import React, { useCallback, useState } from 'react'
import { Container, StyledText, InfoView, InfoBox, InfoMin, Main, StyledTitle } from './styles'
import Input from '../../components/Input'
import Button from '../../components/Button'

import { api } from '../../services/api'
import { useAuthStore } from "../../stores/authStore";
import { useFocusEffect, useNavigation } from '@react-navigation/native'

import { Switch, View } from 'react-native'
import Toast from 'react-native-toast-message'

const Transaction = ({route}) => {
  const [value, setValue] = useState(0)
  const [description, setDescription] = useState("")
  const [card, setCard] = useState(null)
  const [useCard, setUseCard] = useState(true)

  const {data} = route.params;

  const accessToken = useAuthStore(state => state.accessToken);

  const {navigate} = useNavigation()

  async function getCard() {
    await api
      .get(`api/v1/cards/`, {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      })
      .then((response) => {
        if (response.data.length > 0){
          setCard(response.data);
        }
        console.log(response.data);
      });
  }

  useFocusEffect(
    useCallback(() => {
      getCard();
    }, [])
  );

  async function transaction() {

    if (value != null && value != "" && value != 0){

      await api.post(`api/v1/transactions/`, {
        "value": value,
        "recipient": data.id,
        "description": description,
        "card": useCard ? card[0].id : null
      } ,{
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
        navigate("Home")
      })
      .catch((error) => {
        console.log(error)
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: error
        });
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
          <InfoMin>
            <StyledText>Card</StyledText>
            <Switch onValueChange={() => setUseCard(!useCard)} value={useCard}/>
          </InfoMin>
      </InfoView>

      
      <Button title={'Make Transaction'} color={'#8F3CFF'} onPress={() => transaction()}></Button>
    </Container>
  )
}

export default Transaction