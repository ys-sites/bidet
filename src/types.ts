export interface ColorOption {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
  image: string;
  tag?: string;
  category?: 'attachment' | 'seat' | 'handheld' | 'accessory';
  tagline?: string;
  type?: 'attachment' | 'seat' | 'handheld' | 'accessory';
  rating?: number;
  reviewsCount?: number;
  wittyFact?: string;
  inStock?: boolean;
  colorOptions?: ColorOption[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedOptions: {
    shape?: 'Round' | 'Elongated';
    finish?: 'Chrome' | 'Brushed Steel' | 'Matte Black' | 'Alpine White';
    waterType?: 'Ambient Only' | 'Dual Temp (Warm & Cold)';
  };
}

export interface DiscountCode {
  code: string;
  discountType: 'percentage' | 'fixed';
  value: number;
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
