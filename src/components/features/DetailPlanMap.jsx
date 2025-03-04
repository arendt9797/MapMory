import { useRef } from 'react';
import { useNaverMapInitializer, useNaverMapObject } from '../../lib/hooks/useDetailMapcreate';
import { markerFile, planMapFile, polylineFile } from '../../constants/naverMap';

const DetailPlanMap = ({ detailPlans }) => {
  const map = useNaverMapObject(); // 생성된 map mapRef에 전달
  const mapRef = useRef(map); // map을 통해 렌더링 될 Element
  const { naver } = window;

  // 맵 초기 설정
  useNaverMapInitializer({ mapRef, firstPlan: detailPlans[0] });

  if (mapRef.current) {
    const mapPoints = detailPlans.map((detailPlan) => detailPlan.map_point);
    const polyline = new naver.maps.Polyline({
      map: mapRef.current,
      path: [],
      strokeColor: polylineFile.POLYLINECOLOR,
      strokeWeight: polylineFile.STROKEWEIGHT
    });

    mapPoints.map((point, index) => {
      const coord = new naver.maps.LatLng(point);
      const path = polyline.getPath();
      const marker = new naver.maps.Marker({
        map: mapRef.current,
        position: coord,
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
                  ">${index + 1}</div>`,
          anchor: new naver.maps.Point(markerFile.ANCHORPOINT, markerFile.ANCHORPOINT)
        }
      });

      // 마커를 클릭하면 지도의 중심에 띄워줌
      naver.maps.Event.addListener(marker, markerFile.CLICK, (e) => {
        const markerPoint = e.coord;
        mapRef.current.zoomBy(markerFile.ZOOM, markerPoint, true);
        mapRef.current.setCenter(markerPoint);
      });

      return path.push(coord);
    });
  }

  return (
    <>
      <div
        ref={mapRef}
        id={planMapFile.MAPID}
        style={{
          width: '500px', // 스타일링시 추후 변경
          height: '500px'
        }}
      />
    </>
  );
};

export default DetailPlanMap;
