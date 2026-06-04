// create slice

import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    email: "",
    password: "",
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

// export actions
export const { setEmail, setPassword } = loginSlice.actions;

// export selectors
export const selectEmail = (state) => state.login.email;
export const selectPassword = (state) => state.login.password;

// export reducers
export default loginSlice.reducer;
