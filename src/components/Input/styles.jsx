import styled from 'styled-components/native';

export const InputStyled = styled.TextInput`
    width: 300px;
    height: 45px;
    background-color: #23265A;
    padding: 10px;
    border-radius: 25px;
    border: #858BE9 solid 1.5px;
    display: flex;
    justify-content: center;
    text-decoration: none;
    color: #fff;
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