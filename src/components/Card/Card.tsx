import React from "react";
import { SvgUri } from "react-native-svg";

// types
import { PokeInfo } from "../../@types/Pokeinfo";

// components
import { Container, Title, ContainerTitleStyle, TextIdPoke } from "./styles";

interface Props {
  data: PokeInfo;
}

const Card: React.FC<Props> = ({ data }) => {
  const imageURI = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`;

  return (
    <Container color={data.types[0]}>
      <TextIdPoke color={data.types[0]}>{`#${data.id}`}</TextIdPoke>
      <SvgUri width="70px" height="70px" uri={imageURI} />
      <ContainerTitleStyle color={data.types[0]}>
        <Title>{data.name}</Title>
      </ContainerTitleStyle>
    </Container>
  );
};

export default Card;
