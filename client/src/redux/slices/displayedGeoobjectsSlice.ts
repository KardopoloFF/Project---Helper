import { createSlice } from '@reduxjs/toolkit';

export const displayedGeoObjectsSlice = createSlice({
  name: 'displayedGeoObjects',
  initialState: [],
  reducers: {
    setDisplayedGeoObjects: (state, action) => action.payload,
  },
});

export const { setDisplayedGeoObjects } = displayedGeoObjectsSlice.actions;

export default displayedGeoObjectsSlice.reducer;
