import React from 'react';
import { INSIGHT_ITEMS } from '../data/portfolioData';
import { InsightItem } from '../types';
import { ArrowRight, Clock, Calendar } from 'lucide-react';

interface InsightsProps {
  onSelectInsight: (insight: InsightItem) => void;
}

export const Insights: React.FC<InsightsProps> = ({ onSelectInsight }) => {
  return (
    <section
      id="insights"
      className="w-full py-20 sm:py-28 md:py-36 px-6 sm:px-10 md:px-14 lg:px-16 bg-[#FAFAFA] border-b border-black/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#2563EB] uppercase">
                06 — Perspectives
              </span>
              <div className="h-px w-12 bg-[#2563EB]/30" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#111111] tracking-tight max-w-2xl">
              Thoughts on people, culture &amp; communication.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#666666] max-w-md">
            Observations, tactical essays, and frameworks exploring the intersection of empathy, leadership, and workplace culture.
          </p>
        </div>

        {/* 3 Editorial Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INSIGHT_ITEMS.map((item, idx) => (
            <article
              key={item.id}
              onClick={() => onSelectInsight(item)}
              className="group flex flex-col bg-white rounded-[24px] overflow-hidden border border-black/5 hover:border-black/15 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Image Container with Editorial Zoom */}
              <div className="h-60 sm:h-64 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md text-[#111111] shadow-sm">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-7 flex flex-col flex-1 justify-between gap-5">
                <div className="flex flex-col gap-3">
                  {/* Meta */}
                  <div className="flex items-center gap-2 text-xs text-[#777777] font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {item.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#111111] tracking-tight leading-snug group-hover:text-[#2563EB] transition-colors">
                    {item.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-[#555555] leading-relaxed line-clamp-3">
                    {item.summary}
                  </p>
                </div>

                {/* Read Action */}
                <div className="pt-4 border-t border-black/5 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#2563EB] group-hover:translate-x-1 transition-transform">
                    <span>Read Perspective</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-xs font-mono text-[#AAAAAA]">
                    0{idx + 1}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
