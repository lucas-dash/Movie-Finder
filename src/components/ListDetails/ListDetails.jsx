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
import { Box, Skeleton } from '@mui/material';
import DetailGallery from './DetailGallery';
import MovieDetail from './MovieDetail';
import DetailHeader from './DetailHeader';
import TvShowDetail from './TvShowDetail';
import DetailsLoading from '../loadings/DetailsLoading';

const ListDetails = () => {
  const location = useLocation();

  if (location.pathname.includes('/movies')) {
    const { movieId } = useParams();

    const { data: details, isLoading: detailsLoad } =
      useGetMovieDetailsQuery(movieId);
    const { data: images, isLoading: imagesLoad } =
      useGetMovieImagesQuery(movieId);

    return (
      <Box
        sx={{
          backgroundColor: 'primary.dark',
          borderRadius: 5,
          boxShadow: '2px 2px 10px #202020',
        }}
        mx={{ xs: 0, sm: 2, md: 4 }}
        component={'section'}
        display={'flex'}
        flexDirection={'column'}
        alignItems={'start'}
      >
        {detailsLoad ? (
          <Skeleton variant="text" width={200} height={40} sx={{ ml: 3 }} />
        ) : (
          <DetailHeader title={details?.title} />
        )}

        <DetailGallery loading={imagesLoad} images={images} />

        {detailsLoad ? (
          <DetailsLoading />
        ) : (
          <MovieDetail
            release={details?.release_date}
            runtime={details?.runtime}
            revenue={details?.revenue}
            genres={details?.genres}
            overview={details?.overview}
          />
        )}
      </Box>
    );
  } else if (location.pathname.includes('/tv-shows')) {
    const { tvshowId } = useParams();

    const { data: details, isLoading: detailsLoad } =
      useGetTvDetailsQuery(tvshowId);
    const { data: images, isLoading: imagesLoad } =
      useGetTvImagesQuery(tvshowId);

    return (
      <Box
        sx={{
          backgroundColor: 'primary.dark',
          borderRadius: 5,
          boxShadow: '2px 2px 10px #202020',
        }}
        mx={{ xs: 0, sm: 2, md: 4 }}
        component={'section'}
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
          <DetailsLoading />
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
    );
  } else {
    throw new Error('No match routes');
  }
};

export default ListDetails;
