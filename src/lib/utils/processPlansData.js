const processPlansData = (detail_plans) => {
  const datedPlansObj = detail_plans.reduce((acc, cur) => {
    const PLAN_DATE = cur.plan_date;
    const PLAN_MEMO = cur.plan_memo;
    const PLAN_TIME = cur.plan_time;

    acc[PLAN_DATE] = acc[PLAN_DATE] || [];
    acc[PLAN_DATE].push({ memo: PLAN_MEMO, time: PLAN_TIME });
    return acc;
  }, {});

  const datedPlansArr = Object.entries(datedPlansObj).map(([date, plans]) => {
    const sortedPlans = plans.sort((a, b) => {
      return a.time.localeCompare(b.time);
    });
    return { date: date, memo: sortedPlans.map((plan) => plan.memo) };
  });
  return datedPlansArr;
};

export default processPlansData;
