import { useEffect } from 'react';

export const useMapClickListner = (mapRef, setMarkers) => {
  useEffect(() => {
    window.naver.maps.Event.addListener(mapRef.current, 'click', (e) => {
      setMarkers((prevMarkers) => [
        ...prevMarkers,
        {
          position: e.coord,
          number: prevMarkers.length + 1 // 클릭한 순서대로 번호 증가
        }
      ]);
    });
  }, []);
};
