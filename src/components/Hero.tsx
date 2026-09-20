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
      {/* Focal point centered at ~65-72% horizontal, with generous headroom at top */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none">
        <img
          src={heroBgImage}
          alt="Đặng Vũ Thùy Ngân (Ngân Bit) - Internal Communication & Corporate Culture"
          className="w-full h-full object-cover object-[52%_4%] sm:object-[54%_6%] lg:object-[50%_4%] transform scale-[1.08] translate-x-[4%] sm:translate-x-[8%] lg:translate-x-[15%] xl:translate-x-[18%] translate-y-[2%] sm:translate-y-[2.5%] lg:translate-y-[3.5%]"
          id="hero-bg-img"
        />

        {/* Desktop Smooth Horizontal Fade: Dark on the left for text, seamlessly transparent at portrait */}
        <div
          className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#070B14] via-[#070B14]/90 via-42% to-transparent to-75% pointer-events-none z-[1]"
          aria-hidden="true"
        />

        {/* Mobile/Tablet Vertical Fade: Keeps face clear at top, darkens below for text */}
        <div
          className="lg:hidden absolute inset-0 bg-gradient-to-b from-[#070B14]/35 via-[#070B14]/75 via-42% to-[#070B14] to-75% pointer-events-none z-[1]"
          aria-hidden="true"
        />

        {/* Soft atmospheric top-to-bottom vignette */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#070B14]/50 via-transparent via-20% to-[#070B14]/75 pointer-events-none z-[1]"
          aria-hidden="true"
        />

        {/* Top-left subtle dotted matrix grid (as seen in reference mockup) */}
        <div
          className="absolute top-0 left-0 w-3/5 h-3/5 opacity-[0.05] pointer-events-none bg-[radial-gradient(#ffffff_1.2px,transparent_1.2px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_top_left,white_25%,transparent_75%)] z-[1]"
          aria-hidden="true"
        />
      </div>

      {/* ========================================================================= */}
      {/* 2. RIGHT SIDE EDITORIAL ACCENTS (Exact Match to Reference Mockup)         */}
      {/* "People Culture Impact 💙", subtle blue vector curves, & bottom quote    */}
      {/* ========================================================================= */}
      <div className="hidden xl:flex flex-col items-start absolute right-8 2xl:right-14 top-28 2xl:top-32 text-left z-10 pointer-events-none select-none">
        <span className="font-serif italic text-base lg:text-lg text-blue-200/80 tracking-wide leading-snug">
          People
        </span>
        <span className="font-serif italic text-base lg:text-lg text-blue-200/80 tracking-wide leading-snug">
          Culture
        </span>
        <span className="font-serif italic text-base lg:text-lg text-blue-300 font-medium tracking-wide leading-snug flex items-center gap-1.5">
          Impact <span className="text-blue-400 not-italic text-sm">💙</span>
        </span>
      </div>

      <svg
        className="hidden xl:block absolute right-0 top-1/4 w-[340px] 2xl:w-[420px] h-[500px] pointer-events-none z-[5] opacity-35 stroke-blue-400/40"
        viewBox="0 0 400 500"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M 400,20 C 260,60 180,180 200,280 C 220,380 340,420 400,480"
          strokeWidth="1.2"
        />
        <path
          d="M 400,100 C 290,140 230,230 250,320 C 270,410 360,450 400,490"
          strokeWidth="0.8"
          strokeDasharray="4 4"
        />
      </svg>

      <div className="hidden xl:flex flex-col items-start absolute right-8 2xl:right-14 bottom-20 2xl:bottom-24 text-left z-10 pointer-events-none select-none">
        <span className="text-xs 2xl:text-sm text-blue-200/75 font-normal tracking-wide leading-relaxed">
          Turning
        </span>
        <span className="text-xs 2xl:text-sm text-blue-200/75 font-normal tracking-wide leading-relaxed">
          People into
        </span>
        <span className="text-xs 2xl:text-sm text-blue-200/90 font-medium tracking-wide leading-relaxed">
          Possibilities
        </span>
        <div className="w-6 h-[1.5px] bg-blue-400/50 mt-2" />
      </div>

      {/* ========================================================================= */}
      {/* 3. LEFT CONTENT SAFE ZONE (Desktop: ~48-52% width / Strictly zero overlap) */}
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
