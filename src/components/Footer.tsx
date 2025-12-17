export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-12 pb-6 mt-auto">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-8">
            <div>
              <h3 className="text-xl mb-3">ShopTemplate</h3>
              <p className="text-white/70 text-sm leading-relaxed">최고의 쇼핑 경험을 제공합니다</p>
            </div>

            <div>
              <h4 className="text-base mb-4 font-semibold">고객센터</h4>
              <ul className="flex flex-col gap-2">
                <li>
                  <a href="#faq" className="text-white/70 text-sm hover:text-white transition-colors">
                    자주 묻는 질문
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-white/70 text-sm hover:text-white transition-colors">
                    1:1 문의
                  </a>
                </li>
                <li>
                  <a href="#shipping" className="text-white/70 text-sm hover:text-white transition-colors">
                    배송조회
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-base mb-4 font-semibold">쇼핑 정보</h4>
              <ul className="flex flex-col gap-2">
                <li>
                  <a href="#notice" className="text-white/70 text-sm hover:text-white transition-colors">
                    공지사항
                  </a>
                </li>
                <li>
                  <a href="#terms" className="text-white/70 text-sm hover:text-white transition-colors">
                    이용약관
                  </a>
                </li>
                <li>
                  <a href="#privacy" className="text-white/70 text-sm hover:text-white transition-colors">
                    개인정보처리방침
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-base mb-4 font-semibold">SNS</h4>
              <div className="flex gap-3">
                <a href="#facebook" className="text-white/70 text-sm hover:text-white transition-colors">
                  Facebook
                </a>
                <a href="#instagram" className="text-white/70 text-sm hover:text-white transition-colors">
                  Instagram
                </a>
                <a href="#youtube" className="text-white/70 text-sm hover:text-white transition-colors">
                  YouTube
                </a>
              </div>
            </div>
          </div>

          <div className="text-center pt-6 border-t border-white/10">
            <p className="text-white/50 text-sm">&copy; 2025 ShopTemplate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
}