import { DefaultTheme } from "styled-components/native";

const defaultt = {
  fonts: {
    poppinsRegular: "pop_regular",
    poppinsBold: "pop_bold",
  },
  colors: {
    darkGray: "#212121",
    mediunGray: "#666666",
    gray: "#B2B2B2",
    lightGray: "#E0E0E0",
    white: "#FFFFFF ",
    background: "#F7F7F7",
    secondaryColor: "#EC0344",
    pokeType: {
      rock: "#B69E31",
      ghost: "#70559B",
      steel: "#B7B9D0",
      water: "#6493EB",
      grass: "#74CB48",
      psychic: "#FB5584 ",
      ice: "#9AD6DF",
      dark: "#75574C",
      fairy: "#E69EAC",
      normal: "#AAA67F",
      fighting: "#C12239",
      flying: "#A891EC",
      poison: "#A43E9E",
      ground: "#DEC16B ",
      bug: "#A7B723",
      fire: "#F57D31",
      electric: "#F9CF30",
      dragon: "#7037FF",
    },
  },
};

export const themeDark: DefaultTheme = {
  fonts: {
    ...defaultt.fonts,
  },
  colors: {
    ...defaultt.colors,
    themeColor: "#212121",
    fontColor: "#FFFFFF",
  },
};

export const themeLight: DefaultTheme = {
  fonts: {
    ...defaultt.fonts,
  },
  colors: {
    ...defaultt.colors,
    themeColor: "#FFFFFF",
    fontColor: "#212121",
  },
};
