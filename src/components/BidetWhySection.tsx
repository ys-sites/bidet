import React from 'react';
import { Droplet, Leaf, PiggyBank, Smile } from 'lucide-react';
import { motion } from 'motion/react';

export default function BidetWhySection() {
  const benefits = [
    {
      title: 'Pristine Cleanliness',
      description: 'Rubbing dirty hands with dry towels does not clean them. Treat your private spots with the same hygiene standards you do with the rest of your skin.',
      wittyCaption: 'Water cleans. Paper only moves stuff around.',
      icon: (
        <svg viewBox="0 0 100 100" className="w-16 h-16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" fill="#224E44" fillOpacity="0.08" />
          <path d="M50 25C50 25 32 45 32 58C32 67.9411 40.0589 76 50 76C59.9411 76 68 67.9411 68 58C68 45 50 25 50 25Z" fill="#224E44" />
          <path d="M46 45C46 45 36 56 36 62C36 67.5 40 70 46 70C52 70 54 67.5 54 62C54 56 46 45 46 45Z" fill="#3E6FA5" fillOpacity="0.8" />
          <circle cx="70" cy="30" r="5" fill="#3E6FA5" />
          <circle cx="28" cy="35" r="3" fill="#EEDEC9" />
        </svg>
      )
    },
    {
      title: 'Painless Planet Shield',
      description: 'The average person flushes 57 rolls of toilet paper annually. By washing first, you decrease paper consumption by 85%, protecting precious timberland.',
      wittyCaption: '15,000,000 trees are cut down annually for TP.',
      icon: (
        <svg viewBox="0 0 100 100" className="w-16 h-16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" fill="#EEDEC9" fillOpacity="0.25" />
          <path d="M50 22L70 55H30L50 22Z" fill="#224E44" />
          <path d="M50 38L64 61H36L50 38Z" fill="#3D7E6E" />
          <rect x="47" y="61" width="6" height="15" rx="2" fill="#8C6239" />
          <circle cx="72" cy="45" r="4" fill="#EEDEC9" />
          <circle cx="25" cy="55" r="5" fill="#3E6FA5" fillOpacity="0.4" />
        </svg>
      )
    },
    {
      title: 'Legendary Wallet Savings',
      description: 'High-end toilets models consume rolls daily, draining hundreds of dollars year-over-year. A Lura bidet pays for itself in roughly three months.',
      wittyCaption: '$250-$400 saved annually per household.',
      icon: (
        <svg viewBox="0 0 100 100" className="w-16 h-16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" fill="#3E6FA5" fillOpacity="0.08" />
          <rect x="30" y="38" width="40" height="32" rx="6" fill="#3E6FA5" />
          <circle cx="50" cy="54" r="9" fill="#EEDEC9" />
          <path d="M47 54H53M50 51V57" stroke="#224E44" strokeWidth="2" strokeLinecap="round" />
          <path d="M42 38V30C42 27 45 25 50 25C55 25 58 27 58 30V38" stroke="#3E6FA5" strokeWidth="4" />
          <circle cx="75" cy="35" r="4" fill="#224E44" fillOpacity="0.4" />
        </svg>
      )
    },
    {
      title: 'Soothing Buns Comfort',
      description: 'Avoid dry, rough friction micro-abrasions. Our adjustable pressure dials deliver a spa-calibrated streams of water to preserve skin barrier.',
      wittyCaption: 'Spa-calibrated water feels like silk.',
      icon: (
        <svg viewBox="0 0 100 100" className="w-16 h-16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" fill="#EEDEC9" fillOpacity="0.15" />
          <path d="M28 50C28 35 40 28 50 28C60 28 72 35 72 50C72 65 60 72 50 72C40 72 28 65 28 50Z" fill="#EEDEC9" />
          <path d="M40 48C40 48 44 54 50 54C56 54 60 48 60 48" stroke="#224E44" strokeWidth="4" strokeLinecap="round" />
          <circle cx="38" cy="40" r="3" fill="#224E44" />
          <circle cx="62" cy="40" r="3" fill="#224E44" />
          <path d="M50 63V69" stroke="#3E6FA5" strokeWidth="3" strokeLinecap="round" />
          <path d="M44 65V67" stroke="#3E6FA5" strokeWidth="2" strokeLinecap="round" />
          <path d="M56 65V67" stroke="#3E6FA5" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    }
  ];

  return (
    <section id="why-bidet" className="py-20 px-6 sm:px-12 bg-cream text-ink border-b border-sand relative overflow-hidden">
      {/* Absolute vectors */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-sand/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-bidet-teal uppercase font-display text-xs font-bold tracking-[0.2em] bg-bidet-teal/[0.06] py-1 px-3.5 rounded-full inline-block mb-3">
            THE FRESH REVOLUTION
          </span>
          <h2 className="font-display font-medium tracking-tight text-3xl sm:text-5xl text-ink leading-tight">
            Our paper habit is <br className="hidden sm:block" />
            <span className="italic font-light text-bidet-blue">a bit of a mess.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-ink-light mt-4">
            We spent a generation dry-wiping and hoping for the best. With LURA, you choose pristine, water-based skincare instead of coarse lumber waste. Let’s do some better math:
          </p>
        </div>

        {/* Column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((ben, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="flex flex-col items-start bg-cream/50 p-6 sm:p-8 rounded-3xl border border-sand/40 hover:border-sand hover:bg-cream transition-all text-left"
            >
              <div className="mb-6">
                {ben.icon}
              </div>
              
              <h3 className="font-display font-bold text-lg text-ink mb-2">
                {ben.title}
              </h3>
              
              <p className="font-sans text-xs sm:text-sm text-ink-light leading-relaxed mb-6 flex-1">
                {ben.description}
              </p>

              {/* Unique witty caption highlighting premium tone */}
              <div className="mt-auto pt-4 border-t border-sand/50 w-full">
                <span className="block text-[11px] font-bold text-bidet-teal uppercase tracking-wide leading-tight">
                  PRO STATUS
                </span>
                <span className="text-xs text-ink italic leading-tight mt-1 inline-block">
                  {ben.wittyCaption}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fun static witty banner */}
        <div className="bg-[#FAF2E8] border border-[#ECD9C5] rounded-3xl p-8 sm:p-10 mt-16 text-left flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
          <div className="relative z-10 max-w-[580px]">
            <h4 className="font-display font-bold text-[#8C5E2D] uppercase text-xs tracking-widest mb-2">THE BIDET REVELATION</h4>
            <p className="font-sans text-sm sm:text-base text-[#5C4533] leading-relaxed">
              <strong>“If a bird pooped on your arm, you wouldn’t wipe it off with dry tissues and go on with your day. You’d use water.”</strong> Now imagine that bird poop is in your bathroom. Upgrade your lifestyle.
            </p>
          </div>
          <a 
            href="#shop-grid" 
            className="relative z-10 select-none py-3 px-6 bg-bidet-teal hover:bg-bidet-teal/90 text-cream text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition whitespace-nowrap shrink-0"
          >
            Start Washing Now
          </a>
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-48 h-48 rounded-full bg-cream/15 blur-2xl pointer-events-none" />
        </div>

      </div>
    </section>
  );
}
