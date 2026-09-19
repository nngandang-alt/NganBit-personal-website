import React from 'react';
import { ABOUT_DATA, PERSONAL_INFO } from '../data/portfolioData';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="w-full py-20 sm:py-28 md:py-36 px-6 sm:px-10 md:px-14 lg:px-16 bg-white border-b border-black/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-8 sm:mb-12">
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#2563EB] uppercase">
            {ABOUT_DATA.sectionLabel}
          </span>
          <div className="h-px w-12 bg-[#2563EB]/30" />
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Large Statement & Philosophy (approx 7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[#111111] leading-[1.1] tracking-tight">
              {ABOUT_DATA.statement}
            </h2>

            <div className="relative pl-6 border-l-2 border-[#2563EB] my-2">
              <p className="text-lg sm:text-xl text-[#333333] font-normal leading-relaxed italic">
                “{ABOUT_DATA.leadParagraph}”
              </p>
            </div>

            {/* Quick Profile Tag */}
            <div className="flex items-center gap-4 pt-4">
              <div className="w-12 h-12 rounded-full bg-[#111111] text-white flex items-center justify-center font-bold text-lg">
                {PERSONAL_INFO.monogram}
              </div>
              <div>
                <p className="font-semibold text-base text-[#111111]">{PERSONAL_INFO.fullName}</p>
                <p className="text-sm text-[#666666]">{PERSONAL_INFO.title}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Short Professional Introduction & Key Pillars (approx 5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-8 bg-[#F9F9F8] p-8 sm:p-10 rounded-[28px] border border-black/5">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#666666] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>Philosophy &amp; Practice</span>
            </div>

            <p className="text-base sm:text-[1.05rem] text-[#333333] leading-relaxed">
              {ABOUT_DATA.detailParagraph}
            </p>

            {/* Core Pillars */}
            <div className="flex flex-col gap-5 pt-4 border-t border-black/5">
              {ABOUT_DATA.keyPillars.map((pillar, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-[#111111] text-sm sm:text-base">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#555555] leading-normal mt-0.5">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Availability Badge */}
            <div className="mt-2 inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white border border-black/5 text-xs text-[#333333]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{PERSONAL_INFO.availabilityStatus}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
