// MUI
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
// react
import { useState } from 'react';

const Register = ({ signUp, error, loading }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && email && password) {
      signUp(email, password, name);
      setName('');
      setEmail('');
      setPassword('');
    } else {
      alert('email or password missing!');
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
        <Typography variant="h5">Create new account</Typography>

        <TextField
          variant="outlined"
          color="secondary"
          label="Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

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
              Sign Up with Google!
            </Typography>
          </Button>
        </Box>

        <Button
          variant="contained"
          color="secondary"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          {loading ? <CircularProgress /> : 'Sign Up'}
        </Button>
      </Box>
    </Box>
  );
};
export default Register;
