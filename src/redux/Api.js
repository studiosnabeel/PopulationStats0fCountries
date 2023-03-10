import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const Api = createAsyncThunk('api', async () => {
  try {
    const response = await axios.get('https://restcountries.com/v2/all');
    return response.data;
  } catch (error) {
    return error;
  }
});

export default Api;
