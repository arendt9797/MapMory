import { create } from 'zustand';

let selectedLocation = { lat: 37.5666103, lng: 126.9783882 };
const useLocationStore = create((set) => ({
  selectedLocation: { ...selectedLocation },
  setSelectedLocation: (lat, lng) => set({ selectedLocation: { lat, lng } })
}));

export default useLocationStore;
