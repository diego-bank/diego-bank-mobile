import { Title } from './styles'

function TitleStyled({color, text}) {
    return(
        <Title color={color}>
            {text}
        </Title>
    )
}

export default TitleStyled;