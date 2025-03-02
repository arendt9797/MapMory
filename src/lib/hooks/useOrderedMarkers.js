import { useRef, useEffect } from 'react';
import { makeConfirmedIcon, makeTempIcon } from '../utils/makeMarkerIcon';

export const useOrderedMarkers = (mapRef, confirmedMarkers, tempMarker) => {
  const tempMarkerRef = useRef(null);
  useEffect(() => {
    // 제출 후 확정된 마커 생성
    confirmedMarkers.forEach(({ position, number }) => {
      new window.naver.maps.Marker({
        position,
        map: mapRef.current,
        icon: {
          content: makeConfirmedIcon(number),
          anchor: new window.naver.maps.Point(15, 40)
        }
      });
    });

    // 임시 마커는 하나만 보이도록 설정
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
          content: makeTempIcon(),
          anchor: new window.naver.maps.Point(15, 40)
        }
      });
    }
  }, [confirmedMarkers, tempMarker]);
};
