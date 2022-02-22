import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 30px;
  background-color: ${({ theme }) => theme.colors.themeColor};
`;

export const ContainerTitleStyle = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 40px;
`;

export const TitleText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.poppinsRegular};
  font-size: ${RFValue(18)}px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.secondaryColor};
  margin-left: 10px;
`;

export const BaseButton = styled.TouchableOpacity`
  align-items: center;
`;

export const TextButton = styled.Text`
  font-family: ${({ theme }) => theme.fonts.poppinsRegular};
  font-size: ${RFValue(13)}px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray};
  margin-top: 6px;
`;

export const ContainerBackButton = styled.View`
  flex: 1;
`;
