import React from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useAppSelector } from "../../store/index";

// components
import { Card, Header } from "../../components";
import {
  Container,
  ContainerTitleStyle,
  TitleText,
  BaseButton,
  TextButton,
  ContainerBackButton,
} from "./styles";

// icons
import Favorite from "../../assets/icons/favorite.svg";
import ArrowLeft from "../../assets/icons/arrow-left.svg";

// types
import { MainStackParams } from "../../router/Router";

type NavProps = NativeStackNavigationProp<MainStackParams, "Home">;

const FavoritePokemons = () => {
  const navigation = useNavigation<NavProps>();
  const favoritePokemons = useAppSelector(
    (state) => state.favoritePokemonsReducer.favoritePokemons
  );

  return (
    <Container>
      <Header />
      <ContainerTitleStyle>
        <Favorite width={21} height={18} />
        <TitleText>Meus favoritos</TitleText>
      </ContainerTitleStyle>
      <FlatList
        style={{ width: "90%" }}
        showsVerticalScrollIndicator={false}
        data={favoritePokemons}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={({ item }) => <Card key={item.id} data={item} />}
      />
      <ContainerBackButton>
        <BaseButton onPress={() => navigation.goBack()}>
          <ArrowLeft width={30} height={15} />
        </BaseButton>
        <TextButton>Voltar</TextButton>
      </ContainerBackButton>
    </Container>
  );
};

export default FavoritePokemons;
