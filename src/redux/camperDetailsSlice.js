import { createSlice } from "@reduxjs/toolkit";
import { fetchCamperDetails } from "./campersOps";

const initialState = {
  camper: null,
  loading: false,
  error: null,
};

const camperDetailsSlice = createSlice({
  name: "camperDetails",
  initialState,
  reducers: {
    resetCamperDetails: (state) => {
      state.camper = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCamperDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCamperDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.camper = action.payload;
      })
      .addCase(fetchCamperDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetCamperDetails } = camperDetailsSlice.actions;
export default camperDetailsSlice.reducer;

export const selectCamper = (state) => state.camperDetails.camper;
export const selectCamperLoading = (state) => state.camperDetails.loading;
export const selectCamperError = (state) => state.camperDetails.error;
