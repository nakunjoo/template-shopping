import { useCallback } from "react"
import type { ProductData } from '../../types/ProductTypes';
import { useNavigate } from "react-router-dom";

interface PropsData {
    product: ProductData;
}

export const ItemCard = ({product}:PropsData) => {
    const navigate = useNavigate()
    const renderStars = useCallback((rating: number) => {
        return Array.from({ length: 5 }, (_, i) => (
            <span key={i} className={i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}>
                ★
            </span>
        ))
    },[])
    

    return (
        <div
            key={product.id}
            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:border-blue-600 hover:-translate-y-1 hover:shadow-lg transition-all cursor-pointer group"
            onClick={()=>{
                navigate('/products/123')
            }}
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
                {(product.discount && product.discount > 0) && (
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
                {product.rating && (
                    <div className="flex items-center gap-1 text-xs mb-2">
                        <div className="flex">{renderStars(product.rating)}</div>
                        <span className="text-gray-400">({product.reviews})</span>
                    </div>
                )}
                <div className="space-y-1">
                    {(product.discount && product.discount > 0) && (
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
    )
}