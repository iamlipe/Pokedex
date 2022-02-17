import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  /* background-color: #fd0; */
`;
export const Title = styled.Text``;

export const ContainerSearchAndFavStyle = styled.View`
  width: ${width * 0.75}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ContainerButtonFav = styled.TouchableOpacity``;
