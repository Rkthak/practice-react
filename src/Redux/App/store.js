// configure store

import { configureStore } from "@reduxjs/toolkit";
import reactionReducer from "../Fearures/reactionSlice";

const store = configureStore({
  reducer: {
    reaction: reactionReducer,
  },
});

export default store