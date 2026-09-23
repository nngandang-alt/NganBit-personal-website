import React, { useState, useEffect } from 'react';
import {
  EDUCATION_DATA,
  HUMAN_UNDERSTANDING_DATA,
  PROFESSIONAL_CAPABILITIES_DATA,
} from '../data/portfolioData';
import { Language } from '../types';
import { PageHeroVisual } from './PageHeroVisual';
import {
  GraduationCap,
  ChevronRight,
  Megaphone,
  Users,
  BarChart3,
  Sprout,
  Sparkles,
  Laptop,
  Palette,
  Share2,
  Wrench,
  FolderKanban,
  ArrowRight,
} from 'lucide-react';

interface CredentialsProps {
  lang: Language;
  onNavigateNext?: () => void;
}

// 12 Recognizable Tool SVGs matching the approved mockup & user assets
const ToolIcons = {
  chatgpt: () => (
    <img src="/logos/chatgpt.png" alt="ChatGPT" className="w-7 h-7 object-contain" />
  ),
  claude: () => (
    <img src="/logos/claude.png" alt="Claude" className="w-7 h-7 object-contain" />
  ),
  gemini: () => (
    <img src="/logos/gemini.png" alt="Gemini" className="w-7 h-7 object-contain" />
  ),
  gemininotebook: () => (
    <img src="/logos/gemininotebook.png" alt="Gemini Notebook" className="w-7 h-7 object-contain" />
  ),
  notebooklm: () => (
    <img src="/logos/gemininotebook.png" alt="Gemini Notebook" className="w-7 h-7 object-contain" />
  ),
  googleaistudio: () => (
    <img src="/logos/googleaistudio.png" alt="Google AI Studio" className="w-7 h-7 object-contain" />
  ),
  antigravity: () => (
    <img src="/logos/antigravity.png" alt="Antigravity" className="w-7 h-7 object-contain" />
  ),
  m365: () => (
    <img src="/logos/m365.png" alt="Microsoft 365" className="w-7 h-7 object-contain" />
  ),
  googleworkspace: () => (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
    </svg>
  ),
  canva: () => (
    <img src="/logos/canva.png" alt="Canva" className="w-7 h-7 object-contain" />
  ),
  capcut: () => (
    <img src="/logos/capcut.png" alt="CapCut" className="w-7 h-7 object-contain" />
  ),
  vivaengage: () => (
    <img src="/logos/vivaengage.png" alt="Viva Engage" className="w-7 h-7 object-contain" />
  ),
  viva: () => (
    <img src="/logos/vivaengage.png" alt="Viva Engage" className="w-7 h-7 object-contain" />
  ),
  gapowork: () => (
    <img src="/logos/gapowork.png" alt="GapoWork" className="w-7 h-7 object-contain" />
  ),
  notion: () => (
    <img src="/logos/notion.png" alt="Notion" className="w-7 h-7 object-contain" />
  ),
  trello: () => (
    <img src="/logos/trello.png" alt="Trello" className="w-7 h-7 object-contain" />
  ),
  asana: () => (
    <img src="/logos/asana.png" alt="Asana" className="w-7 h-7 object-contain" />
  ),
  adobelightroom: () => (
    <img src="/logos/adobelightroom.png" alt="Adobe Lightroom" className="w-7 h-7 object-contain" />
  ),
};

