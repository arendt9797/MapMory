import { markerFile, polylineFile } from '../../constants/detailPlanPage';

/**
 *
 * @param {*} mapRef
 * @param {{lng: number; lat: number;}[]} mapPoints
 */
const rendereDetailPolyline = (mapRef, mapPoints) => {
  const { naver } = window;

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
};

export default rendereDetailPolyline;
