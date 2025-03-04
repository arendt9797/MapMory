// 좌표 → 주소 변환
export const getRoadAddress = async (tempMarker) => {
  const { naver } = window;

  return new Promise((resolve, reject) => {
    naver.maps.Service.reverseGeocode(
      {
        coords: tempMarker.position,
        orders: naver.maps.Service.OrderType.ADDR // 주소 정보
      },
      function (status, response) {
        if (status !== naver.maps.Service.Status.OK) {
          alert('주소를 가져오지 못했습니다.');
          return reject('주소 조회 실패');
        }
        const addresses = response.v2.address;
        const address = addresses.roadAddress || addresses.jibunAddress;
        resolve(address);
      }
    );
  });
};
