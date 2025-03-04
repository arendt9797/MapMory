const AuthInput = ({ labelName, errorMessage, button, ...props }) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-gray-600 text-sm font-medium"> {labelName} </label>
      <div className="flex items-center gap-2">
        <input
          {...props}
          className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        {button && <div className="shrink-0 text-white">{button}</div>}
      </div>
      {errorMessage && (
        <p className={`text-sm mt-1 ${errorMessage.includes('사용 가능한') ? 'text-green-500' : 'text-red-500'}`}>
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default AuthInput;
