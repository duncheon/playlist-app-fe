import PlayListControlBox from './PlayListControl/PlayListControlBox';
import SongListContainer from './SongListContainer';

const PlayListMenu = ({
  isSmallScreen,
  displayMenu,
  setDisplayMenu,
  setDisplayNewSongModal,
}) => {
  const handleCloseMenu = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setDisplayMenu(false);
    }
  };

  if (isSmallScreen) {
    return (
      <div className="flex flex-col lg:w-full w-full mt-4 lg:mt-0 justify-center lg:justify-start items-center lg:h-[40%]">
        <PlayListControlBox
          setDisplayNewSongModal={setDisplayNewSongModal}
        ></PlayListControlBox>
        <div className="w-[95%] lg:m-0">
          <SongListContainer></SongListContainer>
        </div>
      </div>
    );
  } else if (displayMenu) {
    return (
      <div
        className="absolute transparent top-0 left-0 w-full h-full backdrop"
        onClick={(e) => handleCloseMenu(e)}
      >
        <div className="bg-baseblack flex flex-col items-start absolute right-0 z-10 px-5 lg:pr-0 overflow-hidden h-[100vh] pb-4 w-[450px]">
          <PlayListControlBox
            setDisplayNewSongModal={setDisplayNewSongModal}
          ></PlayListControlBox>

          <SongListContainer></SongListContainer>
        </div>
      </div>
    );
  }

  return <></>;
};

export default PlayListMenu;
