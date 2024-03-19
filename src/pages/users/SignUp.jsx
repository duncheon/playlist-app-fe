import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const fields = [
  {
    id: 'username',
    type: 'text',
    label: 'Username',
    placeholder: 'Your username',
  },
  {
    id: 'password',
    type: 'password',
    label: 'Password',
    placeholder: 'Your password',
  },
  {
    id: 'repassword',
    type: 'password',
    label: 'Re-password',
    placeholder: 'Confirm your password',
  },
];

const SignUp = () => {
  return (
    <div className="bg-[#313131] w-full h-full flex items-center justify-center overflow-hidden">
      <div className="w-[95%] md:h-[500px] bg-white-heavy m-4 flex flex-col md:flex-row md:w-[85%] lg:w-[60%]">
        <div className="bg-baseblack w-full h-[150px] md:h-full flex md:items-end">
          <div className="w-full p-5 overflow-hidden">
            <h4 className="text-2xl text-white-heavy font-bold pb-6 pt-2 w-full">
              Welcome to signup form
            </h4>
            <p className="text-lg font-thin text-gray-200 pt-2 w-full">
              Enjoys the freedom beyond youtube playlists
            </p>
          </div>
        </div>
        <div className="w-full bg-white-heavy flex justify-center">
          <form className="my-2 w-[85%] flex flex-col">
            <h4 className="text-3xl font-thin my-6">Create an account</h4>
            {fields.map((field) => {
              return (
                <div
                  className="w-full h-[50px] mb-[15px] flex items-center"
                  key={field.id}
                >
                  <label
                    className="w-[50%] sm:w-[40%] font-bold"
                    htmlFor={field.id}
                  >
                    {field.label}
                  </label>
                  <input
                    className="w-full h-[90%] p-2 bg-[rgba(0, 0, 0, 0.03)]"
                    type={field.type}
                    id={field.id}
                    placeholder={field.placeholder}
                  ></input>
                </div>
              );
            })}
            <button className="mb-5">Sign-up</button>
            <p className="w-full text-center mb-4">
              Already have an account ? <Link to="/signin">Sign-in</Link>
            </p>
            <div className="flex flex-row justify-center items-center mb-4">
              <div className="w-[50%] border-t-[1px] border-slate-500 h-0 mx-2"></div>
              <p>Or</p>
              <div className="w-[50%] border-t-[1px] border-slate-500 h-0 mx-2"></div>
            </div>

            <div className="flex flex-row justify-center items-center gap-2">
              <button className="p-0 rounded-full w-[40px] aspect-square flex justify-center items-center">
                <FcGoogle size={30}></FcGoogle>
              </button>
              <button className="p-0 rounded-full w-[40px] aspect-square flex justify-center items-center">
                <FcGoogle size={30}></FcGoogle>
              </button>
              <button className="p-0 rounded-full w-[40px] aspect-square flex justify-center items-center">
                <FcGoogle size={30}></FcGoogle>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
