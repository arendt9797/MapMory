import { useQuery } from '@tanstack/react-query';
import MyPlanCard from '../components/features/MyPlanCard';
import { getMyPlans } from '../lib/apis/planApi';

const MyPlanPage = () => {
  const testId = 'd0d35038-4aac-4eb1-a625-0775e2c64087';

  const {
    data: planData,
    isPending: isDataPending,
    isError: isDataError
  } = useQuery({
    queryFn: () => getMyPlans(testId),
    queryKey: ['plans']
  });

  return (
    <div className="p-10 flex flex-col justify-center items-center">
      <h1 className="font-bold text-3xl text-center m-5 text-secondary">닉네임의 여행 계획 리스트</h1>
      {isDataError && <div className="w-4/5 flex justify-center h-52 items-center">오류가 발생했습니다.</div>}
      {isDataPending && <div className="w-4/5 flex justify-center h-52 items-center">로딩중입니다.</div>}
      {!isDataError && !isDataPending && planData && (
        <div className="w-4/5 grid grid-cols-3 gap-20 p-10">
          {planData.map((item) => (
            <MyPlanCard key={item.id} item={item} />
          ))}
        </div>
      )}
      {/* <button className="bg-primary p-2 px-4 rounded-3xl text-white hover:bg-primaryHover">더보기 +</button> */}
    </div>
  );
};

export default MyPlanPage;
