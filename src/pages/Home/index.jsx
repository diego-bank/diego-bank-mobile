import React, { useEffect, useState } from "react";
import { Container, Logo, LogoSmall, Main, StyledTitle, InfoView, InfoBox, InfoMin, InfoMax, StyledText, IconBanner, IconInfo, StyledIcon, List } from './styles'

import { FlatList, Text } from "react-native";

import Header from '../../components/Header'
import Icon from '../../components/Icon'

import { api } from '../../services/api'
import { useUserStore } from '../../stores/userStore'
import { useAccountStore } from '../../stores/accountStore'
import { useAuthStore } from "../../stores/authStore";

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { FontAwesome5 } from "@expo/vector-icons";

function Home() {
    const [loading, setLoading] = useState(true);
    const [transactions, setTransactions] = useState([])
    const setUserInformation = useUserStore(state => state.setUserInformation);
    const setAccountInformation = useAccountStore(state => state.setAccountInformation);
    const accessToken = useAuthStore(state => state.accessToken)
    const first_name = useUserStore(state => state.first_name);
    const agency = useAccountStore(state => state.agency)
    const accountNumber = useAccountStore(state => state.number)
    const balance = useAccountStore(state => state.balance)

    async function userInfo() {
        await api.get('api/v1/user/me/', {
            headers: {
                Authorization: "Bearer " + accessToken,
            }
        })
        .then((response) => {
            const email = response.data.email
            const first_name = response.data.first_name
            const last_name = response.data.last_name
            const cpf = response.data.cpf
            const url_image = response.data.url_image

            setUserInformation(
                email,
                first_name,
                last_name,
                cpf,
                url_image,
            )
        })
        .then(() => {
            accountId();
        })
        .catch((e) => {
            console.log(e);
        })
    }

    async function accountId() {
        await api.get('api/v1/accounts/', {
            headers: {
                Authorization: "Bearer " + accessToken,
            }
        })
        .then((response) => {
            const id = response.data[0].id
            
            accountInfo(id)
        })
        .catch((e) => {
            console.log(e);
        })
    }

    async function accountInfo(id) {
        await api.get(`api/v1/accounts/${id}/`, {
            headers: {
                Authorization: "Bearer " + accessToken,
            }
        })
        .then((response) => {
            const agency = response.data.agency
            const number = response.data.number
            const balance = response.data.balance
            
            setAccountInformation(
                id,
                number,
                agency,
                balance,
            )
            getTransactions();
        })
        .catch((e) => {
            console.log(e);
        })
    }

    async function getTransactions() {
        await api.get(`api/v1/transactions/`, {
            headers: {
                Authorization: "Bearer " + accessToken,
            }
        })
        .then((response) => {
            setTransactions(response.data)
            console.log(response.data)
        })
        .then(() => {
            setLoading(false)
        })
        .catch((e) => {
            console.log(e)
        })
    }

    // useEffect(() => {
    //     console.log(transactions)
    // }, [transactions])

    useEffect(() => {

        userInfo()

    }, [])

    return(
        <Container>
            {loading ? (
                <Logo source={require('../../../assets/logo.png')} />
            ) : (
                <>
                <Header>
                        <LogoSmall source={require('../../../assets/logo.png')} />
                        <FontAwesome name="user" size={30} color="#ffffff" onPress={() => {}}/>
                </Header>
                <Main>
                        <StyledTitle>
                            Welcome {first_name}
                        </StyledTitle>
                        <InfoView>
                            <InfoBox>
                                <InfoMin>
                                    <StyledText>
                                        Agency
                                    </StyledText>
                                    <StyledText>
                                        {agency}
                                    </StyledText>
                                </InfoMin>
                                <InfoMin>
                                    <StyledText>
                                        Number
                                    </StyledText>
                                    <StyledText>
                                        {accountNumber}
                                    </StyledText>
                                </InfoMin>
                            </InfoBox>
                            <InfoMax>
                                <StyledText>
                                    Balance
                                </StyledText>
                                <StyledText>
                                    R${balance}
                                </StyledText>
                            </InfoMax>
                        </InfoView>
                        <IconBanner>
                            <IconInfo>
                                <Icon color="#23265A">
                                    <MaterialCommunityIcons name="bank-transfer" size={60} color="#ffffff" />
                                </Icon>
                                <StyledText>
                                    Transaction
                                </StyledText>
                            </IconInfo>

                            <IconInfo>
                                <Icon color="#23265A">
                                    <MaterialCommunityIcons name="bank-transfer-in" size={60} color="#ffffff" />
                                </Icon>
                                <StyledText>
                                    Deposit
                                </StyledText>
                            </IconInfo>

                            <IconInfo>
                                <Icon color="#23265A">
                                    <MaterialCommunityIcons name="bank-transfer-out" size={60} color="#ffffff" />
                                </Icon>
                                <StyledText>
                                    Withdraw
                                </StyledText>
                            </IconInfo>

                            <IconInfo>
                                <Icon color="#23265A">
                                    <FontAwesome5 name="hand-holding-usd" size={40} color="#ffffff" />
                                </Icon>
                                <StyledText>
                                    Loan
                                </StyledText>
                            </IconInfo>
 
                            <IconInfo>
                                <Icon color="#23265A">
                                    <MaterialCommunityIcons name="card-bulleted" size={60} color="#ffffff" />
                                </Icon>
                                <StyledText>
                                    Card
                                </StyledText>
                            </IconInfo>
                            
                        </IconBanner>
                        <StyledTitle>
                            Statement
                        </StyledTitle>
                        
                        

                        <FlatList 
                        style={{flex: 1}}
                        data={transactions}
                        // ListHeaderComponent={
                        //     <IconBanner>
                        //         <StyledTitle>
                        //             Name
                        //         </StyledTitle>
                        //         <StyledTitle>
                        //             Description
                        //         </StyledTitle>
                        //         <StyledTitle>
                        //             Timestamp
                        //         </StyledTitle>
                        //         <StyledTitle>
                        //             Value
                        //         </StyledTitle>
                        //     </IconBanner>
                        // }
                        renderItem={({item}) => 
                            <IconBanner>
                                <StyledText>
                                    {item.sender == undefined || item.sender.number == accountNumber ? 
                                        item.recipient.user.first_name
                                     : 
                                        item.sender.user.first_name
                                    }
                                </StyledText>
                                <StyledText>
                                    {item.description || "n/a"}
                                </StyledText>
                                <StyledText>
                                    {item.created_at.split("T00:")[0]}
                                </StyledText>
                                <StyledText>
                                    {item.sender != undefined && item.sender.number == accountNumber ? 
                                        (`- R$` + item.value)
                                     : 
                                        (`+ R$` + item.value)
                                    }
                                </StyledText>
                            </IconBanner>
                        }
                        keyExtractor={item => item.id.toString()}
                        />

                        
                </Main>
                </>
            )}
            
        </Container>
    )
};

export default Home;