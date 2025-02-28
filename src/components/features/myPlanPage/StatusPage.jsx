import React from 'react';

const StatusPage = ({ children }) => {
  return (
    <main className="p-10 flex flex-col justify-center items-center">
      <h1 className="font-bold text-3xl text-center m-5 text-secondary">닉네임의 여행 계획 리스트</h1>
      <div className="w-4/5 flex justify-center h-52 items-center">{children}</div>
    </main>
  );
};

export default StatusPage;
