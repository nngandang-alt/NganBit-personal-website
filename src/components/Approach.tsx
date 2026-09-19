import React, { useState } from 'react';
import { APPROACH_STEPS } from '../data/portfolioData';

export const Approach: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="w-full py-20 sm:py-28 md:py-36 px-6 sm:px-10 md:px-14 lg:px-16 bg-white border-b border-black/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#2563EB] uppercase">
                05 — My Approach
              </span>
              <div className="h-px w-12 bg-[#2563EB]/30" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#111111] tracking-tight max-w-2xl">
              How I turn communication into organizational impact.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#666666] max-w-md">
            A battle-tested 7-stage methodology moving from active listening to measurable behavioral change.
          </p>
        </div>

        {/* Desktop Horizontal Process with Connecting Line */}
        <div className="hidden lg:block relative">
          {/* Continuous Connecting Line */}
          <div className="absolute top-7 left-6 right-6 h-0.5 bg-black/10 z-0" />

          <div className="grid grid-cols-7 gap-4 relative z-10">
            {APPROACH_STEPS.map((step, idx) => {
              const isHovered = hoveredIndex === idx;

              return (
                <div
                  key={step.number}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="flex flex-col items-start group cursor-default transition-transform duration-200"
                >
                  {/* Step Circle & Number */}
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-sm mb-6 transition-all duration-300 ${
                      isHovered
                        ? 'bg-[#2563EB] text-white ring-4 ring-blue-100 scale-110 shadow-lg'
                        : 'bg-white border-2 border-black/15 text-[#333333]'
                    }`}
                  >
                    {step.number}
                  </div>

                  {/* Step Name */}
                  <h3
                    className={`text-lg font-bold transition-colors ${
                      isHovered ? 'text-[#2563EB]' : 'text-[#111111]'
                    }`}
                  >
                    {step.name}
                  </h3>

                  {/* Step Headline */}
                  <p className="text-xs font-semibold text-[#666666] uppercase tracking-wider mt-1 mb-2">
                    {step.headline}
                  </p>

                  {/* Details */}
                  <p className="text-xs text-[#555555] leading-relaxed">
                    {step.details}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile / Tablet Vertical Timeline */}
        <div className="lg:hidden relative pl-6 sm:pl-8 border-l-2 border-black/10 flex flex-col gap-10">
          {APPROACH_STEPS.map((step) => (
            <div key={step.number} className="relative flex flex-col gap-1.5">
              {/* Timeline dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-6 h-6 rounded-full bg-[#2563EB] text-white text-[10px] font-bold flex items-center justify-center shadow">
                {step.number}
              </div>

              <div className="flex items-baseline gap-2">
                <h3 className="text-lg sm:text-xl font-bold text-[#111111]">
                  {step.name}
                </h3>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#2563EB]">
                  — {step.headline}
                </span>
              </div>

              <p className="text-sm text-[#555555] leading-relaxed">
                {step.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
