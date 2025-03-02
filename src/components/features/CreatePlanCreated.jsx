import { useState } from 'react';
import { supabase } from '../../lib/apis/supabaseClient';
import { useNavigate } from 'react-router-dom';
import { HOME } from '../../constants/pagePaths';

const CreatePlanCreated = ({ detailPlans, setDetailPlans }) => {
  const [planTitle, setPlanTitle] = useState('');

  const navigate = useNavigate();

  const [userId, setUserId] = useState(null);
  // useEffect(() => {
  //   const fetchUserId = async () => {
  //     const { data: sessionData, error } = await supabase.auth.getSession();
  //     if (error || !sessionData.session) {
  //       console.error('❌ 유저 정보를 가져오는 중 오류 발생:', error);
  //       return;
  //     }
  //     setUserId(sessionData.session.user.id);
  //     console.log('✅ 가져온 userId:', sessionData.session.user.id);
  //   };

  //   fetchUserId();
  // }, []);

  // console.log('userId =====>', userId);

  const handleSavePlan = async (e) => {
    e.preventDefault();
    if (!planTitle) {
      alert('계획 이름을 입력해주세요!');
      return;
    }
    if (detailPlans.length === 0) {
      alert('최소 1개 이상의 일정을 추가해주세요!');
      return;
    }

    const tempId = 'efa4e90c-c19b-407e-a3ba-42fdaabf7a48';
    // 'plans'테이블에 계획 추가
    const { data: planData, error: plansError } = await supabase
      .from('plans')
      .upsert({
        user_id: tempId,
        title: planTitle
      })
      .select()
      .single();

    if (plansError) {
      console.error('계획 저장 실패:', plansError.message);
      return;
    }

    const planId = planData.id;

    // 'detail_plans'테이블에 일정 추가
    detailPlans.map(async (detailPlan) => {
      const { error: detailPlanError } = await supabase.from('detail_plans').insert({
        place: detailPlan.place,
        map_point: detailPlan.mapPoint,
        plan_date: detailPlan.planDate,
        plan_time: detailPlan.planTime,
        plan_memo: detailPlan.planMemo,
        plan_id: planId
      });
      if (detailPlanError) {
        console.error('❌ 일정 저장 실패:', detailPlanError.message);
        return;
      }
    });
    alert('저장 완료!');
    setDetailPlans([]); // 저장 후 일정 목록 초기화
    setPlanTitle(H); // 계획 이름 초기화
  };

  const handleCancel = () => {
    setDetailPlans([]); // 저장 후 일정 목록 초기화
    setPlanTitle(''); // 계획 이름 초기화
    navigate(HOME)
  }

  return (
    <div>
      <form onSubmit={handleSavePlan}>
        <div className="grid border-2 border-primary rounded-md">
          <div className="border-b-2 border-primary p-5 flex items-center justify-center">
            <h1 className="text-lg text-secondary mr-2 font-bold">계획 이름 : </h1>
            <input
              type="text"
              placeholder="계획 이름을 적어주세요!"
              value={planTitle}
              onChange={(e) => setPlanTitle(e.target.value)}
              className="outline-none border-b-primary border-b-2 w-2/3 text-lg"
            />
          </div>
          <ul className="p-6 space-y-4 overflow-y-auto h-96 scrollbar scrollbar-thumb-primary scrollbar-track-transparent">
            {detailPlans.map((detailPlan, i) => (
              <li key={i} className="flex items-center gap-4">
                <div className="bg-white border-2 border-black p-2 rounded-full text-sm w-8 h-8 flex items-center justify-center">
                  {i + 1}
                </div>
                <div>
                  <span className="text-lg font-bold text-secondary">{detailPlan.planMemo}</span>
                  <div className="text-sm text-secondaryHover">
                    <span className="mr-4">날짜 : {detailPlan.planDate}</span>
                    <span>시간 : {detailPlan.planTime}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <button type="button" className="bg-primary" onClick={handleCancel}>
            취소
          </button>
          <button type="submit" className="bg-secondary text-white">
            계획 저장하기!
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePlanCreated;
