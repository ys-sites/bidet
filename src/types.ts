export interface Product {
  id: string;
  name: string;
  tagline: string;
  type: 'attachment' | 'seat' | 'handheld';
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  features: string[];
  description: string;
  wittyFact: string; // The trademark confident, witty bidet facts (Tushy-style)
  inStock: boolean;
  colorOptions?: { name: string; hex: string }[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
  selectedToiletShape?: 'round' | 'elongated';
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  productName: string;
  verifiedWinner: boolean;
  avatarLetter: string;
  avatarBg: string;
}
