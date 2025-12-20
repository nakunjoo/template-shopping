// 기본 성공 응답
export interface SuccessResponseDto<T> {
  success: true;
  data: T;
  message?: string;
  timestamp?: string;
}
