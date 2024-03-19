import axios from 'axios';
import config from '../config/config';

const baseURL = `${config.BE_URL}/api/user`;

const headerConf = (token) => {
  return {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  };
};

const signIn = async (username, password) => {
  const result = await axios.post(`${baseURL}/signin`, { username, password });

  return result.data;
};

const authenticateUser = async (token) => {
  const result = await axios.get(`${baseURL}/authenticate`, headerConf(token));

  return result.data;
};

const userServices = {
  signIn,
  authenticateUser,
};

export default userServices;
