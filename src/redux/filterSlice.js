import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: '',
  type: '',
  features: [],
};

const filterSlice = createSlice({
  name: 'filter',
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

export const { setLocation, setType, setFeatures } = filterSlice.actions;
export default filterSlice.reducer;