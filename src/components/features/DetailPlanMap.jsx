import { useRef } from 'react';
import { useNaverMapInitializer, useNaverMapObject } from '../../lib/hooks/useDetailMapcreate';
import renderDetailPolylineAndMarker from '../../lib/utils/renderDetailPolylineAndMarker';
import { planMapFile } from '../../constants/detailPlanPage';

const DetailPlanMap = ({ detailPlans }) => {
  const map = useNaverMapObject(); // 생성된 map mapRef에 전달
  const mapRef = useRef(map); // map을 통해 렌더링 될 Element

  // 맵 초기 설정
  useNaverMapInitializer({ mapRef, firstPlan: detailPlans[0] });

  // 맵 생성 후 polyline과 마커 생성
  if (mapRef.current) {
    renderDetailPolylineAndMarker(
      mapRef,
      detailPlans.map((detailPlan) => detailPlan.map_point)
    );
  }

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
