// MUI
import { Box, Container, Chip } from '@mui/material';
// Components
import Register from '../features/account/Register';
import SignIn from '../features/account/SignIn';
// Redux
import { useDispatch } from 'react-redux';
import { setActiveUser } from '../features/account/userSlice';
// react
import { useState } from 'react';
// firebase
import { auth, db, googleProvider } from '../services/firebase';
import { doc, setDoc } from 'firebase/firestore';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
// rrd
import { useNavigate, Navigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = JSON.parse(localStorage.getItem('isAuth'));

  const [switchForm, setSwitchForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSignUp = (email, password, name) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        const user = cred.user.uid;
        setDoc(doc(db, 'users', user), { username: name });
      })
      .then(() => {
        dispatch(setActiveUser(name));
      })
      .then(() => {
        navigate('/');
        setLoading(false);
        setError('');
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
        setError('Weak password or invalid email!');
      });
  };

  const handleSignIn = (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((cred) => console.log(cred.user.email))
      .then(() => dispatch(setActiveUser()))
      .then(() => {
        navigate('/');
        setError('');
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
        setError('Wrong password or invalid email!');
      });
  };

  const handleSignInWithGoogle = () => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((cred) => {
        console.log(cred);
        const user = cred?.user?.uid;
        setDoc(doc(db, 'users', user), { username: cred.user.displayName });
        dispatch(setActiveUser(cred?.user?.displayName));
      })
      .then(() => {
        navigate('/');
        setLoading(false);
        setError('');
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError('Something goes wrong with google auth.');
      });
  };

  if (isAuth) return <Navigate to={'/account'} />;

  return (
    <Box component={'section'}>
      <Container maxWidth="sm">
        <Box my={2} textAlign={'center'}>
          <Chip
            label="Sign Up"
            color="secondary"
            variant={switchForm ? 'filled' : 'outlined'}
            sx={{ mr: 2, fontSize: 14 }}
            onClick={() => setSwitchForm(true)}
          />
          <Chip
            label="Log In"
            color="secondary"
            variant={!switchForm ? 'filled' : 'outlined'}
            sx={{ fontSize: 14 }}
            onClick={() => setSwitchForm(false)}
          />
        </Box>

        {switchForm ? (
          <Register
            signUp={handleSignUp}
            signUpGoogle={handleSignInWithGoogle}
            error={error}
            loading={loading}
          />
        ) : (
          <SignIn
            signIn={handleSignIn}
            signInGoogle={handleSignInWithGoogle}
            error={error}
            loading={loading}
          />
        )}
      </Container>
    </Box>
  );
};
export default Login;
