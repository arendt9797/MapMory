const processPlansData = (detail_plans) => {
  const datedPlansObj = detail_plans.reduce((acc, cur) => {
    const PLAN_DATE = cur.plan_date;
    const PLAN_MEMO = cur.plan_memo;
    acc[PLAN_DATE] = acc[PLAN_DATE] || [];
    acc[PLAN_DATE].push(PLAN_MEMO);
    return acc;
  }, {});

  const datedPlansArr = Object.entries(datedPlansObj).map(([date, memo]) => {
    return { date: date, memo: memo };
  });

  return datedPlansArr;
};

export default processPlansData;
