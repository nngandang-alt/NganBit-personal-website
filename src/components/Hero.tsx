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
      className="relative w-full min-h-[85vh] lg:min-h-[90vh] flex flex-col lg:flex-row items-stretch overflow-hidden rounded-[28px] sm:rounded-[36px] lg:rounded-[44px] text-white select-none border border-black/10 shadow-2xl bg-[#060913]"
    >
      {/* Subtle Tech Grid Texture Across Hero Base */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] z-[1]"
        aria-hidden="true"
      />

      {/* ========================================================================= */}
      {/* RIGHT PORTRAIT ZONE (Desktop: ~46% right-aligned / Mobile: Top stacked) */}
      {/* Keeps original photo intact, centered on subject with zero dark wash on her */}
      {/* ========================================================================= */}
      <div className="relative w-full h-[360px] sm:h-[440px] md:h-[480px] lg:h-full lg:w-[47%] xl:w-[46%] 2xl:w-[45%] lg:absolute lg:right-0 lg:top-0 lg:bottom-0 overflow-hidden pointer-events-none select-none z-[2] order-1 lg:order-2">
        <img
          src={heroBgImage}
          alt="Đặng Vũ Thùy Ngân (Ngân Bit) - Internal Communication & Corporate Culture"
          className="w-full h-full object-cover object-[52%_10%] sm:object-[52%_12%] lg:object-[52%_12%] transform scale-100"
          id="hero-bg-img"
        />

        {/* Desktop Left Fade: Smoothly dissolves the photo's left banner into the dark hero background */}
        <div
          className="hidden lg:block absolute inset-y-0 left-0 w-36 sm:w-48 lg:w-64 bg-gradient-to-r from-[#060913] via-[#060913]/60 to-transparent z-10 pointer-events-none"
          aria-hidden="true"
        />

        {/* Bottom Fade: Anchors the portrait naturally into the card boundary */}
        <div
          className="absolute inset-x-0 bottom-0 h-28 sm:h-36 lg:h-28 bg-gradient-to-t from-[#060913] via-[#060913]/60 to-transparent z-10 pointer-events-none"
          aria-hidden="true"
        />

        {/* Mobile Top Vignette: Ensures contrast behind the floating navbar on narrow viewports */}
        <div
          className="lg:hidden absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/45 via-black/20 to-transparent z-10 pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* ========================================================================= */}
      {/* LEFT CONTENT SAFE ZONE (Desktop: ~54% width / Mobile: Below portrait)     */}
      {/* Strictly contains all text, pill, quote, bio, and CTAs - ZERO overlap    */}
      {/* ========================================================================= */}
      <div className="relative z-20 w-full lg:w-[53%] xl:w-[54%] max-w-[700px] flex flex-col justify-center px-6 sm:px-10 md:px-12 lg:px-16 pt-4 sm:pt-6 lg:pt-28 pb-12 sm:pb-16 lg:pb-20 order-2 lg:order-1 -mt-12 sm:-mt-16 lg:mt-0">
        
        {/* Positioning Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium text-white/95 mb-4 sm:mb-6 shadow-sm self-start">
          <Sparkles className="w-3.5 h-3.5 text-blue-300 shrink-0" />
          <span>{PERSONAL_INFO.domains[lang]}</span>
        </div>

        {/* Main Headline - Bold, commanding, and cleanly contained */}
        <h1
          className="font-bold tracking-tight text-white leading-[1.02] text-[clamp(2.5rem,5.2vw,4.5rem)] text-left"
          id="hero-main-heading"
        >
          {PERSONAL_INFO.heroHeadline[lang][0]}<br />
          <span className="text-white/95">{PERSONAL_INFO.heroHeadline[lang][1]}</span>
        </h1>

        {/* Core Positioning Quote */}
        <p className="mt-4 sm:mt-5 text-base sm:text-lg lg:text-xl text-blue-100/95 font-medium leading-relaxed max-w-2xl">
          “{PERSONAL_INFO.corePositioning[lang]}”
        </p>

        {/* Bio Summary & Tagline */}
        <div className="mt-6 pt-5 border-t border-white/15 flex flex-col gap-2.5 max-w-xl">
          <p className="text-sm sm:text-base text-white/90 leading-relaxed font-normal antialiased">
            {PERSONAL_INFO.bioSummary[lang]}
          </p>
          <div className="inline-flex items-center gap-2 self-start mt-1 px-3 py-1 rounded-md bg-white/10 text-xs font-mono text-blue-200 tracking-wide">
            <span>{PERSONAL_INFO.tagline[lang]}</span>
          </div>
        </div>

        {/* CTA Action Buttons - Strictly inside the left safe zone */}
        <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4 pt-1">
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
    </section>
  );
};
