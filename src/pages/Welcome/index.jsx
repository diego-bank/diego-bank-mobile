import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Container, Logo } from './styles'
import Button from "../../components/Button";

function Welcome() {
    const {navigate} = useNavigation();
    
    function handleNavigationSignUp() {
        navigate('SignUp');
    };

    function handleNavigationLogin() {
        navigate('Login');
    };

    return(
        <Container>
            <Logo source={require('../../../assets/logo.png')} />
            <Button title={'Login'} color={'#A544D3'} onPress={handleNavigationLogin}/>
            <Button title={'Create Account'} color={'#23265A'} onPress={handleNavigationSignUp}/>
        </Container>
    )
};

export default Welcome;