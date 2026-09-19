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
        
        {/* Left: Monogram & Identity */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-white/10 text-white font-bold flex items-center justify-center text-xs">
            {PERSONAL_INFO.monogram}
          </div>
          <div>
            <span className="font-semibold text-white">
              {PERSONAL_INFO.fullName} ({PERSONAL_INFO.identity})
            </span>
            <span className="text-slate-500 ml-2">
              © {new Date().getFullYear()}
            </span>
          </div>
        </div>

        {/* Center: Domains */}
        <div className="text-center font-medium text-slate-300 text-xs hidden sm:block">
          <span>Internal Communication</span>
          <span className="mx-2 text-[#0068FF]">·</span>
          <span>Corporate Culture</span>
          <span className="mx-2 text-[#0068FF]">·</span>
          <span>Employee Experience</span>
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
