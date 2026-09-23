import React, { useState } from 'react';
import { CAREER_CHAPTERS, CASE_STUDIES, SELECTED_WORK_DATA } from '../data/portfolioData';
import { CaseStudy, Language, SelectedWorkItem } from '../types';
import { ProjectModal } from './ProjectModal';
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Calendar,
  Sparkles,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  X,
} from 'lucide-react';

interface CareerStoryProps {
  lang: Language;
  onNavigateNext?: () => void;
  onSelectCase?: (caseId: string) => void;
}

interface ChapterRelatedItem {
  id: string;
  type: 'case-study' | 'project';
  title: { vi: string; en: string };
  description: { vi: string; en: string };
  organization?: string;
}

export const CareerStory: React.FC<CareerStoryProps> = ({
  lang,
  onNavigateNext,
  onSelectCase,
}) => {
  // Accordion state: only ONE Chapter expanded at a time, collapsed by default
  const [expandedChapterId, setExpandedChapterId] = useState<string | null>(null);

  // Modals for click-to-view detail
  const [selectedCaseModal, setSelectedCaseModal] = useState<CaseStudy | null>(null);
  const [selectedProjectModal, setSelectedProjectModal] = useState<SelectedWorkItem | null>(null);

  // Concise 1–2 sentence narrative per chapter
  const getChapterNarrative = (chapterId: string) => {
    switch (chapterId) {
      case 'ch-01': // Chapter 06: FPT University
        return lang === 'vi'
          ? 'Đảm nhiệm vai trò Trưởng phòng Công tác Sinh viên (Head of Student Relations Office). Tôi dẫn dắt các hoạt động và chương trình hướng đến trải nghiệm, sự phát triển và gắn kết của sinh viên, đồng thời ứng dụng dữ liệu và AI để nâng cao hiệu quả vận hành.'
          : 'Serving as Head of Student Relations Office. I lead experiential programs dedicated to student development, inspiration, and community connection, leveraging data and AI to elevate operational effectiveness.';
      case 'ch-02': // Chapter 05: transcosmos Vietnam
        return lang === 'vi'
          ? 'Đảm nhiệm vai trò Trưởng ban Văn hóa & Trải nghiệm Nhân viên tại transcosmos Vietnam. Tập trung kiến tạo hệ thống giữ chân nhân sự, chuẩn hóa quy chuẩn năng lực và gắn kết đội ngũ frontline BPO quy mô lớn.'
          : 'Served as Head of Culture & Employee Experience at transcosmos Vietnam. Architected frontline retention systems, standardized competency rubrics, and drove workforce engagement across high-volume BPO operations.';
      case 'ch-03': // Chapter 04: Savvycom
        return lang === 'vi'
          ? 'Đảm nhiệm vai trò People & Culture Lead tại Savvycom. Dẫn dắt toàn diện các mảng truyền thông nội bộ, văn hóa tổ chức, EVP, L&D và các sáng kiến CSR gắn kết nhân sự công nghệ.'
          : 'Served as People & Culture Lead at Savvycom across internal communications, culture activation, EVP employer branding, L&D, and CSR initiatives in a high-growth tech environment.';
      case 'ch-04': // Chapter 03: F88 -> CMC -> Vua Nem
        return lang === 'vi'
          ? 'Hành trình tiến hóa bản lề từ Truyền thông nội bộ (F88) sang Phát triển văn hóa (CMC) và Kích hoạt văn hóa, quản trị đội ngũ (Vua Nệm). Chuyển hóa giá trị thành thói quen hành vi hàng ngày kết nối hội sở với hàng trăm cửa hàng bán lẻ.'
          : 'A decisive developmental trajectory spanning F88, CMC, and Vua Nệm. Transitioned from internal communications to culture activation and change leadership, aligning corporate values with daily frontline retail behaviors.';
      case 'ch-05': // Chapter 02: Bellsystem24-Hoasao
        return lang === 'vi'
          ? 'Chuyên viên Truyền thông nội bộ tại Bellsystem24-Hoasao. Rèn giũa nghệ thuật kể chuyện (storytelling), sản xuất kênh phát thanh radio nội bộ và thiết lập mạng lưới truyền thông gắn kết hàng nghìn nhân sự làm việc ca kíp.'
          : 'Served as Internal Communication Specialist at Bellsystem24-Hoasao. Honed empathetic storytelling, produced internal radio broadcasts, and established nationwide networks connecting 24/7 frontline shift workers.';
      case 'ch-06': // Chapter 01: FPT University 2018-2019
        return lang === 'vi'
          ? 'Khởi đầu sự nghiệp tại FPT University với các công việc gắn kết con người, xây dựng cộng đồng và cố vấn câu lạc bộ sinh viên. Đặt nền móng sâu sắc cho niềm tin nghề nghiệp về sự thấu cảm và nuôi dưỡng môi trường thuộc về.'
          : 'Career launchpad at FPT University focusing on human connection, youth community building, and club mentorship. Established the foundational conviction that thriving communities begin with deep empathy and shared belonging.';
      default:
        return '';
    }
  };

  // Organization name per chapter
  const getChapterOrg = (chapterId: string) => {
    switch (chapterId) {
      case 'ch-01':
        return lang === 'vi' ? 'Trường Đại học FPT TP.HCM' : 'FPT University HCMC';
      case 'ch-02':
        return 'transcosmos Vietnam';
      case 'ch-03':
        return 'Savvycom';
      case 'ch-04':
        return 'F88 • CMC Corporation • Vua Nệm';
      case 'ch-05':
        return 'Bellsystem24-Hoasao';
      case 'ch-06':
        return lang === 'vi' ? 'Trường Đại học FPT TP.HCM' : 'FPT University HCMC';
      default:
        return '';
    }
  };

  // Unified related work mapping for each Chapter
  const getChapterRelatedWork = (chapterId: string): ChapterRelatedItem[] => {
    switch (chapterId) {
      case 'ch-01':
        return [
          {
            id: 'case-top100-awards',
            type: 'case-study',
            title: {
              vi: 'Top 100 Student Achievement Awards',
              en: 'Top 100 Student Achievement Awards',
            },
            description: {
              vi: 'Thiết kế trải nghiệm vinh danh định kỳ & ứng dụng AI touchpoints',
              en: 'Recurring recognition experience design & AI touchpoint integration',
            },
          },
          {
            id: 'case-techx',
            type: 'case-study',
            title: {
              vi: 'TechX Camp — Trại Công Nghệ & Trải Nghiệm',
              en: 'TechX Camp — Holistic Experiential Camp',
            },
            description: {
              vi: 'Trại công nghệ quy mô lớn và kích hoạt gắn kết cộng đồng sinh viên',
              en: 'Large-scale tech camp architecting immersive student engagement',
            },
          },
          {
            id: 'sw-university-relations',
            type: 'project',
            title: {
              vi: 'Quan hệ Doanh nghiệp & Hướng nghiệp Sinh viên',
              en: 'University Relations & Corporate Partnerships',
            },
            description: {
              vi: 'Kết nối Nhà trường với các doanh nghiệp công nghệ hàng đầu',
              en: 'Bridging higher education with premier tech industry partners',
            },
          },
          {
            id: 'sw-csr-community',
            type: 'project',
            title: {
              vi: 'Các Sáng kiến Trách nhiệm Xã hội (CSR) & Gắn kết',
              en: 'CSR & Purpose-driven Community Initiatives',
            },
            description: {
              vi: 'Gắn kết sinh viên thông qua các hoạt động chia sẻ giá trị cộng đồng',
              en: 'Uniting workforce commitment through meaningful community social impact',
            },
          },
        ];
      case 'ch-02':
        return [
          {
            id: 'case-transcosmos-retention',
            type: 'case-study',
            title: {
              vi: 'Kiến Trúc Giữ Chân & Giảm Nghỉ Việc Frontline BPO',
              en: 'Frontline BPO Retention Architecture',
            },
            description: {
              vi: 'Mô hình trải nghiệm tích hợp giảm tỷ lệ nghỉ việc nhân sự BPO',
              en: 'Integrated experience system curbing frontline BPO employee turnover',
            },
          },
          {
            id: 'sw-culture-materials',
            type: 'project',
            title: {
              vi: 'Cẩm nang Văn hóa, Sổ tay Nhân viên & Quy chuẩn Hành vi',
              en: 'Culture Handbooks & Behavioral Guidelines',
            },
            description: {
              vi: 'Chuẩn hóa tài liệu văn hóa và hướng dẫn ứng xử chuyên nghiệp',
              en: 'Codifying culture literature, onboarding welcome kits, and conduct guidelines',
            },
          },
        ];
      case 'ch-03':
        return [
          {
            id: 'case-savvycom',
            type: 'case-study',
            title: {
              vi: 'Hệ Thống Hóa People & Culture & Gắn Kết Tech Talent',
              en: 'People & Culture Architecture & Tech Talent',
            },
            description: {
              vi: 'Kiến trúc văn hóa linh hoạt và chiến lược giữ chân nhân tài công nghệ',
              en: 'Agile culture architecture & tech talent engagement in hybrid settings',
            },
          },
          {
            id: 'sw-the-face',
            type: 'project',
            title: {
              vi: 'The Face — Cuộc thi & Vinh danh Bản sắc Nhân tài Nội bộ',
              en: 'The Face — Internal Talent & Culture Identification',
            },
            description: {
              vi: 'Chương trình nhận diện nhân vật đại diện cho giá trị văn hóa tổ chức',
              en: 'Company-wide culture ambassadorship and talent spotlight competition',
            },
          },
        ];
      case 'ch-04':
        return [
          {
            id: 'case-vuanem-culture',
            type: 'case-study',
            title: {
              vi: 'Chiến Lược Văn Hóa Gắn Kết "Together We Shine"',
              en: 'Together We Shine — Frontline Retail Culture',
            },
            description: {
              vi: 'Kích hoạt văn hóa và kết nối hội sở với hàng trăm cửa hàng bán lẻ',
              en: 'Retail culture activation connecting corporate HQ with nationwide stores',
            },
          },
          {
            id: 'case-cmc-c7',
            type: 'case-study',
            title: {
              vi: 'Chuyển Hóa 7 Thói Quen C7+ Vào Đời Sống Doanh Nghiệp',
              en: 'C7+ Daily Habits — Translating Values into Action',
            },
            description: {
              vi: 'Chuẩn hóa và đưa giá trị cốt lõi vào hành vi công việc hàng ngày',
              en: 'Codifying core values into daily actionable behavioral rituals',
            },
          },
          {
            id: 'sw-culture-materials',
            type: 'project',
            title: {
              vi: 'Sổ tay Văn hóa & Bộ Chỉ dẫn Ứng xử Chuẩn mực',
              en: 'Core Values Handbook & Code of Conduct',
            },
            description: {
              vi: 'Tài liệu hóa các giá trị vô hình thành cẩm nang hành vi ứng xử cụ thể',
              en: 'Codifying corporate ideals into visual, accessible daily workplace guides',
            },
          },
        ];
      case 'ch-05':
        return [
          {
            id: 'sw-video-storytelling',
            type: 'project',
            title: {
              vi: 'Video Storytelling & Bản tin Truyền thông Đa phương tiện',
              en: 'Video Storytelling & Multimedia Internal Broadcasts',
            },
            description: {
              vi: 'Phóng sự video, bản tin phát thanh radio nội bộ cho nhân sự ca kíp',
              en: 'Internal employee documentaries, radio broadcasts, and quarterly recaps',
            },
          },
        ];
      case 'ch-06':
        return [
          {
            id: 'sw-csr-community',
            type: 'project',
            title: {
              vi: 'Phát triển Cộng đồng Sinh viên, CLB & Trải nghiệm',
              en: 'Student Community Mentorship & Club Ecosystem',
            },
            description: {
              vi: 'Kết nối con người và nuôi dưỡng các câu lạc bộ sinh viên phát triển',
              en: 'Youth development, interpersonal mentorship, and student community building',
            },
          },
        ];
      default:
        return [];
    }
  };

  const handleItemClick = (item: ChapterRelatedItem) => {
    if (item.type === 'case-study') {
      const foundCase = CASE_STUDIES.find((c) => c.id === item.id);
      if (foundCase) {
        setSelectedCaseModal(foundCase);
        if (onSelectCase) onSelectCase(item.id);
      }
    } else {
      const foundProject = SELECTED_WORK_DATA.find((p) => p.id === item.id);
      if (foundProject) {
        setSelectedProjectModal(foundProject);
      }
    }
  };

  const toggleChapter = (chapterId: string) => {
    setExpandedChapterId((prev) => (prev === chapterId ? null : chapterId));
  };

  return (
    <section
      id="career"
      className="w-full py-16 sm:py-24 md:py-28 px-4 sm:px-8 md:px-12 lg:px-16 bg-[#F8FAFC] border-b border-slate-200/70 relative"
    >
      <div className="max-w-6xl mx-auto space-y-10 sm:space-y-12">
        {/* Section Header */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold tracking-widest text-[#0068FF] uppercase font-mono">
              {lang === 'vi' ? 'Hành trình & Kinh nghiệm' : 'Career & Experience'}
            </span>
            <div className="h-px w-12 bg-[#0068FF]/30" />
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                {lang === 'vi' ? (
                  <>
                    Hành trình Sự nghiệp:<br />
                    <span className="text-[#0068FF]">Gắn kết Con người với Mục tiêu &amp; Ý nghĩa Tổ chức.</span>
                  </>
                ) : (
                  <>
                    Career &amp; Experience:<br />
                    <span className="text-[#0068FF]">Connecting People with Purpose.</span>
                  </>
                )}
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-slate-600 leading-relaxed">
              {lang === 'vi'
                ? 'Hành trình tiến hóa qua 6 cột mốc sự nghiệp, phản ánh bước chuyển năng lực và những dấu ấn thực tiễn trong việc gắn kết con người và tổ chức.'
                : 'A progressive 6-chapter portfolio journey communicating professional evolution, capability shifts, and verified organizational impact.'}
            </p>
          </div>
        </div>

        {/* 6 Career Chapters — Vertical Portfolio Timeline */}
        <div className="space-y-4 sm:space-y-5">
          {CAREER_CHAPTERS.map((chapter) => {
            const isExpanded = expandedChapterId === chapter.id;
            const narrative = getChapterNarrative(chapter.id);
            const org = getChapterOrg(chapter.id);
            const relatedWork = getChapterRelatedWork(chapter.id);

            return (
              <div
                key={chapter.id}
                className={`bg-white rounded-2xl sm:rounded-3xl border transition-all duration-300 p-6 sm:p-7 ${
                  isExpanded
                    ? 'border-[#0068FF]/50 shadow-md ring-1 ring-[#0068FF]/20'
                    : 'border-slate-200/90 shadow-2xs hover:border-slate-300 hover:shadow-xs'
                }`}
              >
                {/* Meta Bar: Chapter Number, Period, Current Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                  <div className="flex items-center gap-2.5">
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0068FF] text-xs font-mono font-bold border border-blue-100">
                      Chapter {chapter.number}
                    </span>
                    <span className="font-mono text-xs text-slate-500 font-medium">
                      {chapter.period}
                    </span>
                  </div>

                  {chapter.isCurrent && (
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-wider">
                      {lang === 'vi' ? 'Vị trí Hiện tại' : 'Current Role'}
                    </span>
                  )}
                </div>

                {/* Chapter Title & Organization */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight leading-snug">
                  {chapter.title[lang]}
                </h3>

                <p className="text-xs font-semibold text-[#0068FF] mt-1 font-mono">
                  {org}
                </p>

                {/* Concise 1–2 sentence narrative */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-3">
                  {narrative}
                </p>

                {/* ONE Disclosure CTA Only */}
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => toggleChapter(chapter.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0068FF] hover:text-[#0052CC] cursor-pointer transition-colors group"
                  >
                    <span>
                      {isExpanded
                        ? (lang === 'vi' ? 'Hide related work ↑' : 'Hide related work ↑')
                        : (lang === 'vi' ? 'Explore related work ↓' : 'Explore related work ↓')}
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="w-3.5 h-3.5 transition-transform" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
                    )}
                  </button>

                  <span className="text-[11px] text-slate-400 font-mono">
                    {relatedWork.length} {lang === 'vi' ? 'dự án / case study' : 'related items'}
                  </span>
                </div>

                {/* Expanded Compact Related Work Area */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-slate-100 animate-in fade-in duration-200">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {relatedWork.map((item) => (
                        <div
                          key={item.id}
                          onClick={() => handleItemClick(item)}
                          className="group cursor-pointer bg-slate-50 hover:bg-blue-50/50 border border-slate-200/90 hover:border-[#0068FF]/50 rounded-xl p-3.5 transition-all flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-2">
                              <span
                                className={`px-2 py-0.5 rounded-full text-[9px] font-bold font-mono uppercase tracking-wider ${
                                  item.type === 'case-study'
                                    ? 'bg-[#0068FF]/10 text-[#0068FF]'
                                    : 'bg-purple-100 text-purple-700'
                                }`}
                              >
                                {item.type === 'case-study' ? 'CASE STUDY' : 'PROJECT'}
                              </span>
                              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0068FF] transition-colors" />
                            </div>

                            <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-[#0068FF] transition-colors leading-snug line-clamp-2">
                              {item.title[lang]}
                            </h4>

                            <p className="text-[11px] text-slate-500 line-clamp-2 mt-1 leading-relaxed">
                              {item.description[lang]}
                            </p>
                          </div>

                          <div className="mt-3 pt-2 border-t border-slate-200/60 flex items-center justify-between text-[10px] font-semibold text-[#0068FF]">
                            <span>{lang === 'vi' ? 'Xem chi tiết' : 'View details'}</span>
                            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Section Bottom Next CTA */}
        {onNavigateNext && (
          <div className="pt-6 border-t border-slate-200 flex justify-end">
            <button
              onClick={onNavigateNext}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0068FF] hover:bg-[#0052CC] text-white text-xs font-semibold shadow-sm transition-all cursor-pointer"
            >
              <span>{lang === 'vi' ? 'TIẾP THEO: TRIẾT LÝ NGHỀ NGHIỆP' : 'NEXT: PROFESSIONAL PHILOSOPHY'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Case Study Detail Modal */}
      <ProjectModal
        caseStudy={selectedCaseModal}
        lang={lang}
        onClose={() => setSelectedCaseModal(null)}
      />

      {/* Project Detail Modal */}
      {selectedProjectModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in"
          onClick={() => setSelectedProjectModal(null)}
        >
          <div
            className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 text-slate-900"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProjectModal(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-700 text-[11px] font-bold font-mono uppercase tracking-wider">
                PROJECT
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0068FF] text-[11px] font-bold font-mono">
                {selectedProjectModal.category[lang]}
              </span>
              <span className="text-xs text-slate-400 font-mono">• {selectedProjectModal.context[lang]}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-snug">
              {selectedProjectModal.title[lang]}
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {selectedProjectModal.description[lang]}
            </p>

            <div className="space-y-2.5 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                {lang === 'vi' ? 'Các mốc kết quả thực tiễn:' : 'Delivered Outcomes:'}
              </span>
              {((selectedProjectModal.highlights as any)[lang] || []).map((hl: string, idx: number) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{hl}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setSelectedProjectModal(null)}
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
