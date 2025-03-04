import { useAuthStore } from '../../../stores/authStore';
import Text from '../../commons/Text';
import Title from '../../commons/Title';
import MainContainer from './MainContainer';

const StatusPage = ({ children }) => {
  const nickname = useAuthStore((state) => state.userInfo.nickname);

  return (
    <MainContainer>
      <Title size={'3xl'} className="m-5">
        {nickname}의 여행 계획 리스트
      </Title>
      <div className="w-4/5 m-5 flex justify-center h-96 items-center bg-gray-50">
        <Text size="xl">{children}</Text>
      </div>
    </MainContainer>
  );
};

export default StatusPage;
