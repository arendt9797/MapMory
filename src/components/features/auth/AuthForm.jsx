import { Link } from 'react-router-dom';
import AuthInput from './AuthInput';

const AuthForm = ({ authFormList, onSubmit, buttonName, errorMessage, placeholder, link }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">{buttonName}</h2>
        <form onSubmit={onSubmit} className="space-y-4">
          {errorMessage && <div className="text-sm text-red-500 whitespace-nowrap overflow-auto">{errorMessage}</div>}
          {authFormList.map((authForm, idx) => (
            <div key={idx}>
              <AuthInput {...authForm} />
            </div>
          ))}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3 text-lg font-semibold text-white bg-primary hover:bg-primaryHover rounded-md transition"
          >
            {buttonName}
          </button>
        </form>
        {placeholder && (
          <Link to={link} className="text-gray-400 text-center block mt-4">
            {placeholder}
          </Link>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
