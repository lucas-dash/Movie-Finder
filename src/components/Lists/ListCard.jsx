// rrd
import { Link } from 'react-router-dom';
// MUI
import { Card, Box, Typography, CardMedia } from '@mui/material';

const ListCard = ({ title, img, movieId }) => {
  return (
    <Link
      to={`/movies/${movieId}`}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <Box
        sx={{
          '&:hover': {
            transform: 'scale(1.10)',
          },
          transition: 'all ease 150ms',
        }}
      >
        <Card variant="elevation" elevation={6} sx={{ maxWidth: 350 }}>
          <CardMedia
            component={'img'}
            image={`https://image.tmdb.org/t/p/w400${img}`}
            alt={title}
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
