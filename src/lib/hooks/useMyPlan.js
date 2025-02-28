import { useQuery } from '@tanstack/react-query';
import { getMyPlans } from '../apis/planApi';

const useMyPlan = (id) => {
  const {
    data: planData,
    isPending: isDataPending,
    isError: isDataError
  } = useQuery({
    queryFn: () => getMyPlans(id),
    queryKey: ['plans']
  });

  return { planData, isDataError, isDataPending };
};

export default useMyPlan;
