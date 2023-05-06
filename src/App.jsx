// rrd
import { Routes, Route } from 'react-router-dom';
// layout
import Layout from './layout/Layout';
// MUI
import { CssBaseline, ThemeProvider } from '@mui/material';
// rtk
import { useSelector } from 'react-redux';
// react
import { useMemo } from 'react';
// features
import { selectTheme, useTheme } from './features/theme';
//components
import Home from './components/Home';
import MovieList from './components/Movie/MovieList';
import MovieDetails from './components/Movie/MovieDetails';

const App = () => {
  const colorMode = useSelector(selectTheme);
  // const theme = useTheme(colorMode);
  const theme = useMemo(() => {
    return useTheme(colorMode);
  }, [colorMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          {/* <Route path="watchlist">
          <Route index element={<WatchList />} />
        </Route> */}

          <Route path="movies">
            <Route index element={<MovieList />} />
            <Route path=":movieId" element={<MovieDetails />} />
          </Route>

          {/* <Route path="tv-shows">
          <Route index element={<TvShowList />} />
          <Route path=":tvshowId" element={<TvShowDetails />} />
          </Route>
          
          <Route path="latest">
          <Route index element={<Popular />} />
          </Route>
          
          <Route path="genres">
          <Route path=":genresId" element={<GenresList />} />
          </Route>
          
          <Route path="user">
          <Route index element={<User />} />
        </Route> */}
          {/* 
        <Route path='*'>
          <Route index element={<Error />} />
        </Route> */}
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
export default App;
