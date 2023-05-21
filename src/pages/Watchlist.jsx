// MUI
import {
  Box,
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
import { doc, getDoc } from 'firebase/firestore';

const Watchlist = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const isAuth = JSON.parse(localStorage.getItem('isAuth'));

  const deleteFromWatchlist = () => {};

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
        const documentRef = doc(db, 'users', user);
        const documentSnapshot = await getDoc(documentRef);

        if (documentSnapshot.exists()) {
          const documentData = documentSnapshot.data();
          console.log(documentData);
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

  if (!isAuth) return <p>Sign In for use watchlist!</p>;

  return (
    <Container maxWidth={'lg'}>
      <Typography variant="h4" mb={3}>
        Watchlist:
      </Typography>
      <Stack direction={'column'} gap={2}>
        {loading ? (
          <Box display={'flex'} alignItems={'center'} gap={3}>
            <Skeleton variant="rounded" width={150} height={80} />
            <Skeleton variant="text" width={300} height={40} />
          </Box>
        ) : !list.watchlist ? (
          <Typography>No Movies have been added yet!</Typography>
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
                  <Box display={'flex'} alignItems={'center'}>
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
                    <Typography
                      variant="h5"
                      ml={3}
                      sx={{ '&:hover': { textDecoration: 'underline' } }}
                    >
                      {movie.title}
                    </Typography>
                  </Box>
                </Link>
                <IconButton
                  aria-label="Delete from watchlist."
                  onClick={() => {}}
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
