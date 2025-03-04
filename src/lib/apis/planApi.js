import Swal from 'sweetalert2';
import { supabaseItems } from '../../constants/supabaseConstants';
import { supabase } from './supabaseClient';
import { getUserId } from './supabaseGetUserId';

export const getMyPlans = async (limit, pageParam) => {
  const userId = await getUserId();
  const offset = (pageParam - 1) * limit;
  const { data, error } = await supabase
    .from(supabaseItems.PLANS)
    .select(`* , ${supabaseItems.DETAILPLANS}(*)`)
    .eq(supabaseItems.USER_ID, userId)
    .order(supabaseItems.PLANDATE, { referencedTable: supabaseItems.DETAILPLANS, ascending: true })
    .range(offset, offset + limit - 1);
  if (error)
    Swal.fire({
      icon: 'error',
      title: '여행 계획 가져오기 실패!',
      text: '여행 계획을 가져오는 도중 에러가 발생했습니다!',
      confirmButtonText: '확인',
      confirmButtonColor: '#2E4769'
    });
  return data;
};

export const getPlan = async (id) => {
  const { data, error } = await supabase
    .from(supabaseItems.PLANS)
    .select(`*,${supabaseItems.DETAILPLANS}(*)`)
    .eq(supabaseItems.ID, id)
    .single();
  if (error) alert('에러 발생', error.message);
  return data;
};
