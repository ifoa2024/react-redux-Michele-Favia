// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterslice';
import userReducer from './userSlice';





const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
});

export default store;
