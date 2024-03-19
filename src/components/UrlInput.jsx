import { useContext, useState } from 'react';
import NotificationContext from '../AppContext/NotificationContext';
import youtubeUrl from '../utils/youtubeUrl';

const UrlInput = ({ setCurMedia }) => {
  const { message, newNotification } = useContext(NotificationContext);
  const [input, setInput] = useState('');

  const handleSetMediaBtn = () => {
    let message = { data: 'Url is valid.', type: 'SUCCESS' };
    if (!youtubeUrl.isYoutube(input)) {
      message.data = 'Url is invalid!';
      message.type = 'ERROR';
    } else setCurMedia({ url: input });
    newNotification(message);
  };
  return (
    <div className="m-auto h-[120px] grid grid-rows-2 sm:grid-cols-4 grid-cols-1 gap-y-2 sm:gap-x-2 w-[80%] justify-center items-center">
      <input
        type="text"
        placeholder="Input youtube url here"
        className="border-solid border-2 border-indigo-600 rounded-lg col-span-1 sm:col-span-3 pl-3 h-[80%] w-[90%] block m-auto"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button
        className="bg-blue-500 hover:bg-indigo-500 scale-[80%] hover:scale-[90%] sm:hover:scale-[100%] col-span-1 transition ease-in-out duration-300 font-bold text-white h-[80%]"
        onClick={handleSetMediaBtn}
      >
        Apply
      </button>
    </div>
  );
};
export default UrlInput;
