import Title from '../components/commons/Title';
import GridBox from '../components/features/myPlanPage/GridBox';
import MyPlanCard from '../components/features/myPlanPage/MyPlanCard';
import StatusPage from '../components/features/myPlanPage/StatusPage';
import Button from '../components/commons/Button';
import { AUTH_STORAGE } from '../constants/storageKey';
import useMyPlan from '../lib/hooks/useMyPlan';

const MyPlanPage = () => {
  const testId = 'd0d35038-4aac-4eb1-a625-0775e2c64087';
  const nickname = JSON.parse(localStorage.getItem(AUTH_STORAGE)).state.userInfo.nickname;

  const { data, error, fetchNextPage, hasNextPage, isFetching, isLoading } = useMyPlan(testId);

  if (error) {
    return <StatusPage>오류가 발생했습니다.</StatusPage>;
  }
  if (isLoading) {
    return <StatusPage>로딩중입니다.</StatusPage>;
  }
  return (
    <main className="p-10 flex flex-col justify-center items-center m-">
      <Title size={'3xl'} className="m-5">
        {nickname}의 여행 계획 리스트
      </Title>
      <GridBox>{data?.pages.map((page) => page.map((item) => <MyPlanCard key={item.id} item={item} />))}</GridBox>
      {hasNextPage && (
        <Button theme="primary" size="md" onClick={() => fetchNextPage()}>
          {isFetching ? '로딩중...' : '더보기 +'}
        </Button>
      )}
    </main>
  );
};

export default MyPlanPage;
