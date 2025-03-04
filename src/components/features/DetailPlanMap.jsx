import { useRef } from 'react';
import { useNaverMapInitializer, useNaverMapObject } from '../../lib/hooks/useDetailMapcreate';
import { markerFile, planMapFile, polylineFile } from '../../constants/naverMap';
import { makeConfirmedIcon } from '../../lib/utils/makeMarkerIcon';
import { useEffect } from 'react';
import { useState } from 'react';
const DetailPlanMap = ({ detailPlans, setMarkerMemo }) => {
  const map = useNaverMapObject(); // 생성된 map mapRef에 전달
  const mapRef = useRef(map); // map을 통해 렌더링 될 Element
  const { naver } = window;
  const [markers, setMarkers] = useState([]);
  const [polyline, setPolyline] = useState(null);
  // 맵 초기 설정
  useNaverMapInitializer({ mapRef, firstPlan: detailPlans[0] });
  useEffect(() => {
    if (!mapRef.current || !naver) return;
    // 기존 마커와 폴리라인 삭제
    markers.forEach((marker) => marker.setMap(null));
    if (polyline) polyline.setMap(null);
    const newMarkers = [];
    const newPolyline = new naver.maps.Polyline({
      map: mapRef.current,
      path: [],
      strokeColor: polylineFile.POLYLINECOLOR,
      strokeWeight: polylineFile.STROKEWEIGHT
    });
    detailPlans.forEach((plan, index) => {
      const coord = new naver.maps.LatLng(plan.map_point);
      const path = newPolyline.getPath();
      const marker = new naver.maps.Marker({
        map: mapRef.current,
        position: coord,
        value: plan.plan_memo,
        icon: {
          content: makeConfirmedIcon(index + 1),
          anchor: new naver.maps.Point(markerFile.ANCHORPOINT_X, markerFile.ANCHORPOINT_Y)
        }
      });
      naver.maps.Event.addListener(marker, markerFile.CLICK, (e) => {
        setMarkerMemo(marker.value);
        const markerPoint = e.coord;
        mapRef.current.zoomBy(markerFile.ZOOM, markerPoint, true);
        mapRef.current.setCenter(markerPoint);
      });
      newMarkers.push(marker);
      path.push(coord);
    });
    setMarkers(newMarkers);
    setPolyline(newPolyline);
    const firstPlan = detailPlans[0];
    if (firstPlan) {
      const firstCoord = new naver.maps.LatLng(firstPlan.map_point);
      mapRef.current.setCenter(firstCoord);
    }
  }, [detailPlans]);
  return (
    <>
      <div ref={mapRef} id={planMapFile.MAPID} className="h-[100%]" />
    </>
  );
};
export default DetailPlanMap;
