import { createSlice } from '@reduxjs/toolkit';

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: [],
  reducers: {
    setCategories: (state, action) => action.payload,
  },
});

// Action creators are generated for each case reducer function
export const { setCategories } = categoriesSlice.actions;

const fetchCategories = () => ({ type: 'FETCH_CATEGORIES' });

export default categoriesSlice.reducer;

export { fetchCategories };
