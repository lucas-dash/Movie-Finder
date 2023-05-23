// MUI
import {
  Alert,
  Box,
  Button,
  Container,
  IconButton,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
// react
import { useEffect, useState } from 'react';
// rrd
import { Link } from 'react-router-dom';
// firebase
import { db, auth } from '../services/firebase';
import { doc, getDoc, updateDoc, onSnapshot } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

const Watchlist = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const isAuth = JSON.parse(localStorage.getItem('isAuth'));

  const deleteFromWatchlist = async (itemId) => {
    let result;

    const userId = auth?.currentUser?.uid;

    const userDoc = doc(db, 'users', userId);

    try {
      const list = (await getDoc(userDoc)).data();
      result = list.watchlist.filter((movie) => movie.id !== itemId);
    } catch (error) {
      console.log(error.message);
    }

    try {
      await updateDoc(userDoc, {
        watchlist: result,
      });
    } catch (err) {
      setError('Error in reading data!');
      console.log(err.message);
    }
  };

  useEffect(() => {
    let unsubscribe;
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const user = auth?.currentUser?.uid;
        const userData = doc(db, 'users', user);

        unsubscribe = onSnapshot(
          userData,
          (snapshot) => {
            if (snapshot.exists()) {
              const documentData = snapshot.data();
              if (documentData.watchlist.length) {
                setError(false);
                setLoading(true);
                setList(documentData);
              } else {
                setList([]);
                setError('No movies or tw shows have been added yet!');
              }
            } else {
              setError('No movies or tw shows have been added yet!');
            }
            setLoading(false);
          },
          (err) => {
            console.log(err.message);
            setError('Something goes wrong!');
          }
        );
      } else {
        setList([]);
        return;
      }
    });

    return () => unsubscribe();
  }, []);

  if (!isAuth)
    return (
      <div style={{ textAlign: 'center' }}>
        <Button variant="outlined" color={'secondary'}>
          <Link
            to={'/login'}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            Sign In to use the watchlist!
          </Link>
        </Button>
      </div>
    );

  return (
    <Container maxWidth={'lg'}>
      <Typography variant="h4" mb={3}>
        Watchlist:
      </Typography>
      {error && <Alert severity="info">{error}</Alert>}
      <Stack direction={'column'} gap={2}>
        {loading ? (
          <Box display={'flex'} alignItems={'center'} gap={3}>
            <Skeleton variant="rounded" width={150} height={80} />
            <Skeleton variant="text" width={300} height={40} />
          </Box>
        ) : (
          list?.watchlist?.map((movie) => {
            return (
              <Box
                key={movie.id}
                sx={{
                  borderBottom: '2px solid',
                }}
                pb={1}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'space-between'}
              >
                <Link
                  to={`/${movie.type}/${movie.id}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <Box
                    display={'flex'}
                    alignItems={'center'}
                    sx={{
                      '&:hover': {
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.imgPath}`}
                      style={{
                        objectFit: 'cover',
                        maxHeight: 80,
                        maxWidth: 150,
                        borderRadius: 5,
                      }}
                      alt={`image of ${movie.title}`}
                    />
                    <Typography variant="h5" ml={3}>
                      {movie.title}
                    </Typography>
                  </Box>
                </Link>
                <IconButton
                  aria-label="Delete from watchlist."
                  onClick={() => deleteFromWatchlist(movie.id)}
                >
                  <DeleteForeverRoundedIcon />
                </IconButton>
              </Box>
            );
          })
        )}
      </Stack>
    </Container>
  );
};
export default Watchlist;
