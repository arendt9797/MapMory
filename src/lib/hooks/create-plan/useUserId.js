import { useState, useEffect } from "react";
import { getUserId } from "../../apis/supabaseGetUserId";

export const useUserId = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const userData = await getUserId();
      if (userData) setUser(userData);
    };

    getUser();
  }, []);

  return user?.id;
};

