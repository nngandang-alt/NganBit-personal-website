import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#f8fbff] text-[#516992] pt-6 pb-12">
      {/* 
        Wide Desktop Footer Container:
        Matches the same consistent max-w-[1440px] with 40-60px intentional side margins.
        Spreads footer groups horizontally across the full desktop grid.
      */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Full-width Divider */}
        <div className="w-full h-[1px] bg-[#dce6f4] mb-[24px]" />

        {/* Content Row: Evenly distributed across desktop width */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] xl:text-[11.5px]">
          {/* Left: NĐ logo + NGÂN ĐẶNG + © 2026 */}
          <div className="flex items-center gap-[10px] shrink-0">
            <div className="w-[32px] h-[32px] rounded-full bg-[#0060ff] text-white text-[11px] font-extrabold flex items-center justify-center shadow-xs">
              NĐ
            </div>
            <span className="font-extrabold text-[12.5px] text-[#05051f] tracking-tight">
              NGÂN ĐẶNG
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-[#516992] font-medium">© 2026</span>
          </div>

          {/* Center: 4 Core Domains */}
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[#516992] font-medium">
            <span>Internal Communication</span>
            <span className="text-slate-300">·</span>
            <span>Corporate Culture</span>
            <span className="text-slate-300">·</span>
            <span>Employee Engagement</span>
            <span className="text-slate-300">·</span>
            <span>Employee Experience</span>
          </div>

          {/* Right: LinkedIn, Email, Back to top */}
          <div className="flex items-center gap-6 text-[#516992] font-medium shrink-0">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[#0060ff] transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#0060ff]" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-1.5 hover:text-[#0060ff] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#0060ff]" />
              <span>Email</span>
            </a>
            <span className="text-slate-300">|</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-[#0060ff] transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#0060ff]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
