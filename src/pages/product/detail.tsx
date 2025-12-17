import { useState } from 'react'
import { useParams } from 'react-router-dom'

interface Review {
    id: number;
    author: string;
    rating: number;
    date: string;
    content: string;
    images?: string[];
}

interface ProductOption {
    id: number;
    name: string;
    values: string[];
}

export const ProductDetailPage = () => {
    const { id } = useParams()
    const [selectedImage, setSelectedImage] = useState(0)
    const [quantity, setQuantity] = useState(1)
    const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({})

    // 샘플 데이터 (실제로는 API에서 가져와야 함)
    const product = {
        id: id || '1',
        name: '프리미엄 무선 이어폰 Pro Max',
        price: 129000,
        originalPrice: 189000,
        discount: 32,
        rating: 4.8,
        reviewCount: 328,
        badge: 'NEW',
        description: '최고의 음질과 편안한 착용감을 자랑하는 프리미엄 무선 이어폰입니다.',
        images: [
            'https://via.placeholder.com/600x600/4299e1/ffffff?text=Product+1',
            'https://via.placeholder.com/600x600/8b5cf6/ffffff?text=Product+2',
            'https://via.placeholder.com/600x600/10b981/ffffff?text=Product+3',
            'https://via.placeholder.com/600x600/f59e0b/ffffff?text=Product+4',
        ],
        features: [
            '노이즈 캔슬링 기능',
            '최대 30시간 재생',
            'IPX7 방수 등급',
            '블루투스 5.3',
        ],
        delivery: '무료배송 | 내일 도착 예정',
    }

    const options: ProductOption[] = [
        { id: 1, name: '색상', values: ['블랙', '화이트', '블루', '핑크'] },
        { id: 2, name: '용량', values: ['32GB', '64GB', '128GB'] },
    ]

    const reviews: Review[] = [
        {
            id: 1,
            author: '김**',
            rating: 5,
            date: '2024.12.15',
            content: '음질이 정말 좋아요! 노이즈 캔슬링도 훌륭하고 배터리도 오래가네요. 강력 추천합니다!',
            images: ['https://via.placeholder.com/100x100/4299e1/ffffff?text=Review+1'],
        },
        {
            id: 2,
            author: '이**',
            rating: 4,
            date: '2024.12.14',
            content: '가격대비 성능이 좋습니다. 디자인도 깔끔하고 착용감도 편해요.',
        },
        {
            id: 3,
            author: '박**',
            rating: 5,
            date: '2024.12.13',
            content: '최고예요! 이전에 사용하던 것보다 훨씬 좋네요. 배송도 빨랐습니다.',
        },
    ]

    const relatedProducts = [
        { id: 1, name: '프리미엄 케이스', price: 29000, image: 'https://via.placeholder.com/200x200/ec4899/ffffff?text=Case' },
        { id: 2, name: '고속 충전기', price: 35000, image: 'https://via.placeholder.com/200x200/06b6d4/ffffff?text=Charger' },
        { id: 3, name: '이어팁 세트', price: 15000, image: 'https://via.placeholder.com/200x200/14b8a6/ffffff?text=Tips' },
        { id: 4, name: '보호 파우치', price: 19000, image: 'https://via.placeholder.com/200x200/f59e0b/ffffff?text=Pouch' },
    ]

    const handleOptionChange = (optionName: string, value: string) => {
        setSelectedOptions({ ...selectedOptions, [optionName]: value })
    }

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, i) => (
            <span key={i} className={i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}>
                ★
            </span>
        ))
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-5 py-8">
                {/* 상품 정보 섹션 */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm mb-8">
                    <div className="grid md:grid-cols-2 gap-8 p-8">
                        {/* 이미지 갤러리 */}
                        <div className="space-y-4">
                            <div className="relative aspect-square bg-gray-100 rounded-2xl overflow-hidden">
                                {product.badge && (
                                    <span className="absolute top-4 left-4 px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold z-10">
                                        {product.badge}
                                    </span>
                                )}
                                <img
                                    src={product.images[selectedImage]}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="grid grid-cols-4 gap-3">
                                {product.images.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImage(index)}
                                        className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                                            selectedImage === index
                                                ? 'border-blue-600 ring-2 ring-blue-600 ring-offset-2'
                                                : 'border-gray-200 hover:border-gray-300'
                                        }`}
                                    >
                                        <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* 상품 정보 */}
                        <div className="space-y-6">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900 mb-3">{product.name}</h1>
                                <p className="text-gray-600">{product.description}</p>
                            </div>

                            {/* 평점 */}
                            <div className="flex items-center gap-2">
                                <div className="flex">{renderStars(product.rating)}</div>
                                <span className="font-semibold text-gray-900">{product.rating}</span>
                                <span className="text-gray-400">({product.reviewCount}개 리뷰)</span>
                            </div>

                            {/* 가격 */}
                            <div className="border-y border-gray-200 py-6 space-y-2">
                                <div className="flex items-baseline gap-3">
                                    <span className="text-4xl font-bold text-gray-900">
                                        {product.price.toLocaleString()}원
                                    </span>
                                    <span className="text-xl text-gray-400 line-through">
                                        {product.originalPrice.toLocaleString()}원
                                    </span>
                                    <span className="px-3 py-1 bg-red-500 text-white text-sm font-bold rounded-full">
                                        {product.discount}%
                                    </span>
                                </div>
                                <p className="text-sm text-blue-600 font-medium">{product.delivery}</p>
                            </div>

                            {/* 옵션 선택 */}
                            <div className="space-y-4">
                                {options.map((option) => (
                                    <div key={option.id}>
                                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                                            {option.name}
                                        </label>
                                        <div className="grid grid-cols-4 gap-2">
                                            {option.values.map((value) => (
                                                <button
                                                    key={value}
                                                    onClick={() => handleOptionChange(option.name, value)}
                                                    className={`py-3 px-4 rounded-xl text-sm font-medium border-2 transition-all ${
                                                        selectedOptions[option.name] === value
                                                            ? 'border-blue-600 bg-blue-50 text-blue-600'
                                                            : 'border-gray-200 text-gray-700 hover:border-gray-300'
                                                    }`}
                                                >
                                                    {value}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ))}

                                {/* 수량 선택 */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-900 mb-2">수량</label>
                                    <div className="flex items-center gap-3">
                                        <button
                                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                            className="w-12 h-12 rounded-xl border-2 border-gray-200 text-gray-600 font-bold hover:border-gray-300 transition-colors"
                                        >
                                            -
                                        </button>
                                        <input
                                            type="number"
                                            value={quantity}
                                            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                            className="w-20 h-12 text-center rounded-xl border-2 border-gray-200 font-semibold focus:outline-none focus:border-blue-600"
                                        />
                                        <button
                                            onClick={() => setQuantity(quantity + 1)}
                                            className="w-12 h-12 rounded-xl border-2 border-gray-200 text-gray-600 font-bold hover:border-gray-300 transition-colors"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* 총 금액 */}
                            <div className="bg-gray-50 rounded-xl p-5">
                                <div className="flex justify-between items-center">
                                    <span className="text-lg font-semibold text-gray-900">총 상품금액</span>
                                    <span className="text-3xl font-bold text-blue-600">
                                        {(product.price * quantity).toLocaleString()}원
                                    </span>
                                </div>
                            </div>

                            {/* 구매 버튼 */}
                            <div className="flex gap-3">
                                <button className="flex-1 py-4 bg-white border-2 border-blue-600 text-blue-600 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors">
                                    장바구니
                                </button>
                                <button className="flex-1 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors">
                                    바로구매
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 상세 정보 탭 */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm mb-8">
                    <div className="border-b border-gray-200">
                        <div className="flex gap-8 px-8">
                            <button className="py-4 px-2 font-semibold text-blue-600 border-b-2 border-blue-600">
                                상품정보
                            </button>
                            <button className="py-4 px-2 font-semibold text-gray-500 hover:text-gray-900">
                                리뷰 ({product.reviewCount})
                            </button>
                            <button className="py-4 px-2 font-semibold text-gray-500 hover:text-gray-900">
                                배송/교환/반품
                            </button>
                        </div>
                    </div>

                    <div className="p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">상품 특징</h2>
                        <ul className="space-y-3">
                            {product.features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-3 text-gray-700">
                                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                            <h3 className="font-semibold text-gray-900 mb-3">상세 설명</h3>
                            <p className="text-gray-600 leading-relaxed">
                                프리미엄 무선 이어폰은 최신 블루투스 5.3 기술을 탑재하여 안정적인 연결과 뛰어난 음질을 제공합니다.
                                능동형 노이즈 캔슬링(ANC) 기능으로 주변 소음을 효과적으로 차단하여 몰입감 있는 청취 경험을 선사합니다.
                                인체공학적 디자인으로 장시간 착용해도 편안하며, IPX7 방수 등급으로 운동이나 야외 활동 시에도 안심하고 사용할 수 있습니다.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 리뷰 섹션 */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm mb-8">
                    <div className="p-8">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-gray-900">고객 리뷰</h2>
                            <button className="px-5 py-2.5 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                                리뷰 작성
                            </button>
                        </div>

                        <div className="space-y-6">
                            {reviews.map((review) => (
                                <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0">
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center gap-3">
                                            <span className="font-semibold text-gray-900">{review.author}</span>
                                            <div className="flex">{renderStars(review.rating)}</div>
                                        </div>
                                        <span className="text-sm text-gray-500">{review.date}</span>
                                    </div>
                                    <p className="text-gray-700 mb-3">{review.content}</p>
                                    {review.images && (
                                        <div className="flex gap-2">
                                            {review.images.map((img, idx) => (
                                                <img
                                                    key={idx}
                                                    src={img}
                                                    alt={`리뷰 이미지 ${idx + 1}`}
                                                    className="w-20 h-20 rounded-lg object-cover"
                                                />
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <button className="w-full mt-6 py-3 border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-gray-300 transition-colors">
                            리뷰 더보기
                        </button>
                    </div>
                </div>

                {/* 추천 상품 */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                    <div className="p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">함께 구매하면 좋은 상품</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {relatedProducts.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-blue-600 hover:shadow-lg transition-all cursor-pointer group"
                                >
                                    <div className="aspect-square bg-gray-100">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-1">{item.name}</h3>
                                        <p className="text-lg font-bold text-gray-900">{item.price.toLocaleString()}원</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
