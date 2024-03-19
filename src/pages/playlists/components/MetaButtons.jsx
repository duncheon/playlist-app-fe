const MetaButtons = ({ setDisplayModal }) => {
  return (
    <div className="flex row-span-2 items-center">
      <button
        className="flex items-center justify-center h-[80%]  max-w-[250px] bg-gray-first rounded-2xl w-[75%] my-2 mx-2 bg-gray-first text-white-heavy"
        onClick={() => setDisplayModal(true)}
      >
        New playlist
      </button>
    </div>
  );
};

export default MetaButtons;
