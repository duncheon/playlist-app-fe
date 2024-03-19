import { Navigate, useOutlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoadingPage from './loading/LoadingPage';

const ProtectedRoutes = () => {
  const user = useSelector((state) => state.user);
  const outlet = useOutlet();

  if (user.isFetching) {
    return <LoadingPage></LoadingPage>;
  }

  if (!user.data && !user.isFetching) {
    return <Navigate to="/signin" replace></Navigate>;
  }
  return outlet;
};

export default ProtectedRoutes;
