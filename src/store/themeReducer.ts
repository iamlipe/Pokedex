import { createSlice } from "@reduxjs/toolkit";

const ThemeSlice = createSlice({
  name: "Theme",
  initialState: {
    darkMode: false,
  },
  reducers: {
    setDarkMode(state, { payload }) {
      state.darkMode = payload;
    },
  },
});

export const { setDarkMode } = ThemeSlice.actions;

export default ThemeSlice.reducer;
