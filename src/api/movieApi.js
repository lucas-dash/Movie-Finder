// RTK Query
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import key from '../config';

const API_KEY = key.API_KEY;

const BASE_URL = 'https://api.themoviedb.org/3/';

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getMoviePopular: builder.query({
      query: () => `movie/popular?api_key=${API_KEY}`,
    }),
    getMoviesGenres: builder.query({
      query: () => `genre/movie/list?api_key=${API_KEY}`,
    }),
    getMovieDetails: builder.query({
      query: (movieId) => `movie/${movieId}?api_key=${API_KEY}`,
    }),
  }),
});

export const {
  useGetMoviePopularQuery,
  useGetMoviesGenresQuery,
  useGetMovieDetailsQuery,
} = tmdbApi;

// const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
