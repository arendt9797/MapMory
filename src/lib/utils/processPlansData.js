const processPlansData = (detail_plans) => {
  const datedPlansObj = detail_plans.reduce((acc, cur) => {
    acc[cur.plan_date] = acc[cur.plan_date] || [];
    acc[cur.plan_date].push(cur.place);
    return acc;
  }, {});

  const datedPlansArr = Object.entries(datedPlansObj).map(([date, place]) => {
    return { date: date, places: place };
  });

  return datedPlansArr;
};

export default processPlansData;
