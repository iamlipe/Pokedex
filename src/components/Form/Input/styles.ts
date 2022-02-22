import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.secondaryColor};
  border-radius: 10px;
  padding: 16px 30px 14px 45px;
  margin-right: 20px;
`;

export const ButtonIcon = styled.TouchableOpacity``;

export const ContainerInput = styled.TextInput`
  flex: 1;
  font-family: ${({ theme }) => theme.fonts.poppinsRegular};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.mediunGray};
`;

export const Label = styled.Text`
  position: absolute;
  top: -18px;
  left: 40px;
  font-family: ${({ theme }) => theme.fonts.poppinsRegular};
  font-size: ${RFValue(16)}px;
  font-weight: 500;
  background-color: ${({ theme }) => theme.colors.themeColor};
  color: ${({ theme }) => theme.colors.secondaryColor};
  padding: 0 10px 0 5px;
`;
