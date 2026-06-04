// configure store

import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "../Fearures/registerSlice";
import loginReducer from "../Fearures/loginSlice";
import productReducer from "../Fearures/productSlice";

const store = configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
    products: productReducer,
  },
});

export default store;
