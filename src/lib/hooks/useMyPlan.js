import { useInfiniteQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '../../constants/queryKeys';
import { getMyPlans } from '../apis/planApi';

const useMyPlan = () => {
  const limit = 3;
  const response = useInfiniteQuery({
    queryKey: [QUERY_KEYS.PLANS],
    queryFn: ({ pageParam = 1 }) => getMyPlans(limit, pageParam),
    getNextPageParam: (lastPage, allPages) => {
      const totalPlans = allPages.flat().length;
      const nextPage = Math.floor(totalPlans / limit) + 1;
      return lastPage.length === limit ? nextPage : undefined;
    }
  });
  return response;
};

export default useMyPlan;
