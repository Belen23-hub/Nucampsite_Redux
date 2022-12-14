import { configureStore } from '@reduxjs/toolkit';
import { campsitesReducer } from '../features/campsites/campsitesSlice';
import { userReducer } from '../features/user/userSlice';
import { commentsReducer } from '../features/comments/commentsSlice';
import { partnersReducer } from '../features/partners/partnersSlice';
import { promotionsReducer } from '../features/promotions/promotionsSlice';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    campsites: campsitesReducer,
    user: userReducer,
    partners: partnersReducer,
    promotions: promotionsReducer,
    comments: commentsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});
