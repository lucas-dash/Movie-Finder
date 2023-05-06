import { useGetMoviePopularQuery } from '../../api/movieApi';
import { Box } from '@mui/material';
import ListSlider from '../ListSlider';

const MovieList = () => {
  const { data: popularMovie, isLoading: popularLoad } =
    useGetMoviePopularQuery();

  return (
    <Box my={2}>
      <ListSlider
        loading={popularLoad}
        dataList={popularMovie?.results}
        listName={'Popular'}
      />
    </Box>
  );
};
export default MovieList;
