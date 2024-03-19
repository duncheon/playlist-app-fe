import React from 'react';
import MediaPlayer from './MediaPlayer';
import UrlInput from './UrlInput';

const MainMediaContainer = () => {
  const [curMedia, setCurMedia] = React.useState({ url: '' });
  return (
    <div className="flex flex-col absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] justify-center items-center">
      <UrlInput setCurMedia={setCurMedia}></UrlInput>
      <MediaPlayer curMedia={curMedia}></MediaPlayer>
    </div>
  );
};

export default MainMediaContainer;
