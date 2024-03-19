import { AiOutlineLoading } from 'react-icons/ai';
const LoadingState = ({ size }) => {
  return (
    <div className="flex w-full h-full  justify-center items-center">
      <AiOutlineLoading
        size={size}
        className="animate-spin"
        color="white"
      ></AiOutlineLoading>
    </div>
  );
};

export default LoadingState;
