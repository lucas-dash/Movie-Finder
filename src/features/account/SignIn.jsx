// MUI
import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Alert,
  Typography,
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
// react
import { useState } from 'react';

const SignIn = ({ signIn, error, loading }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signInSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      signIn(email, password);
      setEmail('');
      setPassword('');
    } else {
      alert('Fill in the text field!');
    }
  };

  return (
    <Box
      component={'article'}
      sx={{
        border: '2px solid',
        borderColor: 'secondary.light',
        p: 2,
        borderRadius: 2,
      }}
    >
      <Box
        component={'form'}
        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        <Typography variant="h5">Log In</Typography>
        <TextField
          variant="outlined"
          color="secondary"
          label="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <TextField
          variant="outlined"
          color="secondary"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error ? <Alert severity="error">{error}</Alert> : ''}

        <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
          <Button variant="outlined" color="secondary">
            <GoogleIcon />
            <Typography variant="h6" ml={1}>
              Log In with Google!
            </Typography>
          </Button>
        </Box>

        <Button
          variant="contained"
          color="secondary"
          type="submit"
          onClick={(e) => signInSubmit(e)}
        >
          {loading ? <CircularProgress /> : 'Sign In'}
        </Button>
      </Box>
    </Box>
  );
};
export default SignIn;
