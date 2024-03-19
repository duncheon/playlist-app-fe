import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import {} from 'react-redux';
import useDropDown from '../../../../../hooks/useDropDown';
import { updatePlayModes } from '../../../../../redux/playlistReducer';

const PlayModeMenuFields = ({ id, text, checked, handleOnChange }) => {
  return (
    <button className="rounded-none w-full h-[50px] flex flex-row items-center pl-3 pr-0 py-0 gap-2.5 hover:bg-gray-first hover:text-white-heavy [&>*]:hover:cursor-pointer">
      <input
        type="checkbox"
        id={id}
        className="h-[1rem] aspect-square"
        checked={checked}
        onChange={() => handleOnChange(id, !checked)}
      ></input>
      <label htmlFor={id}>{text}</label>
    </button>
  );
};

const DropDownUtilBtn = ({ icon: Icon, btnClickHandle }) => {
  const dispatch = useDispatch();
  const toggleBtnRef = useRef();
  const menuRef = useRef();

  const playlist = useSelector((state) => state.playlist);
  const { shuffle, autoPlay } = playlist.playModes;

  const [isHidden] = useDropDown(menuRef, toggleBtnRef);

  const handlePlayModeChange = (mode, val) => {
    dispatch(updatePlayModes({ mode, val }));
  };

  return (
    <div className="relative hover:cursor-pointer">
      <button
        className="rounded-full aspect-square h-full  flex justify-center items-center bg-gray-first p-0"
        onClick={btnClickHandle}
        ref={toggleBtnRef}
      >
        <Icon className="m-0 p-0 text-xl" color="white"></Icon>
      </button>
      <div
        className={`z-30 h-auto w-auto min-w-[125px] right-[25%] flex flex-col absolute bg-gray-second text-black text-md ${
          isHidden ? 'invisible' : 'block'
        }`}
        ref={menuRef}
      >
        <PlayModeMenuFields
          checked={autoPlay}
          handleOnChange={handlePlayModeChange}
          id="autoPlay"
          text="Auto play"
        ></PlayModeMenuFields>
        <PlayModeMenuFields
          checked={shuffle}
          id="shuffle"
          handleOnChange={handlePlayModeChange}
          text="Shuffle"
        ></PlayModeMenuFields>
      </div>
    </div>
  );
};

export default DropDownUtilBtn;
