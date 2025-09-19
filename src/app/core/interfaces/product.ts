export interface ProductInterface {
  id: number;
  name: string;
  description?: string;
  price: number;
  imageUrl?: string;
  category: string;
  stock: number;
  rating?: number;
  discount?: number;
  tags?: string[];
}
