import { useState } from 'react';
import { supabase } from '../../lib/apis/supabaseClient';
import { useEffect } from 'react';

const CreatePlanCreated = ({ detailPlans, setDetailPlans }) => {
  const [planTitle, setPlanTitle] = useState('');
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

    const tempId = 'efa4e90c-c19b-407e-a3ba-42fdaabf7a48'
    // 'plans'테이블에 계획 추가
    const { data: planData, error: plansError } = await supabase
      .from('plans')
      .upsert({
        user_id: tempId,
        title: planTitle
      })
      .select().single()

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
    })
    alert('저장 완료!');
    setDetailPlans([]); // 저장 후 일정 목록 초기화
    setPlanTitle(''); // 계획 이름 초기화
  };

  return (
    <div className="absolute bottom-5 right-5 w-96 h-96 bg-white border-4 border-secondary p-2 rounded-md">
      <form onSubmit={handleSavePlan}>
        <h3>계획 이름</h3>
        <input
          type="text"
          placeholder="계획의 이름은?"
          value={planTitle}
          onChange={(e) => setPlanTitle(e.target.value)}
        />
        <button type="submit" className="bg-primary">
          계획 저장하기!
        </button>
      </form>
      <div className="flex items-center gap-4">
        <div className="bg-white border-2 border-black p-2 rounded-full text-sm w-8 h-8 flex items-center justify-center">
          1
        </div>
        <span>선택한 장소</span>
        <span>선택한 날짜</span>
        <span>선택한 시간</span>
      </div>
    </div>
  );
};

export default CreatePlanCreated;
