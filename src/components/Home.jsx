import {
  Stack,
  Box,
  Button,
  Typography,
  Container,
  Card,
  Paper,
} from '@mui/material';

const Home = () => {
  return (
    <>
      <Stack direction={'row'} spacing={1.5} my={2} mx={5}>
        {/* filter or link */}
        <Button
          // color="secondary"
          aria-label="Show Movie"
          sx={{
            border: '2px solid',
            borderColor: 'secondary.dark',
            borderRadius: 50,
            px: 2,
            py: 0,
          }}
        >
          <Typography variant="body1" color={'text.primary'} fontWeight={600}>
            Movie
          </Typography>
        </Button>
        <Button
          aria-label="show Tv Shows"
          sx={{
            border: '2px solid',
            borderColor: 'secondary.dark',
            borderRadius: 50,
            px: 2,
            py: 0,
          }}
        >
          <Typography variant="body1" color={'text.primary'} fontWeight={600}>
            Tv Shows
          </Typography>
        </Button>
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
