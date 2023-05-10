// rrd
import { Link, NavLink } from 'react-router-dom';
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
      component={'section'}
    >
      <NavLink
        to={'/movies'}
        style={{ textDecoration: 'none', color: 'inherit' }}
        className={({ isActive }) => (isActive ? 'activeLink' : '')}
      >
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
              transform: 'scale(1.05)',
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
      </NavLink>

      <NavLink
        to={'/tv-shows'}
        className={({ isActive }) => (isActive ? 'activeLink' : '')}
      >
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
              transform: 'scale(1.05)',
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
      </NavLink>

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
