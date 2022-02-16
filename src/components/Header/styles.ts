import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ReactangleTopHeader = styled.View`
  height: ${height * 0.02}px;
  width: ${width}px;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
`;

export const ContainerContentStyle = styled.View`
  width: ${width * 0.85}px;
  height: 32px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0px;
`;

export const ContainerTitleStyle = styled.View`
  height: ${height * 0.1}px;
  width: ${width * 0.55}px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.poppinsBold};
  color: ${({ theme }) => theme.colors.secondaryColor};
  font-size: ${RFValue(20)}px;
`;
