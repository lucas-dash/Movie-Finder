// rrd
import { useNavigate } from 'react-router-dom';
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
} from '@mui/material';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
// RKT query
import { useGetMoviesGenresQuery, useGetTvGenresQuery } from '../api/movieApi';
import { useState } from 'react';

const SideBar = ({ open, close }) => {
  const navigate = useNavigate();
  const [selectedGenre, setSelectedGenre] = useState('movie');

  const { data: movieGenres, isLoading: movieGenreLoad } =
    useGetMoviesGenresQuery();
  const { data: tvGenres, isLoading: tvshowGenreLoad } = useGetTvGenresQuery();

  const changeGenreToMovie = () => {
    setSelectedGenre('movie');
  };
  const changeGenreToTv = () => {
    setSelectedGenre('tvshow');
  };

  return (
    <Drawer open={open} variant="persistent">
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
          <IconButton aria-label="Close Sidebar" onClick={close}>
            <ChevronLeftRoundedIcon />
          </IconButton>
        </Stack>
        <Divider />
        <List>
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
      </Box>
    </Drawer>
  );
};
export default SideBar;
