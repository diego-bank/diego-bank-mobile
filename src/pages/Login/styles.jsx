import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: #121433;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
`;

export const Logo = styled.Image`
    width: 150px;
    height: 150px;
    object-fit: contain;
    margin-bottom: 10px;
`;

export const StyledText = styled.Text`
    padding: 0;
    margin: 0;
    color: #fff;
    width: 300px;
`;

export const Link = styled.Pressable`
    justify-content: center;
    align-items: center;
    height: 16px;
    align-items: center;
`;

export const TextLink = styled.Text`
    color: #2567F9;
    width: 100px;
    margin-left: 5px;
    font-size: 15px;
`;