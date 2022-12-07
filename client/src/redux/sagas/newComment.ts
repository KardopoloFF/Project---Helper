import {
    call, put, takeEvery
  } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import { IComment } from '../../types/comment';
  
  const axiosNCCall:any = (input: IComment) => axios.post('http://localhost:3001/task/worker/newcomment', input );
  // axiosCall:Promise<AxiosResponse<any>> для будущей настройки,не трогать
  interface Iaction {
    action : Object
    payload: any
    type: string
  }

  // worker Saga: will be fired on USER_FETCH_REQUESTED actions
  function* fetchNewCommentWorker(action: Iaction):Generator<Object> {
    try {
      const res: any = yield call(axiosNCCall, action.payload);
    } catch (e:any) {
      yield put({ type: 'USER_FETCH_FAILED', message: e.message });
    }
  }
  
  /*
        Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
        Allows concurrent fetches of user.
      */
  function* newCommentSaga() { // Watcher
    yield takeEvery('FETCH_NEW_COMMENT', fetchNewCommentWorker);
  }
  
  export default newCommentSaga;