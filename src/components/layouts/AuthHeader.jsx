import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
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
      Swal.fire({
        icon: 'success',
        title: '로그아웃 성공',
        confirmButtonText: '확인',
        confirmButtonColor: '#2E4769'
      });
      navigate(HOME);
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: '로그아웃 실패',
        text: `로그아웃 중 오류가 발생했습니다! ${err}`,
        confirmButtonText: '확인',
        confirmButtonColor: '#2E4769'
      });
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
