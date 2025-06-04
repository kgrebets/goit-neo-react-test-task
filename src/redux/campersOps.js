import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api';

export const fetchCampers = createAsyncThunk(
  'campers/fetchCampers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/campers');
      return response.data.items;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);