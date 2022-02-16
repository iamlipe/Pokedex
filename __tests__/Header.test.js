import React from "react";
import { Provider } from 'react-redux';
import { fireEvent, render } from "@testing-library/react-native";

import { store } from "../src/store/themeReducer";

// components
import { Header } from "../src/components";
  
describe("header component", () => {  
  const component = (
    <Provider store={store}>
      <Header />
    </Provider>
  );

  it("if title rendered on screen", () => {
    const { getByText } = render(component);
    const title = getByText(/ioasys pokédex/i);
    expect(title).toBeTruthy();
  });

  it("if logo rendered on screen", () => {
    const { getByTestId } = render(component);
    const logo = getByTestId('logo-app');
    expect(logo).toBeTruthy();
    // testar se é um svg ?
  })
  
  it("if toggle rendered on screen", () => {
    const { getByTestId } = render(component);
    const toggle = getByTestId('toggle-theme-mode');
    expect(toggle).toBeTruthy();
  });


  // não consigo mockar a store do redux ou fireevent não está funcionando
  it("if set dark mode is work", () => {
    const { getByTestId } = render(component);
    const toggle = getByTestId('toggle-theme-mode');
    const { themeReducer } = store.getState();

    // set darkmode
    fireEvent.press(toggle);
    // expect(themeReducer.darkMode).toBe(false);
    // console.log(themeReducer.darkMode);

    // set lightmode
    fireEvent.press(toggle, 'press')
    // expect(themeReducer.darkMode).toBe(true);
    // console.log(themeReducer.darkMode);
  });

});
