import { createSlice } from '@reduxjs/toolkit';
const initialData = {
  isShowing: false,
  message: {
    data: '',
    type: 'SUCCESS',
  },
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState: initialData,
  reducers: {
    updateNotification: (state, action) => {
      return { message: action.payload, isShowing: true };
    },
    clearNotification: (state, action) => {
      return { ...state, isShowing: false };
    },
  },
});

export const newNotification = (message, type) => {
  return (dispatch) => {
    dispatch(
      updateNotification({
        data: message,
        type: type,
      })
    );
  };
};

export const { updateNotification, clearNotification } =
  notificationSlice.actions;

export default notificationSlice.reducer;
