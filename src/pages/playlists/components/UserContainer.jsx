import { useSelector } from 'react-redux';

const UserContainer = () => {
  const user = useSelector((state) => state.user.data);

  return (
    <div className="grid grid-cols-[75px_1fr] h-full w-full row-span-1">
      <span className="m-2 aspect-square rounded-full bg-danger grid col-span-1 items-center justify-center text-white-heavy text-2xl">
        V
      </span>
      <div className="grid grid-rows-2 py-[0.75rem] pl-[0.4rem]">
        <div className="text-lg w-full font-bold text-white-heavy">
          {user.fullname}
        </div>
        <div className="text-sm w-full text-gray-second">{user.username}</div>
      </div>
    </div>
  );
};

export default UserContainer;
