import { useRef } from 'react';
import { useEffect } from 'react';
import { makeConfirmedIcon } from '../../utils/makeMarkerIcon';

const useConfirmedMarkers = (mapRef, confirmedMarkers) => {
  const markerRef = useRef([]);

  useEffect(() => {
    // 기존 마커 삭제
    markerRef.current.forEach((marker) => marker.setMap(null));
    markerRef.current = [];

    // 제출 후 확정된 마커 생성
    confirmedMarkers.forEach(({ position, number }) => {
      const marker = new window.naver.maps.Marker({
        position,
        map: mapRef.current,
        icon: {
          content: makeConfirmedIcon(number),
          anchor: new window.naver.maps.Point(15, 40)
        }
      });
      markerRef.current.push(marker);
    });
  }, [confirmedMarkers]);
};

export default useConfirmedMarkers;
