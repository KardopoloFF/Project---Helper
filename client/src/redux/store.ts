import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import setPostsReducer from './slices/postsSlice';
import setUserReducer from './slices/userSlice'
import setCategories from './slices/categoriesSlice';
import displayedGeoobjectsReducer from './slices/displayedGeoObjectsSlice';
import setNewTaskObjectReducer from  './setNewTaskObjectSlice'
import setCategoriesReducer from './slices/categoriesSlice';
import postsSaga from './sagas/posts';
import categoriesSaga from './sagas/categories'
import setOnePostReducer from './slices/onePostSlice'
import editOnePostSaga from './sagas/startWork'
import newTaskObjectSaga from './sagas/newTaskObject';

const sagaMiddleware = createSagaMiddleware();
export default configureStore({
  reducer: {
    posts: setPostsReducer,
    user: setUserReducer,
    categories: setCategoriesReducer,
    newTaskObj: setNewTaskObjectReducer,
    displayedGeoobjects: displayedGeoobjectsReducer,
    onePost: setOnePostReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), sagaMiddleware],
})
sagaMiddleware.run(postsSaga);
sagaMiddleware.run(categoriesSaga);
sagaMiddleware.run(newTaskObjectSaga);
sagaMiddleware.run(editOnePostSaga)