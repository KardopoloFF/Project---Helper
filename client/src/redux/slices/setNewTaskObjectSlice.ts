import { createSlice } from '@reduxjs/toolkit';

export const setNewTaskObjectSlice = createSlice({
  name: 'newTaskObject',
  initialState: {},
  reducers: {
    setNewTaskObject: (state, action) => ({...state, ...action.payload}),
  },
});

// Action creators are generated for each case reducer function
export const { setNewTaskObject } = setNewTaskObjectSlice.actions;

const fetchNewTaskObject = (payload: any) => ({ type: 'FETCH_NEW_TASK_OBJECT',  payload });

export default setNewTaskObjectSlice.reducer;

export { fetchNewTaskObject };
