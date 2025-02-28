import { Link } from 'react-router-dom';
import processPlansData from '../../../lib/utils/processPlansData';
import CardContainer from './CardContainer';
import Title from '../../commons/Title';
import ContentsContainer from './ContentsContainer';
import Text from '../../commons/Text';
import { DETAILPLAN } from '../../../constants/pagePaths';

const MyPlanCard = ({ item }) => {
  const { id, title, detail_plans } = item;
  const datedPlansArr = processPlansData(detail_plans);

  const startDate = datedPlansArr[0].date;
  const endDate = datedPlansArr[datedPlansArr.length - 1].date;
  const plans = datedPlansArr.map((item, index) => `${index + 1}일차: ${item.places.join(', ')}`);

  return (
    <Link to={`${DETAILPLAN}/${id}`}>
      <CardContainer>
        <div className="h-48 bg-gray-100 flex justify-center items-center">지도 이미지가 들어갈</div>
        <ContentsContainer>
          <Text fontSize={'xs'} textColor={'secondary'}>{`${startDate} ~ ${endDate}의 일정`}</Text>
          <Title fontSize={'xl'}>{title}</Title>
          <div className="text-gray-500 mt-2 overflow-hidden line-clamp-3 whitespace-pre-line">
            <Text fontSize={'sm'}>{plans.map((plan) => plan + '\n')}</Text>
          </div>
        </ContentsContainer>
      </CardContainer>
    </Link>
  );
};

export default MyPlanCard;
