import React from 'react';

const GridBox = ({ children }) => {
  return <div className="w-4/5 grid grid-cols-3 gap-20 p-10">{children}</div>;
};

export default GridBox;
