import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const userSlice = createSlice({
  name: 'user',
  initialState: [],
  reducers: {
    setUser: (state, action) => action.payload,
    setEmptyUser: (state, action) => action.payload,
    logout: (state, action) => void ({}),
  },
});

// Action creators are generated for each case reducer function
// export const { setUser } = userSlice.actions;

export const setUser = (payload: any) => ({ type: setUser, payload });
export const setEmptyUser = (payload: any) => ({ type: setEmptyUser, payload });
export const logout = (payload: any) => ({ type: logout, payload });

export const submitReg = (e:any, navigate:any) => (dispatch:any) => {
  e.preventDefault();
  axios.post('/user/reg', Object.fromEntries(new FormData(e.target)))
    .then((res) => dispatch(setUser(res.data)));
  navigate('/')
    .catch(() => dispatch(setUser));
};

export const logoutUser = () => (dispatch:any) => {
  axios.get('/user/logout')
    .then(() => dispatch(logout));
};

export const submitLogin = (e:any, navigate:any) => (dispatch:any) => {
  e.preventDefault();
  axios.post('/user/auth', Object.fromEntries(new FormData(e.target)))
    .then((res) => dispatch(setUser(res.data)));
  navigate('/')
    .catch(() => dispatch(setUser));
};

export const checkAuth = () => (dispatch:any) => {
  axios.get('/user/check')
    .then((res) => dispatch(setUser(res.data)))
    .catch(() => dispatch(setEmptyUser));
};

export default userSlice.reducer;

