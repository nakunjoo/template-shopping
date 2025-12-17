export interface ProductData {
    id: number;
    name: string;
    price: number;
    originalPrice: number;
    discount?: number;
    image: string;
    badge: string;
    rating?: number;
    reviews?: number;
}
