import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <div className="w-[100vw] h-full flex justify-center items-center m-0">
      <div className="w-[80%] h-full flex flex-col justify-center items-center">
        <img className="mb-4 w-full max-w-[800px]" src="/404.svg"></img>
        <button className="w-[50%] bg-baseblack p-1.5 w-[60%] max-w-[300px]">
          <Link to="/">Back to Home</Link>
        </button>
      </div>
    </div>
  );
};
export default Error404;
