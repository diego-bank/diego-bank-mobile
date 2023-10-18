import { useState } from 'react';
import { StyledContainer, InputStyled, Label } from './styles'

function Input({type, label, secure}) {
    const [text, setText] = useState('');

    return(
        <StyledContainer>
            <Label>
                {label}
            </Label>
            <InputStyled secureTextEntry={secure} keyboardType={type} onChangeText={value => setText(value)} value={text} />
        </StyledContainer>
    )
}

export default Input;