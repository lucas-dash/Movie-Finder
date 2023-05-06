import { Stack, Box, Typography, IconButton } from '@mui/material';
import MovieCard from './MovieCard';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { useRef, useState } from 'react';

const ListItem = ({ loading, dataList, listName }) => {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);

  const listRef = useRef(null);

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === 'left' && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === 'right' && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  return (
    <Box sx={{ my: 2, overflow: 'hidden' }}>
      <Typography
        variant="h5"
        gutterBottom
        color={'secondary'}
        fontWeight={600}
        ml={1}
      >
        {listName}
      </Typography>
      {/* wrapper */}
      <Box sx={{ position: 'relative' }}>
        <IconButton
          onClick={() => handleClick('left')}
          sx={{
            display: !isMoved && 'none',
            width: '50px',
            height: '100%',
            borderRadius: 1,
            color: '#fff',
            position: 'absolute',
            top: 0,
            bottom: 0,
            m: 'auto',
            left: 0,
            zIndex: 99,
            backgroundColor: 'rgba(22,22,22,0.5)',
            '&:hover': { backgroundColor: 'rgba(19,19,19,0.7)' },
          }}
        >
          <ArrowBackIosNewRoundedIcon />
        </IconButton>
        <Stack
          direction={'row'}
          sx={{
            my: '50px',
            mt: 1,
            ml: '50px',
            width: 'max-content',
            transform: 'translateX(0px)',
            transition: 'all 400ms ease',
          }}
          ref={listRef}
        >
          {loading ? (
            <p>Loading...</p>
          ) : (
            dataList.slice(0, 10).map((movie, index) => {
              return (
                <MovieCard
                  key={movie.id}
                  index={index}
                  title={movie.title}
                  img={movie.backdrop_path}
                  movieId={movie.id}
                />
              );
            })
          )}
        </Stack>
        <IconButton
          onClick={() => handleClick('right')}
          sx={{
            width: '50px',
            height: '100%',
            borderRadius: 0,
            color: '#fff',
            position: 'absolute',
            top: 0,
            bottom: 0,
            m: 'auto',
            right: 0,
            zIndex: 99,
            backgroundColor: 'rgba(22,22,22,0.5)',
            '&:hover': { backgroundColor: 'rgba(19,19,19,0.7)' },
          }}
        >
          <ArrowForwardIosRoundedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
export default ListItem;
