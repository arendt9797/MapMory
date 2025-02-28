import Title from '../components/commons/Title';
import GridBox from '../components/features/myPlanPage/GridBox';
import MyPlanCard from '../components/features/myPlanPage/MyPlanCard';
import StatusPage from '../components/features/myPlanPage/StatusPage';
import { AUTH_STORAGE } from '../constants/storageKey';
import useMyPlan from '../lib/hooks/useMyPlan';

const MyPlanPage = () => {
  const testId = 'd0d35038-4aac-4eb1-a625-0775e2c64087';
  const nickname = JSON.parse(localStorage.getItem(AUTH_STORAGE)).state.userInfo.nickname;

  const { planData, isDataError, isDataPending } = useMyPlan(testId);

  if (isDataError) {
    return <StatusPage>오류가 발생했습니다.</StatusPage>;
  }
  if (isDataPending) {
    return <StatusPage>로딩중입니다.</StatusPage>;
  }
  return (
    <main className="p-10 flex flex-col justify-center items-center m-">
      <Title fontSize={'3xl'} margin={'md'}>
        {nickname}의 여행 계획 리스트
      </Title>
      <GridBox>
        {planData.map((item) => (
          <MyPlanCard key={item.id} item={item} />
        ))}
      </GridBox>
      {/* <button className="bg-primary p-2 px-4 rounded-3xl text-white hover:bg-primaryHover">더보기 +</button> */}
    </main>
  );
};

export default MyPlanPage;
