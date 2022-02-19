import React from "react";
import { SvgUri } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MainStackParams } from "../../router/Router";

// components
import { Container, Title, ContainerTitleStyle, TextIdPoke } from "./styles";

// types
import { PokeInfo } from "../../@types/PokeInfo";

interface Props {
  data: PokeInfo;
}

type NavProps = NativeStackNavigationProp<MainStackParams, "Home">;

const Card: React.FC<Props> = ({ data }) => {
  const navigation = useNavigation<NavProps>();

  return (
    <Container
      color={data.types[0]}
      onPress={() => navigation.navigate("PokemonDetails", { data })}
    >
      <TextIdPoke color={data.types[0]}>{`#${data.id}`}</TextIdPoke>
      <SvgUri
        width={64}
        height={64}
        uri={data.image}
        style={{ transform: [{ rotateY: "180deg" }] }}
      />
      <ContainerTitleStyle color={data.types[0]}>
        <Title>{data.name}</Title>
      </ContainerTitleStyle>
    </Container>
  );
};

export default Card;
