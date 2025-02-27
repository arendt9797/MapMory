import { useEffect } from 'react';

const useNaverMap = (mapRef) => {
  const { naver } = window;
  useEffect(() => {
    mapRef.current = new naver.maps.Map('map', {
      logoControl: false,
      scaleControl: false,
      mapDataControl: false,
      zoomControl: true,
      zoom: 17
    });
  }, []);
};

export default useNaverMap;
