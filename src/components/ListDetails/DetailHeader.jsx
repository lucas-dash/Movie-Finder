// MUI
import { Stack, Box, Typography, IconButton, Tooltip } from '@mui/material';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
// react
import { useEffect, useState } from 'react';
// firebase
import { auth, db } from '../../services/firebase';
import { arrayUnion, doc, setDoc, onSnapshot } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

const DetailHeader = ({ title, id, imgPath, type }) => {
  const [inWatchlist, setInWatchlist] = useState(null);

  const addToWatchlist = async (movieId, movieTitle, img) => {
    if (!auth?.currentUser) {
      alert('You must be sign In!');
      return;
    }

    try {
      const user = auth?.currentUser?.uid;

      await setDoc(
        doc(db, 'users', user),
        {
          watchlist: arrayUnion({
            id: movieId,
            title: movieTitle,
            imgPath: img,
            type: type,
          }),
        },
        { merge: true }
      );
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    let unsubscribe;

    onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          const userData = doc(db, 'users', auth?.currentUser?.uid);
          unsubscribe = onSnapshot(
            userData,
            (snapshot) => {
              if (snapshot.exists()) {
                const userList = snapshot.data();
                setInWatchlist(
                  userList.watchlist.some((item) => item.id === id)
                );
              } else {
                console.log('Empty watchlist');
              }
            },
            (err) => console.log(err)
          );
        }
      },
      (err) => console.log(err)
    );

    return () => unsubscribe();
  }, []);

  return (
    <Stack
      direction={'row'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={'100%'}
      component={'header'}
    >
      <Typography variant="h2" ml={3} my={2} fontWeight={500}>
        {title}
      </Typography>
      <Box sx={{ mr: 2 }}>
        <Tooltip title="Watchlist">
          <IconButton
            aria-label="add to watchlist"
            onClick={() => addToWatchlist(id, title, imgPath)}
            disabled={inWatchlist}
            aria-disabled={inWatchlist}
            sx={{
              border: '2px solid',
              borderColor: 'secondary.main',
              borderRadius: 5,
              p: 0.5,
            }}
          >
            {!inWatchlist ? <BookmarkBorderRoundedIcon /> : <DoneRoundedIcon />}
          </IconButton>
        </Tooltip>
      </Box>
    </Stack>
  );
};
export default DetailHeader;
