import { configureStore } from '@reduxjs/toolkit';
import phoneSlice from './phone-slice.js';

const store = configureStore({
  reducer: {
    phoneNumber: phoneSlice.reducer,
  },
});

export default store;
