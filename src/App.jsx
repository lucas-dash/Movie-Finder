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
import Home from './pages/Home';
import MovieList from './pages/MovieList';
import TvShowList from './pages/TvShowList';
import ListDetails from './components/ListDetails/ListDetails';
import NotFound from './pages/NotFound';
import Popular from './components/Popular';
import GenresList from './components/GenresList';

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

          {/* <Route path="user">
          <Route index element={<User />} />
        </Route>  */}

          <Route path="movies">
            <Route index element={<MovieList />} />
            <Route path=":movieId" element={<ListDetails />} />
          </Route>

          <Route path="tv-shows">
            <Route index element={<TvShowList />} />
            <Route path=":tvshowId" element={<ListDetails />} />
          </Route>

          <Route path="popular">
            <Route index element={<Popular />} />
          </Route>

          <Route path="genres">
            <Route path=":genreId" element={<GenresList />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
export default App;
