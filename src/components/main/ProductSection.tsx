import type { ProductData } from "../../pages/main"

export const ProductSection = ({ products }:{products: ProductData[]}) => {
    return (
        <section className="py-12 flex-1">
            <div className="max-w-7xl mx-auto px-5">
                <div className="flex justify-between items-center mb-8 flex-wrap gap-5">
                    <h2 className="text-3xl font-bold text-gray-900">인기 상품</h2>
                    <div className="flex gap-2 bg-gray-50 p-1 rounded-xl">
                    <button className="px-5 py-2.5 rounded-lg text-sm font-medium bg-white text-blue-600 shadow-sm transition-all">
                        전체
                    </button>
                    <button className="px-5 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-black/5 transition-all">
                        신상품
                    </button>
                    <button className="px-5 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-black/5 transition-all">
                        베스트
                    </button>
                    <button className="px-5 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-black/5 transition-all">
                        할인
                    </button>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map(product => (
                    <div
                        key={product.id}
                        className="bg-white rounded-2xl overflow-hidden transition-all border border-gray-200 relative group hover:-translate-y-1 hover:shadow-lg"
                    >
                        {product.badge && (
                        <span
                            className={`absolute top-3 left-3 px-3 py-1.5 rounded-full text-xs font-semibold z-10 text-white ${
                            product.badge.toLowerCase() === 'new'
                                ? 'bg-blue-600'
                                : product.badge.toLowerCase() === 'hot'
                                ? 'bg-orange-500'
                                : 'bg-red-500'
                            }`}
                        >
                            {product.badge}
                        </span>
                        )}
                        <div className="relative overflow-hidden aspect-square bg-gray-100">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform group-hover:scale-110"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5 flex gap-2 opacity-0 translate-y-2.5 transition-all group-hover:opacity-100 group-hover:translate-y-0">
                            <button className="flex-1 py-2.5 bg-white text-gray-900 rounded-lg text-sm font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                            장바구니
                            </button>
                            <button className="flex-1 py-2.5 bg-white text-gray-900 rounded-lg text-sm font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                            바로구매
                            </button>
                        </div>
                        </div>
                        <div className="p-5">
                        <h3 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2">
                            {product.name}
                        </h3>
                        <p className="text-xl font-bold text-gray-900 mb-2">
                            {product.price.toLocaleString()}원
                        </p>
                        <div className="flex items-center gap-1 text-sm">
                            <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                            <span className="text-gray-400">(128)</span>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    )
}