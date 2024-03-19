import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './newsReducer'; 

const rootReducer = {
  news: newsReducer, 
};

const store = configureStore({
  reducer: rootReducer,
  
});

export default store;
