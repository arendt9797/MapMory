const processPlansData = (detail_plans) => {
  const sortList = [...detail_plans].sort((a, b) => a.plan_date.localeCompare(b.plan_date));

  const datedPlansObj = sortList.reduce((acc, cur) => {
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
