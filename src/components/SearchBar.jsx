import { InputBase, Box, IconButton } from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { useState } from 'react';

const SearchBar = () => {
  const [searchItem, setSearchItem] = useState('');

  return (
    <Box
      display={'flex'}
      borderRadius={'10px'}
      width={300}
      sx={{
        backgroundColor: 'primary.light',
        boxShadow: '0px 2px 10px #000',
      }}
    >
      <InputBase
        sx={{
          flex: 1,
          ml: 2,
        }}
        placeholder="search any movies..."
        value={searchItem}
        onChange={({ target }) => setSearchItem(target.value)}
      />
      <IconButton aria-label="search movies" type="button" sx={{ p: 1 }}>
        <SearchRoundedIcon />
      </IconButton>
    </Box>
  );
};
export default SearchBar;
