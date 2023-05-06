import {
  useGetMoviePopularQuery,
  useGetMoviesUpcomingQuery,
} from '../api/movieApi';
import { Box } from '@mui/material';
import ListSlider from '../components/Lists/ListSlider';

const MovieList = () => {
  const { data: popularMovies, isLoading: popularLoad } =
    useGetMoviePopularQuery();

  const { data: upcomingMovies, isLoading: upcomingLoad } =
    useGetMoviesUpcomingQuery();

  return (
    <Box my={2}>
      <ListSlider
        loading={upcomingLoad}
        dataList={upcomingMovies?.results}
        listName={'Upcoming Movies'}
      />
      <ListSlider
        loading={popularLoad}
        dataList={popularMovies?.results}
        listName={'Popular'}
      />
    </Box>
  );
};
export default MovieList;
