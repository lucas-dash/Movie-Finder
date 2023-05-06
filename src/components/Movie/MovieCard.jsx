import { Card, Box, Typography, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

const MovieCard = ({ title, img, movieId }) => {
  return (
    <Link
      to={`/movies/${movieId}`}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <Box
        sx={{
          '&:hover': {
            transform: 'scale(1.20)',
          },
          transition: 'all ease 150ms',
        }}
      >
        <Card variant="elevation" elevation={6}>
          <CardMedia
            component={'img'}
            image={`https://image.tmdb.org/t/p/w500${img}`}
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
export default MovieCard;
