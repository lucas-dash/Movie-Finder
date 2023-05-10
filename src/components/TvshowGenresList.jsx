// rrd
import { useParams } from 'react-router-dom';
// react
import { useEffect, useState } from 'react';
// RTK Query
import {
  useGetTvshowsByGenreQuery,
  useGetTvGenresQuery,
  useLazyGetTvshowsByGenrePage2Query,
} from '../api/movieApi';
// MUI
import { Alert, Box, Button, Skeleton, Stack, Typography } from '@mui/material';
// components
import GridLoading from './loadings/GridLoading';
import ListGrid from './Lists/ListGrid';

const TvshowGenresList = () => {
  const { genreId } = useParams();
  const [showMore, setShowMore] = useState(false);

  // tvshows list 1
  const {
    data: genreTvListPage1,
    isLoading: genreTvListPage1Load,
    error: genreTvListPage1Err,
  } = useGetTvshowsByGenreQuery(genreId);

  // tvshows list 2 lazy query
  const [
    getTvListPage2,
    {
      data: genreTvListPage2,
      isLoading: genreListPage2Load,
      error: genreListPage2Err,
    },
  ] = useLazyGetTvshowsByGenrePage2Query();

  // genres id
  const {
    data: genresTitle,
    isLoading: genresTitleLoad,
    error: genresTitleErr,
  } = useGetTvGenresQuery();

  const loadMoreItem = () => {
    setShowMore(true);
    getTvListPage2(genreId);
  };

  useEffect(() => {
    setShowMore(false);
  }, [genreId]);

  const titleGenre = genresTitle?.genres.find((genre) => {
    if (genre.id === Number(genreId)) {
      return genre;
    }
  }).name;

  return (
    <Box my={3} component={'section'}>
      {genresTitleErr && (
        <Alert severity="error" sx={{ fontWeight: 600 }}>
          Failed to load genre name!
        </Alert>
      )}
      <Typography
        variant="h5"
        color={'secondary'}
        fontWeight={600}
        ml={2}
        mb={3}
      >
        {genresTitleLoad ? (
          <Skeleton variant="text" width={100} height={30} />
        ) : (
          `${titleGenre} tv shows`
        )}
      </Typography>

      {(genreTvListPage1Err || genreListPage2Err) && (
        <Alert severity="error" sx={{ fontWeight: 600 }}>
          Failded to load tv shows! Check your network connection!
        </Alert>
      )}

      {genreTvListPage1Load ? (
        <GridLoading />
      ) : (
        <ListGrid dataList={genreTvListPage1} />
      )}

      {!showMore && (
        <Stack direction={'row'} justifyContent={'center'} my={4}>
          <Button variant="contained" color="secondary" onClick={loadMoreItem}>
            <Typography variant="h6" fontWeight={600}>
              Load More
            </Typography>
          </Button>
        </Stack>
      )}

      {showMore ? (
        genreListPage2Load ? (
          <GridLoading />
        ) : (
          <ListGrid dataList={genreTvListPage2} />
        )
      ) : (
        ''
      )}
    </Box>
  );
};
export default TvshowGenresList;
