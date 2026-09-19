import React from 'react';
import { CASE_STUDIES, SELECTED_WORK_DATA } from '../data/portfolioData';
import { CaseStudy, Language } from '../types';
import { ImagePlaceholder } from './ImagePlaceholder';
import { ArrowUpRight, CheckCircle2, Layers, Sparkles, FolderKanban } from 'lucide-react';

interface ProjectsProps {
  lang: Language;
  onSelectCase: (caseStudy: CaseStudy) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ lang, onSelectCase }) => {
  return (
    <section
      id="cases"
      className="w-full py-20 sm:py-28 md:py-36 px-4 sm:px-8 md:px-12 lg:px-16 bg-white border-b border-slate-200/70"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col gap-3 mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold tracking-widest text-[#0068FF] uppercase">
              {lang === 'vi' ? 'Lớp 3: Bằng chứng thực tế' : 'Layer 3: Evidence & Flagship Case Studies'}
            </span>
            <div className="h-px w-12 bg-[#0068FF]/30" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            {lang === 'vi' ? (
              <>
                Các Case Study Tiêu Biểu:<br />
                <span className="text-[#0068FF]">Giải quyết bài toán tổ chức &amp; Thiết kế trải nghiệm.</span>
              </>
            ) : (
              <>
                Flagship Case Studies:<br />
                <span className="text-[#0068FF]">Solving Organizational Challenges with Impact.</span>
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
            {lang === 'vi'
              ? 'Tập hợp 6 case study phản ánh năng lực giải quyết bài toán đa chiều: từ kiến trúc hệ thống quan hệ sinh viên, thiết kế trải nghiệm nhập vai quy mô lớn, chuẩn hóa vòng đời nhân viên 15/60/90 ngày, đến kích hoạt văn hóa và nền tảng truyền thông gắn kết.'
              : 'Curated 6 flagship case studies demonstrating multidimensional problem-solving: from student relations systems and large-scale experiential boot camps, to 15/60/90-day retention architecture and nationwide frontline culture activation.'}
          </p>
        </div>

        {/* Case Studies Grid (Editorial Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CASE_STUDIES.map((c) => (
            <div
              key={c.id}
              onClick={() => onSelectCase(c)}
              className="group cursor-pointer bg-[#F8FAFC] hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-[#0068FF]/50 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Cover Placeholder / Image */}
                <div className="mb-5 overflow-hidden rounded-2xl">
                  <ImagePlaceholder
                    image={c.coverImage}
                    category={c.coverImage.category}
                    recommendedRatio={c.coverImage.recommendedRatio}
                    hint={c.coverImage.placeholderHint}
                    lang={lang}
                    className="w-full transition-transform duration-500 group-hover:scale-[1.01]"
                  />
                </div>

                {/* Tags & Meta row */}
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#0068FF]/10 text-[#0068FF] text-[11px] font-bold font-mono">
                    {c.organization}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500">
                    {c.accentBadge[lang]}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#0068FF] transition-colors leading-snug mb-2">
                  {c.title[lang]}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2 mb-4">
                  {c.subtitle[lang]}
                </p>

                {/* Key Impact preview */}
                <div className="pt-3.5 border-t border-slate-200/70 space-y-1.5">
                  {c.impact[lang].slice(0, 2).map((imp, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{imp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* View Deep-dive Link */}
              <div className="pt-5 mt-5 border-t border-slate-200/70 flex items-center justify-between text-xs font-semibold text-[#0068FF]">
                <span>{lang === 'vi' ? 'Xem chi tiết Case Study' : 'Read Full Case Study'}</span>
                <div className="w-7 h-7 rounded-full bg-blue-50 group-hover:bg-[#0068FF] group-hover:text-white flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* ============================================================== */}
        {/* COMPACT SELECTED WORK GALLERY */}
        {/* ============================================================== */}
        <div className="mt-16 sm:mt-24 pt-12 sm:pt-16 border-t border-slate-200/80">
          <div className="flex flex-col gap-2 mb-8 sm:mb-10">
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-bold tracking-widest text-[#0068FF] uppercase font-mono">
                {lang === 'vi' ? 'Dấu ấn bổ trợ • Selected Work' : 'Supporting Work • Selected Portfolio'}
              </span>
              <div className="h-px w-10 bg-[#0068FF]/30" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {lang === 'vi' ? 'Các Dự án & Sáng kiến Chọn lọc' : 'Selected Work & Supporting Initiatives'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
              {lang === 'vi'
                ? 'Bên cạnh 6 bài toán chiến lược trọng điểm, đây là những dự án bổ trợ thể hiện sự đa dạng trong kỹ năng thực thi: từ sản xuất nội dung video, tổ chức cuộc thi nội bộ, quan hệ đối tác đến các hoạt động CSR vì cộng đồng.'
                : 'Complementing the 6 flagship case studies, these supporting initiatives highlight diverse execution capabilities across multimedia storytelling, talent engagement, university relations, and purpose-driven CSR.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SELECTED_WORK_DATA.map((item) => (
              <div
                key={item.id}
                className="bg-[#F8FAFC] hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-[#0068FF]/40 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0068FF] text-[11px] font-bold mb-3 border border-blue-100">
                    {item.category[lang]}
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug mb-1.5">
                    {item.title[lang]}
                  </h4>
                  <p className="text-xs font-mono text-slate-500 mb-3">
                    {item.context[lang]}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {item.description[lang]}
                  </p>
                </div>

                {item.highlights && (
                  <div className="pt-3 border-t border-slate-200/70 space-y-1.5">
                    {item.highlights[lang].map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0068FF] shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
