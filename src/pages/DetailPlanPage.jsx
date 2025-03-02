import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailPlanMap from '../components/features/DetailPlanMap';
import { getDetailPlans, getPlan } from '../lib/apis/getDetailPlans';

const DetailPlanPage = () => {
  const { id } = useParams();
  const [plan, setPlan] = useState({});
  const [detailPlans, setDetailPlans] = useState([]);
  let day = 0;

  // params에 해당하는 plan 호출
  useEffect(() => {
    const fetchData = async () => {
      const planData = await getPlan(id);
      setPlan(planData);

      const detailPlans = await getDetailPlans(planData.id);
      setDetailPlans(detailPlans);
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <h2>{plan.title}</h2>
      {detailPlans.length > 0 ? <DetailPlanMap detailPlans={detailPlans} /> : `지도 정보를 불러오고 있습니다.`}
      <div>
        <div>
          <ul>
            {detailPlans.map((plan, index, arr) => {
              const checkDay = () => {
                if (index === 0 || arr[index - 1].plan_date !== arr[index].plan_date) {
                  return true;
                }
                return false;
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
