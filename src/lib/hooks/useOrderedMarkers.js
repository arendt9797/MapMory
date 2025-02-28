import { useRef } from 'react';
import { useEffect } from 'react';

export const useOrderedMarkers = (mapRef, confirmedMarkers, tempMarker) => {
  const tempMarkerRef = useRef(null);
  useEffect(() => {
    // 제출 후 확정된 마커 생성
    confirmedMarkers.forEach(({ position, number }) => {
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

    // 임시 마커는 하나만 생기도록 설정
    if (tempMarkerRef.current) {
      tempMarkerRef.current.setMap(null);
      tempMarkerRef.current = null;
    }
    // 제출 전 임시 마커 생성
    if (tempMarker) {
      tempMarkerRef.current = new window.naver.maps.Marker({
        position: tempMarker.position,
        map: mapRef.current,
        icon: {
          content: `<div style="
          background-color: gray;
          opacity: 0.5;
          border: 2px dashed black;
          padding: 6px;
          border-radius: 50%;
          font-weight: bold;
          font-size: 14px;
          width: 30px;
          height: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          ">?</div>`,
          anchor: new window.naver.maps.Point(15, 15)
        }
      });
    }
  }, [confirmedMarkers, tempMarker]);
};
