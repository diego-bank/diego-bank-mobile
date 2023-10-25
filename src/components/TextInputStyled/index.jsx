import { useState } from 'react';
import { StyledContainer, InputStyled } from './styles'
import { TextInput } from 'react-native-paper' ;

function TextInputStyled({type, label, secure, text, onChangeText}) {
    return(
        <StyledContainer>
                <InputStyled 
                label={label} 
                keyboardType={type} 
                onChangeText={onChangeText} 
                value={text} 
                mode='outlined' 
                outlineColor='#ffffff' 
                selectionColor='#ffffff' 
                textColor='#ffffff' 
                activeOutlineColor='#ffffff'
                placeholderTextColor='#fff'
                theme={
                    {
                        roundness: 25,
                        colors: {
                            onPrimary: "#ffffff",
                        },
                    }
                }
                secureTextEntry={secure}
                 />
        </StyledContainer>
    )
}

export default TextInputStyled;