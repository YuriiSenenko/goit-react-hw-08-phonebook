import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// Добавляє токен до axios
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    toast.success('user registration is successful');
    token.set(data.token);
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
});

export const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    toast.success('the user is logged in');
    token.set(data.token);
    return data;
  } catch (error) {
    toast.error('Чувак, ти не залогінився, спробуй ще раз');
  }
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
    toast.success('the user is logged out');
  } catch (error) {
    toast.error('ХЗ якась фігня не понятна');
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persisiedToken = state.user.token;
    if (!persisiedToken) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persisiedToken);

    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {}
  }
);
