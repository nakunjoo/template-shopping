import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSignIn } from "../../hooks/useAuth";

interface SigninFormData {
  email: string;
  password: string;
}

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SigninFormData>();
  const [rememberMe, setRememberMe] = useState(false);

  const { mutate } = useSignIn();

  const onSubmit = async (data: SigninFormData) => {
    const { email, password } = data;
    mutate({ email, password });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-5 py-12">
      <div className="max-w-md w-full">
        {/* 로고 */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <h1 className="text-4xl font-bold text-blue-600 mb-2">
              ShopTemplate
            </h1>
          </Link>
          <p className="text-gray-600">로그인하고 쇼핑을 시작하세요</p>
        </div>

        {/* 로그인 폼 */}
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {/* 이메일 */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-900 mb-2"
              >
                이메일
              </label>
              <input
                id="email"
                type="email"
                {...register("email", {
                  required: true,
                  minLength: {
                    value: 1,
                    message: "이메일을 입력해주세요.",
                  },
                })}
                placeholder="example@email.com"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition-colors"
              />
              {errors.email && (
                <span className="text-sm text-red-500">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* 비밀번호 */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-900 mb-2"
              >
                비밀번호
              </label>
              <input
                id="password"
                type="password"
                {...register("password", {
                  required: true,
                  minLength: {
                    value: 1,
                    message: "비밀번호를 입력해주세요.",
                  },
                })}
                placeholder="비밀번호를 입력하세요"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition-colors"
              />
              {errors.password && (
                <span className="text-sm text-red-500">
                  {errors.password.message}
                </span>
              )}
            </div>

            {/* 로그인 유지 & 비밀번호 찾기 */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">로그인 유지</span>
              </label>
              <Link
                to="/find-password"
                className="text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                비밀번호 찾기
              </Link>
            </div>

            {/* 로그인 버튼 */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors"
            >
              {isSubmitting ? "처리중..." : "로그인"}
            </button>
          </form>

          {/* 구분선 */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">또는</span>
            </div>
          </div>

          {/* 회원가입 링크 */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              아직 회원이 아니신가요?{" "}
              <Link
                to="/signup"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                회원가입
              </Link>
            </p>
          </div>
        </div>

        {/* 추가 링크 */}
        <div className="mt-6 text-center space-y-2">
          <div className="flex justify-center gap-4 text-sm text-gray-500">
            <Link to="/terms" className="hover:text-gray-700">
              이용약관
            </Link>
            <span>|</span>
            <Link to="/privacy" className="hover:text-gray-700">
              개인정보처리방침
            </Link>
            <span>|</span>
            <Link to="/help" className="hover:text-gray-700">
              고객센터
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
