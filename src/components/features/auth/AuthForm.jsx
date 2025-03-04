import { Link } from 'react-router-dom';
import AuthInput from './AuthInput';
import Title from '../../commons/Title';
import Button from '../../commons/Button';

const AuthForm = ({ authFormList, onSubmit, buttonName, errorMessage, placeholder, link }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <Title className="font-semibold text-center mb-6" size="2xl">
          {buttonName}
        </Title>
        <form onSubmit={onSubmit} className="space-y-4">
          {errorMessage && <div className="text-sm text-red-500 whitespace-nowrap overflow-auto">{errorMessage}</div>}
          {authFormList.map((authForm, idx) => (
            <div key={idx}>
              <AuthInput {...authForm} />
            </div>
          ))}
          <Button
            type="submit"
            theme="primary"
            size="lg"
            className="w-full flex items-center justify-center gap-2 font-semibold text-white rounded-md transition"
          >
            {buttonName}
          </Button>
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
