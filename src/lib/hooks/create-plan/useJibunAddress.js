import { useEffect } from 'react';
import { getJibunAddress } from '../../apis/naverGetJibunAddress';

export const useJibunAddress = (tempMarker, setJibunAddress) => {
  useEffect(() => {
    tempMarker &&
      (async () => {
        const address = await getJibunAddress(tempMarker);
        setJibunAddress(address);
      })();
  }, [tempMarker]);
};
