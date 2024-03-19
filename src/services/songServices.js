import config from '../config/config';
import axios from 'axios';

const baseURL = `${config.BE_URL}/api/song`;

const headerConf = (token) => {
  return {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  };
};

const getSongsOfPlaylist = async (playlistId, start, end, token) => {
  const result = await axios.get(`${baseURL}`, {
    ...headerConf(token),
    params: { playlistId, start, end },
  });

  return result.data;
};

const songServices = {
  getSongsOfPlaylist,
};

export default songServices;
