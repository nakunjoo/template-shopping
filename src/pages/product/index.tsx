export const ProductPage = () => {
    // 샘플 데이터
    const products = [
        { id: 1, name: '프리미엄 무선 이어폰', price: 129000, originalPrice: 189000, discount: 32, image: 'https://via.placeholder.com/300x300/4299e1/ffffff?text=Product+1', badge: 'NEW', rating: 4.8, reviews: 328 },
        { id: 2, name: '스마트워치 Pro', price: 289000, originalPrice: 350000, discount: 17, image: 'https://via.placeholder.com/300x300/8b5cf6/ffffff?text=Product+2', badge: 'HOT', rating: 4.9, reviews: 512 },
        { id: 3, name: '캐주얼 백팩', price: 59000, originalPrice: 79000, discount: 25, image: 'https://via.placeholder.com/300x300/10b981/ffffff?text=Product+3', badge: '', rating: 4.5, reviews: 156 },
        { id: 4, name: '블루투스 스피커', price: 89000, originalPrice: 120000, discount: 26, image: 'https://via.placeholder.com/300x300/f59e0b/ffffff?text=Product+4', badge: 'SALE', rating: 4.7, reviews: 243 },
        { id: 5, name: '데일리 스니커즈', price: 79000, originalPrice: 99000, discount: 20, image: 'https://via.placeholder.com/300x300/ef4444/ffffff?text=Product+5', badge: '', rating: 4.6, reviews: 189 },
        { id: 6, name: '미니멀 지갑', price: 39000, originalPrice: 55000, discount: 29, image: 'https://via.placeholder.com/300x300/ec4899/ffffff?text=Product+6', badge: 'NEW', rating: 4.4, reviews: 98 },
        { id: 7, name: '노트북 파우치', price: 29000, originalPrice: 45000, discount: 36, image: 'https://via.placeholder.com/300x300/06b6d4/ffffff?text=Product+7', badge: '', rating: 4.3, reviews: 67 },
        { id: 8, name: '휴대용 보조배터리', price: 45000, originalPrice: 60000, discount: 25, image: 'https://via.placeholder.com/300x300/14b8a6/ffffff?text=Product+8', badge: 'HOT', rating: 4.8, reviews: 421 },
        { id: 9, name: '무선 마우스', price: 35000, originalPrice: 48000, discount: 27, image: 'https://via.placeholder.com/300x300/f97316/ffffff?text=Product+9', badge: '', rating: 4.5, reviews: 234 },
        { id: 10, name: '키보드 커버', price: 19000, originalPrice: 28000, discount: 32, image: 'https://via.placeholder.com/300x300/a855f7/ffffff?text=Product+10', badge: 'SALE', rating: 4.2, reviews: 145 },
        { id: 11, name: '스마트 전구', price: 25000, originalPrice: 35000, discount: 29, image: 'https://via.placeholder.com/300x300/22c55e/ffffff?text=Product+11', badge: 'NEW', rating: 4.6, reviews: 178 },
        { id: 12, name: '휴대폰 거치대', price: 15000, originalPrice: 22000, discount: 32, image: 'https://via.placeholder.com/300x300/facc15/ffffff?text=Product+12', badge: '', rating: 4.4, reviews: 92 },
    ]

    const recentProducts = [
        { id: 1, name: '프리미엄 무선 이어폰', price: 129000, image: 'https://via.placeholder.com/100x100/4299e1/ffffff?text=1' },
        { id: 2, name: '스마트워치 Pro', price: 289000, image: 'https://via.placeholder.com/100x100/8b5cf6/ffffff?text=2' },
        { id: 4, name: '블루투스 스피커', price: 89000, image: 'https://via.placeholder.com/100x100/f59e0b/ffffff?text=4' },
        { id: 8, name: '휴대용 보조배터리', price: 45000, image: 'https://via.placeholder.com/100x100/14b8a6/ffffff?text=8' },
    ]

    const categories = [
        { id: 1, name: '전자기기', count: 342 },
        { id: 2, name: '패션', count: 521 },
        { id: 3, name: '뷰티', count: 234 },
        { id: 4, name: '홈/리빙', count: 189 },
        { id: 5, name: '스포츠', count: 156 },
        { id: 6, name: '도서', count: 298 },
        { id: 7, name: '식품', count: 412 },
        { id: 8, name: '완구', count: 167 },
    ]

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, i) => (
            <span key={i} className={i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}>
                ★
            </span>
        ))
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="relative max-w-[1600px] mx-auto">
                <div className="max-w-[1280px] mx-auto px-5 py-8">
                    <div className="flex gap-6">
                        {/* 왼쪽 사이드바 - 필터 */}
                        <aside className="w-64 flex-shrink-0">
                        <div className="bg-white rounded-2xl shadow-sm overflow-hidden sticky top-24">
                            {/* 카테고리 */}
                            <div className="p-6 border-b border-gray-200">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">카테고리</h3>
                                <div className="space-y-2">
                                    <label className="flex items-center justify-between cursor-pointer group">
                                        <div className="flex items-center gap-3">
                                            <input
                                                type="checkbox"
                                                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                            />
                                            <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
                                                전체
                                            </span>
                                        </div>
                                        <span className="text-sm text-gray-400">1,234</span>
                                    </label>
                                    {categories.map((category) => (
                                        <label key={category.id} className="flex items-center justify-between cursor-pointer group">
                                            <div className="flex items-center gap-3">
                                                <input
                                                    type="checkbox"
                                                    className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                                />
                                                <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
                                                    {category.name}
                                                </span>
                                            </div>
                                            <span className="text-sm text-gray-400">{category.count}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* 필터 옵션 */}
                            <div className="p-6 border-b border-gray-200">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">필터</h3>
                                <div className="space-y-2">
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input
                                            type="checkbox"
                                            className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                        />
                                        <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
                                            인기상품
                                        </span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input
                                            type="checkbox"
                                            className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                        />
                                        <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
                                            세일중
                                        </span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input
                                            type="checkbox"
                                            className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                        />
                                        <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
                                            신상품
                                        </span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input
                                            type="checkbox"
                                            className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                        />
                                        <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
                                            베스트
                                        </span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input
                                            type="checkbox"
                                            className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                        />
                                        <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
                                            무료배송
                                        </span>
                                    </label>
                                </div>
                            </div>

                            {/* 가격대 */}
                            <div className="p-6 border-b border-gray-200">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">가격대</h3>
                                <div className="space-y-2">
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input
                                            type="checkbox"
                                            className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                        />
                                        <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
                                            1만원 미만
                                        </span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input
                                            type="checkbox"
                                            className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                        />
                                        <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
                                            1만원 - 5만원
                                        </span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input
                                            type="checkbox"
                                            className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                        />
                                        <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
                                            5만원 - 10만원
                                        </span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input
                                            type="checkbox"
                                            className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                        />
                                        <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
                                            10만원 - 30만원
                                        </span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input
                                            type="checkbox"
                                            className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                        />
                                        <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
                                            30만원 이상
                                        </span>
                                    </label>
                                </div>
                            </div>

                            {/* 평점 */}
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">평점</h3>
                                <div className="space-y-2">
                                    {[5, 4, 3, 2, 1].map((rating) => (
                                        <label key={rating} className="flex items-center gap-3 cursor-pointer group">
                                            <input
                                                type="checkbox"
                                                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                            />
                                            <div className="flex items-center gap-2">
                                                <div className="flex text-sm">{renderStars(rating)}</div>
                                                <span className="text-gray-700 text-sm group-hover:text-blue-600 transition-colors">
                                                    이상
                                                </span>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* 중앙 - 상품 목록 */}
                    <main className="flex-1">
                        {/* 정렬 옵션 */}
                        <div className="bg-white rounded-2xl shadow-sm p-5 mb-6 flex justify-between items-center">
                            <div className="text-gray-600">
                                총 <span className="font-bold text-gray-900">{products.length}</span>개의 상품
                            </div>
                            <div className="flex gap-2 bg-gray-50 p-1 rounded-xl">
                                <button className="px-4 py-2 rounded-lg text-sm font-medium bg-white text-blue-600 shadow-sm">
                                    추천순
                                </button>
                                <button className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-white/50">
                                    인기순
                                </button>
                                <button className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-white/50">
                                    낮은가격순
                                </button>
                                <button className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-white/50">
                                    높은가격순
                                </button>
                                <button className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-white/50">
                                    최신순
                                </button>
                            </div>
                        </div>

                        {/* 상품 그리드 */}
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
                            {products.map((product) => (
                                <div
                                    key={product.id}
                                    className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:border-blue-600 hover:-translate-y-1 hover:shadow-lg transition-all cursor-pointer group"
                                >
                                    <div className="relative aspect-square bg-gray-100 overflow-hidden">
                                        {product.badge && (
                                            <span
                                                className={`absolute top-3 left-3 px-3 py-1.5 rounded-full text-xs font-semibold z-10 text-white ${
                                                    product.badge === 'NEW'
                                                        ? 'bg-blue-600'
                                                        : product.badge === 'HOT'
                                                        ? 'bg-orange-500'
                                                        : 'bg-red-500'
                                                }`}
                                            >
                                                {product.badge}
                                            </span>
                                        )}
                                        {product.discount > 0 && (
                                            <span className="absolute top-3 right-3 px-2.5 py-1.5 bg-red-500 text-white rounded-full text-xs font-bold z-10">
                                                {product.discount}%
                                            </span>
                                        )}
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2 h-10">
                                            {product.name}
                                        </h3>
                                        <div className="flex items-center gap-1 text-xs mb-2">
                                            <div className="flex">{renderStars(product.rating)}</div>
                                            <span className="text-gray-400">({product.reviews})</span>
                                        </div>
                                        <div className="space-y-1">
                                            {product.discount > 0 && (
                                                <div className="text-xs text-gray-400 line-through">
                                                    {product.originalPrice.toLocaleString()}원
                                                </div>
                                            )}
                                            <div className="text-lg font-bold text-gray-900">
                                                {product.price.toLocaleString()}원
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* 페이지네이션 */}
                        <div className="mt-8 flex justify-center items-center gap-2">
                            <button className="w-10 h-10 rounded-lg border border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50 transition-colors">
                                ‹
                            </button>
                            <button className="w-10 h-10 rounded-lg bg-blue-600 text-white font-semibold">
                                1
                            </button>
                            <button className="w-10 h-10 rounded-lg border border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50 transition-colors">
                                2
                            </button>
                            <button className="w-10 h-10 rounded-lg border border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50 transition-colors">
                                3
                            </button>
                            <button className="w-10 h-10 rounded-lg border border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50 transition-colors">
                                4
                            </button>
                            <button className="w-10 h-10 rounded-lg border border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50 transition-colors">
                                5
                            </button>
                            <button className="w-10 h-10 rounded-lg border border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50 transition-colors">
                                ›
                            </button>
                        </div>
                    </main>
                    </div>
                </div>

                {/* 오른쪽 사이드바 - 최근 본 상품 (절대 위치) */}
                <aside className="absolute top-8 right-5 w-32">
                    <div className="sticky top-24 space-y-4">
                        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                            <div className="p-3 border-b border-gray-200">
                                <h3 className="text-sm font-bold text-gray-900">최근 본 상품</h3>
                            </div>
                            <div className="p-2 space-y-2">
                                {recentProducts.map((product) => (
                                    <div
                                        key={product.id}
                                        className="w-full aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-pointer group"
                                    >
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="p-2 border-t border-gray-200">
                                <button className="w-full py-1.5 bg-gray-100 text-gray-700 rounded-lg text-xs font-semibold hover:bg-gray-200 transition-colors">
                                    전체보기
                                </button>
                            </div>
                        </div>

                        {/* 광고 배너 */}
                        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-sm overflow-hidden">
                            <div className="p-3 text-white">
                                <div className="text-xs font-semibold mb-1">특별 할인</div>
                                <h3 className="text-sm font-bold mb-1">연말 대축제</h3>
                                <p className="text-xs mb-2 text-blue-100">최대 70% 할인</p>
                                <button className="w-full py-1.5 bg-white text-blue-600 rounded-lg text-xs font-bold hover:bg-blue-50 transition-colors">
                                    바로가기
                                </button>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    )
}
