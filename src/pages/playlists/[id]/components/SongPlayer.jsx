import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import LoadingState from '../../../../components/LoadingState';
import { nextSong } from '../../../../redux/playlistReducer';

const SongPlayer = ({ isSmallScreen }) => {
  const playlist = useSelector((state) => state.playlist);
  const dispatch = useDispatch();

  const {
    currentSelected,
    songList,
    isFetchingSongList,
    isPlaying,
    playModes,
  } = playlist;

  const queueNext = () => {
    if (playModes.autoPlay) {
      dispatch(nextSong());
    }
  };

  if (isSmallScreen)
    return (
      <div className="mt-[60px] rounded w-[90%] aspect-video">
        {isFetchingSongList ? (
          <LoadingState size={70}></LoadingState>
        ) : (
          <ReactPlayer
            controls={true}
            url={
              songList.length === 0
                ? ''
                : `https://www.youtube.com/embed/${songList[currentSelected].id}`
            }
            width="100%"
            height="100%"
            playing={isPlaying}
            onEnded={queueNext}
          ></ReactPlayer>
        )}
      </div>
    );

  return (
    <div className="absolute top-[50%] left-[50%] w-[50%] translate-y-[-50%] translate-x-[-50%] flex justify-center">
      {isFetchingSongList ? (
        <LoadingState size={70}></LoadingState>
      ) : (
        <ReactPlayer
          controls={true}
          url={
            songList.length === 0
              ? ''
              : `https://www.youtube.com/embed/${songList[currentSelected].id}`
          }
          playing={isPlaying}
          onEnded={queueNext}
        ></ReactPlayer>
      )}
    </div>
  );
};

export default SongPlayer;
