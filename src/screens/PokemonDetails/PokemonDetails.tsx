import React from "react";
import nextId from "react-id-generator";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RouteProp } from "@react-navigation/native";
import { SvgUri } from "react-native-svg";
import { numberThreeCharacters } from "../../utils/numberThreeCharacters";
import { useAppDispatch, useAppSelector } from "../../store/index";
import { setFavoritePokemons } from "../../store/favoritePokemonsReducer";

// components
import {
  Container,
  ContainerModalDetails,
  ContainerTagTypes,
  TagText,
  ContainerPokemonCharacteristics,
  Cell,
  Row,
  Small,
  PokemonDescription,
  ContainerPokemonStats,
  TitlePokemonStats,
  Column,
  LineVertical,
  FrontBar,
  BackBar,
  ContainerNav,
  BaseButton,
  PokeName,
  TextPokeId,
} from "./styles";

// icons
import PokeBall from "../../assets/icons/pokeball.svg";
import Balance from "../../assets/icons/balance.svg";
import Scale from "../../assets/icons/scale.svg";
import GoBack from "../../assets/icons/go-back.svg";
import Favorite from "../../assets/icons/favorite.svg";
import FavoriteEmpty from "../../assets/icons/favorite-empty.svg";

// types
import { PokeInfo } from "../../@types/PokeInfo";
import { MainStackParams } from "../../router/Router";

interface Props {
  route: RouteProp<{ params: { data: PokeInfo } }, "params">;
}

type NavProps = NativeStackNavigationProp<MainStackParams, "PokemonDetails">;

const PokemonDetails: React.FC<Props> = ({ route }) => {
  const { data } = route.params;
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavProps>();
  const darkTheme = useAppSelector((state) => state.themeReducer.darkMode);
  const favoritePokemons = useAppSelector(
    (state) => state.favoritePokemonsReducer.favoritePokemons
  );
  const isFav = favoritePokemons.find(
    (poke: PokeInfo): boolean => poke.id === data.id
  );

  const setAsyncStore = async () => {
    try {
      if (isFav) {
        const removedFavoritePokemon = favoritePokemons.filter(
          (poke: PokeInfo): boolean => poke.id !== data.id
        );

        dispatch(setFavoritePokemons(removedFavoritePokemon));

        return await AsyncStorage.setItem(
          "@favorite_pokemons",
          JSON.stringify(removedFavoritePokemon)
        );
      }
      const addFavoritePokemon = [...favoritePokemons, data];

      if (addFavoritePokemon.length > 12) {
        // eslint-disable-next-line no-console
        console.warn("You can only have 12 favorite pokemons in your list");
      } else {
        dispatch(setFavoritePokemons(addFavoritePokemon));

        return await AsyncStorage.setItem(
          "@favorite_pokemons",
          JSON.stringify(addFavoritePokemon)
        );
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  return (
    <Container color={data.types[0]}>
      <ContainerNav>
        <BaseButton onPress={() => navigation.goBack()}>
          <GoBack />
        </BaseButton>
        <PokeName>{data.name[0].toUpperCase() + data.name.substr(1)}</PokeName>
        <TextPokeId>{`#${numberThreeCharacters(data.id)}`}</TextPokeId>
      </ContainerNav>
      <PokeBall style={{ position: "absolute", top: 0, right: 42 }} />
      <ContainerModalDetails>
        <BaseButton
          style={{ position: "absolute", top: 18, right: 18 }}
          onPress={() => setAsyncStore()}
        >
          {isFav ? (
            <Favorite width={28} height={24} />
          ) : (
            <FavoriteEmpty width={28} height={24} />
          )}
        </BaseButton>
        <SvgUri
          uri={data.image}
          width={200}
          height={200}
          style={{ marginTop: -200, transform: [{ rotateY: "180deg" }] }}
        />
        <ContainerTagTypes>
          {data.types.map((type) => (
            <TagText key={nextId()} color={type}>
              {type}
            </TagText>
          ))}
        </ContainerTagTypes>
        <ContainerPokemonCharacteristics>
          <Cell style={{ width: "25%" }}>
            <Row style={{ justifyContent: "center" }}>
              <Balance
                style={{ marginRight: 8, marginTop: -16 }}
                fill={darkTheme ? "#FFF" : "#212121"}
              />
              <Small color="fontColor">{`${data.pokemon_physical.weight} kg`}</Small>
            </Row>
            <Small color="gray" title>
              Weight
            </Small>
          </Cell>
          <Cell style={{ width: "25%" }}>
            <Row>
              <Scale
                style={{ marginRight: 8, marginTop: -16 }}
                fill={darkTheme ? "#FFF" : "#212121"}
              />
              <Small color="fontColor">{`${data.pokemon_physical.height} m`}</Small>
            </Row>
            <Small color="gray" title>
              Height
            </Small>
          </Cell>
          <Cell style={{ width: "50%" }}>
            <Small color="fontColor">{`${data.abilities[1]} / ${data.abilities[0]}`}</Small>
            <Small color="gray" title>
              Moves
            </Small>
          </Cell>
        </ContainerPokemonCharacteristics>
        <PokemonDescription>{data.description}</PokemonDescription>
        <TitlePokemonStats color={data.types[0]}>Base Stats</TitlePokemonStats>
        <ContainerPokemonStats>
          <Column>
            {data.stats.map(({ title }) => (
              <Small
                key={nextId()}
                style={{ lineHeight: 16, marginBottom: 7 }}
                color={data.types[0]}
                stat
              >
                {title}
              </Small>
            ))}
          </Column>
          <LineVertical />
          <Column>
            {data.stats.map(({ base_stat }) => (
              <Small
                key={nextId()}
                style={{ lineHeight: 16, marginBottom: 7 }}
                color="fontColor"
              >
                {base_stat < 100 ? `0${base_stat}` : base_stat}
              </Small>
            ))}
          </Column>
          <Column style={{ alignItems: "flex-start", marginTop: 2 }}>
            {data.stats.map(({ base_stat }) => (
              <Row key={nextId()}>
                <FrontBar
                  color={data.types[0]}
                  percentage={(base_stat * 80) / 250}
                />
                <BackBar
                  color={data.types[0]}
                  percentage={((base_stat * 80) / 250 - 80) * -1}
                />
              </Row>
            ))}
          </Column>
        </ContainerPokemonStats>
      </ContainerModalDetails>
    </Container>
  );
};

export default PokemonDetails;
