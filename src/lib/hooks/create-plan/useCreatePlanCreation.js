import { useState } from 'react';

export const useCreatePlanCreation = (
  setConfirmedMarkers,
  tempMarker,
  setTempMarker,
  setDetailPlans,
  roadAddress,
  setRoadAddress
) => {
  const [plan, setPlan] = useState({
    memo: '',
    date: '',
    time: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlan((prev) => ({ ...prev, [name]: value }));
  };

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
        planDate: plan.date,
        planTime: plan.time,
        planMemo: plan.memo,
        mapPoint: tempMarker.position
      }
    ]);

    // 입력 필드 초기화 및 임시 마커 제거
    setPlan({ memo: '', date: '', time: '' });
    setRoadAddress('');
    setTempMarker(null);
  };

  return { plan, handleChange, handleSubmit };
};
