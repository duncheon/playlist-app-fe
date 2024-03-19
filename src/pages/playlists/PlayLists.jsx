import MetaButtons from './components/MetaButtons';
import UserContainer from './components/UserContainer';
import PlayListsContainer from './components/PlayListsContainer';
import { useEffect, useState } from 'react';
import playlistServices from '../../services/playlistServices';
import { useDispatch } from 'react-redux';
import { clearUser } from '../../redux/userReducer';
import NewPlaylistModal from './components/NewPlaylistModal';

const PlayLists = () => {
  const [playlists, setPlaylists] = useState([]);
  const dispatch = useDispatch();
  const [displayModal, setDisplayModal] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('access-token');
    const getPlaylist = async (start, total, token) => {
      const result = await playlistServices.getPlaylists(start, total, token);
      return result;
    };
    if (token) {
      try {
        getPlaylist(0, null, token).then((userPlaylists) =>
          setPlaylists(userPlaylists)
        );
      } catch (err) {
        console.log(err);
        dispatch(clearUser());
      }
    }
  }, []);

  return (
    <div className="w-full bg-baseblack h-full overflow-y-scroll flex flex-col items-center">
      <NewPlaylistModal
        display={displayModal}
        setDisplayModal={setDisplayModal}
        setPlaylists={setPlaylists}
        playlists={playlists}
      ></NewPlaylistModal>
      <div className="w-full h-[120px] grid grid-rows-[65%_1fr]">
        <UserContainer></UserContainer>
        <MetaButtons setDisplayModal={setDisplayModal}></MetaButtons>
      </div>
      <PlayListsContainer
        playlists={playlists}
        height={'[calc(100vh-120px)]'}
      ></PlayListsContainer>
    </div>
  );
};

export default PlayLists;
