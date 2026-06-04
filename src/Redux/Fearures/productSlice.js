// create Slice

import { createSlice } from "@reduxjs/toolkit";

export const ProductSlice = createSlice({
  name: "products",
  initialState: {
      products: [],
      product : null
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      },
      setProduct: (state, action) => {
          state.product = action.payload
      }
  },
});

// export actions
export const { setProducts, setProduct } = ProductSlice.actions;

// export states
export const selectProducts = (state) => state.products.products;
export const selectProduct = (state) => state.products.product;

// export reducers
export default ProductSlice.reducer;
