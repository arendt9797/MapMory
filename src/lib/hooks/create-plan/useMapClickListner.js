import { useEffect } from 'react';
import { markerFile } from '../../../constants/naverMap';

export const useMapClickListner = (mapRef, setMarker) => {
  useEffect(() => {
    window.naver.maps.Event.addListener(mapRef.current, markerFile.CLICK, (e) => {
      setMarker({
        position: e.coord,
        number: null
      });
    });
  }, []);
};
