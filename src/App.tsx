/* eslint-disable global-require */
/* eslint-disable react/style-prop-object */

import { useFonts } from "expo-font";
import React from "react";
import { LogBox } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import Route from "./router/Router";
import { store } from "./store";

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
        <Route />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
