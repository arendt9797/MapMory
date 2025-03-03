// import { Link } from 'react-router-dom';

import { useState } from 'react';
import { useEffect, useRef } from 'react';

// import { CREATEPLAN } from '../constants/pagePaths';
const HomePage = () => {
  const mapRef = useRef(null);
  //기본 위치값(사용자위치 못가져왔을때 서울로)
  const [location, setLocation] = useState({ lat: 37.5666103, lng: 126.9783882 });
  const [address, setAddress] = useState({}); // 주소를 저장할 상태 변수 추가

  useEffect(() => {
    //내위치
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({ lat: position.coords.latitude, lng: position.coords.longitude });
      });
    } else {
      setLocation();
    }
  }, []);

  useEffect(() => {
    // 지도 표시
    if (window.naver && mapRef.current) {
      const naverMap = new window.naver.maps.Map(mapRef.current, {
        center: new window.naver.maps.LatLng(location.lat, location.lng),
        zoom: 10
      });
      //마커 표시
      new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(location.lat, location.lng),
        map: naverMap
      });
      //클릭이벤트
      window.naver.maps.Event.addListener(naverMap, 'click', (e) => {
        const latlng = e.latlng;
        window.naver.maps.Service.reverseGeocode(
          {
            coords: latlng, // 클릭한 위치 좌표
            orders: [window.naver.maps.Service.OrderType.ADDR]
          },
          function (status, response) {
            const result = response.v2; // 검색 결과의 컨테이너
            const address = result.address; // 검색 결과로 만든 주소
            setAddress(address);
            console.log(address);
            // do Something
          }
        );
      });
    }
  }, [location]);

  return (
    <div className="h-[calc(100vh-60px)] relative">
      <div id="mapDiv" ref={mapRef} style={{ width: '100%', height: '100%' }}>
        지도 api
      </div>
      {address.jibunAddress && (
        <div className="absolute right-0 top-0 p-4 bg-white h-full">{`${address.jibunAddress}`}</div>
      )}
    </div>
  );
};

export default HomePage;
