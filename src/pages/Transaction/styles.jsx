import styled from "styled-components/native";
import { Picker } from "@react-native-picker/picker";

export const Container = styled.View`
  flex: 1;
  background-color: #121433;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  padding-top: 20px;
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
  color: #2567f9;
  width: 100px;
  margin-left: 5px;
  font-size: 15px;
`;

export const InfoView = styled.View`
  background-color: #23265a;
  width: 90%;
  height: 600px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-direction: column;
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
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: -70px;
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

export const Main = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 20px;
`;

export const StyledTitle = styled.Text`
  color: #fff;
  font-size: 24px;
`;
