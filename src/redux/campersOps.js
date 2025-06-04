import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCampersAsync } from "../api";

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getCampersAsync(1, 5);
      return response.items;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
