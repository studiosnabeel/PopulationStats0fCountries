import { createSlice } from '@reduxjs/toolkit';
import api from './api';

const initialState = {
  countries: [],
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(api.fulfilled, (state, action) => ({
      ...state,
      countries: action.payload,
    }));
  },
});

export default countriesSlice.reducer;
