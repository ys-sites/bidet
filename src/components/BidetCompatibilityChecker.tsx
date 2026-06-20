import React, { useState } from 'react';
import { HelpCircle, Check, Ruler, Info } from 'lucide-react';

export default function BidetCompatibilityChecker() {
  const [selectedShape, setSelectedShape] = useState<'round' | 'elongated'>('elongated');

  return (
    <section id="compatibility" className="py-20 px-6 sm:px-12 bg-cream text-ink border-b border-sand relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-bidet-teal uppercase font-display text-xs font-bold tracking-[0.2em] bg-bidet-teal/[0.06] py-1 px-3.5 rounded-full inline-block mb-3">
            COMPATIBILITY CALCULATOR
          </span>
          <h2 className="font-display font-medium tracking-tight text-3xl sm:text-5xl text-ink leading-none mt-2 mb-4">
            Will it match <br />
            <span className="italic font-light text-bidet-teal">your current throne?</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-ink-light">
            Bidets are standard globally, but toilets come in two basic styles. Take a quick look or measure to see what fits your bathroom.
          </p>
        </div>

        {/* Interactive panel split */}
        <div className="bg-sand/30 border border-sand rounded-3xl p-6 sm:p-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left">
          
          {/* Left: Toggles & SVGs */}
          <div className="md:col-span-6 flex flex-col items-center">
            <div className="flex gap-4 mb-8 bg-cream border border-sand p-1.5 rounded-2xl w-full max-w-[340px]">
              <button
                onClick={() => setSelectedShape('round')}
                className={`flex-1 py-3 px-4 font-sans font-semibold text-xs sm:text-sm rounded-xl transition cursor-pointer text-center ${
                  selectedShape === 'round' 
                    ? 'bg-bidet-teal text-cream shadow-sm' 
                    : 'bg-transparent text-ink hover:text-bidet-teal'
                }`}
              >
                Round Bowl
              </button>
              <button
                onClick={() => setSelectedShape('elongated')}
                className={`flex-1 py-3 px-4 font-sans font-semibold text-xs sm:text-sm rounded-xl transition cursor-pointer text-center ${
                  selectedShape === 'elongated' 
                    ? 'bg-bidet-teal text-cream shadow-sm' 
                    : 'bg-transparent text-ink hover:text-bidet-teal'
                }`}
              >
                Elongated Bowl
              </button>
            </div>

            {/* Dynamic visual representation */}
            <div className="relative w-full max-w-[280px] aspect-square bg-cream rounded-3xl border border-sand flex items-center justify-center p-6 shadow-inner">
              {selectedShape === 'round' ? (
                /* Round Bowl Shape SVG */
                <svg viewBox="0 0 100 120" className="w-48 h-48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Outer Rim */}
                  <path d="M50 10C25 10 20 40 20 65C20 90 32 105 50 105C68 105 80 90 80 65C80 40 75 10 50 10Z" stroke="#EEDEC9" strokeWidth="8" strokeLinecap="round" />
                  {/* Inner Water Bowl */}
                  <path d="M50 20C32 20 28 42 28 65C28 85 36 95 50 95C64 95 72 85 72 65C72 42 68 20 50 20Z" fill="#3E6FA5" fillOpacity="0.1" stroke="#3E6FA5" strokeWidth="2" strokeDasharray="4 4" />
                  {/* Toilet Bolt Mount Holes */}
                  <circle cx="36" cy="112" r="3" fill="#1B1E1C" fillOpacity="0.4" />
                  <circle cx="64" cy="112" r="3" fill="#1B1E1C" fillOpacity="0.4" />
                  <line x1="30" y1="112" x2="70" y2="112" stroke="#1B1E1C" strokeWidth="1" strokeOpacity="0.3" />
                  {/* Measurement labels */}
                  <line x1="50" y1="10" x2="50" y2="112" stroke="#C19C74" strokeWidth="2" strokeDasharray="4 4" />
                  <rect x="36" y="55" width="28" height="16" rx="4" fill="#224E44" />
                  <text x="50" y="66" fill="#FFFDFB" fontSize="8" fontWeight="bold" textAnchor="middle">~16.5"</text>
                </svg>
              ) : (
                /* Elongated Bowl Shape SVG */
                <svg viewBox="0 0 100 125" className="w-48 h-48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Outer Rim */}
                  <path d="M50 10C22 10 20 45 20 75C20 100 32 112 50 112C68 112 80 100 80 75C80 45 78 10 50 10Z" stroke="#EEDEC9" strokeWidth="8" strokeLinecap="round" />
                  {/* Inner Water Bowl */}
                  <path d="M50 20C30 20 28 48 28 75C28 95 36 102 50 102C64 102 72 95 72 75C72 48 70 20 50 20Z" fill="#3E6FA5" fillOpacity="0.1" stroke="#3E6FA5" strokeWidth="2" strokeDasharray="4 4" />
                  {/* Toilet Bolt Mount Holes */}
                  <circle cx="36" cy="119" r="3" fill="#1B1E1C" fillOpacity="0.4" />
                  <circle cx="64" cy="119" r="3" fill="#1B1E1C" fillOpacity="0.4" />
                  <line x1="30" y1="119" x2="70" y2="119" stroke="#1B1E1C" strokeWidth="1" strokeOpacity="0.3" />
                  {/* Measurement labels */}
                  <line x1="50" y1="10" x2="50" y2="119" stroke="#C19C74" strokeWidth="2" strokeDasharray="4 4" />
                  <rect x="36" y="60" width="28" height="16" rx="4" fill="#224E44" />
                  <text x="50" y="71" fill="#FFFDFB" fontSize="8" fontWeight="bold" textAnchor="middle">~18.5"</text>
                </svg>
              )}

              <span className="absolute bottom-3 text-[10px] font-sans font-semibold uppercase text-ink-light tracking-widest bg-sand px-2 py-0.5 rounded">
                Distance from Bolts to Rim
              </span>
            </div>
          </div>

          {/* Right: Explanations \& Compatible Recommendations */}
          <div className="md:col-span-6 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-bidet-teal font-sans font-bold text-xs uppercase tracking-wider mb-2">
              <Ruler className="w-4 h-4" />
              Measuring Guide
            </div>

            <h3 className="font-display font-bold text-xl sm:text-2xl text-ink tracking-tight mb-4">
              How to know which one is yours:
            </h3>

            <p className="font-sans text-xs sm:text-sm text-ink-light leading-relaxed mb-6">
              Measure the straight distance from the center of toilet bowl mounting bolt holes to the frontmost rim edge. If it’s around <strong>16.5 inches</strong>, you have a <strong>Round Bowl</strong>. If it’s <strong>18.5 inches or longer</strong>, you have an <strong>Elongated Bowl</strong>.
            </p>

            {/* Dynamic Results Card */}
            <div className="p-5 sm:p-6 bg-cream border border-[#ECD9C5] rounded-2xl flex flex-col justify-between text-left relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-bidet-teal" />
              
              <h4 className="font-display font-bold text-xs uppercase tracking-widest text-bidet-teal mb-2">
                COMPATIBILITY DECISION
              </h4>

              {selectedShape === 'round' ? (
                <div>
                  <p className="font-sans text-xs sm:text-sm text-ink-light leading-relaxed mb-4">
                    <strong>Pristine Match!</strong> Since your bowl is <strong>Round</strong>, you can use our flagship <strong className="text-ink">LURA Classic Attachment</strong> or the <strong className="text-ink">LURA Wand Handheld Sprayer</strong> perfectly. They install effortlessly in 15 minutes.
                  </p>
                  <p className="text-xs text-rose-600/90 font-semibold bg-rose-50/80 p-2.5 rounded-xl border border-rose-200/50 flex items-center gap-2">
                    <Info className="w-4 h-4 shrink-0" />
                    Note: LURA Aero (Heated Seat model) is only compatible with elongated toilets.
                  </p>
                </div>
              ) : (
                <div>
                  <p className="font-sans text-xs sm:text-sm text-ink-light leading-relaxed mb-4">
                    <strong>Wondrous Harmony!</strong> Your bowl shape is <strong className="text-bidet-teal">Elongated</strong>. This means you are completely compatible with <strong>every single item in the LURA lineage</strong> — including our heated luxury powerhouse, the <strong className="text-ink">LURA Aero</strong>!
                  </p>
                  <p className="text-xs text-emerald-800 font-semibold bg-emerald-50 p-2.5 rounded-xl border border-emerald-100 flex items-center gap-2">
                    <Check className="w-4 h-4 shrink-0 text-bidet-teal" />
                    Every LURA model matches your toilet perfectly!
                  </p>
                </div>
              )}

              <a 
                href="#shop-grid" 
                className="mt-4 px-5 py-3 bg-bidet-teal hover:bg-bidet-teal/95 text-cream font-bold text-xs uppercase tracking-wider text-center rounded-xl transition duration-150 shadow-sm"
              >
                Choose my Lura
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
