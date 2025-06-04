import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  type: "",
  features: [],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setLocation(state, action) {
      state.location = action.payload;
    },
    setType(state, action) {
      state.type = action.payload;
    },
    setFeatures(state, action) {
      state.features = action.payload;
    },
  },
});

export const { setLocation, setType, setFeatures } = filtersSlice.actions;
export default filtersSlice.reducer;

export const selectFilter = (state) => state.filters.type;
