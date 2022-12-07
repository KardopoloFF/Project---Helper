import { createSlice } from '@reduxjs/toolkit';
import { IComment } from '../../types/comment';


export const newCommentSlice = createSlice({
  name: 'newComment',
  initialState: {},
  reducers: {
    setNewComment: (state, action) => action.payload,
    addNewComment: (state, action) => action.payload,
  },
});

// Action creators are generated for each case reducer function
export const { setNewComment, addNewComment } = newCommentSlice.actions;

const fetchNewComment = (input:IComment) => ({ type: 'ADD_NEW_COMMENT',payload: input});

export default newCommentSlice.reducer;

export { fetchNewComment };
