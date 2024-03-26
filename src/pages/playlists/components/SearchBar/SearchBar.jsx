import { FaSearch } from 'react-icons/fa';
const SearchBar = ({ styles }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className={styles}>
      <input
        type="text"
        placeholder="Search your playlist"
        className="rounded-md pl-2 pr-[40px] h-[35px] w-[200px] lg:w-[300px] text-black"
      ></input>
      <button
        type="submit"
        className="absolute p-0 aspect-square z-10 h-[35px] flex justify-center items-center rounded-none hover:border-black"
      >
        <FaSearch size={20} color="black"></FaSearch>
      </button>
    </form>
  );
};

export default SearchBar;
