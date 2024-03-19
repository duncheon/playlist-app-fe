import PlayListBox from './PlayListBox';
import { Link } from 'react-router-dom';

const PlayListsContainer = ({ playlists, height }) => {
  return (
    <div className={`h-${height} w-full`}>
      <div className="text-md text-white-heavy w-[100px] ml-2 flex flex-col justify-center items-center gap-[0.4rem]">
        Your playlists
        <div className="border-b-2 w-[90%]"></div>
      </div>
      <div className="border-b-2 border-gray-first w-[95%] relative left-[50%] translate-x-[-50%]"></div>
      <div className="flex flex-col justify-center items-center lg:flex-row w-full lg:justify-start pb-3 lg:p-3">
        {playlists.map((playlist, idx) => (
          <PlayListBox
            key={playlist.id}
            playlist={playlist}
            idx={idx}
            lastIdx={playlists.length - 1}
          ></PlayListBox>
        ))}
      </div>
    </div>
  );
};

export default PlayListsContainer;
