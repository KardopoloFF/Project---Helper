import { createSlice } from '@reduxjs/toolkit';

export const allCommentsSlice = createSlice({
  name: 'allComments',
  initialState: [],
  reducers: {
    setAllComments: (state, action) => action.payload,
  },
});

// Action creators are generated for each case reducer function
export const { setAllComments } = allCommentsSlice.actions;

const fetchAllComments = (id: number | null) => ({ type: 'FETCH_ALL_COMMENTS',payload: id});

export default allCommentsSlice.reducer;

export { fetchAllComments };
