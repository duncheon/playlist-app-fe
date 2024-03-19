import config from '../config/config';
import axios from 'axios';

const baseURL = `${config.BE_URL}/api/playlist`;

const headerConf = (token) => {
  return {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  };
};

const getPlaylists = async (start, total, token) => {
  const result = await axios.get(`${baseURL}/list`, {
    ...headerConf(token),
    params: { start, total },
  });

  return result.data;
};

const newPlaylists = async (name, token) => {
  const result = await axios.post(
    `${baseURL}/create`,
    {
      name,
    },
    headerConf(token)
  );

  return result.data;
};

const addNewSong = async (id, playlistId, token) => {
  const result = await axios.post(
    `${baseURL}/${playlistId}/songs`,
    {
      id,
    },
    headerConf(token)
  );

  return result.data;
};

const playlistServices = {
  getPlaylists,
  newPlaylists,
  addNewSong,
};

export default playlistServices;
