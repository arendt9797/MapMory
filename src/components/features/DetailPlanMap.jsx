import { useRef } from 'react';
import useDetailMapcreate from '../../lib/hooks/useDetailMapcreate';
import useDetailPolyline from '../../lib/hooks/useDetailPolyline';
import useGetMapPoints from '../../lib/hooks/useGetMapPoint';

const DetailPlanMap = ({ detailPlans }) => {
  const mapRef = useRef(null); // map을 통해 렌더링 될 Element
  const lat = 37;
  const lng = 127;

  useDetailMapcreate(mapRef, lat, lng);
  const mapPoints = useGetMapPoints(detailPlans);
  useDetailPolyline(mapRef, mapPoints);

  return (
    <>
      <div
        ref={mapRef}
        id="map"
        style={{
          width: '500px',
          height: '500px'
        }}
      />
    </>
  );
};

export default DetailPlanMap;
