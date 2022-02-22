import "styled-components";
import theme from "../theme/theme";

declare module "styled-components" {
  type ThemeType = typeof theme;
  export interface DefaultTheme extends ThemeType {
    fonts: {
      poppinsRegular: string;
      poppinsBold: string;
    };
    colors: {
      darkGray: string;
      mediunGray: string;
      gray: string;
      lightGray: string;
      white: string;
      background: string;
      secondaryColor: string;
      themeColor: string;
      fontColor: string;
      pokeType: {
        rock: string;
        ghost: string;
        steel: string;
        water: string;
        grass: string;
        psychic: string;
        ice: string;
        dark: string;
        fairy: string;
        normal: string;
        fighting: string;
        flying: string;
        poison: string;
        ground: string;
        bug: string;
        fire: string;
        electric: string;
        dragon: string;
      };
    };
  }
}
