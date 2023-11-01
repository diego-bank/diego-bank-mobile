import React from "react";
import { Container, Logo, StyledText, Link, TextLink } from './styles'
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import Input from "../../components/Input";

function SignUp() {
    const {navigate} = useNavigation();

    function handleNavigationLogin() {
        navigate('Login');
    };

    function handleNavigationLWelcome() {
        navigate('Welcome');
    };


    return(
        <Container>
            <Logo source={require('../../../assets/logo.png')} />
            <Input label={'First Name'} type={'default'}/>
            <Input label={'Last Name'} type={'default'}/>
            <Input label={'CPF'} type={'numeric'}/>
            <Input label={'Password'} type={'visible-password'} secure={true}/>
            <StyledText>
                To login, click 
                <Link onPress={handleNavigationLogin}>
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

export default SignUp;