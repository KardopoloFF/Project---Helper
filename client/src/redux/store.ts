import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import setPostsReducer from './slices/postsSlice';
import setWorkerReducer from './slices/workerSlice'
import setNewTaskObjectReducer from  './slices/setNewTaskObjectSlice'
import setUserReducer from './slices/userSlice'
import setCategoriesReducer from './slices/categoriesSlice';
import displayedGeoobjectsReducer from './slices/displayedGeoobjectsSlice';
import setNewCommentReducer from './slices/newCommentSlice'
import setAllComments from './slices/allCommentsSlice'
import postsSaga from './sagas/posts';
import categoriesSaga from './sagas/categories'
import newCommentSaga from './sagas/newComment'
import setOnePostReducer from './slices/onePostSlice'
import editOnePostSaga from './sagas/startWork'
import newTaskObjectSaga from './sagas/newTaskObject';
import workerSaga from './sagas/worker';
import userTasksReducer from './slices/currentUser'
import allCommentsSaga from './sagas/allComments';


const sagaMiddleware = createSagaMiddleware();
export default configureStore({
  reducer: {
    posts: setPostsReducer,
    user: setUserReducer,
    categories: setCategoriesReducer,
    newTaskObj: setNewTaskObjectReducer,
    onePost: setOnePostReducer,
    worker: setWorkerReducer,
    userTasks: userTasksReducer,
    newComment: setNewCommentReducer,
    allComments: setAllComments,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), sagaMiddleware],
})
sagaMiddleware.run(postsSaga);
sagaMiddleware.run(categoriesSaga);
sagaMiddleware.run(newTaskObjectSaga);
sagaMiddleware.run(editOnePostSaga);
sagaMiddleware.run(workerSaga);
sagaMiddleware.run(newCommentSaga);
sagaMiddleware.run(allCommentsSaga);
