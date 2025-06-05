import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./campersOps";

const initialState = {
  page: 1,
  limit: 5,

  items: null,
  hasMorePages: false,

  loading: false,
  error: null,
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
        state.error = null;

        if (state.items && state.items.length === 0) {
          state.items = null;
        }
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        const { items, total } = action.payload;

        if (state.page === 1) {
          state.items = items;
          state.pageCount = Math.ceil(total / state.limit);
        } else {
          state.items.push(...items);
        }

        state.hasMorePages = state.items.length < total;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;

        const error = action.payload;
        if (error?.status === 404) {
          state.items = [];
        } else {
          state.error = error?.message || "Unknown error";
        }
      });
  },
});

export const { setPage } = campersSlice.actions;

export default campersSlice.reducer;

export const selectPage = (state) => state.campers.page;
export const selectCampers = (state) => state.campers.items;
export const selectLoading = (state) => state.campers.loading;
export const selectError = (state) => state.campers.error;
export const selectHasMorePages = (state) => state.campers.hasMorePages;
