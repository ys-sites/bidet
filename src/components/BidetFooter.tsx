import React, { useState } from 'react';
import { Droplet, Mail, CheckCircle2, ShieldCheck, Heart, Sparkles, Send } from 'lucide-react';

export default function BidetFooter() {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setSuccess(true);
    setEmail('');
  };

  return (
    <footer className="bg-ink text-cream relative overflow-hidden pb-32 pt-20 border-t border-sand/10">
      {/* Decorative vector absolute wireframes */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full border border-cream/[0.03] pointer-events-none z-0" />
      <div className="absolute top-1/4 -right-16 w-64 h-64 rounded-full bg-bidet-teal/[0.04] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
        
        {/* Newsletter Promo & Branding Block */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div className="space-y-6">
            <a href="#" className="flex items-center gap-2 group font-display tracking-[0.1em] text-2xl font-bold uppercase transition">
              <span className="p-2.5 bg-bidet-teal text-cream rounded-xl">
                <Droplet className="w-5 h-5 fill-current" />
              </span>
              <span className="text-cream">LURA</span>
            </a>

            <p className="font-sans text-sm text-sand/70 leading-relaxed max-w-[360px]">
              We sit at the intersection of confident personal care and calm, spa-grade visual restraint. Treat your skin to pristine water.
            </p>

            {/* Newsletter form with witty bidet text */}
            <div className="pt-4 max-w-[390px] space-y-3">
              <h4 className="font-display font-bold text-xs uppercase tracking-wider text-bidet-blue">
                JOIN THE WASH BULLETIN
              </h4>
              <p className="font-sans text-xs text-sand/65">
                Subscribe for 10% off your initial bidet. No spam mail, just occasional witty jokes and pristine bathroom guides.
              </p>

              {success ? (
                <div className="p-4 bg-bidet-teal/20 rounded-xl border border-bidet-teal/30 flex items-center gap-2.5 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-bidet-teal shrink-0" />
                  <span>Subscribed! Check your real or imaginary inbox for your 10% coupon code (hint: try <strong>FRESHBUTT</strong>).</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <div className="relative flex-1">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full py-3.5 pl-11 pr-4 bg-cream/5 border border-cream/15 rounded-xl text-xs text-cream focus:outline-none focus:border-bidet-teal transition-all placeholder:text-cream/40"
                    />
                    <Mail className="w-4 h-4 text-cream/45 absolute left-4 top-3.5" />
                  </div>
                  <button
                    type="submit"
                    className="p-3.5 bg-bidet-teal hover:bg-bidet-blue text-cream rounded-xl transition cursor-pointer flex items-center justify-center shadow"
                    title="Send"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Trust strip badge inside footer */}
          <div className="hidden lg:flex items-center gap-3 pt-8 text-xs text-sand/55 font-sans">
            <ShieldCheck className="w-5 h-5 text-bidet-teal" />
            <span>Fully HSA / FSA eligible under category: Personal Hygiene Hygiene Care</span>
          </div>
        </div>

        {/* Links Column Structure */}
        <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
          
          <div className="flex flex-col gap-4">
            <h5 className="font-display font-bold text-xs uppercase tracking-widest text-[#9C9F9B]">Shop Range</h5>
            <div className="flex flex-col gap-2.5 font-sans text-xs sm:text-sm text-sand/60">
              <a href="#shop-grid" className="hover:text-bidet-teal transition-colors">LURA Classic Attachment</a>
              <a href="#shop-grid" className="hover:text-bidet-teal transition-colors">LURA Aero Heated Seat</a>
              <a href="#shop-grid" className="hover:text-bidet-teal transition-colors">LURA Wand Handheld Wand</a>
              <a href="#shop-grid" className="hover:text-bidet-teal transition-colors">Replacement Filters</a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h5 className="font-display font-bold text-xs uppercase tracking-widest text-[#9C9F9B]">Philosophy</h5>
            <div className="flex flex-col gap-2.5 font-sans text-xs sm:text-sm text-sand/60">
              <a href="#why-bidet" className="hover:text-bidet-teal transition-colors">Why Wash with Water?</a>
              <a href="#install" className="hover:text-bidet-teal transition-colors">15-Min Quick Setup</a>
              <a href="#compatibility" className="hover:text-bidet-teal transition-colors">Find Toilet Compatibility</a>
              <a href="#reviews" className="hover:text-bidet-teal transition-colors">Critiques & Testimonials</a>
            </div>
          </div>

          <div className="flex flex-col gap-4 col-span-2 sm:col-span-1">
            <h5 className="font-display font-bold text-xs uppercase tracking-widest text-[#9C9F9B]">Integrations</h5>
            <div className="flex flex-col gap-2.5 font-sans text-xs sm:text-sm text-sand/60">
              <a href="#" className="hover:text-bidet-teal transition-colors">Clean Support Help Desk</a>
              <a href="#" className="hover:text-bidet-teal transition-colors">Partner Wholesale Orders</a>
              <a href="#" className="hover:text-bidet-teal transition-colors">Affiliate Bounty Program</a>
              <span className="text-[10px] bg-bidet-teal text-cream px-2 py-0.5 rounded w-max mt-1 font-bold">REIMBURSABLE HSA</span>
            </div>
          </div>

        </div>

      </div>

      {/* Decorative Divider */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 mt-16 pt-8 border-t border-cream/5 flex flex-col sm:flex-row items-center justify-between gap-6 text-center text-xs text-sand/40">
        
        <div>
          <span>© 2026 LURA Personal Hygiene Inc. All rights of bums preserved.</span>
          <div className="flex gap-4 justify-center sm:justify-start mt-2">
            <a href="#" className="hover:text-cream transition-colors">Privacy Charter</a>
            <span>·</span>
            <a href="#" className="hover:text-cream transition-colors">Buns Terms of Service</a>
            <span>·</span>
            <a href="#" className="hover:text-cream transition-colors">Cookie Diagnostics</a>
          </div>
        </div>

        {/* Brand visual credits */}
        <div className="flex items-center gap-1">
          <span>Woven with care for modern, sustainable homes</span>
          <Heart className="w-3 h-3 text-bidet-teal fill-current" />
        </div>

      </div>
    </footer>
  );
}
