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

const getSongsOfPlaylist = async (playlistId, start, total, token) => {
  const result = await axios.get(`${baseURL}`, {
    ...headerConf(token),
    params: { playlistId, start, total },
  });

  return result.data;
};

const appendSongsOfPlaylist = async (playlist, end, token) => {
  const { id: playlistId } = playlist.playlistData;

  const songList = playlist.songList;
  const result = await axios.get(`${baseURL}`, {
    ...headerConf(token),
    params: { playlistId, start: songList.length, end },
  });

  return result.data;
};

const songServices = {
  getSongsOfPlaylist,
  appendSongsOfPlaylist,
};

export default songServices;
