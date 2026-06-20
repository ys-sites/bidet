import React, { useState } from 'react';
import { products } from '../data';
import { Product } from '../types';
import { Star, ShieldAlert, Sparkles, CheckCircle, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface BidetProductGridProps {
  onAddToCart: (product: Product, selectedColor: string, selectedToiletShape?: 'round' | 'elongated') => void;
}

export default function BidetProductGrid({ onAddToCart }: BidetProductGridProps) {
  // Color selection state mapped by product id
  const [selectedColors, setSelectedColors] = useState<Record<string, string>>({
    'lura-classic': 'Matte Clay',
    'lura-aero': 'Warm Alabaster',
    'lura-wand': 'Brushed Brass'
  });

  // Toilet shape selection state (for Seat models only)
  const [toiletShape, setToiletShape] = useState<'round' | 'elongated'>('elongated');
  
  // Quick spec drawer modal details
  const [activeSpecProduct, setActiveSpecProduct] = useState<Product | null>(null);

  const handleColorChange = (productId: string, colorName: string) => {
    setSelectedColors((prev) => ({ ...prev, [productId]: colorName }));
  };

  return (
    <section id="shop-grid" className="py-20 px-6 sm:px-12 bg-[#FAF8F5] text-ink border-b border-sand relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-bidet-teal uppercase font-display text-xs font-bold tracking-[0.2em] bg-bidet-teal/[0.06] py-1 px-3.5 rounded-full inline-block mb-3">
            EXPLORE THE RANGE
          </span>
          <h2 className="font-display font-medium tracking-tight text-3xl sm:text-5xl text-ink leading-tight">
            Find the perfect wash for <br className="hidden sm:block" />
            <span className="italic font-light text-bidet-teal">your private spots.</span>
          </h2>
          <p className="font-sans text-sm text-ink-light mt-4">
            Which LURA suits your throne? Compare the sleek dual-nozzle attachments with the premium heated seats or tactical brass sprayers.
          </p>
        </div>

        {/* Product Cards Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((prod) => {
            const activeColor = selectedColors[prod.id];
            
            return (
              <motion.div 
                key={prod.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col bg-cream rounded-3xl overflow-hidden border border-sand shadow-sm hover:shadow-lg hover:border-clay/50 transition-all text-left"
              >
                
                {/* Product Image & Badges */}
                <div className="relative bg-sand/30 aspect-square flex items-center justify-center p-4 overflow-hidden group">
                  
                  {/* Category badge */}
                  <span className="absolute top-4 left-4 bg-cream/95 text-ink border border-sand text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full z-15 shadow-sm">
                    {prod.type}
                  </span>

                  {prod.originalPrice && (
                    <span className="absolute top-4 right-4 bg-bidet-blue text-cream text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full z-15 shadow-sm">
                      SAVE ${prod.originalPrice - prod.price}
                    </span>
                  )}

                  {/* Image with zoom effect */}
                  <img 
                    src={prod.image} 
                    alt={prod.name} 
                    className="max-h-[85%] max-w-[85%] object-contain rounded-2xl group-hover:scale-103 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Floating Action / Info icon */}
                  <button 
                    onClick={() => setActiveSpecProduct(prod)}
                    className="absolute bottom-4 right-4 bg-cream/90 hover:bg-bidet-teal hover:text-cream p-2.5 rounded-full shadow-md cursor-pointer transition-colors text-ink-light flex items-center justify-center"
                    title="Quick Specs Detail Information"
                  >
                    <Info className="w-4 h-4" />
                  </button>
                </div>

                {/* Content Block */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Stars and Reviews */}
                    <div className="flex items-center gap-1.5 mb-2">
                      <div className="flex text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current text-bidet-blue" />
                        ))}
                      </div>
                      <span className="text-[11px] font-semibold text-ink-light">
                        {prod.rating} ({prod.reviewsCount} reviews)
                      </span>
                    </div>

                    <h3 className="font-display font-medium text-2xl text-ink leading-none mb-1">
                      {prod.name}
                    </h3>
                    
                    <p className="font-sans text-xs sm:text-sm font-semibold text-bidet-teal mb-4 uppercase tracking-wide">
                      {prod.tagline}
                    </p>

                    <p className="font-sans text-xs sm:text-sm text-ink-light mb-6 leading-relaxed">
                      {prod.description}
                    </p>

                    {/* Features list */}
                    <div className="space-y-2 mb-6 border-b border-sand/40 pb-6">
                      {prod.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink-light">
                          <CheckCircle className="w-4 h-4 text-bidet-teal shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Color Swatch Selector */}
                    {prod.colorOptions && prod.colorOptions.length > 0 && (
                      <div className="mb-6">
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-ink-light mb-2">
                          COLOR OPTION: <span className="text-ink lowercase font-normal italic">({activeColor})</span>
                        </label>
                        <div className="flex items-center gap-3">
                          {prod.colorOptions.map((opt) => (
                            <button
                              key={opt.name}
                              onClick={() => handleColorChange(prod.id, opt.name)}
                              className={`w-8 h-8 rounded-full border-2 transition-transform cursor-pointer flex items-center justify-center ${activeColor === opt.name ? 'border-bidet-teal scale-110 shadow-sm' : 'border-transparent hover:scale-105'}`}
                              title={opt.name}
                            >
                              <span 
                                className="w-[20px] h-[20px] rounded-full border border-sand" 
                                style={{ backgroundColor: opt.hex }}
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Shape Selector (Only for Aero Seat) */}
                    {prod.type === 'seat' && (
                      <div className="mb-6 bg-sand/30 p-3 rounded-2xl border border-sand/55">
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-ink mb-2">
                          SELECT TOILET SHAPE:
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            onClick={() => setToiletShape('round')}
                            className={`py-1.5 px-3 rounded-xl text-xs font-semibold cursor-pointer transition-all border ${toiletShape === 'round' ? 'bg-bidet-teal text-cream border-bidet-teal' : 'bg-cream text-ink-light border-sand hover:bg-[#F2EDEA]'}`}
                          >
                            Round Shape
                          </button>
                          <button
                            onClick={() => setToiletShape('elongated')}
                            className={`py-1.5 px-3 rounded-xl text-xs font-semibold cursor-pointer transition-all border ${toiletShape === 'elongated' ? 'bg-bidet-teal text-cream border-bidet-teal' : 'bg-cream text-ink-light border-sand hover:bg-[#F2EDEA]'}`}
                          >
                            Elongated Seat
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Pricing and CTA button */}
                  <div>
                    <div className="flex items-baseline justify-between mb-4 mt-2">
                      <div className="flex items-baseline gap-2">
                        <span className="font-display font-bold text-3xl text-ink">${prod.price}</span>
                        {prod.originalPrice && (
                          <span className="font-sans text-sm text-ink-light/50 line-through">${prod.originalPrice}</span>
                        )}
                      </div>
                      <span className="text-[10px] font-bold tracking-widest text-[#B5916A] uppercase">
                        HSA / FSA Eligible
                      </span>
                    </div>

                    <button
                      onClick={() => onAddToCart(prod, activeColor, prod.type === 'seat' ? toiletShape : undefined)}
                      className={`w-full py-4 bg-bidet-teal hover:bg-bidet-teal/95 text-cream rounded-2xl text-[13px] font-bold tracking-widest uppercase cursor-pointer transition-colors shadow-sm hover:shadow-md flex items-center justify-center gap-2`}
                    >
                      <Sparkles className="w-4 h-4 fill-current text-cream" />
                      ADD TO SHOPPING CART
                    </button>
                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>
      </div>

      {/* QUICK SPECS DETAIL MODAL DRAWER */}
      <AnimatePresence>
        {activeSpecProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveSpecProduct(null)}
              className="absolute inset-0 bg-ink/70 backdrop-blur-xs"
            />

            {/* Modal Box */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-cream pr-4 pl-4 sm:pr-8 sm:pl-8 py-8 w-full max-w-[500px] rounded-3xl relative z-10 shadow-2xl border border-sand text-left"
            >
              <h3 className="font-display font-medium text-2xl text-ink leading-tight mb-2">
                {activeSpecProduct.name} - Inside Analytics
              </h3>
              <p className="font-sans text-xs text-ink-light uppercase tracking-wider mb-4 font-semibold text-bidet-blue">
                {activeSpecProduct.tagline}
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="bg-sand/35 p-4 rounded-2xl border border-sand text-xs leading-relaxed text-[#5C4533]">
                  <strong>Sassy Bathroom Wisdom:</strong> <br />
                  <span className="italic">"{activeSpecProduct.wittyFact}"</span>
                </div>

                <div className="text-sm space-y-2 text-ink-light">
                  <p><strong>Mounting Category:</strong> Fits standard North American standard toilet brackets.</p>
                  <p><strong>Power Hookup:</strong> {activeSpecProduct.type === 'seat' ? 'Standard GFCI wall plug (110V).' : 'No electrical connection required! Pure hydraulic water flow pressure.'}</p>
                  <p><strong>Material Quality:</strong> Selected high-gauge brass core valves, sleek polymer casing & reinforced braided metal hose attachments.</p>
                  <p><strong>Plumbing Check:</strong> Standard T-valve (included) links directly right to your fresh clean water supply line (not the tank water!).</p>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    const activeColor = selectedColors[activeSpecProduct.id];
                    onAddToCart(activeSpecProduct, activeColor, activeSpecProduct.type === 'seat' ? toiletShape : undefined);
                    setActiveSpecProduct(null);
                  }}
                  className="flex-1 py-3 bg-bidet-teal hover:bg-bidet-blue text-cream rounded-xl text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  ADD TO CART
                </button>
                <button
                  onClick={() => setActiveSpecProduct(null)}
                  className="px-6 py-3 bg-sand hover:bg-clay text-ink rounded-xl text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  CLOSE
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
