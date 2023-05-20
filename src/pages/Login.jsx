// MUI
import { Box, Container, Chip } from '@mui/material';
// Components
import Register from '../features/account/Register';
import SignIn from '../features/account/SignIn';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { setActiveUser, selectUserEmail } from '../features/account/userSlice';
// react
import { useEffect, useState } from 'react';
// firebase
import { auth, db } from '../services/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
// rrd
import { useNavigate, Navigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUserEmail);
  const isAuth = JSON.parse(localStorage.getItem('isAuth'));

  const [switchForm, setSwitchForm] = useState(false);

  const handleSignUp = (email, password, name) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        const user = cred.user.uid;
        setDoc(doc(db, 'usersWatchlist', user), { username: name });
      })
      .then(() => {
        dispatch(setActiveUser(email));
      })
      .then(() => navigate('/'))
      .catch((err) => console.log(err.message));
  };

  const handleSignIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((cred) => console.log(cred.user.uid))
      .then(() => dispatch(setActiveUser(email)))
      .then(() => navigate('/'))
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    console.log(auth?.currentUser?.email);
    console.log(user);
  }, []);

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
            label="Sign In"
            color="secondary"
            variant={!switchForm ? 'filled' : 'outlined'}
            sx={{ fontSize: 14 }}
            onClick={() => setSwitchForm(false)}
          />
        </Box>

        {switchForm ? (
          <Register signUp={handleSignUp} />
        ) : (
          <SignIn signIn={handleSignIn} />
        )}
      </Container>
    </Box>
  );
};
export default Login;
