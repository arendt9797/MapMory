import { useState } from 'react';
import { useJibunAddress } from '../../../lib/hooks/create-plan/useJibunAddress';
import { calculateMinDate } from '../../../lib/utils/calculateMinDate';
import { useCreatePlanCreation } from '../../../lib/hooks/create-plan/useCreatePlanCreation';
import Button from '../../commons/Button';
import Text from '../../commons/Text';
import { MAX_LENGTH } from '../../../constants/formFields';

const CreatePlanCreation = ({ setConfirmedMarkers, tempMarker, setTempMarker, detailPlans, setDetailPlans }) => {
  const [jibunAddress, setJibunAddress] = useState('');
  useJibunAddress(tempMarker, setJibunAddress);
  const { plan, handleChange, handleSubmit } = useCreatePlanCreation(
    setConfirmedMarkers,
    tempMarker,
    setTempMarker,
    setDetailPlans,
    jibunAddress,
    setJibunAddress
  );

  const minDate = calculateMinDate(detailPlans);

  return (
    <div className="flex justify-center items-center">
      {tempMarker ? (
        <form className="flex flex-col w-full" onSubmit={handleSubmit}>
          <input
            type="text"
            name="memo"
            placeholder="여기서 무엇을 할건가요?"
            maxLength={MAX_LENGTH}
            value={plan.memo}
            onChange={handleChange}
            className="outline-none text-2xl text-secondary border-primary border-2 rounded-md p-2"
            required
          />
          <Text theme={'secondary'} size={'sm'} className="font-bold ml-2">
            {jibunAddress}
          </Text>
          <hr className="my-4" />
          <div className="flex justify-between">
            <input
              type="date"
              name="date"
              value={plan.date}
              onChange={handleChange}
              className="outline-none w-1/3 border-primary border-2 rounded-md px-2"
              required
              min={minDate}
            />
            <input
              type="time"
              name="time"
              value={plan.time}
              onChange={handleChange}
              className="outline-none w-1/3 border-primary border-2 rounded-md px-2"
              required
            />
            <Button type="submit" theme="secondary" size="md" className="w-1/4 min-w-fit">
              추가하기
            </Button>
          </div>
        </form>
      ) : (
        <h1 className="text-primary text-2xl">원하는 위치를 클릭해주세요!</h1>
      )}
    </div>
  );
};

export default CreatePlanCreation;
