import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'http://localhost:3001/';

export const userTasksSlice = createSlice({
  name: 'userPosts',
  initialState: [],
  reducers: {
    findPosts: (state, action) => action.payload,
    updatePosts: (state, action) => action.payload
  }
});

// Action creators are generated for each case reducer function
export const { findPosts , updatePosts } = userTasksSlice.actions;
export default userTasksSlice.reducer;

export const findUserPosts = () => (dispatch: any) => {
  axios.get('http://localhost:3001/profile/tasks')
    .then((res) => dispatch(findPosts(res.data)))
    .catch(console.error);
};
export const updateUserPosts = (input:any) => (dispatch: any) => {
  axios.patch('http://localhost:3001/profile/tasks', {input})
    .then((res) => dispatch(updatePosts(res.data)))
    .catch(console.error);
};