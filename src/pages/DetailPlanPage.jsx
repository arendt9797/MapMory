import { useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailPlanMap from '../components/features/DetailPlanMap';
import StatusPage from '../components/features/myPlanPage/StatusPage';
import { useEffect } from 'react';
import { useDetailPlan } from '../lib/hooks/useDetailPlan';
import { DetailPlanList } from '../components/features/DetailPlanList';

const DetailPlanPage = () => {
  const { id } = useParams();
  const [plan, setPlan] = useState({});
  const [detailPlans, setDetailPlans] = useState([]);
  const [markerMemo, setMarkerMemo] = useState('다음은 무엇을 할까요?');

  // params에 해당하는 plan 호출
  const { planData, isDataError, isDataPending } = useDetailPlan(id);

  useEffect(() => {
    if (planData) {
      setPlan(planData);
      const sortedDetailPlans = [...planData.detail_plans].sort((a, b) => {
        const dateA = new Date(`${a.plan_date} ${a.plan_time}`);
        const dateB = new Date(`${b.plan_date} ${b.plan_time}`);
        return dateA - dateB;
      });

      setDetailPlans(sortedDetailPlans);
    }
  }, [id, planData]);

  if (isDataError) {
    return <StatusPage>오류가 발생했습니다.</StatusPage>;
  }

  if (isDataPending) {
    return <StatusPage>로딩중입니다.</StatusPage>;
  }

  return (
    <div className="relative h-[calc(100vh-60px)]">
      {detailPlans.length > 0 ? (
        <>
          <DetailPlanMap detailPlans={detailPlans} setMarkerMemo={setMarkerMemo} />
          <DetailPlanList detailPlans={detailPlans} markerMemo={markerMemo} plan={plan} />
        </>
      ) : (
        `지도 정보를 불러오고 있습니다.`
      )}
    </div>
  );
};

export default DetailPlanPage;
