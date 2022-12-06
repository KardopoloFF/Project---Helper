import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import setPostsReducer from './postsSlice';
import setCategoriesReducer from './categoriesSlice';
import setNewTaskObjectReducer from  './setNewTaskObjectSlice'
import postsSaga from './sagas/posts';
import categoriesSaga from './sagas/categories'
import newTaskObjectSaga from './sagas/newTaskObject';

const sagaMiddleware = createSagaMiddleware();
export default configureStore({
  reducer: {
    posts: setPostsReducer,
    categories: setCategoriesReducer,
    newTaskObj: setNewTaskObjectReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), sagaMiddleware],
});
sagaMiddleware.run(postsSaga);
sagaMiddleware.run(categoriesSaga);
sagaMiddleware.run(newTaskObjectSaga);
