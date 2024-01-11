import { createSlice } from '@reduxjs/toolkit';

export const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    submitting: false,
    visionMenu: false
  },
  reducers: {
    setSubmitting: (state, action) => {
      state.submitting = action.payload;
    },
    setVisionMenu: (state, action) => {
      state.visionMenu = action.payload
    }
  },
});

export const { setSubmitting, setVisionMenu } = contactSlice.actions;

export default contactSlice.reducer;