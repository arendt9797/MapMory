import { useState, useRef } from 'react';
import NaverMap from '../components/commons/NaverMap';
import CreatePlanCreated from '../components/features/CreatePlanCreated';
import CreatePlanCreation from '../components/features/CreatePlanCreation';
import useNaverMap from '../lib/hooks/create-plan/useNaverMap';
import { useMapClickListner } from '../lib/hooks/create-plan/useMapClickListner';
import { useOrderedMarkers } from '../lib/hooks/create-plan/useOrderedMarkers';

const CreatePlanPage = () => {
  const mapRef = useRef(null);
  const [confirmedMarkers, setConfirmedMarkers] = useState([]);
  const [beforeConfirmedMarker, setBeforeConfirmedMarker] = useState(null);
  const [detailPlans, setDetailPlans] = useState([]);

  useNaverMap(mapRef);
  useMapClickListner(mapRef, setBeforeConfirmedMarker);
  useOrderedMarkers(mapRef, confirmedMarkers, beforeConfirmedMarker);

  const useHandleDeleteMarker = (markerIndex) => {
    setConfirmedMarkers(
      (prev) =>
        prev
          .filter((_, index) => index !== markerIndex) // 해당 마커 삭제
          .map((marker, newIndex) => ({ ...marker, number: newIndex + 1 })) // 번호 재정렬
    );
    setDetailPlans((prev) => prev.filter((_, index) => index !== markerIndex));
    useOrderedMarkers(mapRef, confirmedMarkers, beforeConfirmedMarker); // 일정도 같이 삭제
  };

  return (
    <>
      <NaverMap />
      <div className="w-1/3 bg-white shadow-2xl grid grid-rows-[1fr_4fr] absolute top-0 right-0 p-6 space-y-4 h-full">
        <CreatePlanCreation
          setConfirmedMarkers={setConfirmedMarkers}
          tempMarker={beforeConfirmedMarker}
          setTempMarker={setBeforeConfirmedMarker}
          detailPlans={detailPlans}
          setDetailPlans={setDetailPlans}
        />
        <CreatePlanCreated
          detailPlans={detailPlans}
          setDetailPlans={setDetailPlans}
          onHandleDeleteMarker={useHandleDeleteMarker}
        />
      </div>
    </>
  );
};

export default CreatePlanPage;
