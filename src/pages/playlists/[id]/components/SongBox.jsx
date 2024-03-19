import { SlOptionsVertical } from 'react-icons/sl';
import useWindowDimensions from '../../../../hooks/useWindowDimensions';
import screenUtil from '../../../../utils/screenUtil';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const SongBox = ({ song, idx }) => {
  const { width, height } = useWindowDimensions();
  const [isBeingHover, setIsBeingHover] = useState(false);
  const { currentSelected } = useSelector((state) => state.playlist);
  // shouldnt be like this
  const truncateText = (text) => {
    if (width <= 350 && text.length > 30) {
      return text.slice(0, 30) + '...';
    }

    if (width <= 380 && text.length > 45) {
      return text.slice(0, 45) + '...';
    }

    if (width <= 485 && text.length > 60) {
      return text.slice(0, 60) + '...';
    }
    if (width <= 549 && text.length > 80) {
      return text.slice(0, 80) + '...';
    }
    if (width > 1024 && text.length > 55) {
      return text.slice(0, 55) + '...';
    }

    return text;
  };
  return (
    <div
      className={`grid grid-cols-[180px_1fr] lg:grid-cols-[180px_1fr] h-[135px] w-full grid-rows-1 px-1 py-2 relative rounded-lg hover:bg-hoverblack mt-2 cursor-pointer overflow-hidden ${
        idx === currentSelected
          ? 'bg-active-playlist hover:bg-active-playlist'
          : ''
      }`}
      onMouseEnter={() => setIsBeingHover(true)}
      onMouseLeave={() => setIsBeingHover(false)}
    >
      <div className="col-span-1">
        <img
          className="rounded-2xl border-2 lg:h-[120px]  h-full w-full"
          src={song.thumbnail}
        ></img>
      </div>
      <div className="col-span-1">
        <h4 className="text-white-heavy text-lg pl-4 w-full block h-full">
          {truncateText(song.title)}
        </h4>
        <p className="text-gray-second pl-4">{song.description}</p>
      </div>
      <div
        className={`absolute right-0 top-2.5 ${
          isBeingHover ? 'visible' : 'invisible'
        }`}
      >
        <button className="w-[30px] flex justify-center bg-baseblack rounded-full aspect-square items-center p-0">
          <SlOptionsVertical color={'white'}></SlOptionsVertical>
        </button>
      </div>
    </div>
  );
};

export default SongBox;
