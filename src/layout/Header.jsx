// rrd
import { Link } from 'react-router-dom';
// MUI
import { Stack, Button, Typography } from '@mui/material';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import LocalMoviesRoundedIcon from '@mui/icons-material/LocalMoviesRounded';
import MovieFilterRoundedIcon from '@mui/icons-material/MovieFilterRounded';

const Header = () => {
  return (
    <Stack
      direction={'row'}
      spacing={1.5}
      my={2}
      mx={{ xs: 0, sm: 5 }}
      justifyContent={{ xs: 'center', sm: 'start' }}
    >
      {/* <Link to={'/'}>
        <Button
          aria-label="Browse Movies"
          sx={{
            border: '2px solid',
            borderColor: 'secondary.dark',
            borderRadius: 50,
            px: 1.5,
            py: 0,
            transition: 'all ease-out 200ms',
            '&:hover': {
              transform: 'scale(1.10)',
            },
          }}
        >
          <ExploreOutlinedIcon
            fontSize="small"
            sx={{ color: 'text.primary' }}
          />
          <Typography
            variant="body1"
            ml={1}
            color={'text.primary'}
            fontWeight={600}
          >
            Browse
          </Typography>
        </Button>
      </Link> */}

      <Link to={'/movies'} style={{ textDecoration: 'none', color: 'inherit' }}>
        <Button
          aria-label="Show Movie"
          sx={{
            border: '2px solid',
            borderColor: 'secondary.dark',
            borderRadius: 50,
            px: 2,
            py: 0,
            transition: 'all ease-out 200ms',
            '&:hover': {
              transform: 'scale(1.10)',
            },
          }}
        >
          <LocalMoviesRoundedIcon
            sx={{ color: 'text.primary' }}
            fontSize="small"
          />
          <Typography
            variant="body1"
            ml={1}
            color={'text.primary'}
            fontWeight={600}
          >
            Movie
          </Typography>
        </Button>
      </Link>

      <Link to={'/tv-shows'}>
        <Button
          aria-label="show Tv Shows"
          sx={{
            border: '2px solid',
            borderColor: 'secondary.dark',
            borderRadius: 50,
            px: 2,
            py: 0,
            transition: 'all ease-out 200ms',
            '&:hover': {
              transform: 'scale(1.10)',
            },
          }}
        >
          <MovieFilterRoundedIcon
            fontSize="small"
            sx={{ color: 'text.primary' }}
          />
          <Typography
            variant="body1"
            ml={1}
            color={'text.primary'}
            fontWeight={600}
          >
            TvShows
          </Typography>
        </Button>
      </Link>

      {/* <Link to={'/popular'}>
        <Button
          aria-label="Show Popular and News Movies"
          sx={{
            border: '2px solid',
            borderColor: 'secondary.dark',
            borderRadius: 50,
            px: 1.5,
            py: 0,
            transition: 'all ease-out 200ms',
            '&:hover': {
              transform: 'scale(1.10)',
            },
          }}
        >
          <TrendingUpRoundedIcon
            fontSize="small"
            sx={{ color: 'text.primary' }}
          />
          <Typography
            variant="body1"
            ml={1}
            color={'text.primary'}
            fontWeight={600}
          >
            News & Popular
          </Typography>
        </Button>
      </Link> */}
    </Stack>
  );
};
export default Header;
