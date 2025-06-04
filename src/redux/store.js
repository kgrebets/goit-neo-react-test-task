import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './filterSlice';
import campersReducer from './campersSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    campers: campersReducer,
  },
});