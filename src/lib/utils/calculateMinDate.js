export const getMinDate = (detailPlans) => {
  // detailPlans가 비어있다면 오늘 날짜를 min으로 설정
  if (detailPlans.length === 0) {
    return new Date().toISOString().split('T')[0];
  }

  // 기존 일정 중 가장 최근 날짜 가져오기
  const lastPlan = detailPlans.reduce((latest, plan) => {
    return new Date(plan.planDate) > new Date(latest.planDate) ? plan : latest;
  });

  return new Date(lastPlan.planDate).toISOString().split('T')[0];
};
