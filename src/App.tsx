import React, { useState } from 'react';
import BidetNavbar from './components/BidetNavbar';
import BidetHero from './components/BidetHero';
import BidetProductGrid from './components/BidetProductGrid';
import BidetWhySection from './components/BidetWhySection';
import BidetComparisonTable from './components/BidetComparisonTable';
import BidetSocialProof from './components/BidetSocialProof';
import BidetCompatibilityChecker from './components/BidetCompatibilityChecker';
import BidetInstallConfidence from './components/BidetInstallConfidence';
import BidetCartDrawer from './components/BidetCartDrawer';
import BidetFooter from './components/BidetFooter';
import { Product, CartItem } from './types';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Add Item to E-commerce Cart state
  const handleAddToCart = (product: Product, color: string, selectedToiletShape?: 'round' | 'elongated') => {
    setCartItems((prevItems) => {
      const matchIdx = prevItems.findIndex(
        (item) => item.product.id === product.id && item.selectedColor === color && item.selectedToiletShape === selectedToiletShape
      );

      if (matchIdx >= 0) {
        const cloned = [...prevItems];
        cloned[matchIdx] = {
          ...cloned[matchIdx],
          quantity: cloned[matchIdx].quantity + 1
        };
        return cloned;
      } else {
        return [...prevItems, { product, quantity: 1, selectedColor: color, selectedToiletShape }];
      }
    });

    // Auto-open slide drawer for immediate user delight
    setCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, color: string, delta: number) => {
    setCartItems((prevItems) => {
      return prevItems
        .map((item) => {
          if (item.product.id === productId && item.selectedColor === color) {
            return { ...item, quantity: item.quantity + delta };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    });
  };

  const handleRemoveItem = (productId: string, color: string) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => !(item.product.id === productId && item.selectedColor === color))
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <div className="relative min-h-screen bg-[#FFFDFB] text-[#1B1E1C] selection:bg-bidet-teal selection:text-cream">
      
      {/* Navigation Layer */}
      <BidetNavbar onCartOpen={() => setCartOpen(true)} cartItemsCount={totalCartCount} />

      {/* Main Experience Layout */}
      <main>
        
        {/* Dynamic Hero banner */}
        <BidetHero />

        {/* Brand Value benefits of water vs paper */}
        <BidetWhySection />

        {/* Product Model Grid (Attachment, Seat, Handheld) */}
        <BidetProductGrid onAddToCart={handleAddToCart} />

        {/* side-by-side feature comparison table */}
        <BidetComparisonTable />

        {/* Playful & credible testimonials with stats */}
        <BidetSocialProof />

        {/* Interactive round shape / elongated simulator */}
        <BidetCompatibilityChecker />

        {/* Step-by-step DIY walkthrough */}
        <BidetInstallConfidence />

      </main>

      {/* Brand Footer */}
      <BidetFooter />

      {/* Interactive Cart drawer */}
      <BidetCartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Sticky Bottom Announcement & CTA strip (Tushy / Brondell premium style) */}
      <div className="fixed bottom-0 left-0 right-0 z-35 bg-ink/90 backdrop-blur-md border-t border-cream/10 text-cream px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold">
          <span className="p-1.5 bg-bidet-teal text-cream rounded-lg">
            <Sparkles className="w-3.5 h-3.5" />
          </span>
          <span>Wash Happily. Use code <strong className="text-bidet-blue font-bold">FRESHBUTT</strong> for 15% off coupon savings!</span>
        </div>
        
        <a 
          href="#shop-grid" 
          className="px-5 py-2.5 bg-bidet-teal hover:bg-bidet-blue text-cream font-bold text-xs uppercase tracking-wider rounded-full shadow transition flex items-center gap-2"
        >
          Explore Models
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

    </div>
  );
}
