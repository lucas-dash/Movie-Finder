// RTK Query
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import key from '../../config';

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
    getMovieImages: builder.query({
      query: (movieId) => `movie/${movieId}/images?api_key=${API_KEY}`,
    }),
    getMoviesUpcoming: builder.query({
      query: () => `movie/upcoming?api_key=${API_KEY}`,
    }),
    getMoviesTopRated: builder.query({
      query: () => `movie/top_rated?api_key=${API_KEY}`,
    }),
    getTvGenres: builder.query({
      query: () => `genre/tv/list?api_key=${API_KEY}`,
    }),
    getTvPopular: builder.query({
      query: () => `tv/popular?api_key=${API_KEY}&language=en-US`,
    }),
    getTvTopRated: builder.query({
      query: () => `tv/top_rated?api_key=${API_KEY}`,
    }),
    getTvDetails: builder.query({
      query: (tvshowId) => `tv/${tvshowId}?api_key=${API_KEY}`,
    }),
    getTvImages: builder.query({
      query: (tvshowId) => `tv/${tvshowId}/images?api_key=${API_KEY}`,
    }),
    getMoviesByGenre: builder.query({
      query: (genresId) =>
        `/discover/movie/?api_key=${API_KEY}&with_genres=${genresId}`,
    }),
    getMoviesByGenrePage2: builder.query({
      query: (genresId) =>
        `/discover/movie/?api_key=${API_KEY}&with_genres=${genresId}&page=2`,
    }),
    getTvshowsByGenre: builder.query({
      query: (genresId) =>
        `/discover/tv?api_key=${API_KEY}&with_genres=${genresId}`,
    }),
    getTvshowsByGenrePage2: builder.query({
      query: (genresId) =>
        `/discover/tv?api_key=${API_KEY}&with_genres=${genresId}&page=2`,
    }),
  }),
});

export const {
  useGetMoviePopularQuery,
  useGetMoviesGenresQuery,
  useGetMovieDetailsQuery,
  useGetMovieImagesQuery,
  useGetMoviesUpcomingQuery,
  useGetMoviesTopRatedQuery,
  useGetTvGenresQuery,
  useGetTvPopularQuery,
  useGetTvTopRatedQuery,
  useGetTvDetailsQuery,
  useGetTvImagesQuery,
  useGetMoviesByGenreQuery,
  useLazyGetMoviesByGenrePage2Query,
  useGetTvshowsByGenreQuery,
  useLazyGetTvshowsByGenrePage2Query,
} = tmdbApi;

// const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
