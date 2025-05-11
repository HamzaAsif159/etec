import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiClient from "../../utils/apiClient";

export const fetchFeaturedProducts = createAsyncThunk(
  "featuredProducts/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiClient.get("/products?featured=true");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

const featuredProductsSlice = createSlice({
  name: "featuredProducts",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFeaturedProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFeaturedProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchFeaturedProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch featured products";
      });
  },
});

export default featuredProductsSlice.reducer;
