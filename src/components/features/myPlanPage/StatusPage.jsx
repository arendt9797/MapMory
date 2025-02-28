import { AUTH_STORAGE } from '../../../constants/storageKey';
import Title from '../components/commons/Title';

const StatusPage = ({ children }) => {
  const nickname = JSON.parse(localStorage.getItem(AUTH_STORAGE)).state.userInfo.nickname;

  return (
    <main className="p-10 flex flex-col justify-center items-center">
      <Title fontSize={'3xl'} margin={'md'}>
        {nickname}의 여행 계획 리스트
      </Title>
      <div className="w-4/5 flex justify-center h-52 items-center">{children}</div>
    </main>
  );
};

export default StatusPage;
