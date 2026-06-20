import React, { useState } from 'react';
import { ShoppingBag, Sparkles, Menu, X, Droplet } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface BidetNavbarProps {
  onCartOpen: () => void;
  cartItemsCount: number;
}

export default function BidetNavbar({ onCartOpen, cartItemsCount }: BidetNavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Shop Bidets', href: '#shop-grid' },
    { name: 'Why Lura', href: '#why-bidet' },
    { name: 'Comparison', href: '#comparison' },
    { name: 'Compatibility', href: '#compatibility' },
    { name: 'Easy Install', href: '#install' },
  ];

  return (
    <nav className="sticky top-0 z-40 w-full bg-cream/90 backdrop-blur-md border-b border-sand text-ink transition-all">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between h-20">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group font-display tracking-[0.1em] text-2xl font-bold uppercase transition">
          <span className="p-2 bg-bidet-teal text-cream rounded-xl transition-all group-hover:scale-105 group-hover:bg-bidet-blue">
            <Droplet className="w-5 h-5 fill-current" />
          </span>
          <span className="text-bidet-teal group-hover:text-bidet-blue transition-colors">LURA</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-sans font-medium text-[14px] text-ink-light tracking-wide">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="relative hover:text-bidet-teal transition-colors py-2 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-bidet-teal transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <button 
            onClick={onCartOpen}
            className="relative p-2.5 bg-sand/50 text-ink hover:bg-clay/40 rounded-full cursor-pointer transition-all flex items-center justify-center"
            aria-label="Toggle Shopping Cart"
          >
            <ShoppingBag className="w-[19px] h-[19px]" />
            <AnimatePresence>
              {cartItemsCount > 0 && (
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -top-1 -right-1 w-5 h-5 bg-bidet-blue text-cream text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-cream"
                >
                  {cartItemsCount}
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          <a 
            href="#shop-grid" 
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-bidet-teal hover:bg-bidet-teal/90 text-cream text-xs font-semibold tracking-wider uppercase rounded-full shadow-sm cursor-pointer transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Find Your Wash
          </a>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 md:hidden hover:bg-sand/30 rounded-xl cursor-pointer"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Links Container */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-sand bg-cream/95 w-full overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-5 text-lg font-display tracking-tight font-semibold">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-ink hover:text-bidet-teal transition-all py-1 border-b border-sand/30 block"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#shop-grid" 
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center px-6 py-4 bg-bidet-teal text-cream rounded-2xl text-sm font-semibold tracking-wider uppercase"
              >
                Shop Bidets
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
