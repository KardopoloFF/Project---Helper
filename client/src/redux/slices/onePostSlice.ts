import { createSlice } from '@reduxjs/toolkit';


export const oneSlice = createSlice({
  name: 'onePost',
  initialState: [],
  reducers: {
    setOnePost: (state, action) => action.payload,
  },
});

// Action creators are generated for each case reducer function
export const { setOnePost } = oneSlice.actions;

export default oneSlice.reducer;

export { };
