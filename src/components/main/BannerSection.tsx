export const BannerSection = () => {
    return (
      <section className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white py-20 text-center">
        <div className="max-w-7xl mx-auto px-5">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">신상품 특별 할인</h2>
            <p className="text-xl mb-8 opacity-95">최대 50% 할인된 가격으로 만나보세요</p>
            <button className="bg-white text-indigo-500 px-10 py-4 rounded-full text-base font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
              지금 쇼핑하기
            </button>
          </div>
        </div>
      </section>
    )
}
