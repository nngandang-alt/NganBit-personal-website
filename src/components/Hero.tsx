import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import heroBgImage from '../assets/hero-bg.jpg';

interface HeroProps {
  onExploreWork: () => void;
  onAboutClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onAboutClick }) => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[85vh] lg:min-h-[88vh] flex flex-col justify-between overflow-hidden rounded-[28px] sm:rounded-[36px] lg:rounded-[44px] text-white select-none"
    >
      {/* Immersive Editorial Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={heroBgImage}
          alt="Đặng Vũ Thùy Ngân - Internal Communication & Corporate Culture"
          className="w-full h-full object-cover object-[60%_20%] sm:object-[65%_20%] lg:object-[60%_25%] transform scale-100 transition-transform duration-1000 ease-out"
          id="hero-bg-img"
        />

        {/* Sophisticated Multi-Stage Gradient Overlay */}
        {/* Very light at top to let the photography breathe, gently darker toward the bottom for crisp typography contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/35 to-black/85" />
        <div className="absolute inset-0 bg-radial-[circle_at_20%_80%] from-black/50 via-transparent to-transparent opacity-80" />
      </div>

      {/* Top Spacer for floating transparent navbar */}
      <div className="pt-24 sm:pt-28 md:pt-32" />

      {/* Hero Content Area - Positioned in the lower area matching reference image */}
      <div className="relative z-10 w-full px-6 sm:px-10 md:px-14 lg:px-16 pb-12 sm:pb-16 md:pb-20 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col gap-8 md:gap-10">
          
          {/* Main Headline (Lower-Left Placement, Not Centered, Giant Editorial Scale) */}
          <div className="max-w-4xl text-left">
            {/* Subtle Position Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium text-white/90 mb-4 sm:mb-6">
              <Sparkles className="w-3.5 h-3.5 text-blue-300" />
              <span>{PERSONAL_INFO.positioning}</span>
            </div>

            <h1
              className="font-bold tracking-tight text-white leading-[0.95] text-[clamp(2.75rem,6.8vw,6.25rem)] text-left"
              id="hero-main-heading"
            >
              Building culture<br />
              <span className="text-white/95">that people feel.</span>
            </h1>
          </div>

          {/* Bottom Bar: Introduction text & Action Buttons */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 pt-2 border-t border-white/10">
            {/* Introduction Text - Left Aligned */}
            <div className="max-w-xl text-left">
              <p className="text-base sm:text-lg text-white/90 leading-relaxed font-normal antialiased">
                {PERSONAL_INFO.bioSummary}
              </p>
              <p className="text-xs sm:text-sm text-white/60 mt-2 font-medium tracking-wide uppercase">
                {PERSONAL_INFO.heroSupporting}
              </p>
            </div>

            {/* CTA Buttons - Near bottom-right/lower-middle */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 shrink-0">
              {/* Primary Button: Electric Blue Pill */}
              <button
                onClick={onExploreWork}
                className="group inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] active:scale-95 text-white font-medium text-sm sm:text-base px-7 sm:px-8 py-3.5 sm:py-4 rounded-full shadow-lg shadow-blue-600/30 transition-all duration-200 cursor-pointer"
                id="hero-cta-primary"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Secondary Button: Transparent background with white border */}
              <button
                onClick={onAboutClick}
                className="inline-flex items-center justify-center bg-white/5 hover:bg-white/15 active:scale-95 text-white font-medium text-sm sm:text-base px-7 sm:px-8 py-3.5 sm:py-4 rounded-full border border-white/60 hover:border-white transition-all duration-200 backdrop-blur-sm cursor-pointer"
                id="hero-cta-secondary"
              >
                <span>About Me</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
