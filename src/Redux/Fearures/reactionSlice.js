//  create slice

import { createSlice } from "@reduxjs/toolkit";

export const reactionSlice = createSlice({
  name: "reaction",
  initialState: {
    likes: 0,
    disLikes: 0,
    reactions: [],
  },
  reducers: {
    setLikes: (state) => {
      state.likes = state.likes + 1;
    },
    setDisLikes: (state) => {
      state.disLikes = state.disLikes + 1;
    },
    setreactions: (state, action) => {
      state.reactions.push(action.payload);
    },
  },
});

// export actions
export const { setLikes, setDisLikes, setreactions } = reactionSlice.actions;

// export selectors
export const selectLikes = (state) => state.reaction.likes;

export const selectDisLike = (state) => state.reaction.disLikes;

export const selectReaction = (state) => state.reaction.reactions;

// export reducers
export default reactionSlice.reducer;
