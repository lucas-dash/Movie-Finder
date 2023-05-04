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
} from '@mui/material';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';

const SideBar = ({ open, close }) => {
  const navigate = useNavigate();

  return (
    <Drawer open={open} variant="persistent">
      <Box sx={{ width: '240px' }} color={'secondary.main'}>
        <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={'end'}
          p={1}
        >
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

          <ListItemButton
            onClick={() => {
              navigate('/movies/1');
            }}
          >
            <ListItemText
              primary={
                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                  Actions
                </Typography>
              }
            />
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              navigate('/movies/1');
            }}
          >
            <ListItemText
              primary={
                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                  Comedy
                </Typography>
              }
            />
          </ListItemButton>
        </List>
      </Box>
    </Drawer>
  );
};
export default SideBar;
