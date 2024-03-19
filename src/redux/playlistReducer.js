import { createSlice } from '@reduxjs/toolkit';
import randomUtil from '../utils/randomUtil';
import songServices from '../services/songServices';

const initialState = {
  playlistData: {
    id: '',
    name: '',
    owner: '',
    description: '',
  },
  currentSelected: 0,
  songList: [],
  playModes: {
    shuffle: false,
    autoPlay: true,
  },
  isFetchingSongList: false,
  isPlaying: false,
};

const playlistSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    play: (state, action) => {
      return { ...state, isPlaying: true };
    },
    pause: (state, action) => {
      return { ...state, isPlaying: false };
    },

    setIsFetching: (state, action) => {
      return { ...state, isFetchingSongList: action.payload };
    },
    updatePlaylistData: (state, action) => {
      return { ...state, playlistData: action.payload };
    },
    updateSongList: (state, action) => {
      return { ...state, songList: action.payload };
    },
    addSong: (state, action) => {
      const newSongList = [...state.songList, action.payload];
      return { ...state, songList: newSongList };
    },
    nextSong: (state, action) => {
      let nextInPlay = state.currentSelected;
      if (state.playModes.shuffle === false) {
        if (state.currentSelected + 1 < state.songList.length) {
          nextInPlay = state.currentSelected + 1;
        } else nextInPlay = 0;
      } else {
        console.log(nextInPlay);
        nextInPlay = randomUtil.randomInt(0, state.songList.length - 1);
      }
      return { ...state, currentSelected: nextInPlay };
    },
    updatePlayModes: (state, action) => {
      const { mode, val } = action.payload;
      const playModes = { ...state.playModes };
      switch (mode) {
        case 'shuffle':
          playModes.shuffle = val;
          break;
        case 'autoPlay':
          playModes.autoPlay = val;
          break;
        default:
          break;
      }

      return { ...state, playModes };
    },
    updateSong: (state, action) => {
      const newSongList = state.songList.map((song) => {
        if (song.id === action.payload.id) {
          return action.payload;
        }

        return song;
      });

      return { ...state, songList: newSongList };
    },
    removeSong: (state, action) => {
      const newSongList = state.songList.filter(
        (song) => song.id !== action.payload.id
      );

      return { ...state, songList: newSongList };
    },
  },
});

export const initialPlaylistLoad = (id) => {
  return async (dispatch) => {
    dispatch(setIsFetching(true));
    try {
      const getSongList = async (playlistId, start, total, token) => {
        const result = await songServices.getSongsOfPlaylist(
          playlistId,
          start,
          total,
          token
        );
        return result;
      };

      const token = window.localStorage.getItem('access-token');
      const result = await getSongList(id, 0, null, token);
      dispatch(updateSongList(result.songList));

      const newPlaylistData = {
        id: id,
        name: result.playlistData.name,
        owner: result.playlistData.user.fullname,
        description: result.playlistData.description
          ? result.playlistData.description
          : '',
      };
      dispatch(updatePlaylistData(newPlaylistData));
      dispatch(setIsFetching(false));
    } catch (err) {
      console.log(err);
      dispatch(setIsFetching(false));
    }
  };
};

export const {
  play,
  pause,
  addSong,
  nextSong,
  updateSong,
  removeSong,
  updateSongList,
  updatePlaylistData,
  setIsFetching,
  updatePlayModes,
} = playlistSlice.actions;

export default playlistSlice.reducer;
