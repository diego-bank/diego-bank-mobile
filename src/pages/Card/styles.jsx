import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: #121433;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 50px 0px;
    width: 100vw;
`;

export const Main = styled.View`
    display: flex;
    flex-direction: column;
    flex: 1;
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
    
`;

export const IconBanner = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 120px;
    width: 85%;
    align-items: center;
    justify-content: space-between;
    align-self: center;
`;

export const IconInfo = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    height: 100px;
`;

export const StyledIcon = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 75px;
    width: 75px;
    border-radius: 10px;
    background-color: #23265A;
`

export const List = styled.View`
    width: 100%;
    height: 100%;
    
`;