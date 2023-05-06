import {
  useGetMoviePopularQuery,
  useGetMoviesTopRatedQuery,
  useGetMoviesUpcomingQuery,
} from '../api/movieApi';
import { Box } from '@mui/material';
import ListSlider from '../components/Lists/ListSlider';

const MovieList = () => {
  const { data: popularMovies, isLoading: popularLoad } =
    useGetMoviePopularQuery();

  const { data: upcomingMovies, isLoading: upcomingLoad } =
    useGetMoviesUpcomingQuery();

  const { data: topRatedMovies, isLoading: topRatedLoad } =
    useGetMoviesTopRatedQuery();
  return (
    <Box my={2}>
      <ListSlider
        loading={topRatedLoad}
        dataList={topRatedMovies?.results}
        listName={'Top Rated Movies'}
      />
      <ListSlider
        loading={upcomingLoad}
        dataList={upcomingMovies?.results}
        listName={'Upcoming Movies'}
      />
      <ListSlider
        loading={popularLoad}
        dataList={popularMovies?.results}
        listName={'Popular Movies'}
      />
    </Box>
  );
};
export default MovieList;
