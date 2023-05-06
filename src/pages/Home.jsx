import {
  Stack,
  Box,
  Button,
  Typography,
  Container,
  Paper,
} from '@mui/material';

const Home = () => {
  return (
    <>
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
