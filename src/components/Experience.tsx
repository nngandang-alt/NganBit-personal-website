import React, { useState } from 'react';
import { EXPERIENCE_ITEMS } from '../data/portfolioData';
import { ChevronDown, ChevronUp, MapPin, Award, CheckCircle } from 'lucide-react';

export const Experience: React.FC = () => {
  // Expand first item by default
  const [expandedId, setExpandedId] = useState<string | null>('exp-1');

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="experience" className="w-full py-20 sm:py-28 md:py-36 px-6 sm:px-10 md:px-14 lg:px-16 bg-white border-b border-black/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#2563EB] uppercase">
                02 — Experience
              </span>
              <div className="h-px w-12 bg-[#2563EB]/30" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#111111] tracking-tight max-w-2xl">
              Experience that connects people with purpose.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#666666] max-w-md">
            Six+ years orchestrating cultural transformation, leadership alignment, and internal communications across enterprise and high-growth scales.
          </p>
        </div>

        {/* Modern Editorial Timeline with Horizontal Dividers */}
        <div className="flex flex-col divide-y divide-black/10 border-t border-b border-black/10">
          {EXPERIENCE_ITEMS.map((item) => {
            const isExpanded = expandedId === item.id;

            return (
              <div
                key={item.id}
                className="group py-8 sm:py-10 transition-colors duration-200 hover:bg-[#F9F9F8]/70 px-4 sm:px-6 rounded-2xl cursor-pointer"
                onClick={() => toggleExpand(item.id)}
              >
                {/* Main Row Header */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
                  {/* Period & Location */}
                  <div className="md:col-span-3 flex flex-col">
                    <span className="text-sm font-semibold text-[#2563EB] tracking-wide">
                      {item.period}
                    </span>
                    <span className="text-xs text-[#777777] flex items-center gap-1 mt-1">
                      <MapPin className="w-3 h-3" />
                      {item.location}
                    </span>
                  </div>

                  {/* Role & Company */}
                  <div className="md:col-span-8 flex flex-col gap-1.5">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#111111] group-hover:text-[#2563EB] transition-colors">
                      {item.role}
                    </h3>
                    <p className="text-base font-medium text-[#444444]">
                      {item.company}
                    </p>
                    <p className="text-sm text-[#666666] mt-2 leading-relaxed">
                      {item.summary}
                    </p>
                  </div>

                  {/* Expand Toggle */}
                  <div className="md:col-span-1 flex justify-end items-center pt-2">
                    <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-[#666666] group-hover:border-[#2563EB] group-hover:text-[#2563EB] transition-colors">
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Expanded Details: Key Scope & Selected Achievements */}
                {isExpanded && (
                  <div className="mt-8 pt-6 border-t border-black/5 grid grid-cols-1 lg:grid-cols-12 gap-8 text-sm animate-in fade-in duration-200">
                    <div className="lg:col-span-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#888888]">
                        Detailed Impact
                      </span>
                    </div>

                    {/* Key Scope */}
                    <div className="lg:col-span-4 flex flex-col gap-3">
                      <h4 className="font-semibold text-[#111111] text-xs uppercase tracking-wider text-[#666666]">
                        Key Scope
                      </h4>
                      <ul className="flex flex-col gap-2.5">
                        {item.scope.map((s, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-[#444444] text-xs sm:text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-1.5 shrink-0" />
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Selected Achievements */}
                    <div className="lg:col-span-5 flex flex-col gap-3">
                      <h4 className="font-semibold text-[#111111] text-xs uppercase tracking-wider text-[#666666] flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 text-[#2563EB]" />
                        <span>Selected Achievements</span>
                      </h4>
                      <ul className="flex flex-col gap-2.5">
                        {item.achievements.map((ach, aIdx) => (
                          <li key={aIdx} className="flex items-start gap-2 text-[#222222] font-medium text-xs sm:text-sm bg-blue-50/60 p-2.5 rounded-xl border border-blue-100/60">
                            <CheckCircle className="w-4 h-4 text-[#2563EB] mt-0.5 shrink-0" />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
