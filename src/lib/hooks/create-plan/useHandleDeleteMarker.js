import { useCallback } from 'react';

export const useHandleDeleteMarker = (setConfirmedMarkers, setDetailPlans) => {
  return useCallback((markerIndex) => {
    setConfirmedMarkers(
      (prev) =>
        prev
          .filter((_, index) => index !== markerIndex) // 해당 마커 삭제
          .map((marker, newIndex) => ({ ...marker, number: newIndex + 1 })) // 번호 재정렬
    );
    setDetailPlans((prev) => prev.filter((_, index) => index !== markerIndex)); // 해당 일정 삭제
  }, []);
};
