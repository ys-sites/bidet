import React from 'react';
import { Star, ShieldCheck, Wrench, RefreshCw, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function BidetHero() {
  return (
    <section className="relative overflow-hidden bg-cream py-16 lg:py-24 border-b border-sand text-ink">
      {/* Absolute decorative ambient bubbles/droplets */}
      <div className="absolute top-24 left-[5%] w-60 h-60 rounded-full bg-bidet-teal/[0.03] blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 right-[10%] w-80 h-80 rounded-full bg-bidet-blue/[0.03] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Copywriting */}
        <div className="lg:col-span-6 text-left flex flex-col justify-center">
          
          {/* Trust eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-bidet-teal/[0.06] text-bidet-teal rounded-full w-max text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-bidet-teal animate-pulse" />
            Over 2.5 Million Buns Cleaned
          </div>

          <h1 className="font-display font-medium tracking-tight text-[2.6rem] sm:text-[3.5rem] lg:text-[4rem] leading-[1.05] mb-6 text-ink">
            You wouldn’t clean <span className="text-bidet-teal underline decoration-2 decoration-sand/70">muddy hands</span> with dry paper. 
            <span className="block mt-2 font-light italic text-bidet-blue font-sans">Why your buns?</span>
          </h1>

          <p className="font-sans text-base sm:text-lg text-ink-light leading-relaxed max-w-[530px] mb-8">
            Elevate your bathroom ritual with LURA. A premium personal bidet that blends spa-grade cleanliness with elegant visual restraint. Sleek, sustainable, and easily installed in under 15 minutes.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <a 
              href="#shop-grid" 
              className="px-8 py-4 bg-bidet-teal hover:bg-bidet-teal/90 text-cream rounded-full font-bold text-center text-sm tracking-wide shadow-md hover:shadow-lg transition-all"
            >
              Shop Bidets
            </a>
            <a 
              href="#compatibility" 
              className="group inline-flex items-center justify-center gap-1.5 py-4 px-6 text-sm font-semibold text-bidet-teal hover:text-bidet-blue transition-colors"
            >
              See Compatibility
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Social Proof ratings block */}
          <div className="flex items-center gap-4 border-t border-sand/60 pt-6">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current text-bidet-blue" />
              ))}
            </div>
            <p className="font-sans text-xs sm:text-sm text-ink-light">
              <strong className="text-ink">4.9/5 stars</strong> based on 15,000+ happy bathroom routines
            </p>
          </div>

        </div>

        {/* Right Side: Product/Lifestyle Image */}
        <div className="lg:col-span-6 relative flex justify-center">
          <div className="relative w-full max-w-[580px] rounded-3xl overflow-hidden shadow-2xl border-4 border-cream bg-sand">
            
            {/* Visual content from generate_image asset */}
            <img 
              src="/src/assets/images/bidet_hero_bathroom_1781917037105.jpg" 
              alt="Premium light-filled modern bathroom showing elegant toilet with a bidet attachment" 
              className="w-full h-[320px] sm:h-[480px] object-cover hover:scale-102 transition duration-700"
              referrerPolicy="no-referrer"
            />

            {/* Overlap badge */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-cream/90 backdrop-blur-md px-4 py-3 rounded-2xl border border-sand shadow-lg flex items-center gap-3">
              <span className="p-2 bg-bidet-teal text-cream rounded-xl">
                <Wrench className="w-4 h-4" />
              </span>
              <div className="text-left">
                <p className="text-[10px] font-bold tracking-wider text-ink-light uppercase leading-none">EASY PLUG & PLAY</p>
                <p className="text-xs sm:text-sm font-bold text-ink leading-tight">No Plumber Needed</p>
              </div>
            </div>

            {/* Interactive feature pill */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-bidet-teal text-cream px-3 py-1.5 text-xs font-semibold rounded-full shadow-lg flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cream opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sand"></span>
              </span>
              Spa-Grade Restraint
            </div>
          </div>
        </div>

      </div>

      {/* Trust Badge Strip */}
      <div className="bg-sand/30 py-6 border-t border-sand text-ink mt-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <span className="p-2 bg-cream text-bidet-teal rounded-xl shadow-sm">
              <Wrench className="w-5 h-5" />
            </span>
            <div className="text-center sm:text-left">
              <h5 className="font-display font-bold text-sm text-ink uppercase tracking-wide leading-none">15-MIN INSTALL</h5>
              <p className="text-xs text-ink-light font-sans mt-0.5">Under 20 minutes start to finish</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <span className="p-2 bg-cream text-bidet-teal rounded-xl shadow-sm">
              <ShieldCheck className="w-5 h-5" />
            </span>
            <div className="text-center sm:text-left">
              <h5 className="font-display font-bold text-sm text-ink uppercase tracking-wide leading-none">30-DAY TRIAL</h5>
              <p className="text-xs text-ink-light font-sans mt-0.5">Satisfaction guaranteed or refund</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <span className="p-2 bg-cream text-bidet-teal rounded-xl shadow-sm">
              <RefreshCw className="w-5 h-5" />
            </span>
            <div className="text-center sm:text-left">
              <h5 className="font-display font-bold text-sm text-ink uppercase tracking-wide leading-none">FITS MOST TOILETS</h5>
              <p className="text-xs text-ink-light font-sans mt-0.5">Compatible with 98% of bathrooms</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 col-span-2 md:col-span-1">
            <div className="flex items-center gap-1.5 justify-center">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current text-bidet-blue" />
                ))}
              </div>
              <span className="font-bold text-sm text-ink">4.95 Rating</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
