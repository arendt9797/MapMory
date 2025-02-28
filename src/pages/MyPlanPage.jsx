import { useQuery } from '@tanstack/react-query';
import { supabase } from '../lib/apis/supabaseClient';
import MyPlanCard from '../components/features/MyPlanCard';

const MyPlanPage = () => {
  const getMyPosts = async () => {
    const { data } = await supabase.from('plans').select(`* , detail_plans(place, plan_date, plan_time, map)`);
    return data;
  };

  const {
    data: testData,
    isPending: isTestPending,
    isError: isTestError
  } = useQuery({
    queryFn: getMyPosts,
    queryKey: ['plans']
  });

  if (isTestError) {
    return <div>에러</div>;
  }
  if (isTestPending) {
    return <div>로딩</div>;
  }

  return (
    <div className="p-10 flex flex-col justify-center items-center">
      <h1 className="font-bold text-3xl text-center m-5">닉네임의 여행 계획 리스트</h1>
      <div className="w-4/5 grid grid-cols-3 gap-20 p-10">
        {testData.map((item) => (
          <MyPlanCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MyPlanPage;
