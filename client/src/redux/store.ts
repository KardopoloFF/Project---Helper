import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import setPostsReducer from './postsSlice';
import setCategories from './categoriesSlice';
import postsSaga from './sagas/posts';
import categoriesSaga from './sagas/categories'

const sagaMiddleware = createSagaMiddleware();
export default configureStore({
  reducer: {
    posts: setPostsReducer,
    categories: setCategories,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), sagaMiddleware],
});
sagaMiddleware.run(postsSaga);
sagaMiddleware.run(categoriesSaga);
