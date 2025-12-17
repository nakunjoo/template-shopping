import type { JSX } from 'react';
import type { CategoryData } from '../../types/CategoryTypes';

interface PropsData {
    categories:CategoryData[];
    renderStars: (rating: number) => JSX.Element[]
}

export const ProductFilterSection = ({categories, renderStars}: PropsData) => {
    
    return (
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
    )
}