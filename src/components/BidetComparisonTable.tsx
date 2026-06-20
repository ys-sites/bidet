import React, { useState } from 'react';
import { Check, X, Shield, Sparkles, Zap, Smartphone } from 'lucide-react';

export default function BidetComparisonTable() {
  const models = [
    { name: 'LURA Classic', tag: 'Best Seller', price: '$99', type: 'Attachment' },
    { name: 'LURA Aero', tag: 'Luxury Seat', price: '$299', type: 'Heated Seat' },
    { name: 'LURA Wand', tag: 'Max Versatility', price: '$59', type: 'Handheld' }
  ];

  const features = [
    {
      name: 'Adjustable Water Pressure',
      desc: 'Precision control over stream intensity.',
      classic: 'Analog Dial',
      aero: 'Digital Panel (5-levels)',
      wand: 'Progressive Trigger'
    },
    {
      name: 'Water Spray Temperature',
      desc: 'Warm or ambient cooling water feed.',
      classic: 'Fresh Ambient',
      aero: 'Heated Hybrid (4-temps)',
      wand: 'Fresh Ambient'
    },
    {
      name: 'Self-Cleaning Spray Nozzle',
      desc: 'Nozzle flushes itself with clean water before & after use.',
      classic: true,
      aero: true,
      wand: 'Manual Rinse'
    },
    {
      name: 'Heated Comfort Seat',
      desc: 'Heated ring with multi-level temperature control.',
      classic: false,
      aero: true,
      wand: false
    },
    {
      name: 'Integrated Warm-Air Dryer',
      desc: 'Gentle heated fan allows 100% paperless operation.',
      classic: false,
      aero: true,
      wand: false
    },
    {
      name: 'Power Grid Source',
      desc: 'Does it require an electrical wall outlet?',
      classic: 'No Electricity',
      aero: '120V Outlet Required',
      wand: 'No Electricity'
    },
    {
      name: 'Dual Front/Rear Nozzles',
      desc: 'Dedicated spray angles for feminine & masculine cleansing.',
      classic: true,
      aero: true,
      wand: 'Single manual aim'
    },
    {
      name: 'LED Path Nightlight',
      desc: 'Soothes nighttime restroom navigation.',
      classic: false,
      aero: 'Ambient Blue LED',
      wand: false
    },
    {
      name: 'Install Duration',
      desc: 'Estimated timeline to complete setup.',
      classic: '10–15 Minutes',
      aero: '20 Minutes',
      wand: '10 Minutes'
    }
  ];

  const renderValue = (val: boolean | string) => {
    if (typeof val === 'boolean') {
      return val ? (
        <span className="inline-flex p-1 bg-bidet-teal/[0.08] text-bidet-teal rounded-full">
          <Check className="w-5 h-5 stroke-[2.5]" />
        </span>
      ) : (
        <span className="inline-flex p-1 bg-rose-50 text-rose-400 rounded-full">
          <X className="w-4 h-4 stroke-[2.5]" />
        </span>
      );
    }
    return <span className="text-xs sm:text-sm font-semibold text-ink">{val}</span>;
  };

  return (
    <section id="comparison" className="py-20 px-6 sm:px-12 bg-cream text-ink border-b border-sand relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-bidet-teal uppercase font-display text-xs font-bold tracking-[0.2em] bg-bidet-teal/[0.06] py-1 px-3.5 rounded-full inline-block mb-3">
            TECHNICAL CLARITY
          </span>
          <h2 className="font-display font-medium tracking-tight text-3xl sm:text-5xl text-ink leading-none mt-2 mb-4">
            Compare model metrics. <br />
            <span className="italic font-light text-bidet-teal">Zero mysteries.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-ink-light">
            Whether you want a high-end automated luxury upgrade or a quick simple setup, compare our hardware side-by-side. Clean and simple.
          </p>
        </div>

        {/* Feature Matrix Board */}
        <div className="overflow-x-auto rounded-3xl border border-sand bg-cream shadow-sm">
          <table className="w-full min-w-[700px] border-collapse text-left">
            <thead>
              <tr className="border-b border-sand/70 bg-sand/30">
                {/* Header Feature Empty Slot */}
                <th className="p-6 w-[280px]">
                  <div className="flex flex-col text-left">
                    <span className="font-display font-bold text-xs uppercase text-bidet-teal tracking-widest">WASH MATRIX</span>
                    <span className="text-xs font-sans text-ink-light mt-1">Select the best wash</span>
                  </div>
                </th>
                
                {/* Model slot elements */}
                {models.map((mod) => (
                  <th key={mod.name} className="p-6 text-center border-l border-sand/40">
                    <div className="flex flex-col items-center">
                      <span className="px-2.5 py-0.5 rounded-full bg-bidet-blue/[0.08] text-bidet-blue text-[9px] font-bold uppercase tracking-widest mb-2">
                        {mod.tag}
                      </span>
                      <h4 className="font-display text-lg sm:text-xl font-bold text-ink leading-tight">{mod.name}</h4>
                      <p className="font-sans text-xs text-ink-light font-medium mt-1 uppercase tracking-wider">{mod.type}</p>
                      <p className="font-display text-xl font-extrabold text-bidet-teal mt-2">{mod.price}</p>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            
            <tbody className="divide-y divide-sand/50">
              {features.map((feat, index) => (
                <tr key={index} className="hover:bg-sand/10 transition-colors">
                  <td className="p-6">
                    <div className="flex flex-col text-left">
                      <span className="font-sans font-semibold text-sm text-ink">{feat.name}</span>
                      <span className="font-sans text-xs text-ink-light mt-0.5">{feat.desc}</span>
                    </div>
                  </td>
                  
                  {/* Classic model status */}
                  <td className="p-6 text-center border-l border-sand/40">
                    {renderValue(feat.classic)}
                  </td>

                  {/* Aero model status */}
                  <td className="p-6 text-center border-l border-sand/40">
                    {renderValue(feat.aero)}
                  </td>

                  {/* Wand model status */}
                  <td className="p-6 text-center border-l border-sand/40">
                    {renderValue(feat.wand)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Small comparative footer helper */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-ink-light">
          <div className="flex items-center gap-1.5 font-sans">
            <Shield className="w-4 h-4 text-bidet-teal" />
            <span>All models covered by 1-year product warranty</span>
          </div>
          <div className="flex items-center gap-1.5 font-sans">
            <Zap className="w-4 h-4 text-bidet-teal" />
            <span>FDA & HSA/FSA reimbursement compliant (check with provider)</span>
          </div>
        </div>

      </div>
    </section>
  );
}
