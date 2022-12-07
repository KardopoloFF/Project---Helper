import {
    call, put, takeEvery
  } from 'redux-saga/effects';
  import axios, { AxiosResponse } from 'axios';
  import { setAllComments} from '../slices/allCommentsSlice';
  
  const axiosCall:any = ( id:number ) => axios(`http://localhost:3001/task/worker/allcomments/${id}`);

  interface Iaction {
    action : Object
    payload: any
    type: string
  }

  // worker Saga: will be fired on USER_FETCH_REQUESTED actions
  function* fetchAllCommentsWorker(action: Iaction):Generator<Object> {
    try {
      const res: any = yield call(axiosCall, action.payload);
      yield put(setAllComments(res.data));
    } catch (e:any) {
      yield put({ type: 'USER_FETCH_FAILED', message: e.message });
    }
  }
  
  /*
        Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
        Allows concurrent fetches of user.
      */
  function* allCommentsSaga() { // Watcher
    yield takeEvery('FETCH_ALL_COMMENTS', fetchAllCommentsWorker);
  }
  
  export default allCommentsSaga;