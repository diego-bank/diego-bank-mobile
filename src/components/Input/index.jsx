import { useState } from 'react';
import { StyledContainer, InputStyled, Label } from './styles'

function Input({type, label, secure, onChangeText, value, editable=true}) {
    const [text, setText] = useState('');

    return(
        <StyledContainer>
            <Label>
                {label}
            </Label>
            <InputStyled secureTextEntry={secure} keyboardType={type} onChangeText={onChangeText} value={value} editable={editable}/>
        </StyledContainer>
    )
}

export default Input;