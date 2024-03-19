import { SlOptionsVertical } from 'react-icons/sl';
import { Link } from 'react-router-dom';

const PlayListBox = ({ playlist, idx, lastIdx }) => {
  const handleSubMenuClick = (e) => {
    handleSubMenuClick(e);
  };
  return (
    <Link
      className={`hover:bg-hoverblack block w-full lg:w-[25%] rounded`}
      to={`/app/playlists/${playlist.id}`}
    >
      <div
        className={`w-full px-3 flex flex-row lg:flex-col py-1.5 lg:mb-3 relative`}
      >
        <div className="w-[200px] lg:w-full aspect-video">
          <img className="rounded-2xl border-2 h-full w-full"></img>
        </div>
        <div className="grow relative lg:mt-2">
          <h4 className="text-white-heavy text-xl pl-4 lg:pl-1">
            {playlist.name}
          </h4>
          <p className="text-gray-second pl-4 text-lg pl-4 lg:pl-1">
            {playlist.description}
          </p>
          <button
            className="absolute w-[30px] top-0 lg:right-0 right-[10px] lg:grid text-[0.65rem] sm:text-[0.7rem] p-0 flex justify-center bg-baseblack rounded-full aspect-square items-center"
            onClick={(e) => handleSubMenuClick(e)}
          >
            <SlOptionsVertical color={'white'}></SlOptionsVertical>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default PlayListBox;
