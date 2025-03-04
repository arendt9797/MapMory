// import { Link } from 'react-router-dom';

import { useState } from 'react';
import { useEffect, useRef } from 'react';
import { CREATEPLAN } from '../constants/pagePaths';
import Button from '../components/commons/Button';
import locationStore from '../stores/locationStore';

// import { CREATEPLAN } from '../constants/pagePaths';
const HomePage = () => {
  const mapRef = useRef(null);
  //기본 위치값(사용자위치 못가져왔을때 서울로)
  const [location, setLocation] = useState({});
  const [address, setAddress] = useState({});
  const { selectedLocation, setSelectedLocation } = locationStore();

  useEffect(() => {
    //내위치
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({ lat: position.coords.latitude, lng: position.coords.longitude });
      });
    } else {
      setLocation({ lat: 37.5666103, lng: 126.9783882 });
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
        setSelectedLocation({ lat: latlng.y, lng: latlng.x });
        console.log(selectedLocation);
        window.naver.maps.Service.reverseGeocode(
          {
            coords: latlng,
            orders: [window.naver.maps.Service.OrderType.ADDR]
          },
          function (status, response) {
            const result = response.v2;
            const address = result.address;
            setAddress(address);
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
        <div className="absolute right-5 top-5 p-4 bg-white h-50 flex flex-col items-center gap-4">
          <p>{address.jibunAddress}</p>
          <Button to={CREATEPLAN} isLink="true" theme="secondary" size="lg">
            계획 짜러 가기
          </Button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
