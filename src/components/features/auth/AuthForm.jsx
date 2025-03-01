import AuthInput from './authInput';

const AuthForm = ({ authFormList, onSubmit, buttonName }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">{buttonName}</h2>
        <form onSubmit={onSubmit} className="space-y-4">
          {authFormList.map((authForm, idx) => (
            <div key={idx}>
              <AuthInput {...authForm} />
            </div>
          ))}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3 text-lg font-semibold text-white bg-purple-600 hover:bg-purple-700 rounded-md transition"
          >
            {buttonName}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
