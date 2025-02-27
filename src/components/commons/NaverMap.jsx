import { useState } from 'react';
import { useRef } from 'react';
import useNaverMap from '../../lib/hooks/useNaverMap';
import { useMapClickListner } from '../../lib/hooks/useMapClickListner';
import { useOrderedMarkers } from '../../lib/hooks/useOrderedMarkers';

const NaverMap = () => {
  const mapRef = useRef(null);
  const [markers, setMarkers] = useState([]);
  
  useNaverMap(mapRef);
  useMapClickListner(mapRef, setMarkers)
  useOrderedMarkers(mapRef, markers)

  return <div id='map' className="w-full h-screen"></div>;
};

export default NaverMap;
