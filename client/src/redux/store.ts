import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import setPostsReducer from './postsSlice';
import setUserReducer from './userSlice'
import postsSaga from './sagas/posts';

const sagaMiddleware = createSagaMiddleware();
export default configureStore({
  reducer: {
    posts: setPostsReducer,
    user: setUserReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), sagaMiddleware],
});
sagaMiddleware.run(postsSaga);
