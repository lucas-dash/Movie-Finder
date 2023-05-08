import { useParams } from 'react-router-dom';
import {
  useGetMoviesByGenreQuery,
  useGetMoviesByGenrePage2Query,
  useGetMoviesGenresQuery,
} from '../api/movieApi';
import { Box, Button, Grid, Skeleton, Stack, Typography } from '@mui/material';
import ListCard from './Lists/ListCard';
import { useEffect, useState } from 'react';

const MovieGenresList = () => {
  const [load, setLoad] = useState(false);
  const { genreId } = useParams();

  useEffect(() => {
    setLoad(false);
  }, [genreId]);

  const {
    data: genreMovie,
    isLoading: genreLoad,
    isError: genreErr,
  } = useGetMoviesByGenreQuery(genreId);

  const { data: genreList, isLoading: genreListLoad } =
    useGetMoviesGenresQuery();

  const { data: genreListPage2, isLoading: loadPage2 } =
    useGetMoviesByGenrePage2Query(genreId);

  const loadMore = () => {
    setLoad(true);
  };

  const titleGenre = genreListLoad
    ? { name: 'Loading...' }
    : genreList.genres.find((genre) => {
        if (genre.id === Number(genreId)) {
          return genre;
        }
      });

  let content;

  if (load) {
    content = loadPage2 ? (
      <>
        <Grid item xs={10} sm={3} md={3} lg={2} justifyContent={'center'}>
          <Skeleton variant="rectangular" height={300} width={200} />
        </Grid>
        <Grid item xs={10} sm={3} md={3} lg={2} justifyContent={'center'}>
          <Skeleton variant="rectangular" height={300} width={200} />
        </Grid>
        <Grid item xs={10} sm={3} md={3} lg={2} justifyContent={'center'}>
          <Skeleton variant="rectangular" height={300} width={200} />
        </Grid>
      </>
    ) : (
      genreListPage2.results.map((movie) => {
        return (
          <Grid
            item
            key={movie.id}
            xs={10}
            sm={3}
            md={3}
            lg={2}
            justifyContent={'center'}
          >
            <ListCard
              title={movie.title}
              img={movie.poster_path}
              movieId={movie.id}
            />
          </Grid>
        );
      })
    );
  } else {
    content = '';
  }

  if (genreErr) {
    return (
      <Modal>
        <Box>
          <Typography variant="h5" color={'error'}>
            Load Page Error
          </Typography>
        </Box>
      </Modal>
    );
  }

  return (
    <Box my={3}>
      <Box>
        <Typography
          variant="h5"
          color={'secondary'}
          fontWeight={600}
          ml={2}
          mb={3}
        >
          {`${titleGenre.name} movies`}
        </Typography>
      </Box>
      <Grid container gap={4} justifyContent={'center'}>
        {genreLoad ? (
          <>
            <Grid item xs={10} sm={3} md={3} lg={2} justifyContent={'center'}>
              <Skeleton variant="rectangular" height={300} width={200} />
            </Grid>
            <Grid item xs={10} sm={3} md={3} lg={2} justifyContent={'center'}>
              <Skeleton variant="rectangular" height={300} width={200} />
            </Grid>
            <Grid item xs={10} sm={3} md={3} lg={2} justifyContent={'center'}>
              <Skeleton variant="rectangular" height={300} width={200} />
            </Grid>
          </>
        ) : (
          genreMovie.results.map((movie) => {
            return (
              <Grid
                item
                key={movie.id}
                xs={10}
                sm={3}
                md={3}
                lg={2}
                justifyContent={'center'}
              >
                <ListCard
                  title={movie.title}
                  img={movie.poster_path}
                  movieId={movie.id}
                />
              </Grid>
            );
          })
        )}
      </Grid>

      {load ? (
        ''
      ) : (
        <Stack direction={'row'} justifyContent={'center'} my={4}>
          <Button variant="contained" color="secondary" onClick={loadMore}>
            <Typography variant="h6" fontWeight={600}>
              Load More
            </Typography>
          </Button>
        </Stack>
      )}
      <Grid container gap={4} justifyContent={'center'} mt={3}>
        {content}
      </Grid>
    </Box>
  );
};
export default MovieGenresList;
