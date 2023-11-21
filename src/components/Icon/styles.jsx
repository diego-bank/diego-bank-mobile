import styled from "styled-components/native";

export const StyledIcon = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 65px;
    width: 65px;
    border-radius: 10px;
    background-color: ${props => props.color};
`