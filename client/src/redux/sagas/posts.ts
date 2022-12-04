import {
    call, put, takeLatest, delay
  } from 'redux-saga/effects';
  import axios, { AxiosResponse } from 'axios';
  import { setPosts } from '../slices/postsSlice';
  
  const axiosCall:any = () => axios('http://localhost:3001/posts');
  // axiosCall:Promise<AxiosResponse<any>> для будущей настройки,не трогать
  interface Iaction {
    action : Object
    payload: any
    type: string
  }

  // worker Saga: will be fired on USER_FETCH_REQUESTED actions
  function* fetchPostsWorker(action: Iaction):Generator<Object> {
    try {
      yield delay(2000);
      const res: any = yield call(axiosCall, action.payload);
      yield put(setPosts(res.data));
    } catch (e:any) {
      yield put({ type: 'USER_FETCH_FAILED', message: e.message });
    }
  }
  
  /*
        Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
        Allows concurrent fetches of user.
      */
  function* postsSaga() { // Watcher
    yield takeLatest('FETCH_POSTS', fetchPostsWorker);
  }
  
  export default postsSaga;