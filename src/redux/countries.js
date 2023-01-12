import { createSlice } from '@reduxjs/toolkit';
import Api from './Api';

const initialState = {
  countries: [],
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(Api.fulfilled, (state, action) => ({
      ...state,
      countries: action.payload,
    }));
  },
});

export default countriesSlice.reducer;
