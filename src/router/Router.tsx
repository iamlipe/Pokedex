import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import { Home } from "../screens";

export type MainStackParams = {
  Home: undefined;
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
      </Main.Navigator>
    </NavigationContainer>
  );
};

export default Route;
