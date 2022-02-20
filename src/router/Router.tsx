import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import { Home, PokemonDetails, FavoritePokemons } from "../screens";

// types
import { PokeInfo } from "../@types/PokeInfo";

export type MainStackParams = {
  Home: undefined;
  PokemonDetails: { data: PokeInfo };
  FavoritePokemons: undefined;
};

const Main = createNativeStackNavigator<MainStackParams>();

const Route = () => {
  return (
    <NavigationContainer>
      <Main.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "#fff" },
        }}
      >
        <Main.Screen name="Home" component={Home} />
        <Main.Screen name="PokemonDetails" component={PokemonDetails} />
        <Main.Screen name="FavoritePokemons" component={FavoritePokemons} />
      </Main.Navigator>
    </NavigationContainer>
  );
};

export default Route;
