import React, { useState } from 'react';
import { Wrench, CheckCircle, ShieldAlert, Sparkles, Smile } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function BidetInstallConfidence() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: '1. Position the Adapter Plate',
      sub: 'Time elapsed: 3 Mins',
      description: 'First, pop off your toilet seat (it’s just two simple plastic bolts). Lay the premium LURA bracket alignment teeth over the holes. Our design fits 99% of round and elongated bowls.',
      wittyCaption: 'Pro tip: This is a perfect window of opportunity to clean the dust behind the seat hinge.',
      graphic: (
        <svg viewBox="0 0 100 100" className="w-24 h-24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" fill="#EEDEC9" fillOpacity="0.2" />
          {/* Toilet rim representation */}
          <path d="M30 40H70V70C70 80 60 85 50 85C40 85 30 80 30 70V40Z" fill="#FFFDFB" stroke="#EEDEC9" strokeWidth="4" />
          {/* Bidet mounting plate */}
          <rect x="25" y="30" width="50" height="10" rx="3" fill="#224E44" />
          <circle cx="35" cy="35" r="2" fill="#FFFDFB" />
          <circle cx="65" cy="35" r="2" fill="#FFFDFB" />
          {/* Hand icon holding wrench */}
          <path d="M45 20C45 20 42 12 50 12C58 12 55 20 55 20" stroke="#3E6FA5" strokeWidth="3" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: '2. Attach the Brass T-Value',
      sub: 'Time elapsed: 8 Mins',
      description: 'Shut off the tiny water valve under your tank (turn clockwise). Connect our premium, thick solid brass T-adapter to the base of the tank. Clip on our stainless steel braided hose. It handles heavy water pressure effortlessly.',
      wittyCaption: 'Toolbox status: Everything you need of metal fittings is right in the box. Keep your wrench in the drawer.',
      graphic: (
        <svg viewBox="0 0 100 100" className="w-24 h-24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" fill="#3E6FA5" fillOpacity="0.06" />
          {/* Brass pipeline elements */}
          <rect x="42" y="25" width="16" height="50" rx="2" fill="#D4AF37" />
          <rect x="25" y="42" width="50" height="16" rx="2" fill="#D4AF37" />
          <circle cx="50" cy="50" r="10" fill="#EEDEC9" />
          {/* Water drips */}
          <path d="M50 78V84" stroke="#3E6FA5" strokeWidth="3" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: '3. Screw Plate & Power Wash',
      sub: 'Time elapsed: 12 Mins',
      description: 'Re-lodge your original toilet seat bolts back down over LURA. Tighten securely. Turn the water faucet valve back on. Check the dial. Your buns are officially slated for their initial high-calibrated, fresh wash!',
      wittyCaption: 'Grand Finale: Take your seat, rotate the dial, and feel the ultimate spa sensation. Welcome to the clean club.',
      graphic: (
        <svg viewBox="0 0 100 100" className="w-24 h-24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" fill="#224E44" fillOpacity="0.08" />
          {/* Glowing finish rings */}
          <circle cx="50" cy="46" r="22" stroke="#224E44" strokeWidth="4" />
          <path d="M42 46L47 51L58 40" stroke="#3E6FA5" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="28" cy="28" r="4" fill="#D4AF37" />
          <circle cx="72" cy="65" r="3" fill="#D4AF37" />
        </svg>
      )
    }
  ];

  return (
    <section id="install" className="py-20 px-6 sm:px-12 bg-cream text-ink border-b border-sand relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-bidet-teal uppercase font-display text-xs font-bold tracking-[0.2em] bg-bidet-teal/[0.06] py-1 px-3.5 rounded-full inline-block mb-3">
            DIY CONFIDENCE
          </span>
          <h2 className="font-display font-medium tracking-tight text-3xl sm:text-5xl text-ink leading-none mt-2 mb-4">
            Zero plumbing. <br />
            <span className="italic font-light text-bidet-teal">Zero anxiety.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-ink-light">
            We value your personal sanity above anything else. Our bidets are crafted to configure natively on your existing setups in less than 20 minutes.
          </p>
        </div>

        {/* Modular stepper split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Stepper Buttons Column */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {steps.map((stp, index) => {
              const active = activeStep === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`p-6 rounded-3xl border text-left cursor-pointer transition flex items-start gap-4 ${
                    active 
                      ? 'bg-cream border-bidet-teal shadow-md ring-2 ring-bidet-teal/5' 
                      : 'bg-sand/30 border-sand hover:bg-sand/55 hover:border-sand/90'
                  }`}
                >
                  <span className={`w-8 h-8 rounded-xl font-display font-bold text-xs flex items-center justify-center shrink-0 ${
                    active ? 'bg-bidet-teal text-cream' : 'bg-sand text-ink-light'
                  }`}>
                    0{index + 1}
                  </span>
                  
                  <div className="text-left">
                    <h4 className="font-display font-bold text-sm text-ink">{stp.title}</h4>
                    <p className="text-xs text-bidet-teal font-semibold font-sans mt-0.5 uppercase tracking-wide">{stp.sub}</p>
                  </div>
                </button>
              );
            })}

            {/* Quick trust banner */}
            <div className="mt-4 p-5 bg-[#FAF2E8] border border-[#ECD9C5] rounded-3xl text-left flex items-start gap-3.5">
              <span className="p-2 bg-cream text-[#B57C3E] rounded-xl shrink-0 shadow-sm">
                <Smile className="w-5 h-5" />
              </span>
              <div className="font-sans text-xs text-[#5C4533] leading-relaxed">
                <strong>"I have negative handyman skills."</strong> That is what 72% of our customers said before launching their successful, non-leaky LURA installation. You can definitely do it!
              </div>
            </div>
          </div>

          {/* Stepper Content Box */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex-1 bg-sand/30 border border-sand rounded-3xl p-8 sm:p-12 flex flex-col justify-between text-left relative overflow-hidden">
              
              {/* Graphic container */}
              <div className="flex justify-between items-start gap-4 mb-6">
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-bidet-blue leading-none block">
                    ACTIVE STEP DETAIL
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl mt-1 text-ink-light">
                    {steps[activeStep].title}
                  </h3>
                </div>
                <div className="p-3 bg-cream rounded-2xl shadow-sm">
                  {steps[activeStep].graphic}
                </div>
              </div>

              {/* Explanative content with Framer Motion fade */}
              <div className="min-h-[140px] flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p className="font-sans text-sm sm:text-base text-ink-light leading-relaxed mb-6">
                      {steps[activeStep].description}
                    </p>

                    {/* Witty bidet quote */}
                    <p className="text-xs italic text-bidet-teal bg-bidet-teal/[0.04] p-3 rounded-xl border border-bidet-teal/10 inline-block font-sans">
                      🚽 {steps[activeStep].wittyCaption}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Direction tools control bar */}
              <div className="flex justify-between items-center border-t border-sand/60 pt-6 mt-8">
                <span className="font-sans text-xs text-ink-light leading-snug">
                  Simple box includes: T-valve, Teflon anti-leak tape, stainless-steel mesh pipe, setup keys.
                </span>
                
                {/* Visual quick badge */}
                <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-500/[0.08] text-emerald-800 rounded-full text-xs font-bold shrink-0">
                  <CheckCircle className="w-3.5 h-3.5" />
                  No Plumber
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
