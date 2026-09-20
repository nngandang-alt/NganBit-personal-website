import React, { useState } from 'react';
import {
  EDUCATION_DATA,
  HUMAN_UNDERSTANDING_DATA,
  CONTINUOUS_LEARNING_DATA,
  PROFESSIONAL_CAPABILITIES_DATA,
  AI_ENABLED_PRACTICE_SKILLS,
} from '../data/portfolioData';
import hiuLogo from '../assets/education/hiu-logo.png';
import { Language } from '../types';
import {
  GraduationCap,
  HeartHandshake,
  BookOpen,
  Sparkles,
  ArrowRight,
  Cpu,
  Users,
  MessageSquare,
  Award,
  ChevronRight,
  CheckCircle2,
  Layers,
} from 'lucide-react';

interface CredentialsProps {
  lang: Language;
  onNavigateNext?: () => void;
}

// Reusable Circular Issuer / Institution Logo Component
interface InstitutionLogoProps {
  logo?: string;
  name: string;
  size?: 'sm' | 'md' | 'lg';
  customPadding?: string;
}

const InstitutionLogo: React.FC<InstitutionLogoProps> = ({
  logo,
  name,
  size = 'md',
  customPadding,
}) => {
  const [imgError, setImgError] = useState(false);

  // Responsive diameter dimensions
  const sizeClasses = {
    sm: 'w-10 h-10 min-w-10 min-h-10 sm:w-11 sm:h-11 sm:min-w-11 sm:min-h-11',
    md: 'w-12 h-12 min-w-12 min-h-12 sm:w-13 sm:h-13 sm:min-w-13 sm:min-h-13',
    lg: 'w-14 h-14 min-w-14 min-h-14 sm:w-16 sm:h-16 sm:min-w-16 sm:min-h-16',
  }[size];

  // Specific internal padding to preserve logo bounds without touching edge
  const pad = customPadding || (size === 'lg' ? 'p-2 sm:p-2.5' : size === 'md' ? 'p-2' : 'p-1.5');

  if (logo && !imgError) {
    return (
      <div
        className={`${sizeClasses} rounded-full bg-white border border-slate-200/90 shadow-2xs flex items-center justify-center ${pad} overflow-hidden shrink-0 transition-transform duration-200 hover:scale-105 select-none`}
        title={name}
      >
        <img
          src={logo}
          alt={name}
          onError={() => setImgError(true)}
          className="w-full h-full object-contain rounded-full"
          loading="lazy"
        />
      </div>
    );
  }

  // Fallback if image fails
  return (
    <div
      className={`${sizeClasses} rounded-full bg-slate-100 border border-slate-200 shadow-2xs flex items-center justify-center shrink-0 font-mono text-xs font-bold text-slate-700`}
      title={name}
    >
      {name.slice(0, 3).toUpperCase()}
    </div>
  );
};

