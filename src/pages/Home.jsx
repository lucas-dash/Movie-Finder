// MUI
import { Box } from '@mui/material';
// componets
import ListSlider from '../components/Lists/ListSlider';
// RTK query
import {
  useGetMoviePopularQuery,
  useGetMoviesTopRatedQuery,
  useGetTvTopRatedQuery,
} from '../api/movieApi';

const Home = () => {
  const { data: popularMovies, isLoading: popularLoad } =
    useGetMoviePopularQuery(1);

  const { data: topRatedMovies, isLoading: topRatedMoviesLoad } =
    useGetMoviesTopRatedQuery();

  const { data: topRatedTv, isLoading: topRatedTvLoad } =
    useGetTvTopRatedQuery();

  return (
    <Box>
      <ListSlider
        loading={popularLoad}
        dataList={popularMovies?.results}
        listName={'Popular Movies'}
      />
      <ListSlider
        loading={topRatedMoviesLoad}
        dataList={topRatedMovies?.results}
        listName={'Top Rated Movies'}
      />
      <ListSlider
        loading={topRatedTvLoad}
        dataList={topRatedTv?.results}
        listName={'Top Rated TV Shows'}
      />
    </Box>
  );
};
export default Home;
