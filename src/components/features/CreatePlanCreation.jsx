import { useState } from 'react';
import { getRoadAddress } from '../../lib/apis/naverGetRoadAddress';
import { useRoadAddress } from '../../lib/hooks/useRoadAddress';

const CreatePlanCreation = ({ setConfirmedMarkers, tempMarker, setTempMarker, detailPlans, setDetailPlans }) => {
  const [planMemo, setPlanMemo] = useState('');
  const [planDate, setPlanDate] = useState('');
  const [planTime, setPlanTime] = useState('');
  const [roadAddress, setRoadAddress] = useState('');

  // 도로명 주소 가져오기
  useRoadAddress(tempMarker, setRoadAddress);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!tempMarker) return;

    // 추가 확정 시 마커 번호 부여
    setConfirmedMarkers((prev) => [...prev, { ...tempMarker, number: prev.length + 1 }]);

    // 추가한 정보 저장
    setDetailPlans((prev) => [
      ...prev,
      {
        place: roadAddress,
        planDate,
        planTime,
        planMemo,
        mapPoint: tempMarker.position
      }
    ]);

    // 입력 필드 초기화 및 임시 마커 제거
    setPlanMemo('');
    setPlanDate('');
    setPlanTime('');
    setRoadAddress('');
    setTempMarker(null);
  };

  return (
    <div className='flex justify-center items-center'>
      {tempMarker ? (
        <>
          <form className="flex flex-col " onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="여기서 무엇을 할건가요?"
              value={planMemo}
              onChange={(e) => setPlanMemo(e.target.value)}
              className="outline-none text-2xl text-secondary border-primary border-2 rounded-md p-2"
              required
            />
            <h3 className="text-md text-secondary ml-2">{roadAddress}</h3>
            <hr className='my-4'/>
            <div className="flex justify-between gap-4">
              <input type="date" value={planDate} onChange={(e) => setPlanDate(e.target.value)} className='w-44 border-primary border-2 rounded-md px-2' required/>
              <input type="time" value={planTime} onChange={(e) => setPlanTime(e.target.value)} className='w-44 border-primary border-2 rounded-md px-2' required/>
              <button type="submit" className="w-20 bg-primary ">
                추가하기!
              </button>
            </div>
          </form>
        </>
      ) : (
        <h1 className="text-primary text-2xl">원하는 위치를 클릭해주세요!</h1>
      )}
    </div>
  );
};

export default CreatePlanCreation;
