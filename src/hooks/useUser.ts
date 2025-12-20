import { useQuery } from "@tanstack/react-query";
import { getMe } from "../api/users";
import { tokenStorage } from "../utils/auth";

export const useGetUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: getMe,
    enabled: !!tokenStorage.getAccessToken(), // 토큰이 있을 때만 실행
    retry: false, // 실패 시 재시도 안 함
    staleTime: 1000 * 60 * 5, // 5분간 캐시 유지
  });
};
