import React, { useEffect } from 'react';
import { X, Clock, Calendar, ArrowRight, Share2, Bookmark } from 'lucide-react';
import { InsightItem } from '../types';

interface InsightModalProps {
  insight: InsightItem | null;
  onClose: () => void;
  onConnect: () => void;
}

export const InsightModal: React.FC<InsightModalProps> = ({
  insight,
  onClose,
  onConnect,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (insight) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [insight, onClose]);

  if (!insight) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-[32px] shadow-2xl border border-black/10 text-[#111111] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white border border-black/10 flex items-center justify-center text-[#111111] shadow-md transition-transform hover:scale-105 cursor-pointer"
          aria-label="Close Insight Reader"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Editorial Cover Header */}
        <div className="relative w-full h-64 sm:h-72 overflow-hidden rounded-t-[32px]">
          <img
            src={insight.image}
            alt={insight.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#2563EB] text-white inline-block mb-3">
              {insight.category}
            </span>
            <div className="flex items-center gap-3 text-xs text-white/80">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {insight.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {insight.readTime}
              </span>
            </div>
          </div>
        </div>

        {/* Article Body */}
        <div className="p-6 sm:p-10 md:p-12 flex flex-col gap-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#111111] leading-tight">
            {insight.title}
          </h1>

          <p className="text-lg text-[#444444] font-medium leading-relaxed italic border-l-2 border-[#2563EB] pl-4 py-1">
            {insight.summary}
          </p>

          <div className="flex flex-col gap-5 pt-4 text-base sm:text-lg text-[#2A2A2A] leading-relaxed">
            {insight.content.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {/* Author Byline */}
          <div className="mt-8 pt-6 border-t border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#888888]">
                Author
              </p>
              <p className="font-bold text-[#111111] text-base">Đặng Vũ Thùy Ngân</p>
              <p className="text-xs text-[#666666]">Internal Communication &amp; Corporate Culture</p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  navigator.clipboard?.writeText(window.location.href);
                }}
                className="px-4 py-2 rounded-full border border-black/10 hover:border-black/25 text-xs font-medium flex items-center gap-1.5 text-[#444444] transition-colors"
                title="Copy Link"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Share</span>
              </button>
              <button
                onClick={() => {
                  onClose();
                  onConnect();
                }}
                className="px-5 py-2 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer shadow"
              >
                <span>Discuss Topic</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
