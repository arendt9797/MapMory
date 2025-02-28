import { useQuery } from '@tanstack/react-query';
import { getMyPlans } from '../apis/planApi';
import { QUERY_KEYS } from '../../constants/queryKeys';

const useMyPlan = (id) => {
  const {
    data: planData,
    isPending: isDataPending,
    isError: isDataError
  } = useQuery({
    queryFn: () => getMyPlans(id),
    queryKey: [QUERY_KEYS.PLANS]
  });

  return { planData, isDataError, isDataPending };
};

export default useMyPlan;
