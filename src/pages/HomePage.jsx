import { useEffect, useRef, useState } from 'react';
import { CREATEPLAN } from '../constants/pagePaths';
import Button from '../components/commons/Button';
import useLocationStore from '../stores/locationStore';
import { mapCreateFile } from '../constants/naverMap';

const HomePage = () => {
  const mapRef = useRef(null);
  const [location, setLocation] = useState({});
  const [address, setAddress] = useState({});
  const { setSelectedLocation } = useLocationStore();
  const [isLoading, setIsLoading] = useState(true);
  const markerRef = useRef(null);

  useEffect(() => {
    //내위치
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({ lat: position.coords.latitude, lng: position.coords.longitude });
        setIsLoading(false);
      });
    } else {
      setLocation({ lat: 37.5666103, lng: 126.9783882 });
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    // 지도 표시
    if (window.naver && mapRef.current) {
      const naverMap = new window.naver.maps.Map(mapRef.current, {
        center: new window.naver.maps.LatLng(location.lat, location.lng),
        zoom: mapCreateFile.ZOOM
      });
      //마커 표시
      new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(location.lat, location.lng),
        map: naverMap,
        icon: {
          content: `
            <div style="position: relative;  padding: 10px; background-color: #67BCC4; color: white; font-size: 14px; font-weight: bold; border-radius: 10px; text-align: center;">
              내위치
              <div style="position: absolute; bottom: -10px; left: 50%; transform: translateX(-50%); width: 0; height: 0; border-left: 10px solid transparent; border-right: 10px solid transparent; border-top: 10px solid #67BCC4;"></div>
            </div>
          `,
          anchor: new window.naver.maps.Point(25, 25)
        }
      });
      //클릭이벤트
      window.naver.maps.Event.addListener(naverMap, 'click', (e) => {
        const latlng = e.latlng;
        setSelectedLocation(latlng.y, latlng.x);
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
        if (markerRef.current) {
          markerRef.current.setMap(null);
        }
        // 새 마커 추가
        const newMarker = new window.naver.maps.Marker({
          position: latlng,
          map: naverMap,
          icon: {
            content: `
              <div style="width: 60px; height: 60px; border:3px dashed #486284; background-color: #67BCC4; color: white; display: flex;justify-content: center; align-items: center; border-radius: 50%; font-size: 14px; font-weight: bold; text-align:center;">
                여기로<br>갈까요?
              </div>
            `,
            anchor: new window.naver.maps.Point(25, 25)
          }
        });
        markerRef.current = newMarker;
      });
    }
  }, [location, setSelectedLocation]);

  return (
    <div className="h-[calc(100vh-60px)] relative">
      {isLoading ? (
        <div className=" h-[calc(100vh-60px)] bg-primary text-white  flex items-center justify-center space-x-3">
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 12a10 10 0 0116-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>위치를 불러오는 중입니다...</span>
        </div>
      ) : (
        <div id="mapDiv" ref={mapRef} style={{ width: '100%', height: '100%' }}></div>
      )}

      {address.jibunAddress && (
        <div className="absolute right-5 top-5 p-4 bg-white h-50 flex flex-col items-center gap-4 rounded-md shadow-md">
          <p>{address.jibunAddress}</p>
          <Button to={CREATEPLAN} isLink="true" theme="secondary" size="md">
            계획 짜러 가기
          </Button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
