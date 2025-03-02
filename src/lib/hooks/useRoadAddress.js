import { useEffect } from 'react';
import { getRoadAddress } from '../apis/naverGetRoadAddress';

export const useRoadAddress = (tempMarker, setRoadAddress) => {
  useEffect(() => {
    tempMarker &&
      (async () => {
        const address = await getRoadAddress(tempMarker);
        setRoadAddress(address);
      })();
  }, [tempMarker]);
};
