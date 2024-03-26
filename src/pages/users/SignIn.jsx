import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';

import { useState } from 'react';
import { initializeUser, updateUser } from '../../redux/userReducer';
import { useDispatch, useSelector } from 'react-redux';
import userServices from '../../services/userServices';
import { useEffect } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import FormButton from './FormButton';
import config from '../../config/config';

const fields = [
  {
    id: 'username',
    type: 'text',
    label: 'Username',
    placeholder: 'Your username',
  },
  {
    id: 'password',
    type: 'password',
    label: 'Password',
    placeholder: 'Your password',
  },
];
const SignIn = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [username, setUsername] = useState(['']);
  const [password, setPassword] = useState(['']);
  const [isFormLoading, setIsFormLoading] = useState(false);

  const dispatch = useDispatch();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setIsFormLoading(true);
      const user = await userServices.signIn(username, password);

      if (user) {
        localStorage.setItem('access-token', user.token);
        dispatch(updateUser({ isFetching: false, data: user }));
        navigate('/app');
      } else setIsFormLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <div className="bg-[#313131] w-full h-full flex items-center justify-center overflow-y-scroll">
      <div className="w-[95%] md:h-[425px] bg-white-heavy m-4 flex flex-col md:flex-row md:w-[85%] lg:w-[60%]">
        <div className="bg-baseblack w-full h-[175px] md:h-full flex md:items-end">
          <div className="w-full p-5 overflow-hidden">
            <h4 className="text-2xl text-white-heavy font-bold pb-2 md:pb-6 pt-2 w-full">
              Sign in now
            </h4>
            <p className="text-lg font-thin text-gray-200 pt-2 w-full">
              Enjoys the freedom beyond youtube playlists
            </p>
          </div>
        </div>
        <div className="w-full bg-white-heavy flex justify-center">
          <form
            className="my-2 w-[85%] flex flex-col"
            onSubmit={(e) => handleLogin(e)}
          >
            <h4 className="text-3xl font-thin my-6">Sign-in {config.ENV}</h4>

            <div className="w-full h-[50px] mb-[15px] flex items-center">
              <label
                className="w-[50%] sm:w-[40%] font-bold"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="w-full h-[90%] p-2 bg-[rgba(0, 0, 0, 0.03)]"
                type="text"
                id="username"
                placeholder="Your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></input>
            </div>
            <div className="w-full h-[50px] mb-[15px] flex items-center">
              <label
                className="w-[50%] sm:w-[40%] font-bold"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full h-[90%] p-2 bg-[rgba(0, 0, 0, 0.03)]"
                type="password"
                id="password"
                placeholder="Your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>

            <FormButton isLoading={isFormLoading} text={'Sign-in'}></FormButton>
            <p className="w-full text-center mb-4">
              Don't have an account ? <Link to={'/signup'}>Sign-up</Link>
            </p>
            <div className="flex flex-row justify-center items-center mb-4">
              <div className="w-[50%] border-t-[1px] border-slate-500 h-0 mx-2"></div>
              <p>Or</p>
              <div className="w-[50%] border-t-[1px] border-slate-500 h-0 mx-2"></div>
            </div>

            <div className="flex flex-row justify-center items-center gap-2">
              <button className="p-0 rounded-full w-[40px] aspect-square flex justify-center items-center">
                <FcGoogle size={30}></FcGoogle>
              </button>
              <button className="p-0 rounded-full w-[40px] aspect-square flex justify-center items-center">
                <FcGoogle size={30}></FcGoogle>
              </button>
              <button className="p-0 rounded-full w-[40px] aspect-square flex justify-center items-center">
                <FcGoogle size={30}></FcGoogle>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
