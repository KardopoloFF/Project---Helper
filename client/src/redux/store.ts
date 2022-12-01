import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import setPostsReducer from './postsSlice';
import postsSaga from './sagas/posts';

const sagaMiddleware = createSagaMiddleware();
export default configureStore({
  reducer: {
    posts: setPostsReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), sagaMiddleware],
});
sagaMiddleware.run(postsSaga);
