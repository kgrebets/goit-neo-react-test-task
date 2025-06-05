import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: null, //"Ukraine, Kyiv"
  AC: null, //true | null,
  kitchen: null, //true | null
  TV: null, //true | null
  bathroom: null, //true | null
  transmission: null, //"automatic" | "manual",
  form: null, //"alcove" | "fullyIntegrated" | "panelTruck"
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setLocation(state, action) {
      state.location = action.payload;
    },
    setAC(state) {
      state.AC = state.AC === true ? null : true;
    },
    setTransmission(state) {
      state.transmission =
        state.transmission === "automatic" ? null : "automatic";
    },
    setKitchen(state) {
      state.kitchen = state.kitchen === true ? null : true;
    },
    setTV(state) {
      state.TV = state.TV === true ? null : true;
    },
    setBathroom(state) {
      state.bathroom = state.bathroom === true ? null : true;
    },
    setVehicleType(state, action) {
      state.form = state.form === action.payload ? null : action.payload;
    },
  },
});

export const {
  setLocation,
  setAC,
  setTransmission,
  setKitchen,
  setTV,
  setBathroom,
  setVehicleType,
} = filtersSlice.actions;
export default filtersSlice.reducer;

export const selectLocationFilter = (state) => state.filters.location;
export const selectACFilter = (state) => state.filters.AC;
export const selectTransmissionFilter = (state) => state.filters.transmission;
export const selectKitchenFilter = (state) => state.filters.kitchen;
export const selectTVFilter = (state) => state.filters.TV;
export const selectBathroomFilter = (state) => state.filters.bathroom;
export const selectVehicleTypeFilter = (state) => state.filters.form;
