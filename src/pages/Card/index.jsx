import { View, Text, FlatList } from "react-native";

import React, { useCallback, useState } from "react";
import Button from "../../components/Button";
import CreditCard from "../../components/CreditCard";
import Input from "../../components/Input";

import { Container, IconBanner, Main, StyledText } from "./styles";
import { StyledTitle } from "../Home/styles";

import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useAuthStore } from "../../stores/authStore";
import { useUserStore } from "../../stores/userStore";
import { useAccountStore } from "../../stores/accountStore";
import { api } from "../../services/api";

const Card = () => {
  const [card, setCard] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const accessToken = useAuthStore((state) => state.accessToken);
  const first_name = useUserStore((state) => state.first_name);
  const last_name = useUserStore((state) => state.last_name);
  const account_id = useAccountStore((state) => state.id);
  const accountNumber = useAccountStore(state => state.number)

  const { navigate } = useNavigation();

  async function getTransactions() {
    await api
      .get(`api/v1/transactions/`, {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      })
      .then((response) => {
        setTransactions(response.data);
        console.log(response.data);
      })
      .then(() => {
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  async function getCard() {
    await api
      .get(`api/v1/cards/`, {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      })
      .then((response) => {
        if (response.data.length > 0) {
          setCard(response.data);
        }
        console.log(response.data);
        getTransactions();
      });
  }

  useFocusEffect(
    useCallback(() => {
      getCard();
    }, [])
  );

  async function postCard() {
    await api
      .post(
        `api/v1/cards/`,
        {
          number: "string",
          cvv: "str",
          expiration_date: "2023-11-30",
          account: account_id,
        },
        {
          headers: {
            Authorization: "Bearer " + accessToken,
          },
        }
      )
      .then((response) => {
        console.log(response);
        getCard();
      })
      .catch((response) => {
        console.log(response);
      });
  }

  return card ? (
    <Container>
      <CreditCard
        name={first_name + " " + last_name}
        date={
          card
            ? card[0].expiration_date.split("-")[1] +
              "/" +
              card[0].expiration_date.split("-")[0].split("20")[1]
            : ""
        }
        suffix={card ? card[0].number : ""}
        cvv={card ? card[0].cvv : ""}
      />
      <FlatList
        style={{ flex: 1 }}
        data={transactions}
        ListHeaderComponent={
          <IconBanner>
            <StyledTitle>Name</StyledTitle>
            <StyledTitle>Description</StyledTitle>
            <StyledTitle>Timestamp</StyledTitle>
            <StyledTitle>Value</StyledTitle>
          </IconBanner>
        }
        renderItem={({ item }) => (
          item.card ? ( 
          <IconBanner>
            <StyledText>
              {item.sender == undefined ||
              (item.recipient != null && item.recipient.number != accountNumber)
                ? item.recipient.user.first_name
                : item.sender.user.first_name}
            </StyledText>
            <StyledText>{item.description || "n/a"}</StyledText>
            <StyledText>{item.created_at.split("T")[0]}</StyledText>
            <StyledText>
              {item.sender != undefined && item.sender.number == accountNumber
                ? `- R$` + item.value
                : `+ R$` + item.value}
            </StyledText>
          </IconBanner> ) : (<></>)
        )}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  ) : (
    <Container>
      <StyledTitle>You don't have your card yet</StyledTitle>
      <Button
        title={"Get Your Card"}
        color={"#8F3CFF"}
        onPress={() => postCard()}
      />
    </Container>
  );
};

export default Card;
