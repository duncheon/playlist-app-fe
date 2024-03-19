import './App.css';
import Error404 from './pages/errors/Error404';
import SignIn from './pages/users/SignIn';
import SignUp from './pages/users/SignUp';
import PlayLists from './pages/playlists/PlayLists';
import PlayList from './pages/playlists/[id]/PlayList';
import ProtectedRoutes from './pages/ProtectedRoutes';
import {
  Navigate,
  BrowserRouter as Router,
  Routes,
  redirect,
} from 'react-router-dom';
import { Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { initializeUser } from './redux/userReducer';
import { useDispatch, useSelector } from 'react-redux';
import NormalRoutes from './pages/NormalRoutes';
import LoadingPage from './pages/loading/LoadingPage';
import Notification from './components/Notification';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeUser());
  }, []);

  return (
    <>
      <Notification></Notification>
      <Router>
        <Routes>
          <Route path="/" element={<NormalRoutes></NormalRoutes>}>
            <Route index element={<Navigate to="/signin"></Navigate>}></Route>
            <Route path="/signin" element={<SignIn></SignIn>}></Route>
            <Route path="/signup" element={<SignUp></SignUp>}></Route>
          </Route>
          <Route path="/app" element={<ProtectedRoutes />}>
            <Route path="playlists" element={<PlayLists />}></Route>
            <Route path="playlists/:id" element={<PlayList />}></Route>
          </Route>
          <Route path="/test" element={<LoadingPage></LoadingPage>}></Route>
          <Route path="*" element={<Error404></Error404>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
