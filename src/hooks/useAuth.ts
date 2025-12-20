import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { createUser, login } from "../api/auth";
import { tokenStorage } from "../utils/auth";
import type { SuccessResponseDto } from "../utils/response-data";

interface TokenData {
  accessToken: string;
  refreshToken: string;
}

export const useSignUp = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      alert("회원가입 성공");
      navigate("/login");
    },
    onError: (error) => {
      console.log("error:", error);
      alert("회원가입중 에러가 발생했습니다.");
    },
  });
};

export const useSignIn = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: login,
    onSuccess: (data: SuccessResponseDto<TokenData>) => {
      alert("로그인 성공");
      tokenStorage.setAccessToken(data.data.accessToken);
      tokenStorage.setRefreshToken(data.data.refreshToken);
      // user 쿼리 무효화 → getMe 자동 호출됨
      queryClient.invalidateQueries({ queryKey: ["user"] });
      navigate("/");
    },
    onError: (error) => {
      console.log("error:", error);
      alert("아이디 또는 비밀번호를 확인해주세요.");
    },
  });
};

export const useLogout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return () => {
    tokenStorage.removeToken();
    queryClient.clear();
    navigate("/");
  };
};
