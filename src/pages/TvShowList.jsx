import { Box } from '@mui/material';
import ListSlider from '../components/Lists/ListSlider';
import { useGetTvPopularQuery, useGetTvTopRatedQuery } from '../api/movieApi';

const TvShowList = () => {
  const { data: popularTv, isLoading: popularLoad } = useGetTvPopularQuery();
  const { data: topRatedTv, isLoading: topRatedLoad } = useGetTvTopRatedQuery();

  return (
    <Box my={2}>
      <ListSlider
        loading={topRatedLoad}
        dataList={topRatedTv?.results}
        listName={'Top Rated TV Shows'}
      />
      <ListSlider
        loading={popularLoad}
        dataList={popularTv?.results}
        listName={'Popular TV Shows'}
      />
    </Box>
  );
};
export default TvShowList;
