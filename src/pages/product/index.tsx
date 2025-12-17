import { useCallback, useState } from 'react';
import type { CategoryData } from '../../types/CategoryTypes';
import type { ProductData } from '../../types/ProductTypes';

import { ProductFilterSection } from '../../components/product/FilterSection';
import { ProductItemSection } from '../../components/product/ItemSection';
import { ProductRecentItemSection } from '../../components/product/RecentItemSection';

export const ProductPage = () => {
    const [categories] = useState<CategoryData[]>([
        { id: 1, name: '전자기기', count: 342 },
        { id: 2, name: '패션', count: 521 },
        { id: 3, name: '뷰티', count: 234 },
        { id: 4, name: '홈/리빙', count: 189 },
        { id: 5, name: '스포츠', count: 156 },
        { id: 6, name: '도서', count: 298 },
        { id: 7, name: '식품', count: 412 },
        { id: 8, name: '완구', count: 167 },
    ])

    const [products] = useState<ProductData[]>([
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
    ])

    const [recentProducts] = useState<ProductData[]>([
        { id: 1, name: '프리미엄 무선 이어폰', price: 129000, originalPrice: 189000, image: 'https://via.placeholder.com/100x100/4299e1/ffffff?text=1', badge: 'NEW' },
        { id: 1, name: '프리미엄 무선 이어폰', price: 129000, originalPrice: 189000, image: 'https://via.placeholder.com/100x100/4299e1/ffffff?text=1', badge: 'NEW' },
        { id: 2, name: '스마트워치 Pro', price: 289000, originalPrice: 189000, image: 'https://via.placeholder.com/100x100/8b5cf6/ffffff?text=2', badge: 'NEW' },
        { id: 4, name: '블루투스 스피커', price: 89000, originalPrice: 189000, image: 'https://via.placeholder.com/100x100/f59e0b/ffffff?text=4', badge: 'NEW' },
        { id: 8, name: '휴대용 보조배터리', price: 45000, originalPrice: 189000, image: 'https://via.placeholder.com/100x100/14b8a6/ffffff?text=8', badge: 'NEW' },
    ])

    const renderStars = useCallback((rating: number) => {
        return Array.from({ length: 5 }, (_, i) => (
            <span key={i} className={i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}>
                ★
            </span>
        ))
    },[])

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="relative max-w-[1600px] mx-auto">
                <div className="max-w-[1280px] mx-auto px-5 py-8">
                    <div className="flex gap-6">
                    {/* 왼쪽 사이드바 - 필터 */}
                    <ProductFilterSection categories={categories} renderStars={renderStars} />

                    {/* 중앙 - 상품 목록 */}
                    <ProductItemSection products={products} />
                    </div>
                </div>
                {/* 오른쪽 사이드바 - 최근 본 상품 (절대 위치) */}
                <ProductRecentItemSection recentProducts={recentProducts} />
            </div>
        </div>
    )
}
