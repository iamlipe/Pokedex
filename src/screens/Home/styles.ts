import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const { width } = Dimensions.get("window");

interface NotFoundProps {
  size: number;
}

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 30px;
  background-color: ${({ theme }) => theme.colors.themeColor};
`;

export const ContainerSearchAndFavStyle = styled.View`
  width: ${width * 0.75}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const BaseButton = styled.TouchableOpacity``;

export const ContainerViewMoreStyle = styled.View`
  height: 80px;
  align-items: center;
  justify-content: center;
`;

export const Loading = styled.ActivityIndicator`
  color: ${({ theme }) => theme.colors.secondaryColor};
`;

export const ContainerNotFound = styled.View`
  flex: 1;
  align-items: center;
`;

export const TitleNotFound = styled.Text<NotFoundProps>`
  font-family: ${({ theme }) => theme.fonts.poppinsRegular};
  font-size: ${({ size }) => `${RFValue(size)}px`};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray};
`;
