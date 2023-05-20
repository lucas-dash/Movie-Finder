// MUI
import { Stack, Box, Typography, IconButton, Tooltip } from '@mui/material';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
// firebase
import { auth, db } from '../../services/firebase';
import { arrayUnion, doc, setDoc } from 'firebase/firestore';

const DetailHeader = ({ title, id }) => {
  const addToWatchlist = async (movieId, movieTitle) => {
    if (!auth?.currentUser) {
      alert('You must be sign In!');
      return;
    }

    try {
      const user = auth?.currentUser?.uid;
      console.log(user);

      await setDoc(
        doc(db, 'usersWatchlist', user),
        {
          movies: arrayUnion({
            id: movieId,
            title: movieTitle,
          }),
        },
        { merge: true }
      );
    } catch (err) {
      console.log(err.message);
    }
  };

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
            onClick={() => addToWatchlist(id, title)}
            sx={{
              border: '2px solid',
              borderColor: 'secondary.main',
              borderRadius: 5,
              p: 0.5,
            }}
          >
            <BookmarkBorderRoundedIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Stack>
  );
};
export default DetailHeader;
