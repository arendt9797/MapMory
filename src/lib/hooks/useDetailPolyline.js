const useDetailPolyline = (mapRef, mapPoints) => {
  const { naver } = window;
  const number = 1;
  if (mapPoints) {
    const polyline = new naver.maps.Polyline({
      map: mapRef.current,
      path: [],
      strokeColor: '#5347AA',
      //* 날짜별로 다른 색이면 좋을 듯,,!
      strokeWeight: 2
    });
    // const points = [
    //   { y: 37.0106926, _lat: 37.0106926, x: 127.0030041, _lng: 127.0030041 },
    //   { y: 37.0041813, _lat: 37.0041813, x: 127.0016308, _lng: 127.0016308 },
    //   { y: 36.9982863, _lat: 36.9982863, x: 127.0022316, _lng: 127.0022316 }
    // ];
    // const test = [
    //   {
    //     lat: 37.0041813,
    //     lng: 127.0016308
    //   },
    //   {
    //     lat: 36.9982863,
    //     lng: 127.0022316
    //   },
    //   {
    //     lat: 37.0106926,
    //     lng: 127.0030041
    //   }
    // ];

    mapPoints.map((point) => {
      const path = polyline.getPath();
      const marker = new naver.maps.Marker({
        map: mapRef.current,
        position: point,
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
                  ">${number}</div>`,
          anchor: new naver.maps.Point(15, 15)
        }
      });

      naver.maps.Event.addListener(marker, 'click', (e) => {
        const markerPoint = e.coord;
        mapRef.setCenter(new naver.maps.LatLng(markerPoint.y, markerPoint.x));
      });
      console.log('path', path);
      return path.push(point);
    });
  }
};

export default useDetailPolyline;
