import styled from "styled-components/native";

export const Container = styled.View`
flex: 1;
background-color: #121433;
gap: 20px;
padding: 30px;
`;

export const Logo = styled.Image`
width: 300px;
height: 300px;
object-fit: contain;
margin-bottom: 100px;
margin-top: 200px;
`;

export const LogoSmall = styled.Image`
width: 150px;
height: 50px;
object-fit: contain;
`;

export const Main = styled.View`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 20px;
`;

export const StyledTitle = styled.Text`
color: #fff;
font-size: 20px;
`;

export const StyledText = styled.Text`
color: #fff;
font-size: 14px;
text-align: center;
`;

export const InfoView = styled.View`
    background-color: #23265A;
    width: 100%;
    height: 150px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    flex-direction: row;
`;

export const InfoBox = styled.View`
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 220px;
    width: 45%;
    justify-content: center;
`;

export const InfoMin = styled.View`
    height: 50px;
    width: 100%;
    background-color: #1719417b;
    filter: blur(2px);
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`;

export const InfoMax = styled.View`
    height: 110px;
    width: 45%;
    background-color: #1719417b;
    filter: blur(2px);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px;
`;

export const IconBanner = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 120px;
    width: 100%;
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