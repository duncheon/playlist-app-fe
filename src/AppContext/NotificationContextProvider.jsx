import { useReducer } from 'react';
import NotificationContext from './NotificationContext';
import NotificationReducer from '../Reducer/NotificationReducer';

const initialState = {
  data: '',
  type: 'EMPTY',
  isShowing: false,
};

const NotificationContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(NotificationReducer, initialState);

  const value = {
    message: state,
    newNotification: (message) => dispatch({ type: 'NEW', payload: message }),
    clearNotification: () => dispatch({ type: 'CLEAR' }),
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContextProvider;
