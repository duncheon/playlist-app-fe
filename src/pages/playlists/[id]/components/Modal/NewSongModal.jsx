import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineLoading } from 'react-icons/ai';
import playlistServices from '../../../../../services/playlistServices';

import { newNotification } from '../../../../../redux/notificationReducer';

import { addSong } from '../../../../../redux/playlistReducer';

const FormButton = ({ text, isLoading }) => {
  if (isLoading) {
    return (
      <button
        className="w-[100px] h-[30px] text-center bg-gray-second text-white-heavy p-0 brightness-90"
        type="submit"
        disabled
      >
        <div className="flex flex-row items-center justify-center gap-2">
          <AiOutlineLoading className="animate-spin"></AiOutlineLoading>
          <p>{text}</p>
        </div>
      </button>
    );
  } else
    return (
      <button
        className="w-[100px] h-[30px] text-center bg-gray-second text-white-heavy p-0 brightness-90"
        type="submit"
      >
        {text}
      </button>
    );
};

const NewSongModal = ({ display, setDisplayModal }) => {
  const dispatch = useDispatch();
  const [videoId, setVideoId] = useState('');
  // submit button loading
  const [isLoading, setIsLoading] = useState(false);

  const playlist = useSelector((state) => state.playlist);
  const { playlistData } = playlist;

  const modalAction = {
    loading: function () {
      setIsLoading(true);
    },
    close: function () {
      setIsLoading(false);
      setDisplayModal(false);
    },
  };

  const handleSubmitNewPlaylist = async (e) => {
    e.preventDefault();
    try {
      modalAction.loading();

      const token = window.localStorage.getItem('access-token');
      if (token) {
        const addedNewSong = await playlistServices.addNewSong(
          videoId,
          playlistData.id,
          token
        );

        if (addedNewSong) {
          dispatch(addSong(addedNewSong.video));
          dispatch(
            newNotification(
              `Added ${addedNewSong.video.title} to playlist ${playlistData.name}`,
              'SUCCESS'
            )
          );
        } else dispatch(newNotification('Failed to add new song', 'ERROR'));

        modalAction.close();
      }
    } catch (err) {
      console.log(err);
      modalAction.close();
      dispatch(newNotification('Failed to add new song', 'ERROR'));
    }
  };
  return (
    <div
      className={`w-full h-full z-20 absolute flex justify-center items-center bg-transparent backdrop-brightness-50 ${
        !display && 'invisible'
      }`}
    >
      <div className="w-[350px] bg-gray-first rounded-lg flex flex-col justify-center items-center p-4">
        <h4 className="text-white-heavy text-lg">Add new song</h4>
        <form className="w-full" onSubmit={(e) => handleSubmitNewPlaylist(e)}>
          <div className="w-full text-center flex flex-row my-4 h-[30px]">
            <label className="text-white-heavy w-[40%]" htmlFor="playlist-name">
              Video ID
            </label>
            <input
              type="text"
              id="playlist-name"
              className="rounded"
              value={videoId}
              onChange={(e) => setVideoId(e.target.value)}
            ></input>
          </div>
          <div className="flex flex-row w-[100%] justify-center items-center gap-4">
            <FormButton text="Ok" isLoading={isLoading}></FormButton>
            <button
              className="w-[100px] h-[30px] text-center bg-gray-second text-white-heavy p-0 brightness-90"
              onClick={() => modalAction.close()}
              type="button"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewSongModal;
