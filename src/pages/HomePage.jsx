// import { Link } from 'react-router-dom';

import { useEffect, useRef } from 'react';

// import { CREATEPLAN } from '../constants/pagePaths';
const HomePage = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (window.naver && mapRef.current) {
      new window.naver.maps.Map(mapRef.current, {
        center: new window.naver.maps.LatLng(37.3595704, 127.105399),
        zoom: 10
      });
    }
  }, []);

  // var map = new naver.maps.Map('map', mapOptions);
  return (
    <div className="container h-full mx-auto flex flex-col items-center justify-center gap-20 min-h-[calc(100vh-60px)]">
      {/* <p className="text-5xl text-primaryHover font-semibold ">
        <span className="text-secondary">MAP</span>에 <span className="text-secondary">MEMORY</span>를 더하다!
      </p>
      <img src="/header-logo.png" className="w-[70px]" />
      <p className="text-4xl font-semibold text-primary">
        <span className="text-primaryHover">M</span>AP<span className="text-primaryHover">M</span>ORY
      </p>
      <Link to={CREATEPLAN} className="bg-secondary p-2 px-4 rounded-3xl text-white  hover:bg-secondaryHover">
        계획짜러 가기
      </Link> */}
      지도
      <div id="mapDiv" ref={mapRef} style={{ width: '100%', height: '500px' }}>
        지도 api
      </div>
    </div>
  );
};

export default HomePage;
