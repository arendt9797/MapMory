import Swal from 'sweetalert2';
import { supabase } from './supabaseClient';

export const getUserId = async () => {
  const { data, error } = await supabase.auth.getUser();
  if (error) {
    Swal.fire({
      icon: 'error',
      title: '유저 정보 로드 실패!',
      text: `유저 정보를 가져오는 중 에러가 발생했습니다. ${error.message}`,
      confirmButtonText: '확인',
      confirmButtonColor: '#2E4769'
    });
    return null;
  }
  return data.user.id; // 유저 ID 반환
};
