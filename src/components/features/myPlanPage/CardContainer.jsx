const CardContainer = ({ children }) => {
  return (
    <div className="w-full h-full max-w-xs mx-auto rounded-3xl overflow-hidden bg-white border-2 hover:shadow-lg transition-shadow duration-300">
      {children}
    </div>
  );
};

export default CardContainer;
