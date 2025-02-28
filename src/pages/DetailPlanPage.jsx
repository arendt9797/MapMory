import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../lib/apis/supabaseClient';
import DetailPlanMap from '../components/features/DetailPlanMap';

const DetailPlanPage = () => {
  // params에 해당하는 plan 호출
  const { id } = useParams();
  const [plan, setPlan] = useState({});
  const [detailPlans, setDetailPlans] = useState([]);

  //todo params에 해당하는 plan의 id 값을 가지고 있는 모든 detail-plans 가져오기

  const getPlan = async (id) => {
    const { data, error } = await supabase.from('plans').select('*');

    if (error) {
      console.error(error);
      return error;
    }

    // plan id와 params로 받은 id가 일치하는 plan 필터링
    // data.find((data) => data.id === Number(id));
    //*현재는 uuid라서 Number없이 테스트 중
    //todo uuid -> int

    return data.find((data) => data.id === id);
  };

  const getDetailPlans = async (id) => {
    const { data, error } = await supabase.from('detail_plans').select('*').order('plan_date').order('plan_time');

    if (error) {
      console.error(error);
      return error;
    }

    return data.filter((data) => data.plan_id === id);
  };

  useEffect(() => {
    const fetchData = async () => {
      const planData = await getPlan(id);
      setPlan(planData);
      const detailPlans = await getDetailPlans(planData.id);
      setDetailPlans(detailPlans);
    };
    fetchData();
  }, [id]);

  // console.log('plan', plan);
  // console.log('detailPlans', detailPlans);

  return (
    <div className="h-full w-screen bg-red">
      <div className="text-red-600">지도</div>
      <DetailPlanMap detailPlans={detailPlans} />
      <div>
        <h3>클릭한 장소 이름 </h3>
        <div>
          <h4>내가 찜한 장소</h4>
          <ul>
            {detailPlans.map((plan) => {
              return (
                <li key={plan.id}>
                  <p>{plan.place}</p>
                  <p>{plan.date}</p>
                  <p>{plan.plan_time}</p>
                  <p>{plan.plan_memo}</p>
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
