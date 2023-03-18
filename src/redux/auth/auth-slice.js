import { createSlice } from '@reduxjs/toolkit';
import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { signup, login, current, logout } from './auth-operations';

const initialState = {
  user: {},
  token: '',
  isLogin: false,
  loading: false,
  error: null,
};

const handlePending = store => {
  store.loading = true;
  store.error = null;
};

const handleRejected = (store, { payload }) => {
  store.loading = false;
  store.error = payload;
  const error = payload ? payload : 'Sorry... Something went wrong...';
  NotificationManager.error(error);
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signup.pending, handlePending)
      .addCase(signup.fulfilled, (store, { payload }) => {
        const { user, token } = payload;
        store.loading = false;
        store.user = user;
        store.token = token;
        store.isLogin = true;
      })
      .addCase(signup.rejected, handleRejected)
      .addCase(login.pending, handlePending)
      .addCase(login.fulfilled, (store, { payload }) => {
        const { user, token } = payload;
        store.loading = false;
        store.user = user;
        store.token = token;
        store.isLogin = true;
      })
      .addCase(login.rejected, handleRejected)
      .addCase(current.pending, handlePending)
      .addCase(current.fulfilled, (store, { payload }) => {
        const { name, email } = payload;
        const user = { name, email };
        store.loading = false;
        store.user = user;
        store.isLogin = true;
      })
      .addCase(current.rejected, (store, { payload }) => {
        store.loading = false;
        store.token = '';
        const error = payload ? payload : 'Sorry... Something went wrong...';
        NotificationManager.error(error);
      })
      .addCase(logout.pending, handlePending)
      .addCase(logout.fulfilled, store => {
        store.loading = false;
        store.user = {};
        store.token = '';
        store.isLogin = false;
      })
      .addCase(logout.rejected, handleRejected);
  },
});

export default authSlice.reducer;
