// configure store

import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "../Fearures/registerSlice"
import loginReducer from "../Fearures/loginSlice"

const store = configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
  },
});

export default store