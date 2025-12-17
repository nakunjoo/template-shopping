import { useState } from 'react'
import { BannerSection } from "../../components/main/BannerSection"
import { CategorySection } from "../../components/main/CategorySection"
import { ProductSection } from "../../components/main/ProductSection";
import type { CategoryData } from '../../types/CategoryTypes';
import type { ProductData } from '../../types/ProductTypes';


export const MainPage = () => {
    const [products] = useState<ProductData[]>([
        { id: 1, name: '프리미엄 무선 이어폰', price: 129000, originalPrice: 1290000, image: 'https://via.placeholder.com/300x300/4299e1/ffffff?text=Product+1', badge: 'NEW' },
        { id: 2, name: '스마트워치 Pro', price: 289000, originalPrice: 1290000, image: 'https://via.placeholder.com/300x300/8b5cf6/ffffff?text=Product+2', badge: 'HOT' },
        { id: 3, name: '캐주얼 백팩', price: 59000, originalPrice: 1290000, image: 'https://via.placeholder.com/300x300/10b981/ffffff?text=Product+3', badge: '' },
        { id: 4, name: '블루투스 스피커', price: 89000, originalPrice: 1290000, image: 'https://via.placeholder.com/300x300/f59e0b/ffffff?text=Product+4', badge: 'SALE' },
        { id: 5, name: '데일리 스니커즈', price: 79000, originalPrice: 1290000, image: 'https://via.placeholder.com/300x300/ef4444/ffffff?text=Product+5', badge: '' },
        { id: 6, name: '미니멀 지갑', price: 39000, originalPrice: 1290000, image: 'https://via.placeholder.com/300x300/ec4899/ffffff?text=Product+6', badge: 'NEW' },
        { id: 7, name: '노트북 파우치', price: 29000, originalPrice: 1290000, image: 'https://via.placeholder.com/300x300/06b6d4/ffffff?text=Product+7', badge: '' },
        { id: 8, name: '휴대용 보조배터리', price: 45000, originalPrice: 1290000, image: 'https://via.placeholder.com/300x300/14b8a6/ffffff?text=Product+8', badge: 'HOT' },
    ])

    const [categories] = useState<CategoryData[]>([
        { id: 1, name: '전자기기', icon: '📱' },
        { id: 2, name: '패션', icon: '👕' },
        { id: 3, name: '뷰티', icon: '💄' },
        { id: 4, name: '홈/리빙', icon: '🏠' },
        { id: 5, name: '스포츠', icon: '⚽' },
        { id: 6, name: '도서', icon: '📚' },
    ])

    return (
        <>
            {/* Banners */}
            <BannerSection />
            {/* Categories */}
            <CategorySection categories={categories} />
            {/* Products */}
            <ProductSection products={products} />
        </>
    )
}