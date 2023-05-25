import { Container, Grid, Typography, Button, Box } from '@mui/material';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

const User = ({ username, logout, delUser }) => {
  return (
    <Container maxWidth={'md'}>
      <Box
        sx={{
          border: '2px solid',
          borderColor: 'secondary.dark',
          borderRadius: 2,
        }}
        p={2}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'space-between'}
        minHeight={300}
      >
        <Grid container alignContent={'start'} direction={'column'} gap={3}>
          <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h4" fontWeight={600}>
              Sign in as:
            </Typography>
            <Typography variant="h5" pl={2}>
              {username}
            </Typography>
          </Grid>

          <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => logout()}
              aria-label="log out"
            >
              <Typography variant="h5" fontWeight={600} pr={1}>
                Log Out
              </Typography>
              <LogoutRoundedIcon />
            </Button>
          </Grid>
        </Grid>
        <Box
          width={'100%'}
          sx={{ borderTop: '2px solid', borderColor: 'secondary.main' }}
          py={2}
        >
          <Typography variant="h4" color={'error'} fontWeight={600}>
            Danger Zone
          </Typography>
          <Button
            variant="contained"
            color="error"
            sx={{ mt: 2 }}
            onClick={() => delUser()}
          >
            Delete Account
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
export default User;
