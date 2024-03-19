import { AiOutlineLoading } from 'react-icons/ai';
const FormButton = ({ text, isLoading }) => {
  if (isLoading) {
    return (
      <button className="mb-5" type="submit" disabled>
        <div className="flex flex-row items-center justify-center gap-2">
          <AiOutlineLoading className="animate-spin"></AiOutlineLoading>
          <p>Sign-in</p>
        </div>
      </button>
    );
  } else
    return (
      <button className="mb-5" type="submit">
        {text}
      </button>
    );
};

export default FormButton;
