import React, { useState } from "react";

// components
import { Header, Input } from "../../components";
import {
  Container,
  ContainerSearchAndFavStyle,
  ContainerButtonFav,
} from "./styles";

// icons
import Favorite from "../../assets/icons/favorite.svg";

const Home = () => {
  const [searchInput, setSearchInput] = useState("");

  const renderButtonFav = () => (
    <ContainerButtonFav>
      <Favorite />
    </ContainerButtonFav>
  );

  return (
    <Container>
      <Header />
      <ContainerSearchAndFavStyle>
        <Input
          handleDelete={() => setSearchInput("")}
          onChangeText={setSearchInput}
          value={searchInput}
          placeholder="Buscar"
        />
        {renderButtonFav()}
      </ContainerSearchAndFavStyle>
    </Container>
  );
};

export default Home;
