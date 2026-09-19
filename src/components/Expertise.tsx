import React, { useState } from 'react';
import { EXPERTISE_ITEMS } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

export const Expertise: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <section id="expertise" className="w-full py-20 sm:py-28 md:py-36 px-6 sm:px-10 md:px-14 lg:px-16 bg-[#FAFAFA] border-b border-black/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#2563EB] uppercase">
                Core Capabilities
              </span>
              <div className="h-px w-12 bg-[#2563EB]/30" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#111111] tracking-tight">
              What I Do
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#666666] max-w-md">
            Holistic strategies connecting executive vision to everyday employee reality through story, ritual, and technology.
          </p>
        </div>

        {/* Agency-style Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {EXPERTISE_ITEMS.map((item) => {
            const isHovered = activeItem === item.number;
            return (
              <div
                key={item.number}
                onMouseEnter={() => setActiveItem(item.number)}
                onMouseLeave={() => setActiveItem(null)}
                className={`group relative flex flex-col justify-between p-8 sm:p-9 rounded-[24px] bg-white border transition-all duration-300 ${
                  isHovered
                    ? 'border-[#2563EB] shadow-xl shadow-[#2563EB]/5 -translate-y-1'
                    : 'border-black/5 hover:border-black/15 shadow-sm'
                }`}
              >
                {/* Top Row: Oversized Number & Micro Arrow */}
                <div className="flex items-baseline justify-between w-full mb-6">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#999999] group-hover:text-[#2563EB] transition-colors duration-200 tracking-tighter">
                    {item.number}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-black/5 flex items-center justify-center text-[#888888] group-hover:border-[#2563EB] group-hover:text-[#2563EB] group-hover:bg-[#2563EB]/5 transition-all">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Middle: Title & Description */}
                <div className="flex flex-col gap-3 mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#111111] tracking-tight group-hover:text-[#2563EB] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#555555] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom: Minimal pill tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-black/5">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium tracking-wide bg-[#F4F4F2] text-[#444444] group-hover:bg-blue-50 group-hover:text-[#2563EB] transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
