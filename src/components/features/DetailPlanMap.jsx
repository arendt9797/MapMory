import { useRef } from 'react';
import { useNaverMapInitializer, useNaverMapObject } from '../../lib/hooks/useDetailMapcreate';
import { markerFile, planMapFile, polylineFile } from '../../constants/naverMap';
import { makeConfirmedIcon } from '../../lib/utils/makeMarkerIcon';

const DetailPlanMap = ({ detailPlans, setMarkerMemo }) => {
  const map = useNaverMapObject(); // 생성된 map mapRef에 전달
  const mapRef = useRef(map); // map을 통해 렌더링 될 Element
  const { naver } = window;

  // 맵 초기 설정
  useNaverMapInitializer({ mapRef, firstPlan: detailPlans[0] });

  if (mapRef.current) {
    const polyline = new naver.maps.Polyline({
      map: mapRef.current,
      path: [],
      strokeColor: polylineFile.POLYLINECOLOR,
      strokeWeight: polylineFile.STROKEWEIGHT
    });

    detailPlans.map((plan, index) => {
      const coord = new naver.maps.LatLng(plan.map_point);
      const path = polyline.getPath();
      const planAndMarker = {
        plan,
        marker: new naver.maps.Marker({
          map: mapRef.current,
          position: coord,
          value: plan.plan_memo,
          icon: {
            content: makeConfirmedIcon(index + 1),
            anchor: new naver.maps.Point(markerFile.ANCHORPOINT_X, markerFile.ANCHORPOINT_Y)
          }
        })
      };

      naver.maps.Event.addListener(planAndMarker.marker, markerFile.CLICK, (e) => {
        setMarkerMemo(planAndMarker.marker.value);
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
