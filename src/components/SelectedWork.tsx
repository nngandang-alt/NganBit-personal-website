import React, { useState } from 'react';
import { SELECTED_WORK_DATA } from '../data/portfolioData';
import { Language, SelectedWorkItem } from '../types';
import { FolderKanban, CheckCircle2, ArrowRight, ArrowUpRight, X, Sparkles } from 'lucide-react';

interface SelectedWorkProps {
  lang: Language;
  onNavigateNext?: () => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ lang, onNavigateNext }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeItemModal, setActiveItemModal] = useState<SelectedWorkItem | null>(null);

  const categories = [
    { id: 'all', label: { vi: 'Tất cả dự án', en: 'All Work' } },
    { id: 'culture', label: { vi: 'Văn hóa & Gắn kết', en: 'Culture & Engagement' } },
    { id: 'media', label: { vi: 'Sản xuất Nội dung & Video', en: 'Media & Storytelling' } },
    { id: 'csr', label: { vi: 'CSR & Cộng đồng', en: 'CSR & Community' } },
    { id: 'codification', label: { vi: 'Quy chuẩn Văn hóa', en: 'Culture Codification' } },
  ];

  const items = SELECTED_WORK_DATA || [];
  const filteredItems = selectedCategory === 'all'
    ? items
    : items.filter((item) => {
        if (selectedCategory === 'culture') return item.id.includes('the-face') || item.id.includes('ceremony') || item.category.en.toLowerCase().includes('culture');
        if (selectedCategory === 'media') return item.id.includes('video') || item.category.en.toLowerCase().includes('media');
        if (selectedCategory === 'csr') return item.id.includes('csr') || item.id.includes('community') || item.id.includes('fptu');
        if (selectedCategory === 'codification') return item.id.includes('handbook') || item.category.en.toLowerCase().includes('codification');
        return true;
      });

  return (
    <section
      id="work"
      className="w-full py-16 sm:py-24 md:py-28 px-4 sm:px-8 md:px-12 lg:px-16 bg-[#F8FAFC] border-b border-slate-200/70"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold tracking-widest text-[#0068FF] uppercase font-mono">
              {lang === 'vi' ? '05 — Dự án & Sản phẩm Thực thi' : '05 — Selected Work'}
            </span>
            <div className="h-px w-12 bg-[#0068FF]/30" />
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                {lang === 'vi' ? (
                  <>
                    Bề Rộng Thực Thi:<br />
                    <span className="text-[#0068FF]">Từ Sản xuất Nội dung, Ấn phẩm Văn hóa đến Sự kiện.</span>
                  </>
                ) : (
                  <>
                    Breadth of Execution:<br />
                    <span className="text-[#0068FF]">From Media &amp; Publications to Experiential Programs.</span>
                  </>
                )}
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-slate-600 leading-relaxed">
              {lang === 'vi'
                ? 'Minh chứng cho năng lực thực chiến đa dạng: ấn phẩm văn hóa, video nhân vật, quan hệ đối tác và các chiến dịch xã hội bổ trợ cho các đại dự án chiến lược.'
                : 'Demonstrating versatile delivery across internal publications, storytelling video, partnership ecosystems, and CSR initiatives supporting strategic pillars.'}
            </p>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#0068FF] text-white shadow-xs'
                  : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
              }`}
            >
              {cat.label[lang]}
            </button>
          ))}
        </div>

        {/* Card Grid with Click-to-Open Interaction */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {filteredItems.map((item) => {
            const highlights = item.highlights ? ((item.highlights as any)[lang] || []) : [];
            return (
              <div
                key={item.id}
                onClick={() => setActiveItemModal(item)}
                className="group cursor-pointer bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#0068FF]/50 transition-all p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0068FF] text-[11px] font-bold font-mono">
                      {item.category[lang]}
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium font-mono">
                      {item.context[lang]}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#0068FF] transition-colors leading-snug mb-2.5">
                    {item.title[lang]}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {item.description[lang]}
                  </p>
                </div>

                {/* Highlights preview */}
                {highlights.length > 0 && (
                  <div className="pt-4 border-t border-slate-100 space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      {lang === 'vi' ? 'Điểm nhấn thực thi:' : 'Key Milestones:'}
                    </span>
                    {highlights.slice(0, 2).map((hl: string, hIdx: number) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0068FF] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{hl}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Interaction link */}
                <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0068FF]">
                  <span>{lang === 'vi' ? 'Xem chi tiết sáng kiến' : 'View Initiative Details'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Guided Journey Next Section CTA */}
        {onNavigateNext && (
          <div className="pt-6 border-t border-slate-200 flex justify-end">
            <button
              onClick={onNavigateNext}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0068FF] hover:bg-[#0052CC] text-white text-xs font-semibold shadow-sm transition-all cursor-pointer"
            >
              <span>{lang === 'vi' ? 'TIẾP THEO: SỰ CÔNG NHẬN (RECOGNITION)' : 'NEXT: RECOGNITION / VOICES'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>

      {/* Selected Work Detail Modal */}
      {activeItemModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in"
          onClick={() => setActiveItemModal(null)}
        >
          <div
            className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 text-slate-900"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveItemModal(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0068FF] text-[11px] font-bold font-mono">
                {activeItemModal.category[lang]}
              </span>
              <span className="text-xs text-slate-400 font-mono">• {activeItemModal.context[lang]}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-snug">
              {activeItemModal.title[lang]}
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {activeItemModal.description[lang]}
            </p>

            <div className="space-y-2.5 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                {lang === 'vi' ? 'Các mốc kết quả thực tiễn:' : 'Delivered Outcomes:'}
              </span>
              {((activeItemModal.highlights as any)[lang] || []).map((hl: string, idx: number) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0068FF] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{hl}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setActiveItemModal(null)}
                className="px-5 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-700 cursor-pointer"
              >
                {lang === 'vi' ? 'Đóng' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
