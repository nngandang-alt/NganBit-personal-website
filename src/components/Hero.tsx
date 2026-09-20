import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, Compass } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Language } from '../types';
import heroBgImage from '../assets/hero-bg.jpg';

interface HeroProps {
  lang: Language;
  onExploreStory: () => void;
  onExploreCases: () => void;
}

const PROFESSIONAL_SNAPSHOT = [
  {
    value: '7+',
    label: {
      vi: 'Năm trong Truyền thông, Văn hóa & Gắn kết',
      en: 'Years across Communication, Culture & Engagement',
    },
  },
  {
    value: '4',
    label: {
      vi: 'Lĩnh vực chuyên môn cốt lõi',
      en: 'Core Areas of Expertise',
    },
  },
  {
    value: '6',
    label: {
      vi: 'Môi trường & Quy mô tổ chức thực chiến',
      en: 'Organizational Environments & Scales',
    },
  },
  {
    value: 'AI',
    label: {
      vi: 'Khai phóng năng lực & Tối ưu quy trình',
      en: 'Amplifying Capabilities & Optimizing Workflows',
    },
    isAccent: true,
  },
];

export const Hero: React.FC<HeroProps> = ({
  lang,
  onExploreStory,
  onExploreCases,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 60);
    return () => clearTimeout(timer);
  }, []);

  // Subtle pointer micro-parallax (desktop only, reduced motion respected)
  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!window.matchMedia('(hover: hover) and (min-width: 1024px)').matches) return;
    if (!heroRef.current) return;

    const rect = heroRef.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    // max 4-8px soft movement
    setParallax({
      x: Math.max(-6, Math.min(6, nx * 12)),
      y: Math.max(-6, Math.min(6, ny * 12)),
    });
  };

  const handlePointerLeave = () => {
    setParallax({ x: 0, y: 0 });
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative w-full min-h-[88vh] lg:min-h-[92vh] flex flex-col justify-center overflow-hidden rounded-[28px] sm:rounded-[36px] lg:rounded-[44px] text-white select-none border border-black/10 shadow-2xl bg-[#070B14]"
    >
      {/* Ambient background soft light glow */}
      <div
        className="absolute top-1/4 right-[12%] w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none blur-3xl transition-opacity duration-1000"
        style={{
          background: 'radial-gradient(circle, rgba(0, 104, 255, 0.35) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Photographic Canvas with subtle entrance scale & micro-parallax */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none">
        <img
          src={heroBgImage}
          alt="Đặng Vũ Thùy Ngân - Internal Communication & Corporate Culture"
          className={`w-full h-full object-cover object-[52%_top] sm:object-[54%_top] lg:object-[50%_top] transform scale-[0.88] sm:scale-[0.86] lg:scale-[0.85] xl:scale-[0.84] translate-x-[4%] sm:translate-x-[8%] lg:translate-x-[14%] xl:translate-x-[16%] translate-y-[0%] sm:translate-y-[-0.5%] lg:translate-y-[-1%] origin-bottom-right transition-all duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transform-none ${
            isLoaded ? 'opacity-100 scale-[0.88] sm:scale-[0.86] lg:scale-[0.85] xl:scale-[0.84]' : 'opacity-0 scale-[0.91]'
          }`}
          style={{
            transform: `translate3d(${parallax.x}px, ${parallax.y}px, 0)`,
            transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), opacity 1.2s ease-out',
          }}
          id="hero-bg-img"
        />

        {/* Desktop Horizontal Gradient Fade (smooth dark safe area for text, reveals portrait seamlessly) */}
        <div
          className={`hidden lg:block absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 via-40% via-black/25 via-62% to-transparent to-85% pointer-events-none z-[1] transition-opacity duration-1000 delay-150 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden="true"
        />

        {/* Mobile/Tablet Vertical Fade */}
        <div
          className={`lg:hidden absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 via-35% via-black/90 via-60% to-black to-100% pointer-events-none z-[1] transition-opacity duration-1000 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
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

      {/* LEFT CONTENT SAFE ZONE - Protected Portrait Area */}
      <div className={`relative z-20 w-full lg:w-[58%] xl:w-[54%] max-w-[680px] xl:max-w-[720px] px-6 sm:px-10 md:px-12 lg:px-16 pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-12 sm:pb-16 lg:pb-20 flex flex-col justify-center transition-all duration-1000 delay-100 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      }`}>
        
        {/* Domains pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.08] hover:bg-white/[0.12] backdrop-blur-md border border-white/15 text-xs sm:text-sm font-medium text-white/90 mb-5 sm:mb-6 shadow-xs self-start transition-colors">
          <Sparkles className="w-3.5 h-3.5 text-blue-300 shrink-0" />
          <span>{PERSONAL_INFO.domains[lang]}</span>
        </div>

        {/* 01. MAIN HEADLINE - Progression: People -> Meaningful Experiences -> Shared Purpose */}
        <h1
          className="font-bold tracking-tight text-white text-left max-w-2xl"
          id="hero-main-heading"
        >
          {lang === 'vi' ? (
            <>
              {/* Line 1: People */}
              <span className="block text-white text-[clamp(1.6rem,2.35vw,2.4rem)] leading-[1.18]">
                Kết nối con người
              </span>

              {/* Line 2: Meaningful Experiences (Priority 1 line on desktop; semantic wrap if needed) */}
              <span className="block text-[#0068FF] text-[clamp(1.72rem,2.55vw,2.65rem)] leading-[1.18] mt-1.5 sm:mt-2">
                <span className="inline-block whitespace-normal lg:whitespace-nowrap">
                  <span className="inline-block">Nuôi dưỡng những trải nghiệm</span>{' '}
                  <span className="inline-block whitespace-nowrap">có ý nghĩa</span>
                </span>
              </span>

              {/* Line 3: Shared Purpose */}
              <span className="block text-white/95 text-[clamp(1.6rem,2.35vw,2.4rem)] leading-[1.18] mt-1.5 sm:mt-2">
                <span className="inline-block whitespace-normal lg:whitespace-nowrap">
                  <span className="inline-block">Cùng hướng về một</span>{' '}
                  <span className="inline-block whitespace-nowrap">mục tiêu</span>
                </span>
              </span>
            </>
          ) : (
            <>
              {/* Line 1: People */}
              <span className="block text-white text-[clamp(1.6rem,2.35vw,2.4rem)] leading-[1.18]">
                Connecting people
              </span>

              {/* Line 2: Meaningful Experiences (Strictly 1 line on desktop) */}
              <span className="block text-[#0068FF] text-[clamp(1.72rem,2.55vw,2.65rem)] leading-[1.18] mt-1.5 sm:mt-2">
                <span className="inline-block whitespace-normal lg:whitespace-nowrap">
                  Nurturing meaningful experiences
                </span>
              </span>

              {/* Line 3: Shared Purpose (Strictly 1 line on desktop) */}
              <span className="block text-white/95 text-[clamp(1.6rem,2.35vw,2.4rem)] leading-[1.18] mt-1.5 sm:mt-2">
                <span className="inline-block whitespace-normal lg:whitespace-nowrap">
                  Aligning toward a shared purpose
                </span>
              </span>
            </>
          )}
        </h1>

        {/* 02. SUPPORTING PHILOSOPHY STATEMENT */}
        <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-[16px] text-white/80 font-normal leading-relaxed max-w-xl">
          “{PERSONAL_INFO.corePositioning[lang]}”
        </p>

        {/* 03. PROFESSIONAL SNAPSHOT (At-a-Glance Profile: 7+ | 4 | 6 | AI) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 my-6 sm:my-7 max-w-xl">
          {PROFESSIONAL_SNAPSHOT.map((item, idx) => (
            <div
              key={idx}
              className={`p-3 sm:p-3.5 rounded-2xl border backdrop-blur-md transition-all duration-200 ${
                item.isAccent
                  ? 'bg-blue-950/40 border-[#0068FF]/50 text-white shadow-xs'
                  : 'bg-white/[0.05] border-white/10 hover:bg-white/[0.08]'
              }`}
            >
              <div
                className={`font-mono text-xl sm:text-2xl font-bold tracking-tight mb-1 ${
                  item.isAccent ? 'text-[#0068FF]' : 'text-white'
                }`}
              >
                {item.value}
              </div>
              <div className="text-[11px] sm:text-xs text-white/75 leading-snug font-normal">
                {item.label[lang]}
              </div>
            </div>
          ))}
        </div>

        {/* 04. CTA ACTION BUTTONS */}
        <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
          <button
            onClick={onExploreStory}
            className="group inline-flex items-center gap-2 bg-[#0068FF] hover:bg-[#0052CC] active:scale-95 text-white font-medium text-sm sm:text-base px-6 sm:px-7 py-3 sm:py-3.5 rounded-full shadow-[0_4px_24px_rgba(0,104,255,0.45)] hover:shadow-[0_6px_30px_rgba(0,104,255,0.6)] transition-all duration-200 cursor-pointer"
            id="hero-cta-story"
          >
            <Compass className="w-4 h-4 transition-transform group-hover:rotate-45" />
            <span>{lang === 'vi' ? 'Hành trình sự nghiệp' : 'Explore Career Story'}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

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