export const Credentials: React.FC<CredentialsProps> = ({ lang, onNavigateNext }) => {
  const formalDegree = EDUCATION_DATA[0];
  const humanItems = HUMAN_UNDERSTANDING_DATA;
  const continuousItems = CONTINUOUS_LEARNING_DATA;
  const capabilities = PROFESSIONAL_CAPABILITIES_DATA;

  // 4 Internal Layer Navigation State
  const [activeLayer, setActiveLayer] = useState<'all' | '01' | '02' | '03' | '04'>('all');

  // Internal Navigation Items
  const internalNavItems = [
    {
      id: 'all',
      order: '',
      label: { vi: 'Toàn bộ Hành trình', en: 'Complete Journey' },
    },
    {
      id: '01',
      order: '01',
      label: { vi: 'Nền tảng', en: 'Foundation' },
      icon: GraduationCap,
    },
    {
      id: '02',
      order: '02',
      label: { vi: 'Hiểu Con người', en: 'Human Understanding' },
      icon: HeartHandshake,
    },
    {
      id: '03',
      order: '03',
      label: { vi: 'Học tập Liên tục', en: 'Continuous Learning' },
      icon: BookOpen,
    },
    {
      id: '04',
      order: '04',
      label: { vi: 'Năng lực', en: 'Capabilities' },
      icon: Layers,
    },
  ];

  // Cluster taxonomy for Continuous Learning
  const continuousClusters = [
    {
      id: 'communication-culture',
      label: { vi: 'Truyền thông & Văn hóa', en: 'Communication & Culture' },
      icon: MessageSquare,
      items: continuousItems.filter(i => i.cluster === 'communication-culture'),
    },
    {
      id: 'customer-experience',
      label: { vi: 'Trải nghiệm & Khách hàng', en: 'Experience & Customer Insight' },
      icon: Users,
      items: continuousItems.filter(i => i.cluster === 'customer-experience'),
    },
    {
      id: 'ai-digital',
      label: { vi: 'AI & Kỹ thuật số', en: 'AI & Digital' },
      icon: Cpu,
      items: continuousItems.filter(i => i.cluster === 'ai-digital'),
    },
    {
      id: 'leadership',
      label: { vi: 'Năng lực Lãnh đạo', en: 'Leadership' },
      icon: Award,
      items: continuousItems.filter(i => i.cluster === 'leadership'),
    },
  ];

  return (
    <section
      id="education"
      className="w-full py-16 sm:py-24 md:py-28 px-4 sm:px-8 md:px-12 lg:px-16 bg-white border-b border-slate-200/70"
    >
      <div className="max-w-6xl mx-auto">
        {/* ========================================================================= */}
        {/* SECTION HERO / POSITIONING (4-LAYER PROFESSIONAL DEVELOPMENT JOURNEY) */}
        {/* ========================================================================= */}
        <div className="flex flex-col gap-4 mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold tracking-widest text-[#0068FF] uppercase">
              {lang === 'vi' ? 'Học vấn & Phát triển' : 'Education & Development'}
            </span>
            <div className="h-px w-12 bg-[#0068FF]/30" />
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                {lang === 'vi' ? (
                  <>
                    Học để hiểu sâu hơn. <br />
                    <span className="text-[#0068FF]">Phát triển để làm nghề tốt hơn.</span>
                  </>
                ) : (
                  <>
                    Learning to understand more deeply. <br />
                    <span className="text-[#0068FF]">Growing to practice better.</span>
                  </>
                )}
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-slate-600 leading-relaxed">
              {lang === 'vi'
                ? 'Từ nền tảng học thuật, kiến thức về con người đến việc liên tục cập nhật chuyên môn và công nghệ — mỗi lớp học tập đều góp phần định hình cách tôi làm nghề.'
                : 'From academic foundations and human understanding to continuous professional and digital learning, each layer shapes how I approach my work.'}
            </p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* INTERNAL 4-LAYER SEGMENTED NAVIGATION (RECRUITER SCANABILITY) */}
        {/* ========================================================================= */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-14 sm:mb-16 no-scrollbar border-b border-slate-200/80">
          {internalNavItems.map((nav) => {
            const IconComp = nav.icon;
            const isActive = activeLayer === nav.id;
            return (
              <button
                key={nav.id}
                onClick={() => setActiveLayer(nav.id as any)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer mb-2 ${
                  isActive
                    ? 'bg-[#0068FF] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
                }`}
              >
                {IconComp && <IconComp className="w-3.5 h-3.5" />}
                <span>
                  {nav.order && <span className="font-mono opacity-80 mr-1">{nav.order} —</span>}
                  {nav.label[lang]}
                </span>
              </button>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* LAYER 01 — NỀN TẢNG / FOUNDATION */}
        {/* ========================================================================= */}
        {(activeLayer === 'all' || activeLayer === '01') && (
          <div className="mb-20">
            <div className="flex items-center gap-2.5 mb-6 pb-3 border-b border-slate-200">
              <GraduationCap className="w-5 h-5 text-[#0068FF]" />
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                {lang === 'vi' ? '01 — Nền tảng' : '01 — Foundation'}
              </h3>
            </div>

            {formalDegree && (
              <div className="bg-[#F8FAFC] border border-slate-200/90 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xs hover:shadow-md transition-all">
                <div className="flex flex-col sm:flex-row sm:items-start gap-5 lg:gap-7">
                  {/* Circular Logo for HIU */}
                  <InstitutionLogo
                    logo={hiuLogo}
                    name={formalDegree.institution[lang]}
                    size="lg"
                    customPadding="p-1.5 sm:p-2"
                  />

                  <div className="flex-1 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <span className="inline-flex px-3 py-1 rounded-full bg-blue-50 text-[#0068FF] text-xs font-bold font-mono tracking-wide uppercase mb-2">
                          {lang === 'vi' ? 'Bằng Cử nhân Chính quy' : "Bachelor's Degree"}
                        </span>
                        <h4 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                          {formalDegree.degree[lang]}
                        </h4>
                      </div>
                      <div className="sm:text-right shrink-0">
                        <span className="inline-block px-3 py-1 rounded-full bg-slate-200/70 text-slate-700 text-xs font-semibold font-mono">
                          {formalDegree.period}
                        </span>
                        <p className="text-xs text-slate-500 mt-1">{formalDegree.location[lang]}</p>
                      </div>
                    </div>

                    <p className="text-sm font-semibold text-slate-800">
                      {formalDegree.institution[lang]}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
                      {formalDegree.description[lang]}
                    </p>

                    {formalDegree.highlights && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                        {formalDegree.highlights.map((h, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200/70 text-xs text-slate-700"
                          >
                            <ChevronRight className="w-4 h-4 text-[#0068FF] shrink-0 mt-0.5" />
                            <span>{h[lang]}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* LAYER 02 — HIỂU CON NGƯỜI / HUMAN UNDERSTANDING */}
        {/* ========================================================================= */}
        {(activeLayer === 'all' || activeLayer === '02') && (
          <div className="mb-20">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-6 pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2.5">
                <HeartHandshake className="w-5 h-5 text-[#0068FF]" />
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                  {lang === 'vi' ? '02 — Hiểu Con người' : '02 — Human Understanding'}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 italic">
                {lang === 'vi'
                  ? 'Chủ động bổ sung kiến thức về hành vi, động lực và nhu cầu con người để làm nghề sâu sắc hơn.'
                  : 'Proactively deepening perspectives on human behavior, motivation, and relational needs.'}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {/* 5A: Psychology Foundation 2026 (HCMUE) */}
              {humanItems[0] && (
                <div className="lg:col-span-12 bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-2xs hover:shadow-md transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-5 lg:gap-6">
                    <InstitutionLogo
                      logo={humanItems[0].logo}
                      name={humanItems[0].institution[lang]}
                      size="lg"
                      customPadding="p-1.5 sm:p-2"
                    />

                    <div className="flex-1 space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="px-3 py-1 rounded-full bg-blue-50 text-[#0068FF] text-xs font-bold font-mono">
                            Psychology Foundation
                          </span>
                          <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs font-mono font-semibold">
                            {humanItems[0].year}
                          </span>
                        </div>
                        <p className="text-xs font-semibold text-slate-500">
                          {humanItems[0].institution[lang]}
                        </p>
                      </div>

                      <h4 className="text-xl sm:text-2xl font-bold text-slate-900">
                        {humanItems[0].title[lang]}
                      </h4>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {humanItems[0].description?.[lang]}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* 5B: Human Needs (University of Toronto) */}
              {humanItems[1] && (
                <div className="lg:col-span-6 bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-7 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <InstitutionLogo
                        logo={humanItems[1].logo}
                        name={humanItems[1].institution[lang]}
                        size="md"
                        customPadding="p-1"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-mono font-bold">
                            Human Needs
                          </span>
                          <span className="text-xs font-mono text-slate-500 font-semibold">
                            {humanItems[1].year}
                          </span>
                        </div>
                        <p className="text-xs font-medium text-slate-500">
                          {humanItems[1].institution[lang]}
                        </p>
                      </div>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {humanItems[1].title[lang]}
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {humanItems[1].description?.[lang]}
                    </p>
                  </div>
                </div>
              )}

              {/* 5C: Design Thinking — Bridge (Udemy Business) */}
              {humanItems[2] && (
                <div className="lg:col-span-6 bg-white border border-purple-200/80 rounded-3xl p-6 sm:p-7 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-28 h-28 bg-purple-50 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />
                  <div className="space-y-4 relative z-10">
                    <div className="flex items-start gap-4">
                      <InstitutionLogo
                        logo={humanItems[2].logo}
                        name={humanItems[2].institution[lang]}
                        size="md"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 text-xs font-mono font-bold">
                            Bridge: Experience Design
                          </span>
                          <span className="text-xs font-mono text-slate-500 font-semibold">
                            {humanItems[2].year}
                          </span>
                        </div>
                        <p className="text-xs font-medium text-slate-500">
                          {humanItems[2].institution[lang]}
                        </p>
                      </div>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {humanItems[2].title[lang]}
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {humanItems[2].description?.[lang]}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* LAYER 03 — HỌC TẬP LIÊN TỤC / CONTINUOUS LEARNING */}
        {/* ========================================================================= */}
        {(activeLayer === 'all' || activeLayer === '03') && (
          <div className="mb-20">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-8 pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2.5">
                <BookOpen className="w-5 h-5 text-[#0068FF]" />
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                  {lang === 'vi' ? '03 — Học tập Liên tục' : '03 — Continuous Learning'}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 italic">
                {lang === 'vi'
                  ? 'Cập nhật liên tục các phương pháp, công cụ và công nghệ để nâng cao chất lượng thực hành.'
                  : 'Continuous professional learning across communication, experience, AI, and leadership.'}
              </p>
            </div>

            {/* Clustered Cards by Domain */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {continuousClusters.map((cluster) => {
                const ClusterIcon = cluster.icon;
                return (
                  <div
                    key={cluster.id}
                    className="bg-[#FAFAFA] border border-slate-200/90 rounded-3xl p-6 sm:p-7 space-y-4 shadow-2xs hover:shadow-sm transition-all"
                  >
                    <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                      <ClusterIcon className="w-4 h-4 text-[#0068FF]" />
                      <h4 className="text-sm font-bold text-slate-800 tracking-tight">
                        {cluster.label[lang]}
                      </h4>
                    </div>

                    <div className="space-y-3">
                      {cluster.items.map((cert) => (
                        <div
                          key={cert.id}
                          className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-2xs flex items-center justify-between gap-3 hover:border-slate-300 transition-all"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <InstitutionLogo
                              logo={cert.logo}
                              name={cert.institution[lang]}
                              size="sm"
                            />
                            <div className="min-w-0">
                              <h5 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug truncate">
                                {cert.title[lang]}
                              </h5>
                              <p className="text-[11px] text-slate-500 mt-0.5">
                                {cert.institution[lang]}
                              </p>
                            </div>
                          </div>
                          <span className="text-[11px] font-mono text-slate-500 shrink-0 font-medium">
                            {cert.year}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* LAYER 04 — NĂNG LỰC / CAPABILITIES */}
        {/* ========================================================================= */}
        {(activeLayer === 'all' || activeLayer === '04') && (
          <div className="mb-14">
            <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-slate-200">
              <Layers className="w-5 h-5 text-[#0068FF]" />
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                {lang === 'vi' ? '04 — Năng lực Nghề nghiệp' : '04 — Professional Capabilities'}
              </h3>
            </div>

            {/* Transition Statement */}
            <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/60 border border-blue-100 mb-8 max-w-4xl">
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {lang === 'vi'
                  ? '“Kiến thức chỉ thực sự có giá trị khi được chuyển hóa thành năng lực thực hành. Những năng lực dưới đây được hình thành qua quá trình học tập liên tục và trải nghiệm thực tế trong truyền thông, văn hóa và thiết kế trải nghiệm.”'
                  : '“Knowledge creates value when it translates into practice. These capabilities have been developed through continuous learning and hands-on experience across communication, culture and experience design.”'}
              </p>
            </div>

            {/* 4 Professional Capability Pillars (No %, No stars, No ratings) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {capabilities.map((pillar) => (
                <div
                  key={pillar.id}
                  className={`rounded-3xl p-6 sm:p-7 border shadow-2xs hover:shadow-md transition-all flex flex-col justify-between ${
                    pillar.isCore
                      ? 'bg-gradient-to-br from-white to-blue-50/30 border-blue-200'
                      : 'bg-white border-slate-200/90'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#0068FF]">
                        PILLAR {pillar.order}
                      </span>
                      {pillar.isCore && (
                        <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-[#0068FF] text-[11px] font-bold font-mono uppercase">
                          Core Domain
                        </span>
                      )}
                    </div>

                    <h4 className="text-lg sm:text-xl font-bold text-slate-900">
                      {pillar.title[lang]}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {pillar.summary[lang]}
                    </p>

                    <div className="pt-3 border-t border-slate-100">
                      <div className="flex flex-wrap gap-2">
                        {pillar.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-medium"
                          >
                            <CheckCircle2 className="w-3 h-3 text-[#0068FF]" />
                            <span>{skill}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* AI-Enabled Practice — Cross-Cutting Enabling Horizontal Layer */}
            <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-md border border-slate-700">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="space-y-2 max-w-xl">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-sky-400" />
                    <span className="text-xs font-mono font-bold tracking-wider uppercase text-sky-400">
                      Cross-Cutting Enabling Layer
                    </span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold tracking-tight">
                    AI-Enabled Practice
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {lang === 'vi'
                      ? 'Năng lực công nghệ bổ trợ xuyên suốt thực hành nghề nghiệp — giúp gia tăng tốc độ nghiên cứu, trực quan hóa ý tưởng và tối ưu hóa quy trình vận hành.'
                      : 'A cross-cutting enabling capability across professional practice — accelerating research, insight synthesis, visual prototyping, and workflow optimization.'}
                  </p>
                </div>

                {/* Skills Strip */}
                <div className="flex flex-wrap gap-2 lg:max-w-md">
                  {AI_ENABLED_PRACTICE_SKILLS.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-slate-200 text-xs font-medium tracking-wide transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Guided Journey Next Section CTA */}
        {onNavigateNext && (
          <div className="pt-8 border-t border-slate-200 flex justify-end">
            <button
              onClick={onNavigateNext}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0068FF] hover:bg-[#0052CC] text-white text-xs font-semibold shadow-sm transition-all cursor-pointer"
            >
              <span>
                {lang === 'vi' ? 'TIẾP THEO: KẾT NỐI & ĐỐI THOẠI' : 'NEXT: CONNECT & CONVERSATION'}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
