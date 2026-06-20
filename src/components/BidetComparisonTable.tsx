import React from 'react';
import { Check, X, Droplet, Star } from 'lucide-react';

export default function BidetComparisonTable() {
  const comparisonData = [
    {
      feature: 'Fresh Ambient Water Wash',
      classic: true,
      aero: true,
      wand: true,
      tp: false
    },
    {
      feature: 'Heated Temperature Control',
      classic: false,
      aero: true, // 4 temp levels
      wand: false,
      tp: false
    },
    {
      feature: 'Warm air blow dry (deletes TP completely)',
      classic: false,
      aero: true,
      wand: false,
      tp: false
    },
    {
      feature: 'Dual self-cleaning nozzles',
      classic: true,
      aero: true,
      wand: false, // Single hand trigger
      tp: false
    },
    {
      feature: 'Under 15-minute quick setup',
      classic: true,
      aero: true,
      wand: true,
      tp: true // Well yes, opening a roll takes 2 secs
    },
    {
      feature: 'Protects trees & reduces waste by 80%',
      classic: true,
      aero: true,
      wand: true,
      tp: false
    },
    {
      feature: 'No electricity / wall socket required',
      classic: true,
      aero: false, // Heated seat needs power
      wand: true,
      tp: true
    },
    {
      feature: 'Smooth water skincare (No wipe abrasion)',
      classic: true,
      aero: true,
      wand: true,
      tp: false
    }
  ];

  return (
    <section id="comparison" className="py-20 px-6 sm:px-12 bg-cream text-ink border-b border-sand relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-bidet-teal uppercase font-display text-xs font-bold tracking-[0.2em] bg-bidet-teal/[0.06] py-1 px-3.5 rounded-full inline-block mb-3">
            TECHNICAL DIAGNOSTICS
          </span>
          <h2 className="font-display font-medium tracking-tight text-3xl sm:text-5xl text-ink leading-tight">
            The Wash Down: <br className="hidden sm:block" />
            <span className="italic font-light text-bidet-blue">How we compare.</span>
          </h2>
          <p className="font-sans text-sm text-ink-light mt-4">
            A brutally honest feature map between LURA models and the standard prehistoric sheets of dry pulp. No contest.
          </p>
        </div>

        {/* Desktop Comparison Table */}
        <div className="overflow-x-auto rounded-3xl border border-sand bg-cream shadow-sm">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-sand/30 border-b border-sand">
                <th className="p-6 font-display font-bold text-xs uppercase text-ink-light tracking-wider w-[35%]">
                  FEATURES & HYGIENE CAPABILITY
                </th>
                <th className="p-6 font-display font-bold text-xs uppercase text-bidet-teal tracking-wider text-center bg-bidet-teal/[0.03]">
                  LURA CLASSIC <br />
                  <span className="lowercase font-normal text-[11px] text-bidet-teal/80">($99 Attachment)</span>
                </th>
                <th className="p-6 font-display font-bold text-xs uppercase text-bidet-blue tracking-wider text-center bg-bidet-blue/[0.03]">
                  LURA AERO <br />
                  <span className="lowercase font-normal text-[11px] text-bidet-blue/80">($299 Heated Seat)</span>
                </th>
                <th className="p-6 font-display font-bold text-xs uppercase text-ink tracking-wider text-center">
                  LURA WAND <br />
                  <span className="lowercase font-normal text-[11px] text-ink-light/85">($59 Sprayer)</span>
                </th>
                <th className="p-6 font-display font-bold text-xs uppercase text-ink-light/50 tracking-wider text-center">
                  TOILET PAPER <br />
                  <span className="lowercase font-normal text-[11px] text-ink-light/40">($$$ Endlessly)</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sand">
              {comparisonData.map((row, index) => (
                <tr key={index} className="hover:bg-sand/15 transition-colors">
                  <td className="p-6 font-sans text-sm font-semibold text-ink">
                    {row.feature}
                  </td>
                  
                  {/* Classic */}
                  <td className="p-6 text-center bg-bidet-teal/[0.01]">
                    <div className="flex justify-center">
                      {row.classic ? (
                        <span className="p-1 px-2.5 bg-bidet-teal/10 rounded-full text-bidet-teal flex items-center gap-1 text-[11px] font-bold">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                          Yes
                        </span>
                      ) : (
                        <X className="w-4 h-4 text-ink-light/30" />
                      )}
                    </div>
                  </td>

                  {/* Aero */}
                  <td className="p-6 text-center bg-bidet-blue/[0.01]">
                    <div className="flex justify-center">
                      {row.aero ? (
                        <span className="p-1 px-2.5 bg-bidet-blue/10 rounded-full text-bidet-blue flex items-center gap-1 text-[11px] font-bold">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                          Yes
                        </span>
                      ) : (
                        <X className="w-4 h-4 text-ink-light/30" />
                      )}
                    </div>
                  </td>

                  {/* Wand */}
                  <td className="p-6 text-center">
                    <div className="flex justify-center">
                      {row.wand ? (
                        <span className="p-1 px-2.5 bg-sand rounded-full text-ink flex items-center gap-1 text-[11px] font-bold">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                          Yes
                        </span>
                      ) : (
                        <X className="w-4 h-4 text-ink-light/30" />
                      )}
                    </div>
                  </td>

                  {/* Toilet Paper */}
                  <td className="p-6 text-center">
                    <div className="flex justify-center">
                      {row.tp ? (
                        <span className="p-0.5 px-2 bg-pink-100 rounded text-pink-700 flex items-center gap-1 text-[10px] uppercase font-bold">
                          Sloppy
                        </span>
                      ) : (
                        <X className="w-4 h-4 text-pink-300" />
                      )}
                    </div>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footnote statement */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between p-6 bg-sand/30 rounded-2xl border border-sand gap-4 text-left">
          <div className="flex items-center gap-3">
            <span className="p-1.5 bg-bidet-teal text-cream rounded-xl">
              <Droplet className="w-4 h-4 fill-current" />
            </span>
            <p className="text-xs sm:text-sm text-ink-light leading-snug">
              <strong>All LURA attachments & Seats</strong> connect seamlessly right to your clean, fresh water mains flow. They do NOT utilize the water currently resting inside your toilet tank. Clean water for clean humans.
            </p>
          </div>
          <a 
            href="#shop-grid" 
            className="py-2.5 px-5 bg-bidet-teal hover:bg-bidet-blue text-cream text-[11px] font-bold uppercase rounded-lg shadow-sm tracking-wide shrink-0 transition"
          >
            Upgrade Bathroom
          </a>
        </div>

      </div>
    </section>
  );
}
