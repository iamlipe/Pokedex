import React from "react";
import { ThemeProvider } from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAppSelector } from "../store";
import { themeDark, themeLight } from "../theme/theme";

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
  const darkTheme = useAppSelector((state) => state.themeReducer.darkMode);

  return (
    <ThemeProvider theme={darkTheme ? themeDark : themeLight}>
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
      <StatusBar
        style={darkTheme ? "light" : "light"}
        translucent={false}
        backgroundColor="#000000"
      />
    </ThemeProvider>
  );
};

export default Route;
