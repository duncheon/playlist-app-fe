import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userReducer';
import notificationReducer from './notificationReducer';
import playlistReducer from './playlistReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    notification: notificationReducer,
    playlist: playlistReducer,
  },
});

export default store;
