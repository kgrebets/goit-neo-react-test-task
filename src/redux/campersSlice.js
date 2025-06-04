import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./campersOps";
import { selectFilter } from "./filtersSlice";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default campersSlice.reducer;

export const selectCampers = (state) => state.campers.items;
export const selectLoading = (state) => state.campers.loading;
export const selectError = (state) => state.campers.error;

export const selectFilteredCampers = createSelector(
  [selectCampers, selectFilter],
  (campers, filter) => {
    if (!campers) return null;

    return campers;
    // return contacts.filter((x) =>
    //   x.name.toLowerCase().includes(filterName.toLowerCase())
    // );
  }
);
