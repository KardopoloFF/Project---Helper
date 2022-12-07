import { createSlice } from '@reduxjs/toolkit';
import { IComment } from '../../types/comment';


export const newCommentSlice = createSlice({
  name: 'newComment',
  initialState: {},
  reducers: {
    setNewComment: (state, action) => ({...state, ...action.payload}),
  },
});

// Action creators are generated for each case reducer function
export const { setNewComment } = newCommentSlice.actions;

const fetchNewComment = (input:IComment) => ({ type: 'FETCH_NEW_COMMENT',payload: input});

export default newCommentSlice.reducer;

export { fetchNewComment };
