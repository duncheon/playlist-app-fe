const UtilButton = ({ icon: Icon, btnClickHandle }) => {
  return (
    <button
      className="rounded-full aspect-square h-full  flex justify-center items-center bg-gray-first p-0"
      onClick={btnClickHandle}
    >
      <Icon className="m-0 p-0 text-xl" color="white"></Icon>
    </button>
  );
};

export default UtilButton;
