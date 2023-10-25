import styled from 'styled-components/native';
import { TextInput } from 'react-native-paper';

export const InputStyled = styled(TextInput)`
    width: 300px;
    height: 45px;
    background-color: #23265A;
    display: flex;
    justify-content: center;
`;

export const Label = styled.Text`
    color: aliceblue;
    text-decoration: none;
    font-size: 15px;
`;

export const StyledContainer = styled.View`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;