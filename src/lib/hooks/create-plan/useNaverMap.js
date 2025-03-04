import { useEffect } from 'react';
import { mapCreateFile, planMapFile } from '../../../constants/naverMap';

const useNaverMap = (mapRef, location) => {
  const { naver } = window;
  useEffect(() => {
    mapRef.current = new naver.maps.Map(planMapFile.MAPID, {
      center: new naver.maps.LatLng(location.lat, location.lng),
      logoControl: false,
      scaleControl: false,
      mapDataControl: false,
      zoomControl: true,
      zoom: mapCreateFile.ZOOM
    });
  }, []);
};

export default useNaverMap;
