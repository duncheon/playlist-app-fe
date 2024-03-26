import { useRef, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import screenUtil from '../../../utils/screenUtil';
import useWindowDimensions from '../../../hooks/useWindowDimensions';

import { initialPlaylistLoad } from '../../../redux/playlistReducer';

import { FaArrowLeft } from 'react-icons/fa';
import { SlOptionsVertical } from 'react-icons/sl';
import { AiOutlineMenuFold } from 'react-icons/ai';
import { AiOutlineMenuUnfold } from 'react-icons/ai';

import PlayListMenu from './components/PlayListMenu';
import SongPlayer from './components/SongPlayer';
import UserMenu from './components/UserMenu';
import useSideBar from '../../../hooks/useSideBar';
import NewSongModal from './components/Modal/NewSongModal';

const PlayList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userMenuRef = useRef(null);
  const userMenuToggleBtnRef = useRef(null);
  const { width } = useWindowDimensions();

  const [displayMenu, setDisplayMenu] = useState(true);
  const [displayNewSongModal, setDisplayNewSongModal] = useState(false);
  const [isHidden, setIsHidden] = useSideBar(userMenuRef, userMenuToggleBtnRef);

  const { id } = useParams();
  useEffect(() => {
    try {
      dispatch(initialPlaylistLoad(id));
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <div className="w-[100vw] bg-baseblack h-full overflow-y-scroll lg:overflow-hidden">
      <NewSongModal
        display={displayNewSongModal}
        setDisplayModal={setDisplayNewSongModal}
      ></NewSongModal>
      <div className="w-full z-10 bg-baseblack flex flex-row h-[40px] lg:hidden absolute top-fixed">
        <div className="grow h-full flex flex-row flex-start">
          <button
            className="rounded-full bg-baseblack w-[40px] scale-[90%] flex justify-center items-center p-0"
            onClick={() => navigate('/app/playlists')}
          >
            <FaArrowLeft color="white"></FaArrowLeft>
          </button>
        </div>

        <button
          ref={userMenuToggleBtnRef}
          className="rounded-full bg-baseblack w-[40px] scale-[90%] flex justify-center items-center p-0"
        >
          <SlOptionsVertical color="white"></SlOptionsVertical>
        </button>
      </div>

      <UserMenu
        isSmallScreen={screenUtil.isSmallScreen(width)}
        isHidden={isHidden}
        setIsHidden={setIsHidden}
        userMenuRef={userMenuRef}
      ></UserMenu>

      <div className={`w-full flex flex-col justify-center items-center pl-2`}>
        <SongPlayer
          isSmallScreen={screenUtil.isSmallScreen(width)}
        ></SongPlayer>
        {!screenUtil.isSmallScreen(width) && (
          <button
            className="absolute right-2 top-2 rounded-full aspect-square p-0 bg-baseblack z-20"
            onClick={() => setDisplayMenu(!displayMenu)}
          >
            {!displayMenu ? (
              <AiOutlineMenuFold size={25} color="white"></AiOutlineMenuFold>
            ) : (
              <AiOutlineMenuUnfold
                size={25}
                color="white"
              ></AiOutlineMenuUnfold>
            )}
          </button>
        )}
        <PlayListMenu
          isSmallScreen={screenUtil.isSmallScreen(width)}
          displayMenu={displayMenu}
          setDisplayMenu={setDisplayMenu}
          displayNewSongModal={displayNewSongModal}
          setDisplayNewSongModal={setDisplayNewSongModal}
        ></PlayListMenu>
      </div>
    </div>
  );
};

export default PlayList;
