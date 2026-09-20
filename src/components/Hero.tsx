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
      className="relative w-full min-h-[88vh] lg:min-h-[92vh] flex flex-col justify-center overflow-hidden rounded-[28px] sm:rounded-[36px] lg:rounded-[44px] text-white select-none border border-black/10 shadow-2xl bg-[#070B14]"
    >
      {/* ========================================================================= */}
      {/* 1. SEAMLESS PHOTOGRAPHIC BACKGROUND (Unified Canvas across the Hero)      */}
      {/* Scaled down proportionally to keep head & hair completely uncropped       */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none">
        <img
          src={heroBgImage}
          alt="Đặng Vũ Thùy Ngân (Ngân Bit) - Internal Communication & Corporate Culture"
          className="w-full h-full object-cover object-[52%_top] sm:object-[54%_top] lg:object-[50%_top] transform scale-[0.88] sm:scale-[0.85] lg:scale-[0.82] xl:scale-[0.80] translate-x-[4%] sm:translate-x-[8%] lg:translate-x-[14%] xl:translate-x-[16%] translate-y-[5%] sm:translate-y-[6%] lg:translate-y-[7%] origin-bottom-right transition-transform duration-700 ease-out"
          id="hero-bg-img"
        />

        {/* Desktop Smooth Horizontal Fade: Dark on the left for text, seamlessly transparent at portrait */}
        <div
          className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#070B14] via-[#070B14]/90 via-42% to-transparent to-75% pointer-events-none z-[1]"
          aria-hidden="true"
        />

        {/* Mobile/Tablet Vertical Fade: Keeps face clear at top, darkens below for text */}
        <div
          className="lg:hidden absolute inset-0 bg-gradient-to-b from-[#070B14]/30 via-[#070B14]/75 via-42% to-[#070B14] to-75% pointer-events-none z-[1]"
          aria-hidden="true"
        />

        {/* Soft atmospheric top-to-bottom vignette */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#070B14]/60 via-transparent via-20% to-[#070B14]/80 pointer-events-none z-[1]"
          aria-hidden="true"
        />

        {/* Top-left subtle dotted matrix grid */}
        <div
          className="absolute top-0 left-0 w-3/5 h-3/5 opacity-[0.05] pointer-events-none bg-[radial-gradient(#ffffff_1.2px,transparent_1.2px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_top_left,white_25%,transparent_75%)] z-[1]"
          aria-hidden="true"
        />
      </div>

      {/* ========================================================================= */}
      {/* 2. LEFT CONTENT SAFE ZONE (Desktop: ~48-52% width / Strictly zero overlap) */}
      {/* ========================================================================= */}
      <div className="relative z-20 w-full lg:w-[50%] xl:w-[48%] max-w-[640px] px-6 sm:px-10 md:px-12 lg:px-16 pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-12 sm:pb-16 lg:pb-20 flex flex-col justify-center">
        
        {/* Positioning Pill - Translucent glass treatment */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.08] hover:bg-white/[0.12] backdrop-blur-md border border-white/15 text-xs sm:text-sm font-medium text-white/90 mb-5 sm:mb-6 shadow-xs self-start transition-colors">
          <Sparkles className="w-3.5 h-3.5 text-blue-300 shrink-0" />
          <span>{PERSONAL_INFO.domains[lang]}</span>
        </div>

        {/* Main Headline - Exactly 2 lines on desktop with subtle icy-blue gradient on line 2 */}
        <h1
          className="font-bold tracking-tight text-white leading-[1.06] text-[clamp(2.35rem,4.3vw,3.95rem)] text-left"
          id="hero-main-heading"
        >
          <span>{PERSONAL_INFO.heroHeadline[lang][0]}</span>
          <br />
          <span className="bg-gradient-to-r from-white via-[#CBE0FE] to-[#88B8FD] bg-clip-text text-transparent">
            {PERSONAL_INFO.heroHeadline[lang][1]}
          </span>
        </h1>

        {/* Core Positioning Quote - 2 lines, clean hierarchy */}
        <p className="mt-4 sm:mt-5 text-base sm:text-lg lg:text-xl text-white/90 font-normal leading-relaxed max-w-xl">
          “{PERSONAL_INFO.corePositioning[lang]}”
        </p>

        {/* Subtle Divider */}
        <div className="w-full max-w-md h-[1px] bg-white/10 my-5 sm:my-6" />

        {/* Bio Summary & Tagline */}
        <div className="flex flex-col gap-3 max-w-lg">
          <p className="text-sm sm:text-[15px] text-white/75 leading-relaxed font-normal antialiased">
            {PERSONAL_INFO.bioSummary[lang]}
          </p>
          <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-lg bg-white/[0.06] border border-white/10 text-xs font-mono text-white/70 tracking-wide">
            <span>{PERSONAL_INFO.tagline[lang]}</span>
          </div>
        </div>

        {/* CTA Action Buttons - Strictly in left zone */}
        <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
          {/* Primary Button: Zalo-inspired Blue Pill with subtle glow */}
          <button
            onClick={onExploreStory}
            className="group inline-flex items-center gap-2 bg-[#0068FF] hover:bg-[#0052CC] active:scale-95 text-white font-medium text-sm sm:text-base px-6 sm:px-7 py-3 sm:py-3.5 rounded-full shadow-[0_4px_24px_rgba(0,104,255,0.45)] hover:shadow-[0_6px_30px_rgba(0,104,255,0.6)] transition-all duration-200 cursor-pointer"
            id="hero-cta-story"
          >
            <Compass className="w-4 h-4 transition-transform group-hover:rotate-45" />
            <span>{lang === 'vi' ? 'Hành trình sự nghiệp' : 'Explore Career Story'}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          {/* Secondary Button: Subtle translucent glass */}
          <button
            onClick={onExploreCases}
            className="inline-flex items-center justify-center bg-white/[0.06] hover:bg-white/[0.12] active:scale-95 text-white font-medium text-sm sm:text-base px-6 sm:px-7 py-3 sm:py-3.5 rounded-full border border-white/20 hover:border-white/40 transition-all duration-200 backdrop-blur-sm cursor-pointer shadow-xs"
            id="hero-cta-cases"
          >
            <span>{lang === 'vi' ? 'Xem Case Studies' : 'View Case Studies'}</span>
          </button>
        </div>

      </div>
    </section>
  );
};
