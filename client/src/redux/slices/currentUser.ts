import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'http://localhost:3001/';

export const userTasksSlice = createSlice({
  name: 'userPosts',
  initialState: [],
  reducers: {
    findPosts: (state, action) => action.payload,
  },
});

// Action creators are generated for each case reducer function
export const { findPosts } = userTasksSlice.actions;
export default userTasksSlice.reducer;

export const findUserPosts = () => (dispatch: any) => {
  axios.get('http://localhost:3001/profile/tasks')
    .then((res) => dispatch(findPosts(res.data)))
    .catch(console.error);
};