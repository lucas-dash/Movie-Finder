// rrd
import { useNavigate } from 'react-router-dom';
// Redux
import { useDispatch } from 'react-redux';
import { setUserLogOutState } from '../features/account/userSlice';
// react
import { useState } from 'react';
// MUI
import {
  Box,
  Divider,
  Drawer,
  Stack,
  Typography,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Button,
  Skeleton,
  ClickAwayListener,
  Alert,
} from '@mui/material';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
// RKT query
import { useGetMoviesGenresQuery, useGetTvGenresQuery } from '../api/movieApi';
// Firebase
import { signOut } from 'firebase/auth';
import { auth } from '../services/firebase';

const SideBar = ({ open, close }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedGenre, setSelectedGenre] = useState('movie');

  const activeUser = JSON.parse(localStorage.getItem('isAuth'));

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(setUserLogOutState());
      })
      .then(() => navigate('/'))
      .catch((err) => alert('Error:' + err.message));
  };

  const {
    data: movieGenres,
    isLoading: movieGenreLoad,
    error: movieErr,
  } = useGetMoviesGenresQuery();
  const {
    data: tvGenres,
    isLoading: tvshowGenreLoad,
    error: tvErr,
  } = useGetTvGenresQuery();

  const changeGenreToMovie = () => {
    setSelectedGenre('movie');
  };
  const changeGenreToTv = () => {
    setSelectedGenre('tvshow');
  };

  return (
    <Drawer open={open} variant="persistent" onClose={close(false)}>
      <Box sx={{ width: '240px' }} color={'secondary.main'} component={'nav'}>
        <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
          p={1}
        >
          <Typography variant="h4" color={'secondary'} fontWeight={600}>
            Movie Finder
          </Typography>
          <IconButton aria-label="Close Sidebar" onClick={close(false)}>
            <ChevronLeftRoundedIcon />
          </IconButton>
        </Stack>
        <Divider />
        <List onClick={close(false)}>
          <ListItemButton
            onClick={() => {
              navigate('/');
            }}
          >
            <ListItemIcon>
              <ExploreOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Browse" />
          </ListItemButton>

          <ListItemButton
            onClick={() => {
              navigate('/watchlist');
            }}
          >
            <ListItemIcon>
              <BookmarkBorderRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Watch List" />
          </ListItemButton>

          <ListItemButton
            onClick={() => {
              navigate('/popular');
            }}
          >
            <ListItemIcon>
              <TrendingUpRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Popular" />
          </ListItemButton>
        </List>
        <Divider />

        {/* genres */}
        <List sx={{ color: 'secondary.dark' }}>
          <Typography
            paragraph
            color={'darkAccent.light'}
            sx={{ fontWeight: 600, pl: 1, my: 1 }}
          >
            Categories
          </Typography>

          <Stack
            direction={'row'}
            justifyContent={'space-evenly'}
            gap={0}
            my={2}
          >
            <Button
              aria-label="show movie genre"
              onClick={changeGenreToMovie}
              variant="contained"
              sx={{
                borderRadius: 5,
                p: 0.5,
                border: '1px solid',
                borderColor: 'secondary.dark',
                backgroundColor:
                  selectedGenre === 'movie' ? 'secondary.light' : '',
                color:
                  selectedGenre === 'movie' ? 'darkAccent.main' : 'inherit',
                '&:hover': {
                  borderColor: 'secondary.light',
                  color: 'secondary.main',
                },
              }}
            >
              <Typography paragraph sx={{ fontWeight: 600, m: 0 }}>
                Movie
              </Typography>
            </Button>
            <Button
              aria-label="show tv show genre"
              onClick={changeGenreToTv}
              variant="contained"
              sx={{
                borderRadius: 5,
                p: 0.5,
                border: '1px solid',
                borderColor: 'secondary.light',
                backgroundColor:
                  selectedGenre === 'tvshow' ? 'secondary.main' : '',
                color:
                  selectedGenre === 'tvshow' ? 'darkAccent.main' : 'inherit',
                '&:hover': {
                  borderColor: 'secondary.light',
                  color: 'secondary.main',
                },
              }}
            >
              <Typography paragraph sx={{ fontWeight: 600, m: 0 }}>
                Tv Show
              </Typography>
            </Button>
          </Stack>

          {(movieErr || tvErr) && (
            <Alert variant="error">Failed to load categories!</Alert>
          )}

          {selectedGenre === 'movie' ? (
            movieGenreLoad ? (
              <>
                <Skeleton
                  variant="text"
                  height={50}
                  width={'90%'}
                  sx={{ mx: 'auto' }}
                />
                <Skeleton
                  variant="text"
                  height={50}
                  width={'90%'}
                  sx={{ mx: 'auto' }}
                />
                <Skeleton
                  variant="text"
                  height={50}
                  width={'90%'}
                  sx={{ mx: 'auto' }}
                />
                <Skeleton
                  variant="text"
                  height={50}
                  width={'90%'}
                  sx={{ mx: 'auto' }}
                />
              </>
            ) : (
              movieGenres.genres.map((genre) => {
                return (
                  <ListItemButton
                    onClick={() => {
                      navigate(`movie-genres/${genre.id}`);
                    }}
                    key={genre.id}
                  >
                    <ListItemText
                      onClick={close(false)}
                      primary={
                        <Typography
                          variant="h5"
                          sx={{ fontWeight: 600, color: 'secondary.main' }}
                        >
                          {genre.name}
                        </Typography>
                      }
                    />
                  </ListItemButton>
                );
              })
            )
          ) : tvshowGenreLoad ? (
            <>
              <Skeleton
                variant="text"
                height={50}
                width={'90%'}
                sx={{ mx: 'auto' }}
              />
              <Skeleton
                variant="text"
                height={50}
                width={'90%'}
                sx={{ mx: 'auto' }}
              />
              <Skeleton
                variant="text"
                height={50}
                width={'90%'}
                sx={{ mx: 'auto' }}
              />
              <Skeleton
                variant="text"
                height={50}
                width={'90%'}
                sx={{ mx: 'auto' }}
              />
            </>
          ) : (
            tvGenres.genres.map((genre) => {
              return (
                <ListItemButton
                  onClick={() => {
                    navigate(`tv-show-genres/${genre.id}`);
                  }}
                  key={genre.id}
                >
                  <ListItemText
                    onClick={close(false)}
                    primary={
                      <Typography
                        variant="h5"
                        sx={{ fontWeight: 600, color: 'secondary.main' }}
                      >
                        {genre.name}
                      </Typography>
                    }
                  />
                </ListItemButton>
              );
            })
          )}
        </List>
        <Box
          position={'fixed'}
          bottom={0}
          height={45}
          width={'240px'}
          sx={{ backgroundColor: 'rgba(40, 40, 40, 0.9)' }}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'start'}
          pl={1}
          onClick={close(false)}
        >
          {!activeUser ? (
            <Button
              variant="text"
              color="secondary"
              sx={{ borderRadius: 2 }}
              onClick={() => navigate('/login')}
            >
              <LogoutRoundedIcon />
              <Typography variant="h6" ml={1}>
                Sign In
              </Typography>
            </Button>
          ) : (
            <Button
              variant="text"
              color="error"
              sx={{ borderRadius: 2 }}
              onClick={() => handleLogOut()}
            >
              <LogoutRoundedIcon />
              <Typography variant="h6" ml={1}>
                Log Out
              </Typography>
            </Button>
          )}
        </Box>
      </Box>
    </Drawer>
  );
};
export default SideBar;
