import { createTheme } from '@mui/material';
import { createSlice } from '@reduxjs/toolkit';

export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === 'dark'
        ? {
            primary: {
              light: '#4c4d55',
              main: '#1F212A',
              dark: '#191a22',
            },
            secondary: {
              light: '#3eb7ed',
              main: '#0EA5E9',
              dark: '#0b84ba',
            },
            darkAccent: {
              light: '#707070',
              main: '#1E1E1E',
              dark: '#151515',
            },
            background: {
              default: '#1F212A',
            },
            text: {
              primary: '#F9F9F9',
            },
          }
        : {
            primary: {
              light: '#f9fef7',
              main: '#F8FEF5',
              dark: '#c6cbc4',
            },
            secondary: {
              light: '#5794c5',
              main: '#2D79B6',
              dark: '#246192',
            },
            darkAccent: {
              light: '#707070',
              main: '#1E1E1E',
              dark: '#151515',
            },
            background: {
              default: '#F8F8F8',
            },
            text: {
              primary: '#16181E',
            },
          }),
    },
    typography: {
      fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
      h1: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: '3rem',
      },
      h2: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: '2.25rem',
      },
      h3: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: '1.875rem',
      },
      h4: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: '1.5rem',
      },
      h5: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: '1.25rem',
      },
      h6: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: '1rem',
      },
    },
  };
};

export const useTheme = (mode) => {
  return createTheme(themeSettings(mode));
};

const getInitialTheme = () => {
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme === 'dark' || storedTheme === 'light') {
    return storedTheme;
  }
  return 'dark'; // default to dark theme if no theme is stored
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: getInitialTheme(),
  },
  reducers: {
    toggleTheme: (state) => {
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      state.theme = newTheme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const selectTheme = (state) => state.theme.theme;

export default themeSlice.reducer;
