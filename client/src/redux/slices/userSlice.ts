import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'http://localhost:3001/';

const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    setAuthUser(state, action) {
      return action.payload;
    },
    logoutUser() {
      return {};
    },
  },
});

export const { setAuthUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;

export const checkAuth = () => (dispatch: any) => {
  axios.post('http://localhost:3001/user/check', null, { withCredentials: true })
    .then((res) => dispatch(setAuthUser(res.data)))
    .catch(console.log);
};

export const loginUserThunk = (e: any, inputs: any) => (dispatch: any) => {
  e.preventDefault();
  axios.post('http://localhost:3001/user/auth', inputs, { withCredentials: true })
    .then((res) => dispatch(setAuthUser(res.data)))
    .catch(console.log);
};

export const signupUserThunk = (e: any, inputs: any) => (dispatch: any) => {
  e.preventDefault();
  axios.post('http://localhost:3001/user/reg', inputs, { withCredentials: true })
    .then((res) => dispatch(setAuthUser(res.data)))
    .catch(console.log);
};

export const logoutUserThunk = () => (dispatch: any) => {
  axios('http://localhost:3001/user/logout', { withCredentials: true })
    .then(() => dispatch(logoutUser()))
    .catch(console.log);
};
  
  