export const Credentials: React.FC<CredentialsProps> = ({ lang, onNavigateNext }) => {
  const formalDegree = EDUCATION_DATA[0];
  const humanItems = HUMAN_UNDERSTANDING_DATA;
  const capabilityGroups = PROFESSIONAL_CAPABILITIES_DATA;

  // Navigation state for the 2 major content groups
  const [activeTab, setActiveTab] = useState<'learning-journey' | 'skills-tools'>('learning-journey');

  // Exactly 2 major content groups: Learning Journey and Skills & Tools
  const navTabs = [
    {
      id: 'learning-journey',
      label: { vi: 'Hành trình học tập', en: 'Learning Journey' },
      icon: GraduationCap,
    },
    {
      id: 'skills-tools',
      label: { vi: 'Kỹ năng & Công cụ', en: 'Skills & Tools' },
      icon: Wrench,
    },
  ];

  const scrollToSection = (id: 'learning-journey' | 'skills-tools') => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 90;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const skillsEl = document.getElementById('skills-tools');
      if (skillsEl) {
        const rect = skillsEl.getBoundingClientRect();
        if (rect.top <= 200) {
          setActiveTab('skills-tools');
        } else {
          setActiveTab('learning-journey');
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 9 Continuous Learning Certificates in reversed order (newest first)
  const continuousCertificates = [
    { title: 'Generative AI for Customer Experience (Coursera)', dot: 'bg-purple-600' },
    { title: 'Gemini Certified Educator (Google)', dot: 'bg-rose-600' },
    { title: 'F88 Leadership Competency (F88)', dot: 'bg-orange-600' },
    { title: 'Google AI (Google)', dot: 'bg-amber-600' },
    { title: 'Improving Customer Retention (Coursera)', dot: 'bg-lime-600' },
    { title: 'Voice of the Customer (Coursera)', dot: 'bg-cyan-600' },
    { title: 'Organization Communication (LinkedIn)', dot: 'bg-emerald-600' },
    { title: 'Demystifying Company Culture (LinkedIn)', dot: 'bg-teal-600' },
    { title: 'Foundation of PR & Corporate Communication (BrandCamp.Asia)', dot: 'bg-blue-600' },
  ];

  // 4 Capability Cards Configs matching mockup
  const capabilityConfigs = [
    {
      id: 'cap-comm',
      accent: 'blue',
      cardBg: 'bg-[#f0f7ff] border-[#dbeafe]',
      dotColor: 'bg-blue-600',
      icon: Megaphone,
      iconColor: 'text-blue-600',
    },
    {
      id: 'cap-culture',
      accent: 'pink',
      cardBg: 'bg-[#fff1f2] border-[#fecdd3]',
      dotColor: 'bg-rose-500',
      icon: Users,
      iconColor: 'text-rose-500',
    },
    {
      id: 'cap-insight',
      accent: 'green',
      cardBg: 'bg-[#f0fdf4] border-[#bbf7d0]',
      dotColor: 'bg-emerald-600',
      icon: BarChart3,
      iconColor: 'text-emerald-600',
    },
    {
      id: 'cap-leadership',
      accent: 'yellow',
      cardBg: 'bg-[#fefce8] border-[#fef08a]',
      dotColor: 'bg-amber-600',
      icon: Sprout,
      iconColor: 'text-amber-600',
    },
  ];

  return (
    <section
      id="education"
      className="w-full py-10 sm:py-14 md:py-16 px-4 sm:px-8 md:px-12 lg:px-16 bg-[#f8fbff] relative overflow-hidden"
    >
      {/* ============================================================== */}
      {/* PAGE-LEVEL ATMOSPHERIC LIGHTING SYSTEM                         */}
      {/* Exact color recipe from Homepage Hero (Hero.tsx lines 40-64)   */}
      {/* Restrained intensity to protect pastel cards                   */}
      {/* ============================================================== */}
      {/* PRIMARY GLOW: Opening / Hero (Soft restrained top-right) */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: '-40px',
          top: '-20px',
          width: '520px',
          height: '400px',
          background: 'radial-gradient(ellipse at center, rgba(175, 215, 255, 0.45) 0%, rgba(248, 251, 255, 0) 70%)',
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      {/* SECONDARY GLOW: Major transition between Learning Journey & Skills & Tools (Mid-left) */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: '-80px',
          top: '750px',
          width: '450px',
          height: '520px',
          background: 'radial-gradient(ellipse at center, rgba(185, 225, 255, 0.25) 0%, rgba(248, 251, 255, 0) 70%)',
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      {/* AMBIENT GLOW: Minimal lower whitespace atmospheric depth */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: '10%',
          bottom: '-30px',
          width: '400px',
          height: '350px',
          background: 'radial-gradient(ellipse at center, rgba(175, 215, 255, 0.18) 0%, rgba(248, 251, 255, 0) 70%)',
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto space-y-14 sm:space-y-18 relative z-10">
        {/* ========================================================================= */}
        {/* HERO SECTION */}
        {/* ========================================================================= */}
        <div className="space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-4">
            {/* Left: Eyebrow + Headline + Supporting Paragraph */}
            <div className="max-w-2xl space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold tracking-widest text-[#0060FF] uppercase font-mono">
                  {lang === 'vi' ? 'HỌC VẤN & PHÁT TRIỂN' : 'EDUCATION & DEVELOPMENT'}
                </span>
                <div className="h-px w-16 bg-[#0060FF]/30" />
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
                {lang === 'vi' ? (
                  <>
                    Học để hiểu sâu hơn<br />
                    <span className="text-[#0060FF]">Phát triển để làm nghề tốt hơn</span>
                  </>
                ) : (
                  <>
                    Learning to understand more deeply<br />
                    <span className="text-[#0060FF]">Growing to practice better</span>
                  </>
                )}
              </h1>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
                {lang === 'vi'
                  ? 'Từ nền tảng học thuật, kiến thức về con người đến việc liên tục cập nhật chuyên môn và công nghệ, mỗi lớp học tập đều góp phần định hình cách tôi làm nghề.'
                  : 'From academic foundations and human understanding to continuous professional and digital learning, each layer shapes how I approach my work.'}
              </p>
            </div>

            {/* Right: Semantic Line-art Element embedded in atmospheric glow */}
            <PageHeroVisual variant="education" />
          </div>

          {/* Navigation Pills (2 compact items) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar pt-2">
            {navTabs.map((tab) => {
              const IconComp = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id as 'learning-journey' | 'skills-tools')}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#0060FF] text-white shadow-xs'
                      : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <IconComp className="w-3.5 h-3.5" />
                  <span>{tab.label[lang]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* ROW 1: LEARNING JOURNEY OVERVIEW (3 CARDS IN ONE ROW) */}
        {/* ========================================================================= */}
        <div id="learning-journey" className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch scroll-mt-24">
          {/* CARD 01 — FORMAL EDUCATION (Soft Blue) */}
          {formalDegree && (
            <div className="bg-[#f0f6ff] border border-[#dbeafe] rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-2xs hover:shadow-xs transition-shadow">
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 rounded-full bg-white text-slate-800 text-xs font-bold font-mono shadow-2xs">
                  01
                </span>

                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  {lang === 'vi' ? 'Nền tảng học thuật' : 'Formal Education'}
                </h3>

                <div className="space-y-1 pt-1">
                  <h4 className="text-sm font-bold text-slate-900 leading-snug">
                    {formalDegree.degree[lang]}
                  </h4>
                  <p className="text-xs text-slate-600">
                    {formalDegree.institution[lang]}
                  </p>
                  <p className="text-xs text-slate-500 font-mono">
                    {formalDegree.period}
                  </p>
                  <p className="text-xs text-slate-500">
                    {formalDegree.location[lang]}
                  </p>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed pt-2">
                  {lang === 'vi'
                    ? 'Trang bị tư duy hệ thống, năng lực phân tích đa chiều, hiểu biết sâu sắc về bối cảnh văn hóa – xã hội và kỹ năng giao tiếp, đối thoại.'
                    : formalDegree.description[lang]}
                </p>
              </div>
            </div>
          )}

          {/* CARD 02 — HUMAN UNDERSTANDING (Soft Pink) */}
          <div className="bg-[#fff1f2] border border-[#fecdd3] rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-2xs hover:shadow-xs transition-shadow">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-white text-slate-800 text-xs font-bold font-mono shadow-2xs">
                02
              </span>

              <div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  {lang === 'vi' ? 'Hiểu Con người' : 'Human Understanding'}
                </h3>
                <p className="text-[10px] font-bold tracking-wider uppercase text-slate-500 mt-1">
                  {lang === 'vi' ? 'CÁC KHÓA HỌC NGẮN HẠN' : 'SHORT COURSES'}
                </p>
              </div>

              {/* Item 1 */}
              <div className="space-y-0.5 pt-1">
                <h4 className="text-sm font-bold text-slate-900 leading-snug">
                  {lang === 'vi' ? 'Nền tảng Tâm lý học' : 'Psychology Foundation'}
                </h4>
                <p className="text-xs text-slate-600">
                  {lang === 'vi' ? 'Trường Đại học Sư phạm TP.HCM' : 'Ho Chi Minh City University of Education'}
                </p>
                <p className="text-xs text-slate-500 font-mono">
                  2026
                </p>
              </div>

              {/* Item 2 */}
              <div className="space-y-0.5 pt-1">
                <h4 className="text-sm font-bold text-slate-900 leading-snug">
                  The Arts and Science of Relationships: Understanding Human Needs
                </h4>
                <p className="text-xs text-slate-600">
                  University of Toronto
                </p>
                <p className="text-xs text-slate-500 font-mono">
                  2025
                </p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed pt-2">
                {lang === 'vi'
                  ? 'Bổ sung kiến thức về hành vi, động lực và nhu cầu con người để làm nghề sâu sắc hơn.'
                  : 'Deepening insights into human behavior, motivation, and relational needs.'}
              </p>
            </div>
          </div>

          {/* CARD 03 — CONTINUOUS LEARNING (Soft Blue/Cool Neutral) */}
          <div className="bg-[#f0f9ff] border border-slate-200/90 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-2xs hover:shadow-xs transition-shadow">
            <div className="space-y-3.5">
              <span className="inline-block px-3 py-1 rounded-full bg-white text-slate-800 text-xs font-bold font-mono shadow-2xs">
                03
              </span>

              <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                {lang === 'vi' ? 'Học tập Liên tục' : 'Continuous Learning'}
              </h3>

              {/* Compact Certificate List with colored dots, full titles without truncation */}
              <div className="space-y-2 pt-1 text-xs text-slate-700">
                {continuousCertificates.map((cert, idx) => (
                  <div key={idx} className="flex items-start gap-2 leading-snug">
                    <span className={`w-1.5 h-1.5 rounded-full ${cert.dot} shrink-0 mt-1.5`} />
                    <span className="break-words">{cert.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* ROW 2: PROFESSIONAL CAPABILITIES (4 CARDS IN ONE ROW) */}
        {/* ========================================================================= */}
        <div id="skills-tools" className="space-y-6 scroll-mt-24">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold tracking-widest text-[#0068FF] uppercase">
              {lang === 'vi' ? 'NĂNG LỰC NGHỀ NGHIỆP' : 'PROFESSIONAL CAPABILITIES'}
            </span>
            <div className="h-px w-16 bg-[#0068FF]/30" />
          </div>

          {/* Heading & Supporting Paragraph */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight max-w-xl">
              {lang === 'vi'
                ? 'Từ kiến thức đến năng lực thực hành.'
                : 'From knowledge to professional practice.'}
            </h2>

            <p className="max-w-md text-xs sm:text-sm text-slate-600 leading-relaxed">
              {lang === 'vi'
                ? 'Kiến thức chỉ thực sự có giá trị khi được chuyển hóa thành năng lực thực hành. Những năng lực dưới đây được hình thành qua quá trình học tập liên tục và trải nghiệm thực tế trong truyền thông, văn hóa và thiết kế trải nghiệm.'
                : 'Knowledge creates true value when translated into practice. These capabilities have been developed through continuous learning and hands-on experience across communication, culture, and experience design.'}
            </p>
          </div>

          {/* 4 Pastel Cards in ONE horizontal row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
            {capabilityConfigs.map((config, index) => {
              const group = capabilityGroups[index];
              if (!group) return null;
              const IconComp = config.icon;
              const capabilitiesList = group.capabilities?.[lang] || [];

              return (
                <div
                  key={config.id}
                  className={`${config.cardBg} border rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-2xs hover:shadow-xs transition-shadow`}
                >
                  <div className="space-y-4">
                    {/* Icon */}
                    <div className={config.iconColor}>
                      <IconComp className="w-6 h-6 stroke-[1.75]" />
                    </div>

                    {/* Title */}
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      {group.title[lang]}
                    </h3>

                    {/* Bullets with matching colored dots */}
                    <ul className="space-y-2 text-xs text-slate-700 pt-1">
                      {capabilitiesList.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 leading-snug">
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${config.dotColor} shrink-0 mt-1.5`}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* ROW 3: TOOLS I WORK WITH (4 COMPACT GROUPS IN ONE ROW) */}
        {/* ========================================================================= */}
        <div className="space-y-6">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold tracking-widest text-[#0068FF] uppercase">
              {lang === 'vi' ? 'BỘ CÔNG CỤ LÀM VIỆC' : 'WORKING TOOLKIT'}
            </span>
            <div className="h-px w-16 bg-[#0068FF]/30" />
          </div>

          {/* Heading & Supporting Paragraph */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Tools I Work With
            </h2>

            <p className="max-w-md text-xs sm:text-sm text-slate-600 leading-relaxed">
              {lang === 'vi'
                ? 'Những công cụ quen thuộc giúp tôi làm việc hiệu quả hơn, sáng tạo hơn và tạo ra giá trị lớn hơn.'
                : 'Familiar tools that augment my productivity, creativity, and daily operational value.'}
            </p>
          </div>

          {/* 5 Groups in TWO rows (Row 1: 4 category cards | Row 2: 1 full-width AI card) */}
          <div className="space-y-5">
            {/* ROW 1: 4 categories (Work & Productivity | Project & Performance | Design & Content | Internal Platforms) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
              {/* GROUP 1: WORK & PRODUCTIVITY */}
              <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-xs">
                    <Laptop className="w-3.5 h-3.5 text-[#0068FF]" />
                    <span>Work & Productivity</span>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-0.5">
                    {lang === 'vi'
                      ? 'Tạo lập · Cộng tác · Tổ chức công việc'
                      : 'Creation · Collaboration · Organization'}
                  </p>
                </div>

                {/* 2 tools side-by-side */}
                <div className="grid grid-cols-2 gap-4 pt-4 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <ToolIcons.m365 />
                    <span className="text-[11px] font-medium text-slate-700 leading-tight">Microsoft 365</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <ToolIcons.googleworkspace />
                    <span className="text-[11px] font-medium text-slate-700 leading-tight">Google Workspace</span>
                  </div>
                </div>
              </div>

              {/* GROUP 2: PROJECT & PERFORMANCE */}
              <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-xs">
                    <FolderKanban className="w-3.5 h-3.5 text-[#0068FF]" />
                    <span>{lang === 'vi' ? 'Quản trị Dự án & Hiệu suất' : 'Project & Performance'}</span>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-0.5">
                    {lang === 'vi'
                      ? 'Lập kế hoạch · Quy trình · Theo dõi · Thực thi'
                      : 'Planning · Workflow · Tracking · Execution'}
                  </p>
                </div>

                {/* 3 tools */}
                <div className="grid grid-cols-3 gap-2 pt-4 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <ToolIcons.notion />
                    <span className="text-[11px] font-medium text-slate-700 leading-tight">Notion</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <ToolIcons.trello />
                    <span className="text-[11px] font-medium text-slate-700 leading-tight">Trello</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <ToolIcons.asana />
                    <span className="text-[11px] font-medium text-slate-700 leading-tight">Asana</span>
                  </div>
                </div>
              </div>

              {/* GROUP 3: DESIGN & CONTENT */}
              <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-xs">
                    <Palette className="w-3.5 h-3.5 text-[#0068FF]" />
                    <span>Design & Content</span>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-0.5">
                    {lang === 'vi'
                      ? 'Thiết kế · Video · Sáng tạo'
                      : 'Design · Video · Creative'}
                  </p>
                </div>

                {/* 3 tools side-by-side */}
                <div className="grid grid-cols-3 gap-2 pt-4 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <ToolIcons.canva />
                    <span className="text-[11px] font-medium text-slate-700 leading-tight">Canva</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <ToolIcons.capcut />
                    <span className="text-[11px] font-medium text-slate-700 leading-tight">CapCut</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <ToolIcons.adobelightroom />
                    <span className="text-[11px] font-medium text-slate-700 leading-tight">Adobe Lightroom</span>
                  </div>
                </div>
              </div>

              {/* GROUP 4: INTERNAL PLATFORMS */}
              <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-xs">
                    <Share2 className="w-3.5 h-3.5 text-[#0068FF]" />
                    <span>Internal Platforms</span>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-0.5">
                    {lang === 'vi'
                      ? 'Kết nối · Tương tác · Truyền thông nội bộ'
                      : 'Connection · Engagement · Internal Comms'}
                  </p>
                </div>

                {/* 2 tools side-by-side */}
                <div className="grid grid-cols-2 gap-4 pt-4 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <ToolIcons.vivaengage />
                    <span className="text-[11px] font-medium text-slate-700 leading-tight">Viva Engage</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <ToolIcons.gapowork />
                    <span className="text-[11px] font-medium text-slate-700 leading-tight">GapoWork</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ROW 2: 1 full-width AI card */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-2xs">
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-xs">
                    <Sparkles className="w-3.5 h-3.5 text-[#0068FF]" />
                    <span>AI Tools</span>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-0.5">
                    {lang === 'vi'
                      ? 'Nghiên cứu · Tổng hợp tài liệu · Phân tích · Sáng tạo'
                      : 'Research · Document synthesis · Analysis · Creation'}
                  </p>
                </div>

                {/* 6 AI Tools in ONE HORIZONTAL ROW on desktop */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 pt-1 text-center items-center">
                  <div className="flex flex-col items-center gap-1.5">
                    <ToolIcons.chatgpt />
                    <span className="text-[11px] font-medium text-slate-700">ChatGPT</span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5">
                    <ToolIcons.claude />
                    <span className="text-[11px] font-medium text-slate-700">Claude</span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5">
                    <ToolIcons.gemini />
                    <span className="text-[11px] font-medium text-slate-700">Gemini</span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5">
                    <ToolIcons.gemininotebook />
                    <span className="text-[11px] font-medium text-slate-700">Gemini Notebook</span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5">
                    <ToolIcons.googleaistudio />
                    <span className="text-[11px] font-medium text-slate-700">Google AI Studio</span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5">
                    <ToolIcons.antigravity />
                    <span className="text-[11px] font-medium text-slate-700">Antigravity</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Guided Journey Next Section CTA */}
        {onNavigateNext && (
          <div className="pt-8 border-t border-slate-200 flex justify-end mt-12">
            <button
              onClick={onNavigateNext}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0068FF] hover:bg-[#0052CC] text-white text-xs font-semibold shadow-sm transition-all cursor-pointer"
            >
              <span>{lang === 'vi' ? 'TIẾP THEO: GHI NHẬN (RECOGNITION)' : 'NEXT: RECOGNITION'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
