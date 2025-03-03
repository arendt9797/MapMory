import { useEffect } from 'react';

export const useMapClickListner = (mapRef, setMarker) => {
  useEffect(() => {
    window.naver.maps.Event.addListener(mapRef.current, 'click', (e) => {
      setMarker({
        position: e.coord,
        number: null
      });
    });
  }, []);
};
