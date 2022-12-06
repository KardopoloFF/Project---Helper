import {
    call, put, takeLatest, delay
  } from 'redux-saga/effects';
  import axios from 'axios';
  import { editOnePoste } from '../slices/onePostSlice';
  
  const axiosCall:any = ( input:Object ) => axios.patch('http://localhost:3001/posts',{input});

  interface Iaction {
    action : Object
    payload: any
    type: string
  }

  // worker Saga: will be fired on USER_FETCH_REQUESTED actions
  function* fetchOnePosts(action: Iaction):Generator<Object> {
    try {
      const res: any = yield call(axiosCall, action.payload);
      yield put(editOnePoste(res.data));
    } catch (e:any) {
      yield put({ type: 'UPDATE_POSTS_FAILED', message: e.message });
    }
  }
  
  /*
        Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
        Allows concurrent fetches of user.
      */
  function* editOnePostSaga() { // Watcher
    yield takeLatest('UPDATE_POSTS', fetchOnePosts);
  }
  
  export default editOnePostSaga;