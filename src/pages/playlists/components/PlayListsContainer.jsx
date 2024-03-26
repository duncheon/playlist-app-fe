import PlayListBox from './PlayListBox';
import SearchBar from './SearchBar/SearchBar';

const PlayListsContainer = ({ playlists, height }) => {
  return (
    <div className={`w-full flex flex-col items-center px-4`}>
      <div className="relative text-md text-white-heavy w-full flex flex-row justify-center items-center gap-[0.4rem]">
        <div>
          <h4 className="mb-1 pt-4">Playlist</h4>
          <div className="border-b-2 w-[100%] z-10"></div>
        </div>
        <SearchBar
          styles={'grow flex flex-row justify-end py-2 pr-2 gap-2'}
        ></SearchBar>
        <div className="absolute border-b-2 border-gray-first w-[98%] bottom-0 left-[50%] translate-x-[-50%]"></div>
      </div>

      <div className="flex flex-col justify-center items-center lg:grid lg:grid-rows-2 lg:grid-cols-4 w-full lg:justify-center lg:items-center pb-3 lg:py-3">
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
