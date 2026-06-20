import React from 'react';
import { reviews } from '../data';
import { Star, ShieldCheck, Heart } from 'lucide-react';

export default function BidetSocialProof() {
  return (
    <section id="reviews" className="py-20 px-6 sm:px-12 bg-[#FAF8F5] text-ink border-b border-sand relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-bidet-teal uppercase font-display text-xs font-bold tracking-[0.2em] bg-bidet-teal/[0.06] py-1 px-3.5 rounded-full inline-block mb-3">
            VERIFIED CRITIQUES
          </span>
          <h2 className="font-display font-medium tracking-tight text-3xl sm:text-5xl text-ink leading-tight">
            Hear from our <br className="hidden sm:block" />
            <span className="italic font-light text-bidet-teal">newly converted.</span>
          </h2>
          <p className="font-sans text-sm text-ink-light mt-4">
            Witty toilet reviews from real, actual humans who threw away their wet wipes and discovered true, water-based inner peace.
          </p>
        </div>

        {/* Review Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((rev) => (
            <div 
              key={rev.id}
              className="bg-cream p-6 sm:p-8 rounded-3xl border border-sand shadow-xs text-left hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Score / Product name info */}
                <div className="flex items-center gap-1 mb-2.5 text-amber-500">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current text-bidet-blue" />
                  ))}
                </div>

                <p className="font-sans text-xs sm:text-sm text-ink-light leading-relaxed mb-6 italic">
                  "{rev.text}"
                </p>
              </div>

              {/* Author box */}
              <div className="flex items-center gap-3 pt-4 border-t border-sand/35">
                <div className={`w-8 h-8 rounded-full ${rev.avatarBg} text-cream flex items-center justify-center text-xs font-bold`}>
                  {rev.avatarLetter}
                </div>
                <div className="leading-tight">
                  <h5 className="font-display font-bold text-xs text-ink flex items-center gap-1.5">
                    {rev.author}
                    {rev.verifiedWinner && (
                      <span className="p-0.5 bg-bidet-teal/10 rounded-full text-bidet-teal" title="Verified Fresh Customer">
                        <ShieldCheck className="w-3 h-3 stroke-[2.5]" />
                      </span>
                    )}
                  </h5>
                  <p className="text-[10px] text-ink-light/65 font-sans mt-0.5">
                    {rev.productName}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Fun stats banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-sand/55 text-center">
          <div>
            <h4 className="font-display font-extrabold text-3xl sm:text-4xl text-bidet-teal">99.8%</h4>
            <p className="text-xs uppercase font-bold tracking-wider text-ink-light mt-1">SASSY ASS SATISFACTION</p>
            <p className="text-[11px] text-ink-light/70 font-sans mt-0.5">Who ever went back to dry pulp?</p>
          </div>
          <div>
            <h4 className="font-display font-extrabold text-3xl sm:text-4xl text-bidet-blue">15 Million</h4>
            <p className="text-xs uppercase font-bold tracking-wider text-ink-light mt-1">TREES PRESERVED</p>
            <p className="text-[11px] text-ink-light/70 font-sans mt-0.5">Targeted cumulative community tree count</p>
          </div>
          <div>
            <h4 className="font-display font-extrabold text-3xl sm:text-4xl text-ink">Under 15m</h4>
            <p className="text-xs uppercase font-bold tracking-wider text-ink-light mt-1">AVERAGE ASSEMBLY TIME</p>
            <p className="text-[11px] text-ink-light/70 font-sans mt-0.5">Just a standard adapter clip click</p>
          </div>
        </div>

      </div>
    </section>
  );
}
