import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { mutatePlans } from "../../apis/mutatePlans";
import { MYPLAN } from "../../../constants/pagePaths";
import { QUERY_KEYS } from "../../../constants/queryKeys";

export const useMutatePlans = (setDetailPlans, setPlanTitle) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: updatePlans } = useMutation({
    mutationFn: mutatePlans,
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.DETAILPLANSDATA]);
      queryClient.invalidateQueries([QUERY_KEYS.PLANS]);
      alert("저장 완료!");
      setDetailPlans([]); // 일정 목록 초기화
      setPlanTitle(""); // 계획 이름 초기화
      navigate(MYPLAN); // 마이플랜 페이지로 이동
    },
    onError: (error) => {
      alert(error.message);
    },
  });

  return updatePlans;
};
