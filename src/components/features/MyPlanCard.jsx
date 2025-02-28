import { Link } from 'react-router-dom';
import processPlansData from '../../lib/utils/processPlansData';

const MyPlanCard = ({ item }) => {
  const { id, title, detail_plans } = item;
  const datedPlansArr = processPlansData(detail_plans);

  const startDate = datedPlansArr[0].date;
  const endDate = datedPlansArr[datedPlansArr.length - 1].date;
  const plans = datedPlansArr.map((item, index) => `${index + 1}일차: ${item.places.join(', ')}`);

  return (
    <Link to={`/detailPlan/${id}`}>
      <div className="w-full max-w-xs mx-auto rounded-3xl overflow-hidden bg-white border-2 hover:shadow-lg transition-shadow duration-300">
        <div className="h-48 bg-gray-100 flex justify-center items-center">지도 이미지가 들어갈</div>
        <div className="p-4">
          <p className="text-sm text-secondary">{`${startDate} ~ ${endDate}의 일정`}</p>
          <h2 className="text-xl font-bold text-secondary mt-2">{title}</h2>
          <div className="text-gray-500 mt-2 overflow-hidden line-clamp-3 h-14 text-sm whitespace-pre-line">
            <p>{plans.map((plan) => plan + '\n')}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MyPlanCard;
