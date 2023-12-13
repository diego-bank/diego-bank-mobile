import React, { useState } from "react";
import { Container, Logo, StyledText, Link, TextLink } from './styles'
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import TextInputStyled from "../../components/TextInputStyled";

import { api } from '../../services/api'
import { useAuthStore } from "../../stores/authStore";
import Toast from "react-native-toast-message";

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

        await api.post('api/token/', {
            "email": email,
            "password": password
        })
        .then((response) => {
            const accessToken = response.data.access;
            const refreshToken = response.data.refresh;

            setAccessToken(accessToken);
            setRefreshToken(refreshToken);
            Toast.show({
                type: 'success',
                text1: 'Success',
                text2: 'You are Logged in!'
              });
        })
        .catch((e) => {
            console.log(e);
            Toast.show({
                type: 'error',
                text1: 'Error',
                text2: Object.values(e.response.data)[0]
              });
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