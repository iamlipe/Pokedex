import { createSlice } from "@reduxjs/toolkit";

const ThemeSlice = createSlice({
  name: "FavoritePokemons",
  initialState: {
    favoritePokemons: [],
  },
  reducers: {
    setFavoritePokemons(state, { payload }) {
      state.favoritePokemons = payload;
    },
  },
});

export const { setFavoritePokemons } = ThemeSlice.actions;

export default ThemeSlice.reducer;
