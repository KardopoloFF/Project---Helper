import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import setPostsReducer from './slices/postsSlice';
import setUserReducer from './slices/userSlice'
import setCategories from './slices/categoriesSlice';
import displayedGeoobjectsReducer from './slices/displayedGeoObjectsSlice';
import postsSaga from './sagas/posts';
import categoriesSaga from './sagas/categories'
import setOnePostReducer from './slices/onePostSlice'

const sagaMiddleware = createSagaMiddleware();
export default configureStore({
  reducer: {
    posts: setPostsReducer,
    user: setUserReducer,
    categories: setCategories,
    displayedGeoobjects: displayedGeoobjectsReducer,
    onePost: setOnePostReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), sagaMiddleware],
})
sagaMiddleware.run(postsSaga);
sagaMiddleware.run(categoriesSaga);
