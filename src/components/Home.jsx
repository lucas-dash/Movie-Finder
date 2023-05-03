import { Stack, Box, Button, Typography, Container } from '@mui/material';

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
          <Typography variant="h6" color={'text.primary'} fontWeight={600}>
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
          <Typography variant="h6" color={'text.primary'} fontWeight={600}>
            Tv Shows
          </Typography>
        </Button>
      </Stack>

      <Container maxWidth="lg">
        <Box></Box>

        <Typography variant="h1">Hello World</Typography>
      </Container>
    </>
  );
};
export default Home;
