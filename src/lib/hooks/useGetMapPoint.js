const useGetMapPoints = (datas) => {
  const mapPoints = datas.map((data) => data.map_point);
  return mapPoints;
};

export default useGetMapPoints;
