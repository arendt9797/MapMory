import { useQuery } from '@tanstack/react-query';
import { supabase } from '../lib/apis/supabaseClient';
import MyPlanCard from '../components/features/MyPlanCard';

const MyPlanPage = () => {
  const getMyPosts = async () => {
    const { data } = await supabase.from('plans').select('*');
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
  console.log('testData', testData);

  return (
    <div className="p-10">
      <h1 className="font-bold text-3xl text-center">수임이가 계획한 여행 일정 리스트</h1>
      <div className="grid gap-10 m-12 grid-cols-3 justify-evenly">
        {testData.map((item) => (
          <MyPlanCard item={item} />
        ))}
      </div>
    </div>
  );
};

export default MyPlanPage;
