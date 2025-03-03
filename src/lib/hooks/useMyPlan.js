import { useInfiniteQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '../../constants/queryKeys';
import { getMyPlans } from '../apis/planApi';

const useMyPlan = (id) => {
  const response = useInfiniteQuery({
    queryKey: [QUERY_KEYS.PLANS],
    queryFn: ({ pageParam = 1 }) => getMyPlans(id, pageParam),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    }
  });
  return response;
};

export default useMyPlan;
