import { useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailPlanMap from '../components/features/DetailPlanMap';
import StatusPage from '../components/features/myPlanPage/StatusPage';
import { useEffect } from 'react';
import { useDetailPlan } from '../lib/hooks/useDetailPlan';
import Title from '../components/commons/Title';
import Text from '../components/commons/Text';

const DetailPlanPage = () => {
  const { id } = useParams();
  const [plan, setPlan] = useState({});
  const [detailPlans, setDetailPlans] = useState([]);
  const [markerMemo, setMarkerMemo] = useState('다음은 무엇을 할까요?');
  let day = 0;
  let detailDay = 0;

  // params에 해당하는 plan 호출
  const { planData, isDataError, isDataPending } = useDetailPlan(id);

  useEffect(() => {
    if (planData) {
      setPlan(planData);
      const sortByDate = [...planData.detail_plans].sort((a, b) => a.plan_date.localeCompare(b.plan_date));
      const sortByTime = [...sortByDate].sort((a, b) => a.plan_time.localeCompare(b.plan_time));

      setDetailPlans(sortByTime);
    }
  }, [planData]);

  if (isDataError) {
    return <StatusPage>오류가 발생했습니다.</StatusPage>;
  }

  if (isDataPending) {
    return <StatusPage>로딩중입니다.</StatusPage>;
  }

  return (
    <div className="relative h-[calc(100vh-60px)]">
      {detailPlans.length > 0 ? (
        <DetailPlanMap detailPlans={detailPlans} setMarkerMemo={setMarkerMemo} />
      ) : (
        `지도 정보를 불러오고 있습니다.`
      )}
      <div className="w-1/3 bg-white shadow-2xl absolute top-0 right-0 p-6 h-[100%] overflow-scroll">
        <Title theme="secondary" size="4xl" className="mr-2 font-bold min-w-fit">
          {plan.title}
        </Title>
        <Text theme="secondary" size="2xl" className="p-2 border-2 border-primary rounded-md mx-0 my-4">
          {markerMemo}
        </Text>
        <div className="gird border-2 border-primary rounded-md ">
          <ul className="p-5">
            {detailPlans.map((plan, index, arr) => {
              const checkDay = () => {
                if (index === 0 || arr[index - 1].plan_date !== arr[index].plan_date) {
                  detailDay = 0;
                  return true;
                }
                return false;
              };

              return (
                <li key={plan.id} className="pb-5">
                  {checkDay() && (
                    <Text theme="secondary" size="2xl" className="mx-0 my-2.5">
                      {(day += 1)}일차 {plan.plan_date}
                    </Text>
                  )}
                  <div className="flex gap-5 items-center ">
                    <Text
                      theme="secondary"
                      size="lg"
                      className="bg-primary text-white w-[30px] h-[30px] flex flex-wrap justify-center items-center rounded-[100%]"
                    >
                      {(detailDay += 1)}
                    </Text>
                    <div className="flex-col bg-white shadow-lg rounded-xl p-4 w-[calc(100%-50px)]">
                      <Text theme="secondary" size="xl">
                        {plan.plan_memo} {plan.plan_time}
                      </Text>
                      <Text theme="secondary" size="md">
                        {plan.place}
                      </Text>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DetailPlanPage;
