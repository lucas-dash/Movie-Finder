// rrd
import { useParams } from 'react-router-dom';
// react
import { useEffect, useState } from 'react';
// RTK Query
import {
  useGetMoviesByGenreQuery,
  useLazyGetMoviesByGenrePage2Query,
  useGetMoviesGenresQuery,
} from '../api/movieApi';
// MUI
import { Box, Button, Skeleton, Stack, Typography } from '@mui/material';
// components
import GridLoading from '../components/loadings/GridLoading';
import ListGrid from '../components/Lists/ListGrid';

const MovieGenresList = () => {
  const { genreId } = useParams();
  const [showMore, setShowMore] = useState(false);

  // genre list 1
  const {
    data: movieListPage1,
    isLoading: movieListPage1Load,
    error: movieListPage1Err,
  } = useGetMoviesByGenreQuery(genreId);

  // movie list 2 lazy query
  const [
    getMoviePage2,
    {
      data: movieListPage2,
      isLoading: movieListPage2Load,
      error: movieListPage2Err,
    },
  ] = useLazyGetMoviesByGenrePage2Query(genreId);

  // movies genres
  const {
    data: genreTitle,
    isLoading: genreTitleLoad,
    error: genreTitleErr,
  } = useGetMoviesGenresQuery();

  const loadMoreItem = () => {
    setShowMore(true);
    getMoviePage2(genreId);
  };

  const titleGenre = genreTitle?.genres.find((genre) => {
    if (genre.id === Number(genreId)) {
      return genre;
    }
  }).name;

  useEffect(() => {
    setShowMore(false);
  }, [genreId]);

  return (
    <Box my={3} component={'section'}>
      {genreTitleErr && (
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
        {genreTitleLoad ? (
          <Skeleton variant="text" width={100} height={30} />
        ) : (
          `${titleGenre} Movies`
        )}
      </Typography>

      {(movieListPage1Err || movieListPage2Err) && (
        <Alert severity="error" sx={{ fontWeight: 600 }}>
          Failded to load movies! Check your network connection!
        </Alert>
      )}

      {movieListPage1Load ? (
        <GridLoading />
      ) : (
        <ListGrid dataList={movieListPage1} />
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

      {showMore &&
        (movieListPage2Load ? (
          <GridLoading />
        ) : (
          <ListGrid dataList={movieListPage2} />
        ))}
    </Box>
  );
};
export default MovieGenresList;
