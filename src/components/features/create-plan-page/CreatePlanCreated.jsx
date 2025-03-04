import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HOME } from '../../../constants/pagePaths';
import Button from '../../commons/Button';
import Title from '../../commons/Title';
import Text from '../../commons/Text';
import { useUserId } from '../../../lib/hooks/create-plan/useUserId.js';
import { useMutatePlans } from '../../../lib/hooks/create-plan/useMutatePlans.js';

const CreatePlanCreated = ({ detailPlans, setDetailPlans, onHandleDeleteMarker }) => {
  const navigate = useNavigate();
  const [planTitle, setPlanTitle] = useState('');
  const userId = useUserId();
  const updatePlans = useMutatePlans(setDetailPlans, setPlanTitle);

  const handleSavePlan = (e) => {
    e.preventDefault();
    updatePlans({ planTitle, detailPlans, userId });
  };

  const handleCancel = () => {
    setDetailPlans([]); // 일정 목록 초기화
    setPlanTitle(''); // 계획 이름 초기화
    navigate(HOME);
  };

  return (
    <div>
      <form onSubmit={handleSavePlan}>
        <div className="grid border-2 border-primary rounded-md">
          <div className="border-b-2 border-primary p-5 flex items-center justify-center">
            <Title theme="secondary" size="xl" className="mr-2 font-bold min-w-fit">
              계획 이름 :{' '}
            </Title>
            <input
              type="text"
              placeholder="계획 이름을 적어주세요!"
              value={planTitle}
              onChange={(e) => setPlanTitle(e.target.value)}
              className="outline-none border-b-primary border-b-2 w-2/3 text-lg"
            />
          </div>
          <ul className="p-6 space-y-6 overflow-y-auto h-80 scrollbar scrollbar-thumb-primary scrollbar-track-transparent">
            {detailPlans.map((detailPlan, idx) => (
              <li key={idx} className="flex items-center gap-4">
                <div className="bg-white border-2 border-secondary p-2 rounded-full text-sm font-bold text-secondary w-8 h-8 flex items-center justify-center">
                  {idx + 1}
                </div>
                <div>
                  <Title theme="secondary" size={''}>
                    {detailPlan.planMemo}
                  </Title>
                  <div className="text-sm text-secondaryHover">
                    <Text theme="secondary" size="md" className="inline mr-4">
                      날짜 : {detailPlan.planDate}
                    </Text>
                    <Text theme="secondary" size="md" className="inline">
                      시간 : {detailPlan.planTime}
                    </Text>
                  </div>
                </div>
                <Button
                  type="button"
                  className="bg-red-400 px-0 py-0 w-6 h-6"
                  onClick={() => onHandleDeleteMarker(idx)}
                >
                  &times;
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-x-2 flex justify-end mt-4">
          <Button type="button" theme="primary" onClick={handleCancel}>
            취소
          </Button>
          <Button type="submit" theme="secondary" className="w-1/4">
            저장하기
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreatePlanCreated;
