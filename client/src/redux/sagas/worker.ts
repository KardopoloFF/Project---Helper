import {
    call, put, takeEvery
  } from 'redux-saga/effects';
  import axios, { AxiosResponse } from 'axios';
  import { setWorker } from '../slices/workerSlice';
  
  const axiosCall:any = ( id :number ) => axios.get(`http://localhost:3001/worker/${id}`);

  interface Iaction {
    action : Object
    payload: any
    type: string
  }

  // worker Saga: will be fired on USER_FETCH_REQUESTED actions
  function* fetchWorkerWorker(action: Iaction):Generator<Object> {
    try {
      const res: any = yield call(axiosCall, action.payload);
      
      yield put(setWorker(res.data));
    } catch (e:any) {
      yield put({ type: 'USER_FETCH_FAILED', message: e.message });
    }
  }
  
  /*
        Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
        Allows concurrent fetches of user.
      */
  function* workerSaga() { // Watcher
    yield takeEvery('FETCH_WORKER', fetchWorkerWorker);
  }
  
  export default workerSaga;