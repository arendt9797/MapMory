import { useEffect, useState } from 'react';

const TestPage = () => {
  const [mapSrc, setMapSrc] = useState('');

  useEffect(() => {
    const points = [
      { lat: 37.5665, lng: 126.978 },
      { lat: 37.5651, lng: 126.9895 }
    ];
    const markers = points.map((point) => `type:t|size:mid|pos:${point.lng} ${point.lat}`).join('|');
    const path = `type:polyline|color:red|weight:5|pos:${points.map((point) => `${point.lng} ${point.lat}`).join('|')}`;

    const params = new URLSearchParams({
      w: '300',
      h: '300',
      center: `${points[0].lng},${points[0].lat}`,
      level: '13',
      markers: markers,
      path: path
    }).toString();

    const mapUrl = `/map/map-static/v2/raster?${params}`;

    // API 요청해서 이미지 가져오기
    fetch(mapUrl)
      .then((res) => res.blob()) // 응답을 Blob(이미지 데이터)로 변환
      .then((blob) => {
        const objectURL = URL.createObjectURL(blob);
        setMapSrc(objectURL);
      })
      .catch((err) => console.error('Error fetching map:', err));
  }, []);

  return <div>{mapSrc ? <img src={mapSrc} alt="Naver Static Map" /> : <p>Loading map...</p>}</div>;
};

export default TestPage;
