import {
    call, put, takeLatest,
  } from 'redux-saga/effects';
  import axios from 'axios';
  import { setPosts } from '../postsSlice';
  
  const axiosCall = () => axios('http://localhost:3001/posts');
  
  
  
  // worker Saga: will be fired on USER_FETCH_REQUESTED actions
  function* fetchPostsWorker(action) {
    try {
      const res = yield call(axiosCall, action.payload);
      yield put(setPosts(res.data));
    } catch (e) {
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