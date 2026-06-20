// createAsyncThunk

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, thunkAPI) => {
    try {
      const data = await productAPIcall.getProducts();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  },
);

// create Slice

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productAPIcall from "../../services/productAPIcall";

export const ProductSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    product: null,
    loading: false,
    error: null,
  },
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// export actions
export const { setProduct } = ProductSlice.actions;

// export states
export const selectProducts = (state) => state.products.products;
export const selectProduct = (state) => state.products.product;
export const selectLoading = (state) => state.products.loading;
export const selectError = (state) => state.products.error;

// export reducers
export default ProductSlice.reducer;
