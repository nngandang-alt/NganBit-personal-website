import React from 'react';
import { INSIGHTS_ARTICLES } from '../data/portfolioData';
import { Language } from '../types';
import { BookOpen, Clock, Calendar, ArrowUpRight, Sparkles } from 'lucide-react';

interface InsightsProps {
  lang: Language;
}

export const Insights: React.FC<InsightsProps> = ({ lang }) => {
  return (
    <section
      id="insights"
      className="w-full py-20 sm:py-28 md:py-36 px-4 sm:px-8 md:px-12 lg:px-16 bg-white border-b border-slate-200/70 relative"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col gap-3 mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold tracking-widest text-[#0068FF] uppercase">
              {lang === 'vi' ? '04 — Góc nhìn Chuyên môn' : '04 — Professional Insights'}
            </span>
            <div className="h-px w-12 bg-[#0068FF]/30" />
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                {lang === 'vi' ? (
                  <>
                    Góc nhìn &amp; Chiêm nghiệm:<br />
                    <span className="text-[#0068FF]">Về con người, văn hóa và truyền thông.</span>
                  </>
                ) : (
                  <>
                    Thoughts on People,<br />
                    <span className="text-[#0068FF]">Culture &amp; Communication.</span>
                  </>
                )}
              </h2>
            </div>
            <p className="max-w-md text-sm sm:text-base text-slate-600 leading-relaxed">
              {lang === 'vi'
                ? 'Những đúc kết từ thực tiễn đồng hành cùng các tổ chức trong hành trình giải phóng năng lượng gắn kết và xây dựng văn hóa bền vững.'
                : 'Practical frameworks and observations distilled from hands-on organizational transformation, engagement design, and cultural architecture.'}
            </p>
          </div>
        </div>

        {/* Magazine-style Editorial 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {INSIGHTS_ARTICLES.map((article, idx) => (
            <article
              key={article.id}
              className="group p-7 sm:p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200/80 hover:border-[#0068FF]/50 hover:bg-white transition-all duration-300 shadow-2xs hover:shadow-xl hover:shadow-slate-200/50 flex flex-col justify-between"
            >
              <div>
                {/* Meta header */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold font-mono bg-blue-50 text-[#0068FF] border border-blue-100">
                    {article.category[lang]}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime[lang]}</span>
                  </div>
                </div>

                {/* Article Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#0068FF] transition-colors leading-snug mb-3">
                  {article.title[lang]}
                </h3>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {article.excerpt[lang]}
                </p>
              </div>

              {/* Core Takeaway Cardlet */}
              <div className="pt-5 border-t border-slate-200/80">
                <div className="p-3.5 rounded-xl bg-white group-hover:bg-blue-50/50 border border-slate-100 group-hover:border-blue-100 transition-colors">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    {lang === 'vi' ? 'Ý niệm cốt lõi:' : 'Key Takeaway:'}
                  </span>
                  <p className="text-xs italic text-slate-700 font-medium leading-relaxed">
                    “{article.keyTakeaway[lang]}”
                  </p>
                </div>

                {/* Topics Tags */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {article.topics[lang].map((topic, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] text-slate-500 bg-slate-200/60 px-2 py-0.5 rounded-md"
                    >
                      #{topic}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
