import React, { useState, useEffect } from "react";
import { FlatList, View, Text } from "react-native";
import { SvgUri } from "react-native-svg";
// import { Image } from "react-native-elements";
import { pokeAPI } from "../../services/api";
import { prettyLog } from "../../utils/prettyLog";

// components
import { Header, Input } from "../../components";
import {
  Container,
  ContainerSearchAndFavStyle,
  ContainerButtonFav,
} from "./styles";

// icons
import Favorite from "../../assets/icons/favorite.svg";

interface PokeProps {
  name: string;
  url: string;
}

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const [pokeList, setPokeList] = useState([]);

  const getPoke = async () => {
    try {
      const { data: pokeResult } = await pokeAPI.get("/pokemon", {
        params: {
          limit: 15,
          offset: 0,
        },
      });

      const allInfoPoke = pokeResult.results.map(async (poke: PokeProps) => {
        const id = poke.url.split("/")[6];

        try {
          const { data: info } = await pokeAPI.get(`/pokemon/${id}`);

          const pokeObj = {
            id,
            name: poke.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}`,
            abilities: [info.abilities.map(({ ability }) => ability.name)],
            pokemon_physical: {
              height: info.height,
              weight: info.weight,
            },
            types: [info.types.map(({ type }) => type.name)],
            stats: [
              info.stats.map((statistic: any) => {
                return {
                  name: statistic.stat.name,
                  base_stat: statistic.base_stat,
                };
              }),
            ],
          };

          return pokeObj;
        } catch (error) {
          console.log(error);
        }
      });

      setPokeList(await Promise.all(allInfoPoke));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPoke();
  }, []);

  const renderButtonFav = () => {
    return (
      <ContainerButtonFav>
        <Favorite />
      </ContainerButtonFav>
    );
  };

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
      {/* {pokeList &&
        pokeList.map((poke) => {
          const imageURI = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${poke.id}.svg`;

          return (

            <>
              <SvgUri width="50px" height="50px" uri={imageURI} />
              <Text>{poke.name}</Text>
            </>
          );
        })} */}
      {/* <Image
        style={{ width: 50, height: 50 }}
        source={require("../../assets/icons/close.svg")}
      /> */}
      <FlatList
        data={pokeList}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={({ item }) => {
          const imageURI = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${item.id}.svg`;

          return (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: 80,
                height: 80,
              }}
            >
              <SvgUri width="50px" height="50px" uri={imageURI} />
              <Text>{item.name}</Text>
            </View>
          );
        }}
      />
    </Container>
  );
};

export default Home;
