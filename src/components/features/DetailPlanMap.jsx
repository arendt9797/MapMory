import { useRef } from 'react';
import useDetailMapcreate from '../../lib/hooks/useDetailMapcreate';
import useDetailPolyline from '../../lib/hooks/useDetailPolyline';
import useGetMapPoints from '../../lib/hooks/useGetMapPoint';
import { detailPlanMapFile } from '../../constants/detailPlanPage';

const DetailPlanMap = ({ detailPlans }) => {
  const mapRef = useRef(null); // map을 통해 렌더링 될 Element

  useDetailMapcreate(mapRef, detailPlans[0].map_point);
  const mapPoints = useGetMapPoints(detailPlans);
  useDetailPolyline(mapRef, mapPoints);

  return (
    <>
      <div
        ref={mapRef}
        id={detailPlanMapFile.MAPID}
        style={{
          width: '500px', // 스타일링시 추후 변경
          height: '500px'
        }}
      />
    </>
  );
};

export default DetailPlanMap;
