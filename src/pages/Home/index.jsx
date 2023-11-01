import React, { useEffect, useState } from "react";
import { Container, Logo } from './styles'

import { api } from '../../services/api'
import { useUserStore } from '../../stores/userStore'
import { useAccountStore } from '../../stores/accountStore'
import { useAuthStore } from "../../stores/authStore";
import TitleStyled from "../../components/TitleStyled";

function Home() {
    const [loading, setLoading] = useState(true);
    const setUserInformation = useUserStore(state => state.setUserInformation);
    const setAccountInformation = useAccountStore(state => state.setAccountInformation);
    const accessToken = useAuthStore(state => state.accessToken)
    const first_name = useUserStore(state => state.first_name);

    useEffect(() => {

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
            })
            .then(() => {
                setLoading(false)
            })
            .catch((e) => {
                console.log(e);
            })
        }

        userInfo()

    })

    return(
        <Container>
            {loading ? (
                <Logo source={require('../../../assets/logo.png')} />
            ) : (
                <TitleStyled color={'#fff'} text={`Bem vindo ${first_name}`} />
            )}
            
        </Container>
    )
};

export default Home;