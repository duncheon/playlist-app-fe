import { useState } from 'react';
import { useEffect } from 'react';

const LoadingTransition = () => {
  const [displayText, setDisplayText] = useState('Loading');
  useEffect(() => {
    const effect = setInterval(() => {
      let newText = displayText;
      if (displayText.length < 10) {
        newText += '.';
      } else newText = 'Loading';
      setDisplayText(newText);
    }, 1000);

    return () => clearInterval(effect);
  });
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="h-fit w-fit flex flex-col justify-center items-center">
        <div className="animate-spin w-[50px]">
          <svg
            fill="none"
            className="h-full w-full"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              fill="gray"
              fillRule="evenodd"
              opacity="0.2"
            />
            <path
              d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z"
              fill="white"
            />
          </svg>
        </div>
        <span className="mt-[5px] text-white-heavy">{displayText}</span>
      </div>
    </div>
  );
};

export default LoadingTransition;
