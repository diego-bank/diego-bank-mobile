import { View, Text, FlatList } from "react-native";
import React, { useCallback, useState } from "react";
import Button from "../../components/Button";
import { Container, IconBanner, Main, StyledText } from "./styles";
import { StyledTitle } from "../Home/styles";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useAuthStore } from "../../stores/authStore";
import { api } from "../../services/api";

const Card = () => {
    const [card, setCard] = useState(null)

    const accessToken = useAuthStore(state => state.accessToken)

    const {navigate} = useNavigation()

    async function getCard() {
        await api.get(`api/v1/cards/`, {
            headers: {
                Authorization: "Bearer " + accessToken,
            }
        })
        .then((response) => {
            setCard(response.data)
            console.log(response.data)
        })
    }

    useFocusEffect(
        useCallback(() => {
          getCard()
    }, [])
    )

  return (
    card ? (
      <Container>
        <StyledText>
        {card[0].number}
        </StyledText>
      </Container>
    ) : (
      <Container>
        <StyledText>
        aaaaaaaaaaaaaaaa
        </StyledText>
      </Container>
    )
    
  );
};

export default Card;
