import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/theme';
import { tmdbApi } from '../api/movieApi';

export default configureStore({
  reducer: {
    theme: themeReducer,
    [tmdbApi.reducerPath]: tmdbApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware),
});
