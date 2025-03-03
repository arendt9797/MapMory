import { useRef } from 'react';
import { useEffect } from 'react';
import { makeTempIcon } from '../../utils/makeMarkerIcon';

const useBeforeConfirmedMarker = (mapRef, tempMarker) => {
  const tempMarkerRef = useRef(null);

  useEffect(() => {
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
  }, [tempMarker]);
};

export default useBeforeConfirmedMarker;
