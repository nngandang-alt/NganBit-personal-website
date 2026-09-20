import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Language } from '../types';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full py-10 px-4 sm:px-8 md:px-12 lg:px-16 bg-[#0B0B0B] text-slate-400 border-t border-white/5 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Copyright */}
        <div className="font-medium text-slate-300">
          ĐẶNG VŨ THÙY NGÂN © 2026
        </div>

        {/* Center: Domains (4 Core Professional Domains) */}
        <div className="text-center font-medium text-slate-300 text-xs flex flex-wrap items-center justify-center gap-y-1 leading-relaxed">
          <span className="whitespace-nowrap">Internal Communication</span>
          <span className="mx-2 text-[#0068FF]">·</span>
          <span className="whitespace-nowrap">Corporate Culture</span>
          <span className="mx-2 text-[#0068FF]">·</span>
          <span className="whitespace-nowrap">Employee Engagement</span>
          <span className="mx-2 text-[#0068FF]">·</span>
          <span className="whitespace-nowrap">Employee Experience</span>
        </div>

        {/* Right: Links & Back to Top */}
        <div className="flex items-center gap-6">
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="hover:text-white transition-colors"
          >
            Email
          </a>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors cursor-pointer group"
          >
            <span>{lang === 'vi' ? 'Về đầu trang' : 'Back to top'}</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 text-[#0068FF]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
