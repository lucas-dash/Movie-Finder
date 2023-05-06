import {
  Stack,
  Box,
  Button,
  Typography,
  Container,
  Paper,
} from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Stack direction={'row'} spacing={1.5} my={2} mx={5}>
        {/* filter or link */}
        <Link
          to={'/movies'}
          style={{ textDecoration: 'none', color: 'inherit' }}
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
                transform: 'scale(1.10)',
              },
            }}
          >
            <Typography variant="body1" color={'text.primary'} fontWeight={600}>
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
            <Typography variant="body1" color={'text.primary'} fontWeight={600}>
              Tv Shows
            </Typography>
          </Button>
        </Link>
      </Stack>

      <Container maxWidth="lg">
        <Box>
          <Paper elevation={2} sx={{ border: '1px solid #fff' }}>
            <Typography variant="h1">Hello World</Typography>
          </Paper>
        </Box>
      </Container>
    </>
  );
};
export default Home;
