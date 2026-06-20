import React, { useState } from 'react';
import { Star, Info, Check, Sparkles, ShoppingCart, HelpCircle } from 'lucide-react';
import { Product } from '../types';
import { products } from '../data';
import { motion, AnimatePresence } from 'motion/react';

interface BidetProductGridProps {
  onAddToCart: (product: Product, color: string) => void;
}

export default function BidetProductGrid({ onAddToCart }: BidetProductGridProps) {
  const [selectedColors, setSelectedColors] = useState<Record<string, string>>({
    'lura-classic': 'Matte Clay',
    'lura-aero': 'Warm Alabaster',
    'lura-wand': 'Brushed Brass'
  });

  const [activeInfoModal, setActiveInfoModal] = useState<Product | null>(null);

  const handleColorSelect = (productId: string, colorName: string) => {
    setSelectedColors(prev => ({
      ...prev,
      [productId]: colorName
    }));
  };

  return (
    <section id="shop-grid" className="py-20 px-6 sm:px-12 bg-cream text-ink border-b border-sand">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-bidet-teal uppercase font-display text-xs font-bold tracking-[0.2em] bg-bidet-teal/[0.06] py-1 px-3.5 rounded-full inline-block mb-3">
            SHOP OUR MODELS
          </span>
          <h2 className="font-display font-medium tracking-tight text-3xl sm:text-5xl text-ink leading-none mt-2 mb-4">
            A premium splash. <br />
            <span className="italic font-light text-bidet-teal">Perfected for your toilet.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-ink-light">
            We spent hundreds of hours engineering bidet hardware that disappears into your space but works flawlessly on your bum. Choose your upgrade.
          </p>
        </div>

        {/* Dynamic Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => {
            const chosenColorName = selectedColors[product.id];
            const chosenColorHex = product.colorOptions?.find(c => c.name === chosenColorName)?.hex || '#D4AF37';

            return (
              <motion.div 
                key={product.id}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="group relative flex flex-col bg-cream border border-sand/70 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
              >
                {/* Product Image Panel */}
                <div className="relative w-full aspect-[4/3] bg-sand/30 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {product.originalPrice && (
                    <span className="absolute top-4 left-4 bg-bidet-teal text-cream font-sans text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                      SAVE ${(product.originalPrice - product.price)}
                    </span>
                  )}
                  <button 
                    onClick={() => setActiveInfoModal(product)}
                    className="absolute top-4 right-4 p-2 bg-cream/90 hover:bg-cream text-ink shadow-md rounded-full cursor-pointer transition-colors"
                    title="View details & witty facts"
                  >
                    <Info className="w-4 h-4 text-bidet-teal" />
                  </button>
                </div>

                {/* Card Info */}
                <div className="p-6 sm:p-8 flex flex-col flex-1">
                  
                  {/* Rating Block */}
                  <div className="flex items-center gap-1.5 text-xs text-ink-light mb-3">
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current text-bidet-blue" />
                      ))}
                    </div>
                    <span>({product.reviewsCount} reviews)</span>
                  </div>

                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-ink">
                      {product.name}
                    </h3>
                    <div className="text-right">
                      <span className="text-xl sm:text-2xl font-bold font-display text-bidet-teal">${product.price}</span>
                      {product.originalPrice && (
                        <span className="block text-xs font-sans text-ink-light/70 line-through">${product.originalPrice}</span>
                      )}
                    </div>
                  </div>

                  <p className="text-xs text-bidet-blue font-semibold uppercase tracking-wider mb-4 leading-none">
                    {product.tagline}
                  </p>

                  <p className="text-sm text-ink-light line-clamp-3 mb-6 text-left">
                    {product.description}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2 mb-8 text-left">
                    {product.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs text-ink">
                        <span className="p-0.5 bg-bidet-teal/[0.08] text-bidet-teal rounded-full">
                          <Check className="w-3.5 h-3.5" />
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Color Selector */}
                  {product.colorOptions && (
                    <div className="mb-6 flex flex-col gap-2">
                      <p className="text-xs font-semibold text-ink-light uppercase tracking-wider text-left">
                        Color: <strong className="text-ink font-bold">{chosenColorName}</strong>
                      </p>
                      <div className="flex gap-2.5">
                        {product.colorOptions.map((color) => (
                          <button
                            key={color.name}
                            onClick={() => handleColorSelect(product.id, color.name)}
                            style={{ backgroundColor: color.hex }}
                            className={`w-7 h-7 rounded-full cursor-pointer border-2 transition-all shadow-inner ${
                              chosenColorName === color.name 
                                ? 'border-bidet-teal scale-110 shadow-md ring-2 ring-bidet-teal/20' 
                                : 'border-white hover:scale-105'
                            }`}
                            title={color.name}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Add To Cart Trigger */}
                  <button 
                    onClick={() => onAddToCart(product, chosenColorName)}
                    className="w-full mt-auto flex items-center justify-center gap-2.5 py-3.5 bg-bidet-teal hover:bg-bidet-teal/95 text-cream rounded-full font-bold text-sm tracking-wide shadow-md transition-colors cursor-pointer"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Add {product.name} to Cart
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Active Product detail popup (Framer motion animated) */}
        <AnimatePresence>
          {activeInfoModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
              {/* Overlay */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveInfoModal(null)}
                className="fixed inset-0 bg-ink/70 backdrop-blur-sm"
              />

              {/* Modal Box */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.93, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.93, y: 20 }}
                className="relative bg-cream border border-sand w-full max-w-[620px] rounded-3xl shadow-2xl p-8 sm:p-12 z-10 overflow-y-auto max-h-[85vh] text-left"
              >
                <div className="absolute top-6 right-6">
                  <button 
                    onClick={() => setActiveInfoModal(null)} 
                    className="p-2 hover:bg-sand/30 rounded-full transition cursor-pointer"
                  >
                    <span className="font-sans font-medium text-lg text-ink-light">✕</span>
                  </button>
                </div>

                <div className="flex items-center gap-2.5 text-xs font-semibold text-bidet-teal uppercase tracking-widest bg-bidet-teal/[0.06] w-max py-1 px-3 rounded-full mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  Product Insight
                </div>

                <h3 className="font-display font-medium text-3xl sm:text-4xl text-ink tracking-tight mb-2">
                  {activeInfoModal.name} Specifications
                </h3>
                
                <p className="text-sm font-semibold text-bidet-blue uppercase tracking-wider mb-6">
                  {activeInfoModal.tagline}
                </p>

                <div className="space-y-4 mb-8">
                  <p className="text-ink-light text-base leading-relaxed leading-[22px]">
                    {activeInfoModal.description}
                  </p>
                  
                  {/* Detailed specs table */}
                  <div className="bg-sand/35 rounded-2xl p-5 border border-sand/65">
                    <h4 className="font-display font-bold text-xs uppercase tracking-wider text-ink mb-3">Technical Details:</h4>
                    <ul className="text-xs text-ink-light space-y-2.5">
                      <li className="flex justify-between border-b border-sand/30 pb-1.5">
                        <span className="font-bold">Water Feed</span>
                        <span>Standard fresh water intake (T-valve included)</span>
                      </li>
                      <li className="flex justify-between border-b border-sand/30 pb-1.5">
                        <span className="font-bold">Electricity Requirements</span>
                        <span>{activeInfoModal.type === 'seat' ? 'Standard 120V GFCI Outlet (Heated)' : 'None (Mechanically powered by water pressure)'}</span>
                      </li>
                      <li className="flex justify-between pb-1">
                        <span className="font-bold">Mounting Hardware</span>
                        <span>Corrosion-resistant heavy-duty metal core</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Confident, witty comment card (Tushy style) */}
                <div className="bg-[#FAF2E8] border border-[#ECD9C5] rounded-2xl p-6 relative overflow-hidden">
                  <div className="absolute top-4 right-4 text-[#C19C74]">
                    <HelpCircle className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <h4 className="font-display font-bold text-xs uppercase text-[#B57C3E] tracking-widest mb-1">
                    Buster of Wet Paper Myths
                  </h4>
                  <p className="text-sm italic text-[#5C4533] leading-relaxed">
                    "{activeInfoModal.wittyFact}"
                  </p>
                </div>

                <div className="mt-8 flex gap-4">
                  <button
                    onClick={() => {
                      onAddToCart(activeInfoModal, selectedColors[activeInfoModal.id]);
                      setActiveInfoModal(null);
                    }}
                    className="flex-1 py-4 bg-bidet-teal hover:bg-bidet-teal/95 text-cream font-bold rounded-full text-center text-sm shadow-md cursor-pointer transition-all"
                  >
                    Add to Cart • ${(activeInfoModal.price)}
                  </button>
                  <button
                    onClick={() => setActiveInfoModal(null)}
                    className="px-6 py-4 border border-sand hover:bg-sand/20 text-ink-light font-medium rounded-full text-sm cursor-pointer transition-all"
                  >
                    Dismiss
                  </button>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
