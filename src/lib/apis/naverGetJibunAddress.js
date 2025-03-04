import Swal from 'sweetalert2';

// 좌표 → 주소 변환
export const getJibunAddress = async (tempMarker) => {
  const { naver } = window;

  return new Promise((resolve, reject) => {
    naver.maps.Service.reverseGeocode(
      {
        coords: tempMarker.position,
        orders: naver.maps.Service.OrderType.ADDR // 주소 정보
      },
      function (status, response) {
        if (status !== naver.maps.Service.Status.OK) {
          Swal.fire({
            icon: 'error',
            title: '주소 조회 실패!',
            text: `주소를 가져오는 도중 에러가 발생했습니다.`,
            confirmButtonText: '확인',
            confirmButtonColor: '#2E4769'
          });
          return reject('주소 조회 실패');
        }
        const addresses = response.v2.address;
        const address = addresses.jibunAddress || addresses.roadAddress;
        resolve(address);
      }
    );
  });
};
