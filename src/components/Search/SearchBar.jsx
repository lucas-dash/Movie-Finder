// MUI
import {
  InputBase,
  Box,
  IconButton,
  ClickAwayListener,
  Alert,
} from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
// react
import { useEffect, useState } from 'react';
// RTK query
import { useLazyGetSearchQuery } from '../../api/movieApi';
// componentes
import SearchItem from './SearchItem';

const SearchBar = ({ matches }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [
    getSearch,
    { data: searchData, isLoading: searchingLoad, error: searchingErr },
  ] = useLazyGetSearchQuery();

  const handleTermChange = (e) => {
    setSearchTerm(e.target.value);
    setShowDropdown(true);
  };

  const handleClick = () => {
    setShowDropdown(false);
    setSearchTerm('');
  };

  useEffect(() => {
    getSearch(searchTerm);
  }, [searchTerm]);

  return (
    <>
      <Box
        display={'flex'}
        borderRadius={'10px'}
        position={'relative'}
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
          placeholder="search some movies..."
          value={searchTerm}
          onChange={handleTermChange}
        />
        <IconButton aria-label="search movies" role="img" sx={{ p: 1 }}>
          <SearchRoundedIcon />
        </IconButton>
      </Box>

      <ClickAwayListener onClickAway={() => setShowDropdown(false)}>
        <Box
          position={'absolute'}
          display={showDropdown ? 'block' : 'none'}
          sx={{
            backgroundColor: 'primary.light',
            border: '1px solid',
            borderColor: 'darkAccent.dark ',
            width: matches ? '100%' : '90%',
            maxHeight: 380,
            zIndex: 99,
            top: 65,
            left: matches ? 0 : 50,
            borderRadius: 2,
            overflowY: 'scroll',
            overflowX: 'hidden',
          }}
        >
          {searchingErr && (
            <Alert severity="error" sx={{ fontWeight: 600 }}>
              Failed to load search request!
            </Alert>
          )}
          <SearchItem
            loading={searchingLoad}
            searchList={searchData?.results}
            handleClick={handleClick}
          />
        </Box>
      </ClickAwayListener>
    </>
  );
};
export default SearchBar;
