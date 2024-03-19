import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateNotification } from '../../../redux/notificationReducer';
import playlistServices from '../../../services/playlistServices';
import { AiOutlineLoading } from 'react-icons/ai';

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

const NewPlaylistModal = ({
  display,
  setDisplayModal,
  playlists,
  setPlaylists,
}) => {
  const dispatch = useDispatch();
  const [playlistName, setPlaylistName] = useState('');
  // submit button loading
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmitNewPlaylist = async (e) => {
    e.preventDefault();
    try {
      const token = window.localStorage.getItem('access-token');
      if (token) {
        setIsLoading(true);
        const createPlaylist = await playlistServices.newPlaylists(
          playlistName,
          token
        );

        if (createPlaylist) {
          setPlaylists([...playlists, createPlaylist]);
          dispatch(
            updateNotification({
              data: `Created ${createPlaylist.name}`,
              type: 'SUCCESS',
            })
          );
          setIsLoading(false);
          setDisplayModal(false);
        } else {
          dispatch(
            updateNotification({
              data: 'Failed to create new playlist',
              type: 'ERROR',
            })
          );
          setIsLoading(false);
        }
      }
    } catch (err) {
      setIsLoading(false);
      setDisplayModal(false);
      dispatch(
        updateNotification({
          data: 'Failed to create new playlist',
          type: 'ERROR',
        })
      );
    }
  };
  return (
    <div
      className={`w-full h-full z-20 absolute flex justify-center items-center bg-transparent backdrop-brightness-50 ${
        !display && 'invisible'
      }`}
    >
      <div className="w-[350px] bg-gray-first rounded-lg flex flex-col justify-center items-center p-4">
        <h4 className="text-white-heavy text-lg">New playlist</h4>
        <form className="w-full" onSubmit={(e) => handleSubmitNewPlaylist(e)}>
          <div className="w-full text-center flex flex-row my-4 h-[30px]">
            <label className="text-white-heavy w-[40%]" htmlFor="playlist-name">
              Name
            </label>
            <input
              type="text"
              id="playlist-name"
              className="rounded"
              value={playlistName}
              onChange={(e) => setPlaylistName(e.target.value)}
            ></input>
          </div>
          <div className="flex flex-row w-[100%] justify-center items-center gap-4">
            <FormButton text={'Create'} isLoading={isLoading}></FormButton>
            <button
              className="w-[100px] h-[30px] text-center bg-gray-second text-white-heavy p-0 brightness-90"
              onClick={() => setDisplayModal(false)}
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

export default NewPlaylistModal;
