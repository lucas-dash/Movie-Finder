// rrd
import { useLocation, useParams } from 'react-router-dom';
// rtk query
import {
  useGetMovieDetailsQuery,
  useGetMovieImagesQuery,
  useGetTvDetailsQuery,
  useGetTvImagesQuery,
} from '../../api/movieApi';
// MUI
import { Box, Grid, Skeleton, Typography } from '@mui/material';
import DetailGallery from './DetailGallery';
import MovieDetail from './MovieDetail';
import DetailHeader from './DetailHeader';
import TvShowDetail from './TvShowDetail';

const ListDetails = () => {
  const location = useLocation();

  if (location.pathname.includes('/movies')) {
    const { movieId } = useParams();

    const { data: details, isLoading: detailsLoad } =
      useGetMovieDetailsQuery(movieId);
    const { data: images, isLoading: imagesLoad } =
      useGetMovieImagesQuery(movieId);

    return (
      <Box mx={{ xs: 0, sm: 2, md: 4 }}>
        <Box
          sx={{
            backgroundColor: 'primary.dark',
            borderRadius: 5,
            boxShadow: '2px 2px 10px #202020',
          }}
          display={'flex'}
          flexDirection={'column'}
          alignItems={'start'}
        >
          {detailsLoad ? (
            <Skeleton variant="text" width={200} height={40} sx={{ ml: 3 }} />
          ) : (
            <DetailHeader title={details.title} />
          )}
          <DetailGallery loading={imagesLoad} images={images} />

          {detailsLoad ? (
            <>
              <Grid
                container
                spacing={2}
                justifyContent={'center'}
                alignItems={'center'}
              >
                <Grid item xs={6} sm={3}>
                  <Box
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    gap={1}
                  >
                    <Box display={'flex'} gap={0.5} alignItems={'center'}>
                      <Skeleton variant="circular" width={20} height={20} />
                      <Skeleton variant="text" width={80} height={20} />
                    </Box>
                    <Skeleton variant="text" width={80} height={20} />
                  </Box>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Box
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    gap={1}
                  >
                    <Box display={'flex'} gap={0.5} alignItems={'center'}>
                      <Skeleton variant="circular" width={20} height={20} />
                      <Skeleton variant="text" width={80} height={20} />
                    </Box>
                    <Skeleton variant="text" width={80} height={20} />
                  </Box>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Box
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    gap={1}
                  >
                    <Box display={'flex'} gap={0.5} alignItems={'center'}>
                      <Skeleton variant="circular" width={20} height={20} />
                      <Skeleton variant="text" width={80} height={20} />
                    </Box>
                    <Skeleton variant="text" width={80} height={20} />
                  </Box>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Box
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    gap={1}
                  >
                    <Box display={'flex'} gap={0.5} alignItems={'center'}>
                      <Skeleton variant="circular" width={20} height={20} />
                      <Skeleton variant="text" width={80} height={20} />
                    </Box>
                    <Skeleton variant="text" width={80} height={20} />
                  </Box>
                </Grid>
              </Grid>
              <Box mx={3} my={3}>
                <Skeleton variant="rectangular" width={'100%'} height={100} />
              </Box>
            </>
          ) : (
            <MovieDetail
              release={details.release_date}
              runtime={details.runtime}
              revenue={details.revenue}
              genres={details.genres}
              overview={details.overview}
            />
          )}
        </Box>
      </Box>
    );
  } else {
    const { tvshowId } = useParams();

    const { data: details, isLoading: detailsLoad } =
      useGetTvDetailsQuery(tvshowId);
    const { data: images, isLoading: imagesLoad } =
      useGetTvImagesQuery(tvshowId);

    return (
      <Box mx={{ xs: 0, sm: 2, md: 4 }}>
        <Box
          sx={{
            backgroundColor: 'primary.dark',
            borderRadius: 5,
            boxShadow: '2px 2px 10px #202020',
          }}
          display={'flex'}
          flexDirection={'column'}
          alignItems={'start'}
        >
          {detailsLoad ? (
            <Skeleton variant="text" width={200} height={40} sx={{ ml: 3 }} />
          ) : (
            <DetailHeader title={details.name} />
          )}
          <DetailGallery loading={imagesLoad} images={images} />

          {detailsLoad ? (
            <>
              <Grid
                container
                spacing={2}
                justifyContent={'center'}
                alignItems={'center'}
              >
                <Grid item xs={6} sm={3}>
                  <Box
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    gap={1}
                  >
                    <Box display={'flex'} gap={0.5} alignItems={'center'}>
                      <Skeleton variant="circular" width={20} height={20} />
                      <Skeleton variant="text" width={80} height={20} />
                    </Box>
                    <Skeleton variant="text" width={80} height={20} />
                  </Box>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Box
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    gap={1}
                  >
                    <Box display={'flex'} gap={0.5} alignItems={'center'}>
                      <Skeleton variant="circular" width={20} height={20} />
                      <Skeleton variant="text" width={80} height={20} />
                    </Box>
                    <Skeleton variant="text" width={80} height={20} />
                  </Box>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Box
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    gap={1}
                  >
                    <Box display={'flex'} gap={0.5} alignItems={'center'}>
                      <Skeleton variant="circular" width={20} height={20} />
                      <Skeleton variant="text" width={80} height={20} />
                    </Box>
                    <Skeleton variant="text" width={80} height={20} />
                  </Box>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Box
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    gap={1}
                  >
                    <Box display={'flex'} gap={0.5} alignItems={'center'}>
                      <Skeleton variant="circular" width={20} height={20} />
                      <Skeleton variant="text" width={80} height={20} />
                    </Box>
                    <Skeleton variant="text" width={80} height={20} />
                  </Box>
                </Grid>
              </Grid>
              <Box mx={3} my={3}>
                <Skeleton variant="rectangular" width={'100%'} height={100} />
              </Box>
            </>
          ) : (
            <TvShowDetail
              tvshowId={tvshowId}
              release={details.first_air_date}
              episodeRuntime={details.episode_run_time[0]}
              numSeasons={details.number_of_seasons}
              seasons={details.seasons}
              genres={details.genres}
              overview={details.overview}
            />
          )}
        </Box>
      </Box>
    );
  }
};

export default ListDetails;
