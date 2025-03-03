import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '../../constants/queryKeys';
import { getPlan } from '../apis/planApi';

export const useDetailPlan = (id) => {
  const {
    data: planData,
    isPending: isDataPending,
    isError: isDataError
  } = useQuery({
    queryFn: () => getPlan(id),
    queryKey: [QUERY_KEYS.DETAILPLANSDATA]
  });

  return { planData, isDataError, isDataPending };
};
