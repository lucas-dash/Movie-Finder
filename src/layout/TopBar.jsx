// MUI
import { Box, IconButton, Stack, Tooltip, Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import useMediaQuery from '@mui/material/useMediaQuery';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme } from '../features/theme';
import { toggleTheme } from '../features/theme';
// rrd
import { Link, useNavigate } from 'react-router-dom';
// components
import SearchBar from '../components/Search/SearchBar';

const TopBar = ({ open }) => {
  const colorMode = useSelector(selectTheme);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeColorTheme = () => {
    dispatch(toggleTheme());
  };

  const matches = useMediaQuery('(max-width:632px)');

  return (
    <Box
      position="static"
      component={'header'}
      backgroundColor={colorMode === 'dark' ? 'primary.dark' : 'primary.main'}
      px={{ xs: 0.5, sm: 3 }}
      py={0.5}
    >
      <Stack
        direction={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
        gap={1}
      >
        <Box display={'flex'} alignItems={'center'} gap={1}>
          <Tooltip title="Menu">
            <IconButton
              aria-label="show menu"
              onClick={open(true)}
              sx={{ color: 'secondary.main' }}
            >
              <MenuRoundedIcon fontSize="large" />
            </IconButton>
          </Tooltip>
          {/* <Typography
            variant="h5"
            component={'h6'}
            sx={{ fontWeight: 600, mx: 2 }}
          >
            Movie Finder
          </Typography> */}
          <Box sx={{ display: { xs: matches ? 'none' : 'block' } }}>
            <Tooltip title="Go Back">
              <IconButton
                size="10"
                aria-label="Go back"
                onClick={() => {
                  navigate(-1);
                }}
                sx={{
                  '&:hover':
                    colorMode === 'dark'
                      ? { color: '#fff' }
                      : { color: '#000' },
                }}
              >
                <ArrowBackIosNewIcon fontSize="small" />
              </IconButton>
            </Tooltip>

            <Tooltip title="Go Forward">
              <IconButton
                aria-label="Go forward"
                onClick={() => {
                  navigate(1);
                }}
                sx={{
                  color: 'darkAccent.light',
                  '&:hover':
                    colorMode === 'dark'
                      ? { color: '#fff' }
                      : { color: '#000' },
                }}
              >
                <ArrowForwardIosIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>

        <SearchBar matches={matches} />

        <Stack direction={'row'} spacing={0.8} p={1}>
          <Link to="/watchlist">
            <Tooltip title="Watch List">
              <IconButton
                aria-label="Watch List"
                onClick={() => {}}
                sx={{
                  border: '2px solid',
                  borderColor: 'secondary.main',
                  borderRadius: 2,
                  p: 0.5,
                }}
              >
                <BookmarkBorderRoundedIcon />
              </IconButton>
            </Tooltip>
          </Link>

          <Tooltip title="Toggle color mode">
            <IconButton
              aria-label="switch color mode"
              onClick={changeColorTheme}
              sx={{
                border: '2px solid',
                borderColor: 'secondary.main',
                borderRadius: 2,
                p: 0.5,
              }}
            >
              {colorMode === 'dark' ? (
                <DarkModeRoundedIcon />
              ) : (
                <WbSunnyRoundedIcon />
              )}
            </IconButton>
          </Tooltip>

          <Link to={'/account'}>
            <Tooltip title="Account">
              <IconButton
                aria-label="Account"
                onClick={() => {}}
                sx={{
                  border: '2px solid',
                  borderColor: 'secondary.main',
                  borderRadius: 2,
                  p: 0.5,
                }}
              >
                <PersonRoundedIcon />
              </IconButton>
            </Tooltip>
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
};
export default TopBar;
