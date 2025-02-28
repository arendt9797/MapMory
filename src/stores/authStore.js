import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { supabase } from '../lib/apis/supabaseClient';

let initialState = { isLogin: false, nickname: null };
export const useAuthStore = create(
  persist(
    (set) => ({
      userInfo: { ...initialState },
      userSignIn: (user) => set({ userInfo: { isLogin: true, nickname: user.nickname } }),
      userSignOut: () => set({ userInfo: { ...initialState } }),
      initAuthListener: () => {
        const { data: authListener } = supabase.auth.onAuthStateChange(async (_, session) => {
          if (session?.user) {
            const { data, error } = await supabase.from('users').select('nickname').eq('id', session.user.id).single();
            if (!error) {
              set({ userInfo: { isLogin: true, nickname: data.nickname } });
            } else {
              set({ ...initialState });
            }
          }
        });
        return authListener;
      }
    }),
    { name: 'auth-storage' }
  )
);
