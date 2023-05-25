import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.userName = action.payload;
      localStorage.setItem('isAuth', true);
    },
    setUserLogOutState: (state) => {
      state.userName = null;
      localStorage.setItem('isAuth', false);
    },
  },
});

export const { setActiveUser, setUserLogOutState } = userSlice.actions;

export const selectUserName = (state) => state.user.userName;

export default userSlice.reducer;
