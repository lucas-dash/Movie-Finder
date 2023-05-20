// MUI
import { Box, Button, TextField, Typography } from '@mui/material';
// react
import { useState } from 'react';

const SignIn = ({ signIn }) => {
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
        <Typography variant="h5">Sign In</Typography>
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

        <Button
          variant="contained"
          color="secondary"
          type="submit"
          onClick={(e) => signInSubmit(e)}
        >
          Sign In
        </Button>
      </Box>
    </Box>
  );
};
export default SignIn;
