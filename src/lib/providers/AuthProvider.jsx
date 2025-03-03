import { useEffect } from 'react';
import { supabase } from '../apis/supabaseClient';
import { useAuthStore } from '../../stores/authStore';

const AuthProvider = () => {
  const setUserInfo = useAuthStore.setState;

  useEffect(() => {
    const initAuth = async () => {
      // 페이지 새로고침 시 세션을 강제로 가져옴
      const { data: sessionData } = await supabase.auth.getSession();

      if (sessionData?.session?.user) {
        const { data, error } = await supabase
          .from('users')
          .select('nickname')
          .eq('id', sessionData.session.user.id)
          .single();

        if (!error) {
          setUserInfo({ userInfo: { isLogin: true, nickname: data.nickname } });
        }
      }

      // 2️⃣ onAuthStateChange로 로그인/로그아웃 감지
      const { data: authListener } = supabase.auth.onAuthStateChange(async (_, session) => {
        if (session?.user) {
          const { data, error } = await supabase.from('users').select('nickname').eq('id', session.user.id).single();

          if (!error) {
            setUserInfo({ userInfo: { isLogin: true, nickname: data.nickname } });
          }
        } else {
          setUserInfo({ userInfo: { isLogin: false, nickname: null } });
        }
      });

      return () => {
        authListener.subscription.unsubscribe();
      };
    };

    initAuth();
  }, []);

  return null;
};

export default AuthProvider;
