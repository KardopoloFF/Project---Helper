import { createSlice } from '@reduxjs/toolkit';

export const workerSlice = createSlice({
  name: 'worker',
  initialState: {},
  reducers: {
    setWorker: (state, action) => action.payload,
  },
});

// Action creators are generated for each case reducer function
export const { setWorker } = workerSlice.actions;

const fetchWorker = (payload: number | null) => ({ type: 'FETCH_WORKER',  payload });

export default workerSlice.reducer;

export { fetchWorker };
