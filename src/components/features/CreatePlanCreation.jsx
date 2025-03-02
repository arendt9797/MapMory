import { useState } from 'react';
import { useRoadAddress } from '../../lib/hooks/useRoadAddress';
import { getMinDate } from '../../lib/utils/calculateMinDate';
import { useCreatePlanCreation } from '../../lib/hooks/useCreatePlanCreation';

const CreatePlanCreation = ({ setConfirmedMarkers, tempMarker, setTempMarker, detailPlans, setDetailPlans }) => {
  const [roadAddress, setRoadAddress] = useState('');
  useRoadAddress(tempMarker, setRoadAddress);
  const { plan, handleChange, handleSubmit } = useCreatePlanCreation(
    setConfirmedMarkers,
    tempMarker,
    setTempMarker,
    setDetailPlans,
    roadAddress,
    setRoadAddress
  );

  const minDate = getMinDate(detailPlans);

  return (
    <div className="flex justify-center items-center">
      {tempMarker ? (
        <form className="flex flex-col w-full" onSubmit={handleSubmit}>
          <input
            type="text"
            name="memo"
            placeholder="여기서 무엇을 할건가요?"
            value={plan.memo}
            onChange={handleChange}
            className="outline-none text-2xl text-secondary border-primary border-2 rounded-md p-2"
            required
          />
          <h3 className="text-md text-secondary ml-2">{roadAddress}</h3>
          <hr className="my-4" />
          <div className="flex justify-between gap-4">
            <input
              type="date"
              name="date"
              value={plan.date}
              onChange={handleChange}
              className="outline-none w-44 border-primary border-2 rounded-md px-2"
              required
              min={minDate}
            />
            <input
              type="time"
              name="time"
              value={plan.time}
              onChange={handleChange}
              className="outline-none w-44 border-primary border-2 rounded-md px-2"
              required
            />
            <button type="submit" className="w-20 bg-primary ">
              추가하기!
            </button>
          </div>
        </form>
      ) : (
        <h1 className="text-primary text-2xl">원하는 위치를 클릭해주세요!</h1>
      )}
    </div>
  );
};

export default CreatePlanCreation;
