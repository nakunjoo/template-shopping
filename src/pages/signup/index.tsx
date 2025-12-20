import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSignUp } from "../../hooks/useAuth";

interface SignupFormData {
  email: string;
  password: string;
  passwordConfirm: string;
  name: string;
  phone: string;
  terms: boolean;
  privacy: boolean;
  marketing: boolean;
}

export const SignupPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    mode: "onBlur", // 포커스를 벗어날 때 검증
    defaultValues: {
      marketing: false,
    },
  });
  const { mutate } = useSignUp();

  const [allAgreed, setAllAgreed] = useState(false);
  const password = watch("password");
  const termsOfService = watch("terms");
  const privacyPolicy = watch("privacy");
  const marketingConsent = watch("marketing");

  const onSubmit = async (data: SignupFormData) => {
    const { email, name, password, phone } = data;
    mutate(
      { email, name, password, phone },
      {
        onSuccess: () => reset(),
      }
    );
  };

  // 전체 동의 처리
  const handleAllAgree = (checked: boolean) => {
    setAllAgreed(checked);
    setValue("terms", checked);
    setValue("privacy", checked);
    setValue("marketing", checked);
  };

  // 개별 체크박스 변경 시 전체 동의 상태 업데이트
  // watch 값이 변경될 때마다 자동으로 업데이트
  useEffect(() => {
    setAllAgreed(termsOfService && privacyPolicy && marketingConsent);
  }, [termsOfService, privacyPolicy, marketingConsent]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-5">
      <div className="max-w-md mx-auto">
        {/* 로고 */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <h1 className="text-4xl font-bold text-blue-600 mb-2">
              ShopTemplate
            </h1>
          </Link>
          <p className="text-gray-600">새로운 계정을 만드세요</p>
        </div>

        {/* 회원가입 폼 */}
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            {/* 이름 */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-900 mb-2"
              >
                이름
              </label>
              <input
                id="name"
                type="text"
                {...register("name", {
                  required: "이름을 입력해주세요.",
                  minLength: {
                    value: 2,
                    message: "이름은 최소 2자 이상이어야 합니다.",
                  },
                  maxLength: {
                    value: 20,
                    message: "이름은 최대 20자까지 가능합니다.",
                  },
                })}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition-colors"
              />
              {errors.name && (
                <span className="text-sm text-red-500">
                  {errors.name.message}
                </span>
              )}
            </div>

            {/* 이메일 */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-900 mb-2"
              >
                이메일
              </label>
              <div className="flex gap-2">
                <input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: "이메일을 입력해주세요.",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "유효한 이메일 주소를 입력해주세요.",
                    },
                  })}
                  className="flex-1 px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition-colors"
                />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </div>
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
                  required: "비밀번호를 입력해주세요",
                  minLength: {
                    value: 8,
                    message: "비밀번호는 최소 8자 이상이어야 합니다",
                  },
                  pattern: {
                    value:
                      //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
                      /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d!@#$%^&*?]{8,}$/,
                    message:
                      "비밀번호는 대소문자, 숫자, 특수문자를 포함해야 합니다",
                  },
                })}
                placeholder="8자 이상 입력하세요"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition-colors"
              />
              <p className="mt-1.5 text-xs text-gray-500">
                영문, 숫자, 특수문자 조합 8자 이상
              </p>
              {errors.password && (
                <span className="text-sm text-red-500">
                  {errors.password.message}
                </span>
              )}
            </div>

            {/* 비밀번호 확인 */}
            <div>
              <label
                htmlFor="passwordConfirm"
                className="block text-sm font-semibold text-gray-900 mb-2"
              >
                비밀번호 확인
              </label>
              <input
                id="passwordConfirm"
                type="password"
                {...register("passwordConfirm", {
                  required: "비밀번호 확인을 입력해주세요",
                  validate: (value) =>
                    value === password || "비밀번호가 일치하지 않습니다",
                })}
                placeholder="비밀번호를 다시 입력하세요"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition-colors"
              />
              {errors.passwordConfirm && (
                <span className="text-sm text-red-500">
                  {errors.passwordConfirm.message}
                </span>
              )}
            </div>

            {/* 휴대폰 번호 */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-gray-900 mb-2"
              >
                휴대폰 번호
              </label>
              <div className="flex gap-2">
                <input
                  id="phone"
                  type="tel"
                  {...register("phone", {
                    required: "휴대폰 번호를 입력해주세요.",
                    setValueAs: (value) => value.replace(/[^0-9]/g, ""), // 숫자만 추출
                  })}
                  placeholder="01012345678"
                  className="flex-1 px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition-colors"
                />
              </div>
              {errors.phone && (
                <span className="text-sm text-red-500">
                  {errors.phone.message}
                </span>
              )}
            </div>

            {/* 약관 동의 */}
            <div className="pt-4 space-y-3">
              <div className="pb-3 border-b border-gray-200">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={allAgreed}
                    onChange={(e) => handleAllAgree(e.target.checked)}
                    className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="font-bold text-gray-900">전체 동의</span>
                </label>
              </div>

              <label className="flex items-center justify-between cursor-pointer group">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    {...register("terms", {
                      required: "이용약관에 동의해주세요",
                    })}
                    className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">
                    <span className="text-blue-600">[필수]</span> 이용약관 동의
                  </span>
                </div>
                <button
                  type="button"
                  className="text-xs text-gray-500 hover:text-gray-700"
                >
                  보기
                </button>
              </label>

              <label className="flex items-center justify-between cursor-pointer group">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    {...register("privacy", {
                      required: "개인정보처리방침에 동의해주세요.",
                    })}
                    className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">
                    <span className="text-blue-600">[필수]</span>{" "}
                    개인정보처리방침 동의
                  </span>
                </div>
                <button
                  type="button"
                  className="text-xs text-gray-500 hover:text-gray-700"
                >
                  보기
                </button>
              </label>

              <label className="flex items-center justify-between cursor-pointer group">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    {...register("marketing")}
                    className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">
                    <span className="text-gray-500">[선택]</span> 마케팅 정보
                    수신 동의
                  </span>
                </div>
                <button
                  type="button"
                  className="text-xs text-gray-500 hover:text-gray-700"
                >
                  보기
                </button>
              </label>
            </div>

            {/* 회원가입 버튼 */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors mt-6"
            >
              {isSubmitting ? "처리중..." : "회원가입"}
            </button>
          </form>

          {/* 구분선 */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500"></span>
            </div>
          </div>

          {/* 로그인 링크 */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              이미 계정이 있으신가요?{" "}
              <Link
                to="/login"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                로그인
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
