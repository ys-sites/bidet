import { Product, Review } from './types';

export const products: Product[] = [
  {
    id: 'lura-classic',
    name: 'LURA Classic',
    tagline: 'Modern Bidet Attachment',
    type: 'attachment',
    price: 99,
    originalPrice: 129,
    rating: 4.9,
    reviewsCount: 1420,
    image: 'https://raw.githubusercontent.com/ys-sites/bidet/main/src/assets/images/bidet_product_attachment_1781917050535.jpg',
    features: [
      'Self-cleaning pressure dual nozzle',
      'Champagne brass metal dial control',
      'Adjustable water pressure & angle',
      'Installs in under 15 minutes'
    ],
    description: 'Our award-winning flagship bidet attachment. Strikingly beautiful, surprisingly witty, and phenomenally clean. Designed to turn your humble toilet seat into an refreshing, spa-grade wellness oasis in the blink of an eye. No plumbing degree required.',
    wittyFact: 'Fun Fact: Using one Lura Classic wash uses roughly 0.1 gallons of water. It takes 37 gallons of water to make just one single roll of toilet paper. Save the trees, wash your trees.',
    inStock: true,
    colorOptions: [
      { name: 'Matte Clay', hex: '#EEDEC9' },
      { name: 'Pure Chalk', hex: '#FFFFFF' },
      { name: 'Sage Slate', hex: '#879F8E' }
    ]
  },
  {
    id: 'lura-aero',
    name: 'LURA Aero',
    tagline: 'Intelligent Heated Bidet Seat',
    type: 'seat',
    price: 299,
    originalPrice: 349,
    rating: 4.95,
    reviewsCount: 840,
    image: 'https://raw.githubusercontent.com/ys-sites/bidet/main/src/assets/images/bidet_product_seat_1781917062094.jpg',
    features: [
      'Ultra-slim heated seat with 4 temp levels',
      'Warm-air dryer & soothing deodorizer',
      'Soothing ambient night light (LED)',
      'Stainless steel self-cleaning nozzle'
    ],
    description: 'The supreme personal renewal capsule. Elevate your bathroom ritual to legendary heights with custom temperature warm-water, heated seat comfort, and an adjustable warm-air dry that is so soft, it has been compared to a light summer wind.',
    wittyFact: 'Heated Seat Pro Tip: Your buns deserve 98°F of pure luxury, especially during chilly winter night trips. Once you sit, you’ll stay.',
    inStock: true,
    colorOptions: [
      { name: 'Warm Alabaster', hex: '#F9F6F2' },
      { name: 'Modern Ivory', hex: '#FFFDFC' }
    ]
  },
  {
    id: 'lura-wand',
    name: 'LURA Wand',
    tagline: 'Luxury Handheld Sprayer',
    type: 'handheld',
    price: 59,
    originalPrice: 79,
    rating: 4.8,
    reviewsCount: 310,
    image: 'https://raw.githubusercontent.com/ys-sites/bidet/main/src/assets/images/bidet_product_handheld_1781917072872.jpg',
    features: [
      'Heavy-duty solid brass construction',
      'Precision progressive pressure toggle',
      'Ergonomic non-slip aesthetic wand',
      'Multi-purpose (wash, clean, rinse)'
    ],
    description: 'The absolute ruler of tactical clean. Hand-crafted from premium solid brass with detailed texturing, the LURA Wand provides maximum precision, supreme flow control, and beautiful aesthetic presence mounted to your bathroom wall or tank.',
    wittyFact: 'Eco Trivia: Great for deep-cleaning the bathroom, pet hygiene, or targeted, heavy-duty pressure washing. Clean diapers, clean paws, pristine conscience.',
    inStock: true,
    colorOptions: [
      { name: 'Brushed Brass', hex: '#D4AF37' },
      { name: 'Matte Charcoal', hex: '#2C2E2C' }
    ]
  }
];

export const reviews: Review[] = [
  {
    id: 'rev-1',
    author: 'Eleanor V.',
    rating: 5,
    text: 'My husband was a skeptic, calling it a "needless novelty gadget." Now? He calls it his "holy ceramic throne." Setup took exactly 12 minutes with a simple screwdriver. Absolutely beautiful color matching!',
    productName: 'LURA Classic (Matte Clay)',
    verifiedWinner: true,
    avatarLetter: 'E',
    avatarBg: 'bg-emerald-800'
  },
  {
    id: 'rev-2',
    author: 'Devon K.',
    rating: 5,
    text: 'The Aero heated seat is magic. Going to the bathroom feels like visiting an elite Japanese spa. Excellent warm-air blow dry, so I have officially deleted the toilet paper purchase from our monthly budget!',
    productName: 'LURA Aero',
    verifiedWinner: true,
    avatarLetter: 'D',
    avatarBg: 'bg-blue-800'
  },
  {
    id: 'rev-3',
    author: 'Clara S.',
    rating: 5,
    text: 'This company’s copy is extremely funny and witty, but the actual product is exceptionally solid. Heavy brass spray handle, stunning design, great water pressure control. Highly recommended!',
    productName: 'LURA Wand (Brushed Brass)',
    verifiedWinner: true,
    avatarLetter: 'C',
    avatarBg: 'bg-gray-800'
  },
  {
    id: 'rev-4',
    author: 'Marcus P.',
    rating: 5,
    text: 'I ordered the Lura Classic bidet for my apartment. Zero plumbing skills, but done in 15 mins. Clean, elegant, doesn’t look like a clinical medical device. Best upgrade I’ve made in years.',
    productName: 'LURA Classic',
    verifiedWinner: true,
    avatarLetter: 'M',
    avatarBg: 'bg-teal-900'
  }
];
