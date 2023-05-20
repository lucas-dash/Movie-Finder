import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userEmail: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.userEmail = action.payload;
      localStorage.setItem('isAuth', true);
    },
    setUserLogOutState: (state) => {
      state.userName = null;
      state.userEmail = null;
      localStorage.setItem('isAuth', false);
    },
  },
});

export const { setActiveUser, setUserLogOutState } = userSlice.actions;

export const selectUserEmail = (state) => state.user.userEmail;

export default userSlice.reducer;
