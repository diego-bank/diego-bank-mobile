import { View, Text, FlatList } from "react-native";
import React, { useCallback, useState } from "react";
import Button from "../../components/Button";
import { Container, IconBanner, Main, StyledText } from "./styles";
import { StyledTitle } from "../Home/styles";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useAuthStore } from "../../stores/authStore";
import { api } from "../../services/api";

const Loan = () => {
    const [loans, setLoans] = useState([])

    const accessToken = useAuthStore(state => state.accessToken)

    const {navigate} = useNavigation()

    async function getLoans() {
        await api.get(`api/v1/loans/`, {
            headers: {
                Authorization: "Bearer " + accessToken,
            }
        })
        .then((response) => {
            setLoans(response.data)
            console.log(response.data)
        })
    }

    useFocusEffect(
        useCallback(() => {
        getLoans()
    }, [])
    )

    function handleNavigateMakeLoan() {
        navigate('MakeLoan');
    }

  return (
    <Container>
        <Main>
        <FlatList
        style={{ flex: 1 }}
        data={loans}
        ListHeaderComponent={
          <IconBanner>
            <StyledTitle>Value</StyledTitle>
            <StyledTitle>Payments</StyledTitle>
            <StyledTitle>Situation</StyledTitle>
          </IconBanner>
        }
        renderItem={({ item }) => (
          <IconBanner>
            <StyledText>
                {`R$` + item.value}
            </StyledText>
            <StyledText>
                {item.payments}
            </StyledText>
            {item.approved ? (<StyledText>Approved</StyledText>) : (<StyledText>Negated</StyledText>) }
          </IconBanner>
        )}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={{
            height: 25,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: 0,
            padding: 0
        }}
      />
      </Main>
      <Button title={"New Loan"} color={"#8F3CFF"} onPress={handleNavigateMakeLoan} />
    </Container>
  );
};

export default Loan;
