// components
import ListSlider from '../components/Lists/ListSlider';
// RTK Query
import {
  useGetMoviePopularQuery,
  useGetMoviesTopRatedQuery,
  useGetMoviesUpcomingQuery,
} from '../api/movieApi';
// MUI
import { Box } from '@mui/material';

const MovieList = () => {
  const { data: popularMovies, isLoading: popularLoad } =
    useGetMoviePopularQuery(1);

  const { data: upcomingMovies, isLoading: upcomingLoad } =
    useGetMoviesUpcomingQuery();

  const { data: topRatedMovies, isLoading: topRatedLoad } =
    useGetMoviesTopRatedQuery();
  return (
    <Box my={2} component={'section'}>
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
