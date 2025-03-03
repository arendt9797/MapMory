import { useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailPlanMap from '../components/features/DetailPlanMap';
import StatusPage from '../components/features/myPlanPage/StatusPage';
import { useEffect } from 'react';
import { useDetailPlan } from '../lib/hooks/useDetailPlan';

const DetailPlanPage = () => {
  const { id } = useParams();
  const [plan, setPlan] = useState({});
  const [detailPlans, setDetailPlans] = useState([]);
  let day = 0;

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
    <div>
      <h2>{plan.title}</h2>
      {detailPlans.length > 0 ? <DetailPlanMap detailPlans={detailPlans} /> : `지도 정보를 불러오고 있습니다.`}
      <div>
        <div>
          <ul>
            {detailPlans.map((plan, index, arr) => {
              const checkDay = () => {
                return index === 0 || arr[index - 1].plan_date !== arr[index].plan_date;
              };

              return (
                <li key={plan.id}>
                  {checkDay() && <p>{(day += 1)}일차</p>}
                  <p>{`제목: ${plan.plan_memo}`}</p>
                  <p>{plan.plan_date}</p>
                  <p>{plan.plan_time}</p>
                  <p>{plan.place}</p>
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
