import { createSlice } from '@reduxjs/toolkit';


export const oneSlice = createSlice({
  name: 'onePost',
  initialState: [],
  reducers: {
    setOnePost: (state, action) => action.payload,
    editOnePoste: (state,action) => action.payload
  },
});

// Action creators are generated for each case reducer function
export const { setOnePost,editOnePoste } = oneSlice.actions;

const fetchOnePosts = (input:any) => ({ type: 'UPDATE_POSTS',payload: input});

export default oneSlice.reducer;

export { fetchOnePosts };
