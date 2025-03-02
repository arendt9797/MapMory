import { useState, useRef } from 'react';
import NaverMap from '../components/commons/NaverMap';
import CreatePlanCreated from '../components/features/CreatePlanCreated';
import CreatePlanCreation from '../components/features/CreatePlanCreation';
import useNaverMap from '../lib/hooks/useNaverMap';
import { useMapClickListner } from '../lib/hooks/useMapClickListner';
import { useOrderedMarkers } from '../lib/hooks/useOrderedMarkers';

const CreatePlanPage = () => {
  const mapRef = useRef(null);
  const [confirmedMarkers, setConfirmedMarkers] = useState([]);
  const [beforeConfirmedMarker, setBeforeConfirmedMarker] = useState(null);
  const [detailPlans, setDetailPlans] = useState([]);

  useNaverMap(mapRef);
  useMapClickListner(mapRef, setBeforeConfirmedMarker);
  useOrderedMarkers(mapRef, confirmedMarkers, beforeConfirmedMarker);
  
  return (
    <>
      <NaverMap />
      <div className="z-10">
        <CreatePlanCreation
          setConfirmedMarkers={setConfirmedMarkers}
          tempMarker={beforeConfirmedMarker}
          setTempMarker={setBeforeConfirmedMarker}
          setDetailPlans={setDetailPlans}
        />
        <CreatePlanCreated detailPlans={detailPlans} setDetailPlans={setDetailPlans} />
      </div>
    </>
  );
};

export default CreatePlanPage;
