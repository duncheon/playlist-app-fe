import LoadingTransition from './components/LoadingTransition';

const LoadingPage = () => {
  return (
    <div className="bg-baseblack w-full h-full flex">
      <LoadingTransition></LoadingTransition>
    </div>
  );
};

export default LoadingPage;
