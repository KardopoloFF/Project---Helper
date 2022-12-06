import { createSlice } from '@reduxjs/toolkit';

export const displayedGeoobjectsSlice = createSlice({
  name: 'displayedGeoobjects',
  initialState: [],
  reducers: {
    setDisplayedGeoobjects: (state, action) => action.payload,
  },
});

export const { setDisplayedGeoobjects } = displayedGeoobjectsSlice.actions;

export default displayedGeoobjectsSlice.reducer;
