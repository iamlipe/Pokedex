import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 30px;
`;

export const ContainerSearchAndFavStyle = styled.View`
  width: ${width * 0.75}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ContainerButton = styled.TouchableOpacity``;
export const Loading = styled.ActivityIndicator`
  color: ${({ theme }) => theme.colors.secondaryColor};
`;
