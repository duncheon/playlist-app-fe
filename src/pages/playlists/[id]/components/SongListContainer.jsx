import { useSelector } from 'react-redux';
import SongBox from './SongBox';

const SongListContainer = () => {
  const songList = useSelector((state) => state.playlist.songList);
  return (
    <div className={`h-full lg:overflow-y-auto w-full pb-2`}>
      <div className="text-lg text-white-heavy w-[6rem] flex flex-col justify-center items-center gap-[0.4rem]">
        <div className="w-[90%] text-center">Songs</div>
        <div className="border-b-2 w-[90%]"></div>
      </div>
      <div className="border-b-2 border-gray-first w-[95%] relative left-[50%] translate-x-[-50%]"></div>
      <div className="flex flex-col">
        {songList.map((song, idx) => (
          <SongBox key={song.id} song={song} idx={idx}></SongBox>
        ))}
      </div>
    </div>
  );
};

export default SongListContainer;
