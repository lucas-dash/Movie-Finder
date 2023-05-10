// rrd
import { Link, useLocation } from 'react-router-dom';
// MUI
import { Card, Box, Typography, CardMedia } from '@mui/material';

const ListCard = ({ title, img, movieId }) => {
  const location = useLocation();

  let path;

  if (location.pathname.includes('/tv-show-genres')) {
    path = `/tv-shows/${movieId}`;
  } else if (location.pathname.includes('tv-shows')) {
    path = `/tv-shows/${movieId}`;
  } else if (location.pathname.includes('/movie')) {
    path = `/movies/${movieId}`;
  }

  return (
    <Link
      to={path}
      style={{ textDecoration: 'none', color: 'inherit' }}
      aria-label={`Link to ${title}`}
    >
      <Box
        sx={{
          '&:hover': {
            transform: 'scale(1.10)',
          },
          transition: 'all ease 150ms',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Card
          variant="elevation"
          elevation={6}
          sx={{ maxWidth: 350, borderRadius: 2 }}
        >
          <CardMedia
            component={'img'}
            image={`https://image.tmdb.org/t/p/w400${img}`}
            alt={title}
            loading="lazy"
            sx={{
              objectFit: 'cover',
              height: '100%',
              width: '100%',
            }}
          />
        </Card>
        <Box
          sx={{
            textAlign: 'center',
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            {title}
          </Typography>
        </Box>
      </Box>
    </Link>
  );
};
export default ListCard;
