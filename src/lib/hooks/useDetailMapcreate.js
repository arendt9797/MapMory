import { useEffect, useState } from 'react';
import { mapCreateFile, planMapFile } from '../../constants/detailPlanPage';

// 생성된 맵의 중심을 계획의 첫 위치로 설정
export const useNaverMapInitializer = ({ mapRef, firstPlan }) => {
  useEffect(() => {
    mapRef.current = new window.naver.maps.Map(mapRef.current, {
      center: new window.naver.maps.LatLng(firstPlan.map_point._lat, firstPlan.map_point._lng),
      zoom: mapCreateFile.ZOOM
    });
  }, [mapRef, firstPlan]);
};

/**
 * @returns {naver.maps.Map}
 * 맵 객체 생성
 */
export const useNaverMapObject = () => {
  const [mapObject, setMapObject] = useState(null);

  useEffect(() => {
    if (!mapObject) {
      setMapObject(new window.naver.maps.Map(planMapFile.MAPID));
    }
  }, [mapObject]);

  return mapObject;
};
