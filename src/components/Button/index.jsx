import { ButtonStyled, Title } from './styles'

function Button({color, title, onPress}) {
    return(
        <ButtonStyled onPress={onPress} color={color}>
            <Title>
                {title}
            </Title>
        </ButtonStyled>
    )
}

export default Button;