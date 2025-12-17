import type { ProductData } from '../../types/ProductTypes';
import React from 'react';
import { ItemCard } from './ItemCard';

interface PropsData {
    products: ProductData[];
}

export const ProductItemSection = React.memo(function ProductItems({products}: PropsData) {
    return (
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
                    <ItemCard product={product}/>
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
    )
})