import styled from "styled-components/native";

export const StyledIcon = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 75px;
    width: 75px;
    border-radius: 10px;
    background-color: ${props => props.color};
`