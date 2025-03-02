import { supabaseItems } from '../../constants/detailPlanPage';
import { supabase } from './supabaseClient';

export const getPlan = async (id) => {
  const { data, error } = await supabase.from(supabaseItems.PLANS).select('*');

  if (error) {
    console.error(error);
    return error;
  }

  return data.find((data) => data.id === id);
};

export const getDetailPlans = async (id) => {
  const { data, error } = await supabase
    .from(supabaseItems.DETAILPLANS)
    .select('*')
    .order(supabaseItems.PLANDATE)
    .order(supabaseItems.PLANTIME);

  if (error) {
    console.error(error);
    return error;
  }

  return data.filter((data) => data.plan_id === id);
};
