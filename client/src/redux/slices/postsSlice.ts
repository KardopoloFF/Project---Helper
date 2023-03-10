import { createSlice } from '@reduxjs/toolkit';

export const postsSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    setPosts: (state, action) => action.payload,
  },
});

// Action creators are generated for each case reducer function
export const { setPosts } = postsSlice.actions;

const fetchPosts = (input: any) => ({ type: 'FETCH_POSTS', payload: input });

export default postsSlice.reducer;

export { fetchPosts };
