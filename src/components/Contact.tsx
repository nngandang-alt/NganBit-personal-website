import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUpRight, Mail, Linkedin, Sparkles } from 'lucide-react';

interface ContactProps {
  onOpenConnect: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenConnect }) => {
  return (
    <section
      id="contact"
      className="w-full py-24 sm:py-32 md:py-44 px-6 sm:px-10 md:px-14 lg:px-16 bg-[#111111] text-white border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16">
        {/* Sub-tag */}
        <div className="flex items-center gap-3">
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#3B82F6] uppercase">
            Let’s Connect
          </span>
          <div className="h-px w-12 bg-[#3B82F6]/40" />
        </div>

        {/* Dramatic Large Typography */}
        <div className="max-w-5xl">
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.02]">
            Great culture starts<br />
            <span className="text-white/80">with a conversation.</span>
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl text-white/70 mt-6 sm:mt-8 max-w-2xl font-light leading-relaxed">
            Let’s connect and create meaningful employee experiences together.
          </p>
        </div>

        {/* Action & Direct Channels */}
        <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 sm:gap-6 pt-6 border-t border-white/15">
          {/* Main CTA */}
          <button
            onClick={onOpenConnect}
            className="group inline-flex items-center gap-3 bg-[#2563EB] hover:bg-[#1D4ED8] active:scale-95 text-white font-medium text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 rounded-full shadow-2xl shadow-blue-600/40 transition-all duration-200 cursor-pointer"
            id="contact-cta-btn"
          >
            <Sparkles className="w-5 h-5 text-blue-200" />
            <span>Start a Conversation</span>
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>

          {/* Direct Email Link */}
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-white/20 hover:border-white/60 hover:bg-white/5 text-white/90 hover:text-white text-sm sm:text-base font-medium transition-all"
          >
            <Mail className="w-4 h-4 text-[#3B82F6]" />
            <span>{PERSONAL_INFO.email}</span>
          </a>

          {/* LinkedIn Link */}
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-white/20 hover:border-white/60 hover:bg-white/5 text-white/90 hover:text-white text-sm sm:text-base font-medium transition-all"
          >
            <Linkedin className="w-4 h-4 text-[#0A66C2]" />
            <span>LinkedIn Profile</span>
          </a>
        </div>
      </div>
    </section>
  );
};
