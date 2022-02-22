import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FlatList, View, Dimensions } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { pokeAPI } from "../../services/api";
import { useAppDispatch } from "../../store/index";
import { allInfoPoke } from "../../utils/allInfoPoke";
import { setFavoritePokemons } from "../../store/favoritePokemonsReducer";

// components
import { Card, Header, Input } from "../../components";
import {
  Container,
  ContainerSearchAndFavStyle,
  BaseButton,
  ContainerViewMoreStyle,
  Loading,
  ContainerNotFound,
  TitleNotFound,
} from "./styles";

// icons
import Favorite from "../../assets/icons/favorite.svg";
import ArrowDown from "../../assets/icons/go-down.svg";

// types
import { MainStackParams } from "../../router/Router";

interface PokeProps {
  name: string;
  url: string;
}

type NavProps = NativeStackNavigationProp<MainStackParams, "Home">;

const Home: React.FC = () => {
  const navigation = useNavigation<NavProps>();
  const dispatch = useAppDispatch();
  const { width } = Dimensions.get("window");
  const [page, setPage] = useState(0);
  const [loadingPoke, setLoadingPoke] = useState(false);
  const [pokeList, setPokeList] = useState([]);
  const [searchPoke, setSearchPoke] = useState([]);
  const [notFound, setNotFound] = useState(false);

  const getAsyncStore = async () => {
    try {
      const favoritePokemonsAsync = await AsyncStorage.getItem(
        "@favorite_pokemons"
      );

      if (favoritePokemonsAsync) {
        dispatch(setFavoritePokemons(JSON.parse(favoritePokemonsAsync)));
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  const getPoke = async () => {
    setLoadingPoke(true);

    try {
      const { data: pokeResult } = await pokeAPI.get("/pokemon", {
        params: {
          limit: 21,
          offset: page * 21,
        },
      });

      const ids = pokeResult.results.map((poke: PokeProps) => {
        const id = poke.url.split("/")[6];

        return id;
      });

      const newPokemons = await allInfoPoke({ ids });
      setPage(page + 1);
      setPokeList([...pokeList, ...newPokemons]);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }

    setLoadingPoke(false);
  };

  const getSearchPoke = async ({ search }) => {
    setLoadingPoke(true);

    const poke = await allInfoPoke({ search: [`${search}`.toLowerCase()] });

    if (poke[0] === "Not Found") {
      setLoadingPoke(false);
      setNotFound(true);
    } else {
      setNotFound(false);
      setSearchPoke(poke);
      setLoadingPoke(false);
    }
  };

  useEffect(() => {
    getAsyncStore();

    if (!pokeList.length) {
      getPoke();
    }
  }, []);

  return (
    <Container>
      <Header />
      <ContainerSearchAndFavStyle>
        <Input
          placeholder="Buscar"
          onSubmitEditing={async (search: number | string) =>
            getSearchPoke({ search })
          }
          onDeleteSearchInput={() => {
            setNotFound(false);
            setSearchPoke([]);
          }}
          onEmptyInput={() => {
            setNotFound(false);
            setSearchPoke([]);
          }}
        />
        <BaseButton onPress={() => navigation.navigate("FavoritePokemons")}>
          <Favorite />
        </BaseButton>
      </ContainerSearchAndFavStyle>
      <View style={{ marginTop: 30, height: "75%" }}>
        {notFound ? (
          <ContainerNotFound>
            <TitleNotFound size={148}>Ops</TitleNotFound>
            <TitleNotFound size={22}>
              Este pokemon não está aqui ;(
            </TitleNotFound>
          </ContainerNotFound>
        ) : (
          <FlatList
            style={{ width: width * 0.9 }}
            showsVerticalScrollIndicator={false}
            data={searchPoke.length ? searchPoke : pokeList}
            keyExtractor={(item) => item.id}
            numColumns={3}
            renderItem={({ item }) => <Card key={item.id} data={item} />}
            onEndReached={() => !searchPoke.length && getPoke()}
            onEndReachedThreshold={0.3}
          />
        )}
        <ContainerViewMoreStyle>
          {loadingPoke ? (
            <Loading color="#EC0344" size="small" />
          ) : (
            <ArrowDown width={20} />
          )}
        </ContainerViewMoreStyle>
      </View>
    </Container>
  );
};

export default Home;
