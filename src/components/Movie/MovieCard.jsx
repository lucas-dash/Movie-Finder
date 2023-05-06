import { Card, Box, Typography, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

const MovieCard = ({ title, img, movieId, index }) => {
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
        <Card
          variant="elevation"
          elevation={6}
          sx={{
            transition: 'all ease-in 150ms',
            width: 225,
            height: 120,
            mr: '5px',
            overflow: 'hidden',
          }}
        >
          <CardMedia
            component={'img'}
            image={`https://image.tmdb.org/t/p/w500${img}`}
            alt={title}
            sx={{ objectFit: 'cover' }}
          />
        </Card>
        <Box sx={{ width: 225, textAlign: 'center' }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            {title}
          </Typography>
        </Box>
      </Box>
    </Link>
  );
};
export default MovieCard;
