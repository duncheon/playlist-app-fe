import { useEffect, useState } from 'react';
const useDropDown = (ref, toggleBtnRef) => {
  const [isHidden, setIsHidden] = useState(true);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (toggleBtnRef.current && toggleBtnRef.current.contains(e.target)) {
        setIsHidden((isHidden) => !isHidden);
      } else if (ref.current && !ref.current.contains(e.target)) {
        setIsHidden(true);
      } else setIsHidden(false);
    };

    document.addEventListener('mousedown', handleClickOutside, {
      passive: true,
    });

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  return [isHidden, setIsHidden];
};

export default useDropDown;
