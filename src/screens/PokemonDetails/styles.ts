import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const { width, height } = Dimensions.get("window");

interface PropsColor {
  color: string;
}

interface PropsSmall {
  color?: string;
  title?: boolean;
  stat?: boolean;
}

interface PropsStats {
  color?: string;
  percentage: number;
}

export const Container = styled.View<PropsColor>`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, color }) => theme.colors.pokeType[color]};
`;

export const ContainerModalDetails = styled.View`
  width: ${width * 0.95}px;
  height: auto;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.themeColor};
  border-radius: 15px;
  margin-top: ${height * 0.2}px;
  padding: 48px 0 70px 0;
`;
export const ContainerTagTypes = styled.View`
  flex-direction: row;
  align-self: flex-start;
  padding-left: 32px;
`;

export const TagText = styled.Text<PropsColor>`
  font-family: ${({ theme }) => theme.fonts.poppinsRegular};
  font-size: ${RFValue(12)}px;
  font-weight: 700;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, color }) => theme.colors.pokeType[color]};
  border-radius: 10px;
  margin-right: 10px;
  margin-top: 32px;
  padding: 2px 8px;
`;

export const ContainerPokemonCharacteristics = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 35px 16px;
`;

export const Cell = styled.View`
  align-items: center;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Small = styled.Text<PropsSmall>`
  font-family: ${({ theme }) => theme.fonts.poppinsRegular};
  font-size: ${RFValue(12)}px;
  font-weight: ${({ stat }) => (stat ? 600 : 400)};
  line-height: 16px;
  color: ${({ theme, color, stat }) =>
    !stat ? `${theme.colors[color]}` : `${theme.colors.pokeType[color]}`};
  margin-bottom: ${({ title }) => (!title ? "12px" : "0px")};
`;
export const PokemonDescription = styled.Text`
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.poppinsRegular};
  font-size: ${RFValue(14)}px;
  font-weight: 400;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.fontColor};
  padding: 0 32px;
`;
export const ContainerPokemonStats = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  padding: 0 32px;
`;

export const TitlePokemonStats = styled.Text<PropsColor>`
  align-self: flex-start;
  font-size: ${({ theme }) => theme.fonts.poppinsRegular};
  font-size: ${RFValue(18)}px;
  font-weight: 700;
  color: ${({ theme, color }) => theme.colors.pokeType[color]};
  padding: 30px 32px 20px;
`;

export const Column = styled.View`
  flex-direction: column;
  margin-bottom: -14px;
`;

export const LineVertical = styled.View`
  height: auto;
  width: 1px;
  background-color: ${({ theme }) => theme.colors.lightGray};
  margin-right: 14px;
  margin-left: 12px;
`;

export const FrontBar = styled.View<PropsStats>`
  background-color: ${({ theme, color }) => theme.colors.pokeType[color]};
  height: 6px;
  width: ${({ percentage }) => `${percentage}%`};
  margin-left: 14px;
  margin-bottom: 16px;
`;

export const BackBar = styled(FrontBar)`
  opacity: 0.2;
  margin-left: 0;
  margin-right: 17px;
`;

export const ContainerNav = styled.View`
  width: 80%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 20px;
`;
export const BaseButton = styled.TouchableOpacity``;

export const PokeName = styled.Text`
  flex: 1;
  font-family: ${({ theme }) => theme.fonts.poppinsBold};
  font-size: ${RFValue(24)}px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  margin-left: 20px;
`;

export const TextPokeId = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
`;
