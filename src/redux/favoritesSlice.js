import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ids: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite(state, action) {
      const id = action.payload;
      if (state.ids.includes(id)) {
        state.ids = state.ids.filter((x) => x !== id);
      } else {
        state.ids.push(id);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;

//export const selectFavoriteIds = (state) => state.favorites.ids;
export const isFavorite = (id) => (state) => state.favorites.ids.includes(id);
