import youtubeUrl from '../utils/youtubeUrl';
import ReactPlayer from 'react-player';
const MediaPlayer = ({ curMedia }) => {
  const { url } = curMedia;
  // const convertedUrl = youtubeUrl.convertToEmbed(url);
  return <ReactPlayer url={url} playing={true}></ReactPlayer>;
};

export default MediaPlayer;
