import { useEffect } from 'react';

export const ZOOM = 14;
const useDetailMapcreate = (mapRef, lat, lng) => {
  useEffect(() => {
    mapRef.current = new window.naver.maps.Map(mapRef.current, {
      center: new window.naver.maps.LatLng(lat, lng),
      zoom: ZOOM
    });
  }, [mapRef, lat, lng]);
};

export default useDetailMapcreate;
