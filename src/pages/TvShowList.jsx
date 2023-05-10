// components
import ListSlider from '../components/Lists/ListSlider';
// RTK Query
import { useGetTvPopularQuery, useGetTvTopRatedQuery } from '../api/movieApi';
// MUI
import { Box } from '@mui/material';

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
