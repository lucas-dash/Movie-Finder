import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/theme';
import userReducer from '../features/account/userSlice';
import { tmdbApi } from '../api/movieApi';

export default configureStore({
  reducer: {
    theme: themeReducer,
    user: userReducer,
    [tmdbApi.reducerPath]: tmdbApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware),
});
