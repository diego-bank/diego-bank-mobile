import React, { useState } from "react";
import { Container, Logo, StyledText, Link, TextLink } from './styles'
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import TextInputStyled from "../../components/TextInputStyled";

import axios from 'axios';
// import { api } from '../../services/api'
import { useAuthStore } from "../../stores/authStore";

function Login() {
    const setAccessToken = useAuthStore(state => state.setAccessToken);
    const setRefreshToken = useAuthStore(state => state.setRefreshToken);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {navigate} = useNavigation();

    function handleNavigationSignUp() {
        navigate('SignUp');
    };

    async function login() {
        await axios.post('https://6b48-189-57-188-42.ngrok.io/api/token/', {
            'email': email,
            'password': password
        })
        .then((response) => {
            const accessToken = response.data.access;
            const refreshToken = response.data.refresh;

            setAccessToken(accessToken);
            setRefreshToken(refreshToken);
        })
        .catch((e) => {
            console.log(e);
        })
    }

    return(
        <Container>
            <Logo source={require('../../../assets/logo.png')} />
            <TextInputStyled label={'Email'} type={'email-address'} text={email} onChangeText={(text) => setEmail(text)}/>
            <TextInputStyled label={'Password'} type={'visible-password'} secure={true} text={password} onChangeText={(text) => setPassword(text)}/>
            <StyledText>
                To create your account, click 
                <Link onPress={handleNavigationSignUp}>
                    <TextLink>
                        here.
                    </TextLink>
                </Link>
            </StyledText>
            <Button title={'Login'} color={'#8F3CFF'} onPress={() => login()}/>
            <Button title={'Change Password'} color={'#23265A'}/>
        </Container>
    )
};

export default Login;