import { create } from 'zustand';
import { persist } from 'zustand/middleware';

let initialState = { isLogin: false, nickname: null };
export const useAuthStore = create(
  persist(
    (set) => ({
      userInfo: { ...initialState },
      userSignIn: (user) => set({ userInfo: { isLogin: true, nickname: user.nickname } })
    }),
    { name: 'auth-storage' }
  )
);
