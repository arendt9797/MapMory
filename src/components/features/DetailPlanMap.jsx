import { useRef } from 'react';
import useDetailMapcreate from '../../lib/hooks/useDetailMapcreate';
import convertToMapPoint from '../../lib/utils/convertToMapPoint';
import rendereDetailPolyline from '../../lib/utils/renderDetailPolyline';
import { planMapFile } from '../../constants/detailPlanPage';

const DetailPlanMap = ({ detailPlans }) => {
  const mapRef = useRef(null); // map을 통해 렌더링 될 Element

  useDetailMapcreate(mapRef, detailPlans[0].map_point);
  const mapPoints = convertToMapPoint(detailPlans);
  rendereDetailPolyline(mapRef, mapPoints);

  return (
    <>
      <div
        ref={mapRef}
        id={planMapFile.MAPID}
        style={{
          width: '500px', // 스타일링시 추후 변경
          height: '500px'
        }}
      />
    </>
  );
};

export default DetailPlanMap;
