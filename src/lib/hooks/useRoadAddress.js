import { useEffect } from 'react';
import { getRoadAddress } from '../apis/naverGetRoadAddress';

export const useRoadAddress = (tempMarker, setRoadAddress) => {
  useEffect(() => {
    (async () => {
      const address = await getRoadAddress(tempMarker);
      setRoadAddress(address);
    })();
  }, [tempMarker]);
};
