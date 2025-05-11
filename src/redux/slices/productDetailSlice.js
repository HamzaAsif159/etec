import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiClient from "../../utils/apiClient";

export const fetchProductById = createAsyncThunk(
  "productDetail/fetchById",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await apiClient.get(`/products/${productId}`);
      console.log("API Response:", response);
      if (!response) {
        return rejectWithValue("No data received from API");
      }
      return response;
    } catch (err) {
      console.error("API Error:", err);
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);
const productDetailSlice = createSlice({
  name: "productDetail",
  initialState: { data: null, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        console.log("fetchProductById fulfilled with payload:", action.payload);
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch product";
      });
  },
});

export default productDetailSlice.reducer;
