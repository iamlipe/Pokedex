/* eslint-disable global-require */
/* eslint-disable react/style-prop-object */

import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { LogBox } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components/native";
import Route from "./router/Router";
import { store } from "./store";
import theme from "./theme/theme";

const App = () => {
  const [fontsLoaded] = useFonts({
    pop_regular: require("./assets/fonts/Poppins-Regular.ttf"),
    pop_bold: require("./assets/fonts/Poppins-Bold.ttf"),
  });
  LogBox.ignoreLogs(["VirtualizedList"]);
  if (!fontsLoaded) return null;
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <Route />
          <StatusBar style="dark" translucent />
        </ThemeProvider>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
