import { supabase } from './supabaseClient';

export const getMyPlans = async (id) => {
  const { data } = await supabase
    .from('plans')
    .select(`* , detail_plans(place, plan_date, plan_time)`)
    .eq('user_id', id);
  return data;
};
