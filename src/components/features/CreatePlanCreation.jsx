import { useState } from 'react';
import { getRoadAddress } from '../../lib/apis/naverGetRoadAddress';

const CreatePlanCreation = ({ setConfirmedMarkers, tempMarker, setTempMarker, setDetailPlans }) => {
  const [planMemo, setPlanMemo] = useState('');
  const [planDate, setPlanDate] = useState('');
  const [planTime, setPlanTime] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!tempMarker) return;

    // 추가 확정 시 마커 번호 부여
    setConfirmedMarkers((prev) => [...prev, { ...tempMarker, number: prev.length + 1 }]);

    // 도로명 주소
    const roadAddress = await getRoadAddress(tempMarker);

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
    setTempMarker(null);
  };

  return (
    <div className="absolute top-5 right-5 w-96 h-72 bg-white border-4 border-secondary p-2 rounded-md">
      <h1>너가 찍은 곳은 여기야!</h1>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input type="text" placeholder="메모메모" value={planMemo} onChange={(e) => setPlanMemo(e.target.value)} />
        <input type="date" value={planDate} onChange={(e) => setPlanDate(e.target.value)} />
        <input type="time" value={planTime} onChange={(e) => setPlanTime(e.target.value)} />
        <button type="submit" className="w-20 bg-primary">
          추가하기!
        </button>
      </form>
    </div>
  );
};

export default CreatePlanCreation;
