import { useEffect } from 'react';

export const useOrderedMarkers = (mapRef, markers) => {
  useEffect(() => {
    markers.forEach(({ position, number }) => {
      new window.naver.maps.Marker({
        position,
        map: mapRef.current,
        icon: {
          content: `<div style="
          background-color: white;
          border: 2px solid black;
          padding: 6px;
          border-radius: 50%;
          font-weight: bold;
          font-size: 14px;
          width: 30px;
          height: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          ">${number}</div>`,
          anchor: new window.naver.maps.Point(15, 15)
        }
      });
    });
  }, []);
};
