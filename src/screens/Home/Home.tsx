import React, { useState, useEffect } from "react";
import { FlatList, View } from "react-native";
import { pokeAPI } from "../../services/api";
import { handleError } from "../../utils/handleError";
import { reWriteStringNoWordBreak } from "../../utils/reWriteStringNoWordBreak";
import { abbreviateStat } from "../../utils/abbreviateStat";

// components
import { Card, Header, Input } from "../../components";
import {
  Container,
  ContainerSearchAndFavStyle,
  ContainerButton,
  Loading,
} from "./styles";

// icons
import Favorite from "../../assets/icons/favorite.svg";
import ArrowDown from "../../assets/icons/go-down.svg";

// types
import { PokeInfo } from "../../@types/PokeInfo";

interface PokeProps {
  name: string;
  url: string;
}

const Home: React.FC = () => {
  const [searchInput, setSearchInput] = useState("");
  const [page, setPage] = useState(0);
  const [loadingPoke, setLoadingPoke] = useState(false);
  const [pokeList, setPokeList] = useState<PokeInfo[]>([]);

  // description text have word break, so i have to rewrite the string

  const getPoke = async () => {
    setLoadingPoke(true);

    try {
      const { data: pokeResult } = await pokeAPI.get("/pokemon", {
        params: {
          limit: 21,
          offset: page * 21,
        },
      });

      const allInfoAboutPokemons = pokeResult.results.map(
        async (poke: PokeProps) => {
          const id = poke.url.split("/")[6];

          try {
            // requests
            const {
              data: { name, abilities, height, weight, types, stats },
            } = await pokeAPI.get(`/pokemon/${id}`);
            const {
              data: { flavor_text_entries },
            } = await pokeAPI.get(`/pokemon-species/${id}`);

            const allInfoAboutOnePokemon: PokeInfo = {
              id,
              name,
              description: reWriteStringNoWordBreak(
                flavor_text_entries[9].flavor_text.split("\n")
              ),
              image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
              abilities: abilities.map(({ ability }) => ability.name),
              pokemon_physical: {
                height: height / 10,
                weight: weight / 10,
              },
              types: types.map(({ type }) => type.name),
              stats: stats.map((statistic: any) => {
                return {
                  title: abbreviateStat(statistic.stat.name),
                  base_stat: statistic.base_stat,
                };
              }),
            };

            return allInfoAboutOnePokemon;
          } catch (error) {
            handleError(error);
          }
        }
      );

      const newPokemons = await Promise.all(allInfoAboutPokemons);

      setPage(page + 1);
      setPokeList([...pokeList, ...newPokemons]);
    } catch (error) {
      handleError(error);
    }

    setLoadingPoke(false);
  };

  useEffect(() => {
    getPoke();
  }, []);

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
        <ContainerButton>
          <Favorite />
        </ContainerButton>
      </ContainerSearchAndFavStyle>
      <View style={{ marginTop: 30, height: "75%" }}>
        <FlatList
          style={{ width: "90%" }}
          showsVerticalScrollIndicator={false}
          data={pokeList}
          keyExtractor={(item) => item.id}
          numColumns={3}
          renderItem={({ item }) => <Card key={item.id} data={item} />}
          onEndReached={getPoke}
          onEndReachedThreshold={0.3}
        />
        <ContainerButton
          style={{
            height: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {loadingPoke ? (
            <Loading color="#EC0344" size="small" />
          ) : (
            <ArrowDown width={20} />
          )}
        </ContainerButton>
      </View>
    </Container>
  );
};

export default Home;
