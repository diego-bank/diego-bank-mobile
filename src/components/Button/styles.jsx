import styled from 'styled-components/native';

export const ButtonStyled = styled.Pressable`
    width: 300px;
    height: 45px;
    background-color: ${props => props.color};
    padding: 10px;
    border-radius: 25px;
    border: none;
    display: flex;
    justify-content: center;
`;

export const Title = styled.Text`
    color: aliceblue;
    text-decoration: none;
    text-align: center;
    font-size: 15px;
`;