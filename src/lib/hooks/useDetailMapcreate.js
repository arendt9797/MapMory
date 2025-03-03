import { useEffect } from 'react';
import { mapCreateFile } from '../../constants/detailPlanPage';

const useDetailMapcreate = (mapRef, point) => {
  useEffect(() => {
    mapRef.current = new window.naver.maps.Map(mapRef.current, {
      center: new window.naver.maps.LatLng(point._lat, point._lng),
      zoom: mapCreateFile.ZOOM
    });
  }, [mapRef, point._lat, point._lng]);
};

export default useDetailMapcreate;
