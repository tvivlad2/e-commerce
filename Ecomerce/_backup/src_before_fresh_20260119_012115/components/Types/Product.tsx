export interface Product {
  id: number;
  name: string;
  originalPrice: number;
  discountedPrice?: number;
  rating: number;
  reviewCount: number;
}
