import { useEffect, useState } from 'react';
import { db, auth } from '../services/firebase';
import { doc, getDoc } from 'firebase/firestore';

const Watchlist = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log(list.movies);

  useEffect(() => {
    const getUserWatchlist = async () => {
      if (!auth?.currentUser) {
        console.log(auth?.currentUser?.email);
        setList([]);
        return;
      }

      try {
        setLoading(true);
        const user = auth?.currentUser?.uid;
        const documentRef = doc(db, 'usersWatchlist', user);
        const documentSnapshot = await getDoc(documentRef);

        if (documentSnapshot.exists()) {
          const documentData = documentSnapshot.data();
          setList(documentData);
        } else {
          alert('Document does not exist.');
        }
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    getUserWatchlist();
  }, []);

  if (!auth?.currentUser) return <p>Sign In for use watchlist!</p>;

  return (
    <div>
      {loading ? (
        <p>Loading..</p>
      ) : (
        list?.movies?.map((movie) => {
          return <p key={movie.id}>{movie.title}</p>;
        })
      )}
    </div>
  );
};
export default Watchlist;
