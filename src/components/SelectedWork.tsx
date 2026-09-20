import React, { useState } from 'react';
import { SELECTED_WORK_DATA } from '../data/portfolioData';
import { Language } from '../types';
import { FolderKanban, CheckCircle2, ArrowRight, ArrowUpRight } from 'lucide-react';

interface SelectedWorkProps {
  lang: Language;
  onNavigateNext?: () => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ lang, onNavigateNext }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

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
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col gap-3 mb-10 sm:mb-12">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold tracking-widest text-[#0068FF] uppercase">
              {lang === 'vi' ? '05 — Dự án & Sản phẩm Thực thi' : '05 — Selected Work'}
            </span>
            <div className="h-px w-12 bg-[#0068FF]/30" />
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
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
                ? 'Minh chứng cho năng lực thực chiến đa dạng: ấn phẩm văn hóa, video nhân vật, quan hệ đối tác và các chiến dịch xã hội.'
                : 'Demonstrating operational versatility across internal publications, storytelling video, partnership ecosystems, and CSR.'}
            </p>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
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

        {/* Progressive Disclosure Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-12">
          {filteredItems.map((item) => {
            const highlights = item.highlights ? ((item.highlights as any)[lang] || []) : [];
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0068FF] text-[11px] font-bold font-mono">
                      {item.category[lang]}
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">
                      {item.context[lang]}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug mb-2.5">
                    {item.title[lang]}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {item.description[lang]}
                  </p>
                </div>

                {/* Highlights */}
                {highlights.length > 0 && (
                  <div className="pt-4 border-t border-slate-100 space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      {lang === 'vi' ? 'Điểm nhấn thực thi:' : 'Key Milestones:'}
                    </span>
                    {highlights.map((hl: string, hIdx: number) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0068FF] shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                )}
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
    </section>
  );
};
