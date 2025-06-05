import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCampersAsync } from "../api";

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const filters = state.filters;
      const { page, limit } = state.campers;

      const response = await getCampersAsync(page, limit, filters);

      return response;
    } catch (error) {
      return rejectWithValue({
        status: error.response?.status,
        message: error.message,
        //data: error.response?.data,
      });
    }
  }
);
