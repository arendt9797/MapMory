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
