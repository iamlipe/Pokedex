import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("screen");

interface PropsColor {
  color: string;
}

export const Container = styled.TouchableOpacity<PropsColor>`
  width: 30%;
  height: 112px;
  align-self: flex-end;
  justify-content: space-between;
  align-items: center;
  border-width: 2px;
  border-radius: 8px;
  border-color: ${({ theme, color }) => theme.colors.pokeType[color]};
  margin-horizontal: 1.5%;
  margin-vertical: 10px;
  padding-top: 4px;
`;

export const ContainerTitleStyle = styled.View<PropsColor>`
  width: 102%;
  height: 24px;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  background-color: ${({ theme, color }) => theme.colors.pokeType[color]};
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.poppinsRegular};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.white};
`;

export const TextIdPoke = styled.Text<PropsColor>`
  align-self: flex-end;
  font-family: ${({ theme }) => theme.fonts.poppinsRegular};
  font-size: ${RFValue(8)}px;
  color: ${({ theme, color }) => theme.colors.pokeType[color]};
  padding: 0 8px;
`;
