import { createSlice } from "@reduxjs/toolkit";

export const newsReducer = createSlice({
  name: 'news',
  initialState: {
    length: 9,
    index: 0,
    country : '',
    category : ''
  },
  reducers: {
    indexIncrement: state => {
      state.index = (state.index + 1) % state.length;    },
    setSelectedCountry: (state, action) => {
      state.country = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.category = action.payload;
    }
  }
});

export const { indexIncrement,setSelectedCountry,setSelectedCategory } = newsReducer.actions;

export default newsReducer.reducer;
