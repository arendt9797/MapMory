import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { mutatePlans } from '../../apis/mutatePlans';
import { MYPLAN } from '../../../constants/pagePaths';
import { QUERY_KEYS } from '../../../constants/queryKeys';
import Swal from 'sweetalert2';

export const useMutatePlans = (setDetailPlans, setPlanTitle) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: updatePlans } = useMutation({
    mutationFn: mutatePlans,
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.DETAILPLANSDATA]);
      queryClient.invalidateQueries([QUERY_KEYS.PLANS]);
      Swal.fire({
        icon: 'success',
        title: '저장 완료!',
        text: '저장이 완료되었습니다. 내 계획을 확인해보세요.',
        confirmButtonText: '확인',
        confirmButtonColor: '#2E4769'
      });
      setDetailPlans([]); // 일정 목록 초기화
      setPlanTitle(''); // 계획 이름 초기화
      navigate(MYPLAN); // 마이플랜 페이지로 이동
    },
    onError: (error) => {
      Swal.fire({
        icon: 'error',
        title: '실패!',
        text: `데이터 저장에 실패했습니다. ${error.message}`,
        confirmButtonText: '확인',
        confirmButtonColor: '#2E4769'
      });
    }
  });

  return updatePlans;
};
