// rrd
import { Routes, Route } from 'react-router-dom';
// layout
import Layout from './layout/Layout';
//components
import Home from './components/Home';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useSelector } from 'react-redux';
// features
import { selectTheme, useTheme } from './features/theme';

const App = () => {
  const colorMode = useSelector(selectTheme);
  const theme = useTheme(colorMode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          {/* <Route path="watchlist">
          <Route index element={<WatchList />} />
        </Route> */}

          {/* <Route path="movie">
          <Route index element={<MovieList />} />
          <Route path=":movieId" element={<MovieDetails />} />
        </Route> */}

          {/* <Route path="tv-show">
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
