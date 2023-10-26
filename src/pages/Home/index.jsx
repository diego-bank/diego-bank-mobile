import React from "react";
import { Container, Logo } from './styles'

function Home() {
    return(
        <Container>
            <Logo source={require('../../../assets/logo.png')} />
        </Container>
    )
};

export default Home;