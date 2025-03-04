const processPlansData = (detail_plans) => {
  const datedPlansObj = detail_plans.reduce((acc, cur) => {
    acc[cur.plan_date] = acc[cur.plan_date] || [];
    acc[cur.plan_date].push(cur.plan_memo);
    return acc;
  }, {});

  const datedPlansArr = Object.entries(datedPlansObj).map(([date, memo]) => {
    return { date: date, memo: memo };
  });

  return datedPlansArr;
};

export default processPlansData;
