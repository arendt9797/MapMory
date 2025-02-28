const useGetMapPoints = (datas) => {
  if (datas.length > 0) {
    const mapPoints = datas.map((data) => {
      const splitData = data.map.split(',').slice(1, 3);
      const arrData = splitData.map((it) => parseFloat(it.split(' ').pop()));
      const latLng = {
        lat: arrData[0],
        lng: arrData[1]
      };
      return latLng;
    });
    return mapPoints;
  }
};

export default useGetMapPoints;
