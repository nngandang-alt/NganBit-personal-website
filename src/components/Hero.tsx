import React from 'react';
import { ArrowRight, Sparkles, Compass } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Language } from '../types';
import heroBgImage from '../assets/hero-bg.jpg';

interface HeroProps {
  lang: Language;
  onExploreStory: () => void;
  onExploreCases: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  onExploreStory,
  onExploreCases,
}) => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-between overflow-hidden rounded-[28px] sm:rounded-[36px] lg:rounded-[44px] text-white select-none border border-black/10 shadow-2xl"
    >
      {/* Immersive Authentic Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={heroBgImage}
          alt="Đặng Vũ Thùy Ngân (Ngân Bit) - Internal Communication & Corporate Culture"
          className="w-full h-full object-cover object-[60%_20%] sm:object-[65%_20%] lg:object-[60%_25%] transform scale-100 transition-transform duration-1000 ease-out"
          id="hero-bg-img"
        />

        {/* Sophisticated Multi-Stage Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/45 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />
        
        {/* Subtle Tech grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"
          aria-hidden="true"
        />
      </div>

      {/* Top Spacer for floating transparent navbar */}
      <div className="pt-24 sm:pt-28 md:pt-32" />

      {/* Hero Content Area */}
      <div className="relative z-10 w-full px-6 sm:px-10 md:px-14 lg:px-16 pb-12 sm:pb-16 md:pb-20 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col gap-6 sm:gap-8">
          
          {/* Main Headline & Positioning */}
          <div className="max-w-4xl text-left">
            {/* Positioning Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium text-white/95 mb-4 sm:mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-blue-300 shrink-0" />
              <span>{PERSONAL_INFO.domains[lang]}</span>
            </div>

            <h1
              className="font-bold tracking-tight text-white leading-[0.98] text-[clamp(2.5rem,6.5vw,5.75rem)] text-left"
              id="hero-main-heading"
            >
              {PERSONAL_INFO.heroHeadline[lang][0]}<br />
              <span className="text-white/95">{PERSONAL_INFO.heroHeadline[lang][1]}</span>
            </h1>

            <p className="mt-4 sm:mt-5 text-lg sm:text-xl lg:text-2xl text-blue-100/95 font-medium leading-relaxed max-w-3xl">
              “{PERSONAL_INFO.corePositioning[lang]}”
            </p>
          </div>

          {/* Bottom Bar: Introduction text & Action Buttons */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 pt-4 border-t border-white/15">
            {/* Bio summary & Tagline */}
            <div className="max-w-xl text-left">
              <p className="text-sm sm:text-base text-white/90 leading-relaxed font-normal antialiased">
                {PERSONAL_INFO.bioSummary[lang]}
              </p>
              <div className="inline-flex items-center gap-2 mt-2 px-3 py-1 rounded-md bg-white/10 text-xs font-mono text-blue-200 tracking-wide">
                <span>{PERSONAL_INFO.tagline[lang]}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 shrink-0">
              {/* Primary Button: Zalo-inspired Blue Pill */}
              <button
                onClick={onExploreStory}
                className="group inline-flex items-center gap-2 bg-[#0068FF] hover:bg-[#0052CC] active:scale-95 text-white font-medium text-sm sm:text-base px-6 sm:px-7 py-3 sm:py-3.5 rounded-full shadow-lg shadow-blue-600/35 transition-all duration-200 cursor-pointer"
                id="hero-cta-story"
              >
                <Compass className="w-4 h-4 transition-transform group-hover:rotate-45" />
                <span>{lang === 'vi' ? 'Hành trình sự nghiệp' : 'Explore Career Story'}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Secondary Button: Subtle translucent */}
              <button
                onClick={onExploreCases}
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 active:scale-95 text-white font-medium text-sm sm:text-base px-6 sm:px-7 py-3 sm:py-3.5 rounded-full border border-white/40 hover:border-white transition-all duration-200 backdrop-blur-sm cursor-pointer"
                id="hero-cta-cases"
              >
                <span>{lang === 'vi' ? 'Xem Case Studies' : 'View Case Studies'}</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
