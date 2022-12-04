import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import setPostsReducer from './slices/postsSlice';
import setUserReducer from './slices/userSlice'
import setCategories from './slices/categoriesSlice';
import postsSaga from './sagas/posts';
import categoriesSaga from './sagas/categories'

const sagaMiddleware = createSagaMiddleware();
export default configureStore({
  reducer: {
    posts: setPostsReducer,
    user: setUserReducer,
    categories: setCategories,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), sagaMiddleware],
});
sagaMiddleware.run(postsSaga);
sagaMiddleware.run(categoriesSaga);
