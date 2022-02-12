import React from "react"
import { render } from "@testing-library/react-native";

// components
import App from "../src/App";

test('title in the screen', () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/ioasys pokédex/i);
  expect(textElement).toBeTruthy()
})