// MUI
import { Box, Button, Typography } from '@mui/material';
// rrd
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Box className="notFound">
      <Box
        height={'100%'}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h1"
          fontWeight={700}
          fontSize={'64px'}
          className="textGradient"
        >
          404
        </Typography>
        <Typography variant="h2" fontWeight={700}>
          Page Not Found!
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          sx={{ my: 3, fontWeight: 600 }}
          onClick={() => navigate('/')}
        >
          Go to Homepage
        </Button>
      </Box>
    </Box>
  );
};
export default NotFound;
