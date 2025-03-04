import { supabaseItems } from '../../constants/supabaseConstants';
import { supabase } from './supabaseClient';

export const getMyPlans = async (id, limit, pageParam) => {
  const offset = (pageParam - 1) * limit;
  const { data } = await supabase
    .from('plans')
    .select(`* , detail_plans(place, plan_date, plan_time)`)
    .eq('user_id', id)
    .order('plan_date', { referencedTable: 'detail_plans', ascending: true })
    .range(offset, offset + limit - 1);
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
