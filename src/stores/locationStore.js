import { create } from 'zustand';

let selectedLocation = { lat: null, lng: null };
const useLocationStore = create((set) => ({
  selectedLocation: { ...selectedLocation },
  setSelectedLocation: (lat, lng) => set({ selectedLocation: { lat, lng } })
}));

export default useLocationStore;
