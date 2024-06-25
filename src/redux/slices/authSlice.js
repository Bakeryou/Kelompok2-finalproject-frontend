import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
  user: null,
  token: localStorage.getItem('token') || null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem('token', action.payload.token);
      state.error = null;
    },
    register: (state) => {
      // state.user = action.payload.user;
      // state.token = action.payload.token;
      // localStorage.setItem('token', action.payload.token);
      state.error = null;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem('token');
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
      toast.error(action.payload);
    },
  },
});

export const { login, register, logout, setError } = authSlice.actions;
export default authSlice.reducer;