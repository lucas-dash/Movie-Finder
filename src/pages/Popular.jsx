// MUI
import { Box, Alert, Typography, Stack, IconButton } from '@mui/material';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
// RTK Query
import { useGetMoviePopularQuery } from '../api/movieApi';
// Components
import GridLoading from '../components/loadings/GridLoading';
import ListGrid from '../components/Lists/ListGrid';
// react
import { useEffect, useState } from 'react';

const Popular = () => {
  const [page, setPage] = useState(1);
  const [disabledPrev, setDisabledPrev] = useState(true);
  const [disabledNext, setDisabledNext] = useState(false);

  const {
    data: popularMovies,
    isLoading: popularLoad,
    error: popularErr,
  } = useGetMoviePopularQuery(page);

  const loadPrevious = () => {
    if (page === 1) return;
    setPage((prev) => prev - 1);
  };

  const loadNext = () => {
    if (page === 6) return;
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    if (page === 1) {
      setDisabledPrev(true);
    } else if (page !== 1) {
      setDisabledPrev(false);
    }

    if (page === 6) {
      setDisabledNext(true);
    } else if (page !== 6) {
      setDisabledNext(false);
    }
  }, [page]);

  return (
    <Box mt={3} mb={10} component={'section'}>
      <Typography
        variant="h5"
        color={'secondary'}
        fontWeight={600}
        ml={2}
        mb={3}
      >
        Popular Movies
      </Typography>

      <Stack
        direction={'row'}
        justifyContent={'center'}
        alignItems={'center'}
        gap={1}
      >
        <IconButton
          color="secondary"
          onClick={() => loadPrevious()}
          disabled={disabledPrev}
        >
          <ArrowBackIosNewRoundedIcon />
        </IconButton>

        <Typography variant="h6" fontWeight={600}>
          Page {page}
        </Typography>

        <IconButton
          color="secondary"
          onClick={() => loadNext()}
          disabled={disabledNext}
        >
          <ArrowForwardIosRoundedIcon />
        </IconButton>
      </Stack>

      {popularErr && (
        <Alert severity="error" sx={{ fontWeight: 600 }}>
          Failed to load popular movies!
        </Alert>
      )}

      {popularLoad ? <GridLoading /> : <ListGrid dataList={popularMovies} />}

      <Stack
        direction={'row'}
        justifyContent={'center'}
        alignItems={'center'}
        gap={1}
      >
        <IconButton
          color="secondary"
          onClick={() => loadPrevious()}
          disabled={disabledPrev}
        >
          <ArrowBackIosNewRoundedIcon />
        </IconButton>

        <Typography variant="h6" fontWeight={600}>
          Page {page}
        </Typography>

        <IconButton
          color="secondary"
          onClick={() => loadNext()}
          disabled={disabledNext}
        >
          <ArrowForwardIosRoundedIcon />
        </IconButton>
      </Stack>
    </Box>
  );
};
export default Popular;
