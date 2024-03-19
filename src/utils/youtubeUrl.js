const isYoutube = (url) => {
  const regex =
    //eslint-disable-next-line
    /^(?:https?:)?(?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]{7,15})(?:[\?&][a-zA-Z0-9\_-]+=[a-zA-Z0-9\_-]+)*(?:[&\/\#].*)?$/;

  return regex.test(url);
};

function getId(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);

  return match && match[2].length === 11 ? match[2] : null;
}

// has to be youtube format
const convertToEmbed = (url) => {
  const isEmbeded = url.includes('embed');
  if (isEmbeded) {
    return url;
  } else {
    const videoId = getId(url);
    return `https://www.youtube.com/embed/${videoId}`;
  }
};

export default { isYoutube, convertToEmbed };
