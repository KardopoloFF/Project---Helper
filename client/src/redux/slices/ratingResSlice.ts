import { createSlice } from '@reduxjs/toolkit';


export const ratingResSlice = createSlice({
  name: 'ratingRes',
  initialState: 5,
  reducers: {
    setRatingRes: (state: number, action) =>  (action.payload?.reduce((a,b)=>(a+b.rating), 0))/(action.payload?.length)
  },
});

// Action creators are generated for each case reducer function
export const { setRatingRes } = ratingResSlice.actions;

// const fetchOnePosts = (input:any) => ({ type: 'UPDATE_POSTS',payload: input});

export default ratingResSlice.reducer;

// export { fetchOnePosts };
