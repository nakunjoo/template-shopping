import type { ProductData } from "../../types/ProductTypes"
import { ItemCard } from "../product/ItemCard"

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
                        <ItemCard product={product} />
                    ))}
                </div>
            </div>
        </section>
    )
}