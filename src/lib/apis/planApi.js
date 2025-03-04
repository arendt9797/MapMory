import { supabaseItems } from '../../constants/supabaseConstants';
import { supabase } from './supabaseClient';

export const getMyPlans = async (id, limit, pageParam) => {
  const getUserId = async () => {
    const { data, error } = await supabase.auth.getUser();
    if (error) {
      alert('유저 정보를 가져오는 중 오류 발생:', error.message);
      return null;
    }
    return data.user.id;
  };
  const userId = await getUserId();

  const offset = (pageParam - 1) * limit;
  const { data, error } = await supabase
    .from(supabaseItems.PLANS)
    .select(`* , ${supabaseItems.DETAILPLANS}(*)`)
    .eq(supabaseItems.USER_ID, userId)
    // .order('detail_plans(plan_date)', { ascending: true })
    .order(supabaseItems.PLANDATE, { referencedTable: supabaseItems.DETAILPLANS, ascending: true })
    .range(offset, offset + limit - 1);
  if (error) alert('에러 발생, ', error.message);
  return data;
};

export const getPlan = async (id) => {
  const { data, error } = await supabase
    .from(supabaseItems.PLANS)
    .select(`*,${supabaseItems.DETAILPLANS}(*)`)
    .eq(supabaseItems.ID, id)
    .single();
  if (error) {
    console.error(error);
  }
  return data;
};
