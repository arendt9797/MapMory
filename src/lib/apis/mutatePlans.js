import { supabase } from './supabaseClient';

/**
 * mutateFn에 들어갈 비동기 함수
 * @returns {Promise}
 */
export const mutatePlans = async ({ planTitle, detailPlans, userId }) => {
  if (!planTitle) throw new Error('계획 이름을 입력해주세요!');
  if (detailPlans.length === 0) throw new Error('최소 1개 이상의 일정을 추가해주세요!');

  // 'plans' 테이블 업데이트
  const { data: planData, error: plansError } = await supabase
    .from('plans')
    .upsert({
      user_id: userId,
      title: planTitle
    })
    .select()
    .single();

  if (plansError) throw new Error(`계획 저장 실패: ${plansError.message}`);

  const planId = planData.id;

  // 'detail_plans' 테이블 업데이트
  const detailPlanPromises = detailPlans.map((detailPlan) =>
    supabase.from('detail_plans').insert({
      place: detailPlan.place,
      map_point: detailPlan.mapPoint,
      plan_date: detailPlan.planDate,
      plan_time: detailPlan.planTime,
      plan_memo: detailPlan.planMemo,
      plan_id: planId
    })
  );

  const detailPlanResults = await Promise.all(detailPlanPromises);
  detailPlanResults.forEach(({ error }) => {
    if (error) throw new Error(`계획 업데이트 실패: ${error.message}`);
  });

  // 반드시 promise를 반환해야 하지만, 반환값은 사용 안 하므로 null 반환
  return null
};
