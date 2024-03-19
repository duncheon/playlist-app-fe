import { TbPlaylist } from 'react-icons/tb';
import { MdClose } from 'react-icons/md';

const btnList = [
  {
    id: 'playlists',
    tooltip: 'Your playlists',
    icon: <TbPlaylist color="white" size={20}></TbPlaylist>,
  },
];

const UserMenu = ({ isSmallScreen, userMenuRef, isHidden, setIsHidden }) => {
  if (!isSmallScreen) {
    return (
      <div className="absolute h-full w-[50px] bg-baseblack flex flex-col border-r-[1px] border-white justify-start items-center gap-2 pt-2 z-10">
        <button className="w-[40px] rounded-full aspect-square bg-baseblack flex justify-center items-center p-0 tooltip bg-gradient-to-r from-sky-500 to-indigo-500 mb-3">
          <span className="tooltiptext">User profile</span>
        </button>
        {btnList.map((btn) => (
          <button
            key={btn.id}
            className="w-[40px] rounded-full aspect-square bg-baseblack flex justify-center items-center p-0 tooltip"
          >
            {btn.icon}
            <span className="tooltiptext">{btn.tooltip}</span>
          </button>
        ))}
      </div>
    );
  } else
    return (
      <div
        ref={userMenuRef}
        className={`absolute w-[50px] h-full bg-baseblack flex flex-col border-r-[1px] border-white justify-start items-center gap-2 pt-2 z-10 ${
          !isHidden ? 'translate-x-0' : 'translate-x-[-100%]'
        } transition-transform duration-[0.5s] ease-in-out`}
      >
        <button className="w-[40px] rounded-full aspect-square bg-baseblack flex justify-center items-center p-0 tooltip bg-gradient-to-r from-sky-500 to-indigo-500 mb-3">
          <span className="tooltiptext">User profile</span>
        </button>
        <div className="grow w-[40px] z-20">
          {btnList.map((btn) => (
            <button
              key={btn.id}
              className="w-[100%] rounded-full aspect-square bg-baseblack flex justify-center items-center p-0 tooltip"
            >
              {btn.icon}
              <span className="tooltiptext">{btn.tooltip}</span>
            </button>
          ))}
        </div>
        <button
          className="w-[40px] rounded-full aspect-square bg-baseblack flex justify-center items-center p-0 mb-2"
          onClick={() => setIsHidden(true)}
        >
          <MdClose color="white" size={20}></MdClose>
        </button>
      </div>
    );
};

export default UserMenu;
