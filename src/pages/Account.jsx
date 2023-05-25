// rrd
import { Navigate, useNavigate } from 'react-router-dom';
// react
import { useEffect } from 'react';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import {
  selectUserName,
  setActiveUser,
  setUserLogOutState,
} from '../features/account/userSlice';
// firebase
import { doc, onSnapshot } from 'firebase/firestore';
import { auth, db } from '../services/firebase';
import { deleteUser, onAuthStateChanged } from 'firebase/auth';
import { signOut } from 'firebase/auth';
// components
import User from '../features/account/User';

const Account = () => {
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuth = JSON.parse(localStorage.getItem('isAuth'));

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(setUserLogOutState());
      })
      .then(() => navigate('/'))
      .catch((err) => alert('Error:' + err.message));
  };

  const deleteAccount = () => {
    deleteUser(auth?.currentUser?.uid)
      .then(() => dispatch(setUserLogOutState()))
      .then(() => navigate('/'))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userData = doc(db, 'users', user.uid);

        onSnapshot(
          userData,
          (snapshot) => {
            if (snapshot.exists()) {
              const userCollection = snapshot.data();
              dispatch(setActiveUser(userCollection?.username));
              // dispatch(setActiveUser(snapshot.))
            }
          },
          (err) => console.log(err.message)
        );
      } else {
        return;
      }
    });
  }, []);

  // if no user show signIn form or log in
  if (!isAuth) return <Navigate to={'/login'} />;

  // if user login show account info
  return (
    <div>
      <User username={userName} logout={handleLogOut} delUser={deleteAccount} />
    </div>
  );
};
export default Account;
