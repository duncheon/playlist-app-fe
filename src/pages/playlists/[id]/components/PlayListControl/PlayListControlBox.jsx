import { GrEdit } from 'react-icons/gr';
import { RiShareForwardLine } from 'react-icons/ri';
import { MdOutlineAdd } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { IoSettingsSharp } from 'react-icons/io5';
import UtilButton from './UtilBtn';
import DropDownUtilBtn from './DropDownUtilBtn';
import { play } from '../../../../../redux/playlistReducer';

const PlayListControlBox = ({ setDisplayNewSongModal }) => {
  const dispatch = useDispatch();
  const playlistData = useSelector((state) => state.playlist.playlistData);

  const handleBtnAddSong = (e) => {
    e.preventDefault();
    setDisplayNewSongModal(true);
  };

  const playSong = () => {
    dispatch(play());
  };

  return (
    <div className="lg:w-full lg:mt-2 w-[90%] lg:pr-4">
      <h4 className="text-white-heavy mb-2 text-[1.2rem]">
        {playlistData.name}
      </h4>
      <div className="flex flex-row w-full">
        <div className="w-[70%] grow">
          <p className="text-white-heavy text-[0.8rem]">{playlistData.owner}</p>
          <p className="text-white-heavy text-[0.6rem] mt-2">
            {playlistData.description}
          </p>
        </div>
        <div className="flex flex-row justify-end gap-2 h-[2.5rem]">
          <UtilButton icon={GrEdit}></UtilButton>
          <UtilButton
            icon={MdOutlineAdd}
            btnClickHandle={handleBtnAddSong}
          ></UtilButton>
          <DropDownUtilBtn icon={IoSettingsSharp}></DropDownUtilBtn>
          <UtilButton icon={RiShareForwardLine}></UtilButton>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center w-full gap-3 my-4">
        <button
          className="rounded-full bg-white-heavy w-[50%] p-0 py-0.5"
          onClick={playSong}
        >
          Play
        </button>
        <button className="rounded-full w-[50%] p-0 py-0.5 text-white-heavy bg-gray-first">
          Shuffle
        </button>
      </div>
    </div>
  );
};

export default PlayListControlBox;
