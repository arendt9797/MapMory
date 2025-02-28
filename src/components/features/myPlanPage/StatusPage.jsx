import { AUTH_STORAGE } from '../../../constants/storageKey';

const StatusPage = ({ children }) => {
  const nickname = JSON.parse(localStorage.getItem(AUTH_STORAGE)).state.userInfo.nickname;

  return (
    <main className="p-10 flex flex-col justify-center items-center">
      <h1 className="font-bold text-3xl text-center m-5 text-secondary">{nickname}의 여행 계획 리스트</h1>
      <div className="w-4/5 flex justify-center h-52 items-center">{children}</div>
    </main>
  );
};

export default StatusPage;
