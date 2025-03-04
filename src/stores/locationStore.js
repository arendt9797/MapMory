import { create } from 'zustand';

const locationStore = create((set) => ({
  selectedLocation: {},
  setSelectedLocation: (lat, lng) => set({ selectedLocation: lat, lng })
}));

export default locationStore;
