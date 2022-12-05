import { createSlice } from '@reduxjs/toolkit';

const phoneSlice = createSlice({
  name: 'phoneNumber',
  initialState: { phoneNumber: '' },
  reducers: {
    addPhone(state, action) {
      const number = action.payload;

      state.phoneNumber = number;

      fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ to: number }),
      }).then((res) => res.json());

      state.phoneNumber = null;
    },
  },
});

export const phoneActions = phoneSlice.actions;

export default phoneSlice;
