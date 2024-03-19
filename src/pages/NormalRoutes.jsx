import { useSelector } from 'react-redux';
import { Navigate, Outlet, useOutlet } from 'react-router-dom';
import LoadingPage from './loading/LoadingPage';

const NormalRoutes = () => {
  const user = useSelector((state) => state.user);
  const outlet = useOutlet();
  if (user.isFetching) {
    return <LoadingPage></LoadingPage>;
  }
  if (user.data && !user.isFetching) {
    return <Navigate to="/app/playlists" replace></Navigate>;
  }
  return outlet;
};

export default NormalRoutes;
