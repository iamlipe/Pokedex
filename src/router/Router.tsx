import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>ioasys pokédex</Text>
    </View>
  );
};

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
