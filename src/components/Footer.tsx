import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full py-10 px-6 sm:px-10 md:px-14 lg:px-16 bg-[#0B0B0B] text-white/70 border-t border-white/5 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left */}
        <div className="flex items-center gap-2">
          <span className="font-semibold text-white">© {new Date().getFullYear()} {PERSONAL_INFO.shortName}.</span>
          <span className="text-white/40">All rights reserved.</span>
        </div>

        {/* Center */}
        <div className="text-center font-medium text-white/80">
          <span>Internal Communication</span>
          <span className="mx-2 text-[#3B82F6]">×</span>
          <span>Corporate Culture</span>
        </div>

        {/* Right Links & Back to Top */}
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
            className="inline-flex items-center gap-1.5 text-white/90 hover:text-white transition-colors cursor-pointer group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
