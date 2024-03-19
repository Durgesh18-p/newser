import { createSlice } from "@reduxjs/toolkit";

export const newsReducer = createSlice({
  name: 'news',
  initialState: {
    length: 9,
    index: 0
  },
  reducers: {
    indexIncrement: state => {
      state.index = (state.index + 1) % state.length;
    }
  }
});

export const { indexIncrement } = newsReducer.actions;

export default newsReducer.reducer;
