import React from "react";
import { Container, Logo, StyledText, Link, TextLink } from './styles'
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import Input from "../../components/Input";

function Login() {
    const {navigate} = useNavigation();

    function handleNavigationSignUp() {
        navigate('SignUp');
    };

    function handleNavigationLWelcome() {
        navigate('Welcome');
    };


    return(
        <Container>
            <Logo source={require('../../../assets/logo.png')} />
            <Input label={'CPF'} type={'numeric'}/>
            <Input label={'Password'} type={'visible-password'} secure={true}/>
            <StyledText>
                To create your account, click 
                <Link onPress={handleNavigationSignUp}>
                    <TextLink>
                        here.
                    </TextLink>
                </Link>
            </StyledText>
            <Button title={'Login'} color={'#8F3CFF'}/>
            <Button title={'Change Password'} color={'#23265A'}/>
        </Container>
    )
};

export default Login;