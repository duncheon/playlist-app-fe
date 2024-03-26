import { useSelector, useDispatch } from 'react-redux';
import SongBox from './SongBox';
import { useEffect, useRef, useState } from 'react';

import { appendSongLists } from '../../../../redux/playlistReducer';
import LoadingState from '../../../../components/LoadingState';

const CustomLoadingState = ({ size = 30, isLoading, songList }) => {
  if (!isLoading && songList && songList.length === 0) {
    return (
      <div className="w-full mt-4 text-center">
        <h4 className="text-white-heavy">Your playlist is empty</h4>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="w-full mt-4">
        <LoadingState size={30}></LoadingState>;
      </div>
    );
  }

  return null;
};

const SongListContainer = () => {
  const playlist = useSelector((state) => state.playlist);

  const songListContainerRef = useRef(null);
  const dispatch = useDispatch();

  const handleFetchSong = (e) => {
    e.preventDefault();
    const endOfScroll =
      e.target.scrollHeight - (e.target.scrollTop + e.target.offsetHeight);
    if (endOfScroll === 0) {
      e.target.scrollTop = e.target.scrollHeight;
      dispatch(appendSongLists(playlist));
    }
  };

  return (
    <div
      className={`h-full w-full pb-2 overflow-y-scroll`}
      onScroll={(e) => handleFetchSong(e)}
      ref={songListContainerRef}
    >
      <CustomLoadingState append={true}></CustomLoadingState>
      <div className="text-lg text-white-heavy w-[6rem] flex flex-col justify-center items-center gap-[0.4rem]">
        <div className="w-[90%] text-center">Songs</div>
        <div className="border-b-2 w-[90%]"></div>
      </div>
      <div className="border-b-2 border-gray-first w-[95%] relative left-[50%] translate-x-[-50%]"></div>
      <div className="relative flex flex-col">
        {playlist.songList !== null &&
          playlist.songList.map((song, idx) => (
            <SongBox key={song.id} song={song} idx={idx}></SongBox>
          ))}
        <CustomLoadingState
          isLoading={playlist.isFetchingSongList}
          songList={playlist.songList}
        ></CustomLoadingState>
      </div>
    </div>
  );
};

export default SongListContainer;
