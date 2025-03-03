import { supabaseItems } from '../../constants/detailPlanPage';
import { supabase } from './supabaseClient';

export const getMyPlans = async (id) => {
  const { data } = await supabase
    .from('plans')
    .select(`* , detail_plans(place, plan_date, plan_time)`)
    .eq('user_id', id);
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
