import { useState } from 'react';
import { StyledContainer, InputStyled, Label } from './styles'

function Input({type, label, secure, onChangeText, value}) {
    const [text, setText] = useState('');

    return(
        <StyledContainer>
            <Label>
                {label}
            </Label>
            <InputStyled secureTextEntry={secure} keyboardType={type} onChangeText={onChangeText} value={value} />
        </StyledContainer>
    )
}

export default Input;