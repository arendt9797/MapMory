import { Link, useNavigate } from 'react-router-dom';
import { CREATEPLAN, HOME, MYPLAN } from '../../constants/pagePaths';
import { supabase } from '../../lib/apis/supabaseClient';
import { useQueryClient } from '@tanstack/react-query';

export const AuthHeader = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      queryClient.clear();
      if (error) throw error;
      alert('로그아웃 되었습니다.');
      navigate(HOME);
    } catch (err) {
      console.error('로그아웃 중 오류 발생:', err);
      alert('로그아웃 실패. 다시 시도해주세요.');
    }
  };
  return (
    <div className="flex items-center gap-4">
      <Link to={CREATEPLAN} className="text-secondary hover:text-primaryHover">
        새 여행 추가
      </Link>
      <Link to={MYPLAN} className="text-secondary  hover:text-primaryHover">
        내 여행 일정
      </Link>
      <button onClick={handleLogout} className="bg-secondary p-2 px-4 rounded-3xl text-white  hover:bg-secondaryHover">
        로그아웃
      </button>
    </div>
  );
};
