// rrd
import { Link } from 'react-router-dom';
// MUI
import { Stack, Box, Skeleton, Typography } from '@mui/material';
import MovieRoundedIcon from '@mui/icons-material/MovieRounded';

const SearchItem = ({ loading, searchList, handleClick }) => {
  if (loading) return <Skeleton variant="rounded" width={'90%'} height={50} />;

  return (
    <Stack direction={'column'} gap={1} p={1}>
      {searchList?.map((item) => {
        return (
          <Link
            to={`/movies/${item.id}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
            key={item.id}
            aria-label={`Link to ${item.title ? item.title : item.name}`}
            onClick={handleClick}
          >
            <Box
              display={'flex'}
              alignItems={'center'}
              gap={4}
              p={1}
              borderRadius={1}
              sx={{
                '&:hover': {
                  backgroundColor: 'secondary.light',
                },
                transition: 'all ease-out 100ms',
              }}
            >
              {!item.backdrop_path ? (
                <DefaultImg />
              ) : (
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                  alt={item.title}
                  style={{ height: '50px', width: '100px' }}
                />
              )}

              <Typography variant="h5" color="initial">
                {item.title ? item.title : item.name}
              </Typography>
            </Box>
          </Link>
        );
      })}
    </Stack>
  );
};
export default SearchItem;

const DefaultImg = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'accentDark.dark',
        width: '100px',
        height: '50px',
        border: '1px solid',
        borderColor: 'darkAccent.main',
      }}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <MovieRoundedIcon />
    </Box>
  );
};
