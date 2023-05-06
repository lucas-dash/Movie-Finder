import { useGetMoviePopularQuery } from '../../api/movieApi';
import { Box } from '@mui/material';
import ListItem from './ListItem';

const MovieList = () => {
  const { data: popularMovie, isLoading: popularLoad } =
    useGetMoviePopularQuery();

  return (
    <Box>
      <ListItem
        loading={popularLoad}
        dataList={popularMovie?.results}
        listName={'Top 10 Today'}
      />
    </Box>
  );
};
export default MovieList;
