import React from 'react';
import { IMPACT_STATS } from '../data/portfolioData';

export const ImpactStats: React.FC = () => {
  return (
    <section className="w-full py-20 sm:py-28 md:py-32 px-6 sm:px-10 md:px-14 lg:px-16 bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Tag */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#3B82F6] uppercase">
                04 — Impact by the Numbers
              </span>
              <div className="h-px w-12 bg-[#3B82F6]/40" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white max-w-2xl">
              Proven results, measurable connection.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-white/60 max-w-md">
            Culture isn’t intangible—it reflects in retention, participation rates, clarity scores, and workplace psychological safety.
          </p>
        </div>

        {/* Oversized Numbers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 divide-y sm:divide-y-0 sm:divide-x divide-white/15">
          {IMPACT_STATS.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-between pt-6 sm:pt-0 ${
                idx > 0 ? 'sm:pl-8 lg:pl-10' : ''
              }`}
            >
              {/* Oversized Number Display */}
              <div className="mb-4">
                <span className="block text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-none">
                  {stat.value}
                </span>
              </div>

              {/* Minimal Supporting Text */}
              <div className="flex flex-col gap-1.5">
                <h3 className="text-base sm:text-lg font-semibold text-white/95 leading-snug">
                  {stat.label}
                </h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
