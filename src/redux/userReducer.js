import { createSlice } from '@reduxjs/toolkit';
import userServices from '../services/userServices';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: null,
    isFetching: true,
  },
  reducers: {
    updateUser: (state, action) => {
      return { ...state, ...action.payload };
    },

    clearUser: (state, action) => {
      return {
        data: null,
        isFetching: false,
      };
    },
  },
});

export const initializeUser = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('access-token');
      if (token) {
        const userData = await userServices.authenticateUser(token);
        dispatch(updateUser({ data: userData, isFetching: false }));
      } else {
        localStorage.removeItem('access-token');
        dispatch(updateUser({ data: null, isFetching: false }));
      }
    } catch (err) {
      dispatch(updateUser({ data: null, isFetching: false }));
    }
  };
};

export const { updateUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
