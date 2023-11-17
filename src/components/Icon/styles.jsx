import styled from "styled-components/native";

export const StyledIcon = styled.Pressable`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    height: 50px;
    background-color: ${props => props.color};
`