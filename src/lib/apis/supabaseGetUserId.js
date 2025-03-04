import { supabase } from "./supabaseClient";

export const getUserId = async () => {
  const { data, error } = await supabase.auth.getUser();
  if (error) {
    alert('유저 정보를 가져오는 중 오류 발생:', error.message);
    return null;
  }
  return data.user.id;  // 유저 ID 반환
}