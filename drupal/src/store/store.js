import { configureStore } from '@reduxjs/toolkit';
import contactReducer from '../features/constact/contactSlice';

export const store = configureStore({
  reducer: {
    contact: contactReducer,
  },
});