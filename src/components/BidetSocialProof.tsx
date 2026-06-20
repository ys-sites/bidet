import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, CheckCircle, Quote } from 'lucide-react';
import { reviews } from '../data';
import { motion, AnimatePresence } from 'motion/react';

export default function BidetSocialProof() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const stats = [
    { number: '2.5M+', text: 'Happy Buns Cleaned', caption: 'And counting every single second.' },
    { number: '85%', text: 'Fewer Trees Flushed', caption: 'Keeping old growth where it belongs.' },
    { number: '$280', text: 'Average Yearly Savings', caption: 'Diverted back into actual bank accounts.' },
    { number: '15,000+', text: 'Verified 5-Star Reviews', caption: 'Direct from grateful ceramic thrones.' }
  ];

  return (
    <section id="reviews" className="py-20 px-6 sm:px-12 bg-cream text-ink border-b border-sand overflow-hidden relative">
      <div className="absolute top-1/4 right-[5%] w-72 h-72 rounded-full bg-bidet-blue/[0.02] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Head */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-bidet-teal uppercase font-display text-xs font-bold tracking-[0.2em] bg-bidet-teal/[0.06] py-1 px-3.5 rounded-full inline-block mb-3">
            VERIFIED SOCIAL PROOF
          </span>
          <h2 className="font-display font-medium tracking-tight text-3xl sm:text-5xl text-ink leading-none mt-2 mb-4">
            Hear it straight from <br />
            <span className="italic font-light text-bidet-blue">our pristine community.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-ink-light">
            We don’t like to boast, but our community speaks with absolute conviction. Discover why switching to water is a point of no return.
          </p>
        </div>

        {/* Playful & Credible Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20">
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              className="p-6 sm:p-8 bg-sand/30 border border-sand/60 rounded-3xl text-left flex flex-col justify-between"
            >
              <div>
                <p className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[45px] text-bidet-teal leading-none mb-2">
                  {stat.number}
                </p>
                <h4 className="font-sans font-bold text-sm text-ink mb-1">
                  {stat.text}
                </h4>
              </div>
              <p className="font-sans text-xs text-ink-light mt-2 leading-relaxed">
                {stat.caption}
              </p>
            </div>
          ))}
        </div>

        {/* Dynamic Reviews Carousel Box */}
        <div className="max-w-[760px] mx-auto bg-cream border border-sand rounded-3xl p-8 sm:p-14 shadow-md relative">
          
          {/* Quote water-marker */}
          <div className="absolute top-8 right-8 text-sand/60 select-none">
            <Quote className="w-14 h-14" />
          </div>

          <div className="relative min-h-[220px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="text-left flex flex-col justify-between h-full"
              >
                <div>
                  {/* Stars block */}
                  <div className="flex text-amber-500 gap-1 mb-6">
                    {[...Array(reviews[activeIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-bidet-blue" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="font-sans text-base sm:text-lg text-ink leading-relaxed mb-8">
                    "{reviews[activeIndex].text}"
                  </p>
                </div>

                {/* Author Info block */}
                <div className="flex items-center justify-between border-t border-sand/50 pt-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-11 h-11 ${reviews[activeIndex].avatarBg} text-cream font-display font-bold text-sm rounded-full flex items-center justify-center`}>
                      {reviews[activeIndex].avatarLetter}
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-sm text-ink">
                        {reviews[activeIndex].author}
                      </h4>
                      <p className="font-sans text-xs text-ink-light leading-none mt-1">
                        Model: {reviews[activeIndex].productName}
                      </p>
                    </div>
                  </div>

                  {reviews[activeIndex].verifiedWinner && (
                    <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-bidet-teal/[0.06] text-bidet-teal rounded-full text-xs font-semibold uppercase tracking-wider">
                      <CheckCircle className="w-3.5 h-3.5" />
                      Verified Purchaser
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Arrows */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
            <button 
              onClick={handlePrev}
              className="p-3 bg-cream border border-sand hover:bg-sand/30 rounded-full cursor-pointer transition text-ink hover:text-bidet-teal shadow-md flex items-center justify-center"
              aria-label="Previous Review"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-bold text-ink-light font-sans bg-cream border border-sand px-3 py-1.5 rounded-full shadow-inner">
              {activeIndex + 1} / {reviews.length}
            </span>
            <button 
              onClick={handleNext}
              className="p-3 bg-cream border border-sand hover:bg-sand/30 rounded-full cursor-pointer transition text-ink hover:text-bidet-teal shadow-md flex items-center justify-center"
              aria-label="Next Review"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Sincere footnote */}
        <p className="text-center text-xs text-ink-light/70 font-sans mt-14">
          All reviews represent authentic feedback written by real humans who spent real capital to scrub their buns.
        </p>

      </div>
    </section>
  );
}
