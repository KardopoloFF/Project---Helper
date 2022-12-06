import {
    call, put, takeEvery
  } from 'redux-saga/effects';
  import axios, { AxiosResponse } from 'axios';
  import { setPosts } from '../slices/postsSlice';
import { ITask } from '../../types/task';
  
  const axiosCall:any = (input: ITask) => axios.post('http://localhost:3001/newtask', input );
  // axiosCall:Promise<AxiosResponse<any>> для будущей настройки,не трогать
  interface Iaction {
    action : Object
    payload: any
    type: string
  }

  // worker Saga: will be fired on USER_FETCH_REQUESTED actions
  function* fetchNewTaskObjectWorker(action: Iaction):Generator<Object> {
    try {
      const res: any = yield call(axiosCall, action.payload);
      // yield put((res.data));
    } catch (e:any) {
      yield put({ type: 'USER_FETCH_FAILED', message: e.message });
    }
  }
  
  /*
        Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
        Allows concurrent fetches of user.
      */
  function* newTaskObjectSaga() { // Watcher
    yield takeEvery('FETCH_NEW_TASK_OBJECT', fetchNewTaskObjectWorker);
  }
  
  export default newTaskObjectSaga;