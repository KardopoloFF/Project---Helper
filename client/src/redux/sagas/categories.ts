import {
  call, put, takeEvery
} from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import { setCategories } from '../slices/categoriesSlice';

const axiosCatCall: any = () => axios('http://localhost:3001/categories');
// axiosCall:Promise<AxiosResponse<any>> для будущей настройки,не трогать
interface Iaction {
  action: Object
  payload: any
  type: string
}

// worker Saga: will be fired on USER_FETCH_REQUESTED actions 
function* fetchCategoriesWorker(): Generator<Object> {
  try {
    const res: any = yield call(axiosCatCall);
    yield put(setCategories(res.data));
  } catch (e: any) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

/*
      Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
      Allows concurrent fetches of user.
    */
function* categoriesSaga() { // Watcher
  yield takeEvery('FETCH_CATEGORIES', fetchCategoriesWorker);
}

export default categoriesSaga;