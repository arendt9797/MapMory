import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { supabase } from '../lib/apis/supabaseClient';

let initialState = { isLogin: false, nickname: null };
export const useAuthStore = create(
  persist(
    (set) => ({
      userInfo: { ...initialState },
      userSignIn: (user) => set({ userInfo: { isLogin: true, nickname: user.nickname } }),
      userSignOut: async () => {
        await supabase.auth.signOut();
        set({ userInfo: { ...initialState } });
      },
      initAuthListener: () => {
        const { data: authListener } = supabase.auth.onAuthStateChange(async (_, session) => {
          if (session?.user) {
            // 세션 정보가 존재할 경우, 사용자 닉네임을 가져오기
            try {
              const { data, error } = await supabase
                .from('users')
                .select('nickname')
                .eq('id', session.user.id)
                .single();
              if (!error) {
                // 상태 업데이트 (닉네임 변경)
                useAuthStore.setState((state) => {
                  if (state.userInfo.isLogin && state.userInfo.nickname === data.nickname) {
                    return state; // 상태가 같다면 변경하지 않음
                  }
                  return { userInfo: { isLogin: true, nickname: data.nickname } };
                });
              }
            } catch (err) {
              alert('DB 조회 중 에러 발생:', err);
            }
          } else {
            // 로그인 상태가 아니면 상태 초기화
            useAuthStore.setState((state) => {
              if (!state.userInfo.isLogin) return state; // 이미 로그아웃 상태면 변경 안 함
              return { userInfo: { ...initialState } };
            });
          }
        });
        return authListener;
      }
    }),
    { name: 'auth-storage' }
  )
);
