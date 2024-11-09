import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [], 
  loading: false,
  error: ""
};

export const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {
  const response = await axios.get('https://fakestoreapi.com/products');
  return response.data;  
});

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;  
      state.error = '';
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.products = [];  
      state.error = action.error.message;
    });
  }
});

export default productSlice.reducer;
