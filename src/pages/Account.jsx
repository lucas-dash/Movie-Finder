// rrd
import { Navigate } from 'react-router-dom';
// Redux
import { useSelector } from 'react-redux';
import { selectUserEmail } from '../features/account/userSlice';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../services/firebase';

const Account = () => {
  const userEmail = useSelector(selectUserEmail);
  const isAuth = JSON.parse(localStorage.getItem('isAuth'));
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const getUsername = async () => {
      try {
        const user = auth?.currentUser?.uid;
        const data = doc(db, 'usersWatchlist', user);
        const documentSnapshot = await getDoc(data);
        if (documentSnapshot.exists()) {
          const userName = documentSnapshot.data().username;
          setUserName(userName);
        } else {
          console.log('document does not exist!');
        }
      } catch (err) {
        console.log(err.message);
      }
    };
    getUsername();
  }, []);

  // if no user show signIn form or log in
  if (!isAuth) return <Navigate to={'/login'} />;

  // if user login show account info
  return (
    <div>
      <h2>User: {userEmail}</h2>
      <h2>Username: {userName}</h2>
    </div>
  );
};
export default Account;
