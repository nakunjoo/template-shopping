import type { ProductData } from '../../types/ProductTypes';

interface PropsData {
    recentProducts: ProductData[];
}

export const ProductRecentItemSection = ({recentProducts}:PropsData) => {
    return (
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
    )
}