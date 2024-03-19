import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearNotification } from '../redux/notificationReducer';

const NotificationContent = ({ message }) => {
  if (message.type === 'SUCCESS')
    return (
      <div
        className={`relative w-[200px] h-[40%] top-0 rounded border-2 border-solid border-success bg-success
      } text-white left-[50%] translate-x-[-50%]  text-center flex items-center justify-center`}
      >
        <p className="text-bold text-2xl">{message.data}</p>
      </div>
    );
  else {
    return (
      <div
        className={`relative w-[200px] h-[40%] top-0 rounded border-2 border-solid border-danger bg-danger
      } text-white left-[50%] translate-x-[-50%]  text-center flex items-center justify-center`}
      >
        <p className="text-bold text-2xl">{message.data}</p>
      </div>
    );
  }
};

const Notification = () => {
  const notification = useSelector((state) => {
    return state.notification;
  });

  console.log(notification);
  const dispatch = useDispatch();
  useEffect(() => {
    if (notification.isShowing) {
      const clearNoti = setTimeout(() => {
        dispatch(clearNotification());
      }, 1000);

      return () => clearTimeout(clearNoti);
    }
  }, [notification.isShowing]);

  return (
    <div
      className={`absolute z-10 top-[10px] left-[50%] translate-x-[-50%] h-[140px] translate-y-[${
        !notification.isShowing ? '-50%' : '0%'
      }] transition-top ease-in-out duration-500`}
    >
      <NotificationContent message={notification.message}></NotificationContent>
    </div>
  );
};

export default Notification;
