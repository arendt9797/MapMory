import { Link } from 'react-router-dom';

const MyPlanCard = ({ item }) => {
  const { id, title, detail_plans } = item;

  // 배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값);
  const testArr = detail_plans.reduce((acc, current) => {
    const newArr = { place: current.place, plan_time: current.plan_time };
    return { ...acc, [current.plan_date]: [...(acc[current.plan_date] || []), newArr] };
  }, {});

  // 위에서 만든 객체를 key로 돌려서 새로운 객체 return
  const resultArray = Object.entries(testArr)
    .map(([date, plans]) => ({ date, plans }))
    .sort((a, b) => a.date.localeCompare(b.date));

  const placeArray = resultArray.map((item) => ({
    date: item.date,
    places: item.plans.map((plan) => plan.place) // plans 배열에서 place만 추출
  }));

  return (
    <Link to={`/detailPlan/${id}`}>
      <div className=" rounded-3xl overflow-hidden bg-white border-2 w-72 hover:shadow-lg transition-shadow duration-300">
        {/* 지도 이미지 플레이스홀더 */}
        <div className="h-48 bg-gray-100 flex justify-center items-center">지도 이미지가 들어갈</div>
        {/*contents box*/}
        <div className="p-4">
          <p className="text-sm text-secondary">
            {resultArray[0].date} ~ {resultArray[resultArray.length - 1].date}의 일정
          </p>
          <h2 className="text-xl font-bold text-secondary mt-2">{title}</h2>
          <div className="text-gray-500 mt-2 overflow-hidden line-clamp-3 h-14 text-sm">
            {placeArray.map((item, index) => (
              <p key={index}>
                {index + 1}일차: {item.places.join(', ')}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MyPlanCard;
