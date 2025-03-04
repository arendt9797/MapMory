import { useState, useRef } from 'react';
import NaverMap from '../components/features/create-plan-page/NaverMap';
import CreatePlanCreated from '../components/features/create-plan-page/CreatePlanCreated';
import CreatePlanCreation from '../components/features/create-plan-page/CreatePlanCreation';
import useNaverMap from '../lib/hooks/create-plan/useNaverMap';
import { useMapClickListner } from '../lib/hooks/create-plan/useMapClickListner';
import useBeforeConfirmedMarker from '../lib/hooks/create-plan/useBeforeConfirmedMarker';
import useConfirmedMarkers from '../lib/hooks/create-plan/useConfirmedMarkers';
import { useHandleDeleteMarker } from '../lib/hooks/create-plan/useHandleDeleteMarker';
import useLocationStore from '../stores/locationStore';

const CreatePlanPage = () => {
  const mapRef = useRef(null);
  const selectedLocation = useLocationStore((state) => state.selectedLocation);
  const [confirmedMarkers, setConfirmedMarkers] = useState([]);
  const [beforeConfirmedMarker, setBeforeConfirmedMarker] = useState(null);
  const [detailPlans, setDetailPlans] = useState([]);

  useNaverMap(mapRef, selectedLocation);
  useMapClickListner(mapRef, setBeforeConfirmedMarker);
  useBeforeConfirmedMarker(mapRef, beforeConfirmedMarker);
  useConfirmedMarkers(mapRef, confirmedMarkers);

  const handleDeleteMarker = useHandleDeleteMarker(setConfirmedMarkers, setDetailPlans);

  return (
    <>
      <NaverMap />
      <div className="w-1/3 bg-white shadow-2xl grid grid-rows-[2fr_5fr] absolute top-0 right-0 p-6 space-y-4 h-full">
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
          onHandleDeleteMarker={handleDeleteMarker}
        />
      </div>
    </>
  );
};

export default CreatePlanPage;
