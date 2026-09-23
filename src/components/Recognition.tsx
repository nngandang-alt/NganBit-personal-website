import React, { useState, useEffect } from 'react';
import { RECOGNITION_DATA } from '../data/portfolioData';
import { Language, RecognitionItem } from '../types';
import { PageHeroVisual } from './PageHeroVisual';
import { ArrowRight, Maximize2, X, Award, MessageSquareHeart, Sparkles } from 'lucide-react';

interface RecognitionProps {
  lang: Language;
  onNavigateNext?: () => void;
}

interface LightboxState {
  src: string;
  title: string;
  caption: string;
  badge?: string;
  date?: string;
}

export const Recognition: React.FC<RecognitionProps> = ({ lang, onNavigateNext }) => {
  const items = RECOGNITION_DATA || [];
  const [activeLightbox, setActiveLightbox] = useState<LightboxState | null>(null);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveLightbox(null);
      }
    };
    if (activeLightbox) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeLightbox]);

  // Filtering chapters
  const formalItems = items.filter(item => item.id.startsWith('rec-formal'));
  const voiceItems = items.filter(item => item.id.startsWith('rec-voice'));
  const cultureItem = items.find(item => item.id.startsWith('rec-culture'));

  // Voice Wall items
  const featuredVoice = voiceItems.find(i => i.id === 'rec-voice-01');
  const humanConnectionVoice = voiceItems.find(i => i.id === 'rec-voice-02');
  const storytellingVoice = voiceItems.find(i => i.id === 'rec-voice-03');
  const programExpVoice = voiceItems.find(i => i.id === 'rec-voice-04');
  const cultureVoice = voiceItems.find(i => i.id === 'rec-voice-05');

  const openModal = (
    item: RecognitionItem,
    customTitle?: string,
    customCaption?: string,
    hideDate: boolean = true
  ) => {
    if (!item.image) return;
    setActiveLightbox({
      src: item.image,
      title: customTitle || item.source[lang],
      caption: customCaption || item.context[lang],
      badge: item.badge ? item.badge[lang] : undefined,
      date: hideDate ? undefined : item.year,
    });
  };

  return (
    <section
      id="recognition"
      className="w-full py-16 sm:py-24 md:py-28 px-4 sm:px-8 md:px-12 lg:px-16 bg-[#f8fbff] border-b border-slate-200/70 relative overflow-hidden"
    >
      {/* ============================================================== */}
      {/* PAGE-LEVEL ATMOSPHERIC LIGHTING SYSTEM                         */}
      {/* Exact color recipe from Homepage Hero (Hero.tsx lines 40-64)   */}
      {/* ============================================================== */}
      {/* PRIMARY GLOW: Opening / Hero (Soft but expressive top-right) */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: '-50px',
          top: '-20px',
          width: '580px',
          height: '450px',
          background: 'radial-gradient(ellipse at center, rgba(175, 215, 255, 0.55) 0%, rgba(248, 251, 255, 0) 70%)',
          zIndex: 0,
        }}
        aria-hidden="true"
      />
      <div
        className="absolute pointer-events-none"
        style={{
          right: '50px',
          top: '40px',
          width: '420px',
          height: '420px',
          background: 'radial-gradient(circle at center, rgba(185, 225, 255, 0.40) 0%, rgba(248, 251, 255, 0) 65%)',
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      {/* SECONDARY GLOW: Key Recognition / Voice Wall Area (Mid-left) */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: '-80px',
          top: '700px',
          width: '480px',
          height: '650px',
          background: 'radial-gradient(ellipse at center, rgba(175, 215, 255, 0.35) 0%, rgba(248, 251, 255, 0) 70%)',
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      {/* AMBIENT GLOW: Lower Transition / Milestone Depth (Lower-right) */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: '-60px',
          bottom: '120px',
          width: '450px',
          height: '520px',
          background: 'radial-gradient(ellipse at center, rgba(185, 225, 255, 0.25) 0%, rgba(248, 251, 255, 0) 70%)',
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-4 mb-14 sm:mb-16">
          {/* Left: Eyebrow + Headline + Supporting Paragraph */}
          <div className="max-w-2xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold tracking-widest text-[#0060FF] uppercase font-mono">
                {lang === 'vi' ? 'Ghi nhận' : 'Recognition'}
              </span>
              <div className="h-px w-12 bg-[#0060FF]/30" />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
              {lang === 'vi' ? (
                <>
                  Ghi nhận:<br />
                  <span className="text-[#0060FF]">Khi công việc để lại dấu ấn trong trải nghiệm của con người</span>
                </>
              ) : (
                <>
                  Recognition:<br />
                  <span className="text-[#0060FF]">When the work leaves a meaningful mark on people’s experience</span>
                </>
              )}
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
              {lang === 'vi'
                ? 'Từ sự ghi nhận của tổ chức, những phản hồi chân thật từ người trực tiếp trải nghiệm, đến các điểm chạm văn hóa đã thực sự đi vào đời sống, đây là bằng chứng sống động cho giá trị của công việc.'
                : 'From formal institutional commendations and heartfelt reflections of participants, to culture touchpoints lived and embraced, this is the authentic human evidence of the work.'}
            </p>
          </div>

          {/* Right: Semantic Line-art Element embedded in atmospheric glow */}
          <PageHeroVisual variant="recognition" />
        </div>

        {/* ========================================================================= */}
        {/* CHAPTER A: GHI NHẬN CHÍNH THỨC / FORMAL RECOGNITION */}
        {/* ========================================================================= */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-6 pb-3 border-b border-slate-200">
            <div className="flex items-center gap-2.5">
              <Award className="w-5 h-5 text-[#0068FF]" />
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                {lang === 'vi' ? 'GHI NHẬN CHÍNH THỨC' : 'FORMAL RECOGNITION'}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 italic max-w-xl text-left sm:text-right">
              {lang === 'vi'
                ? '“Những đóng góp trong công việc và vận hành chương trình được tổ chức ghi nhận ở cả cấp độ cá nhân và tập thể.”'
                : '“Contributions to organizational initiatives and program delivery recognized at both individual and team levels.”'}
            </p>
          </div>

          {/* Unified Block with Balanced Weight */}
          <div className="bg-[#F8FAFC] border border-slate-200/90 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xs">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
              
              {/* Certificate 01: Cá nhân / Individual */}
              {formalItems[0] && (
                <div className="flex flex-col items-center">
                  <div
                    onClick={() =>
                      openModal(
                        formalItems[0],
                        lang === 'vi' ? 'Ghi nhận cá nhân' : 'Individual Recognition',
                        lang === 'vi'
                          ? 'Đóng góp được tổ chức ghi nhận ở cấp độ cá nhân.'
                          : 'Contributions recognized at the individual level.',
                        true
                      )
                    }
                    className="relative w-full max-w-sm rounded-2xl overflow-hidden border border-slate-200 bg-white group cursor-pointer shadow-sm hover:shadow-md transition-all flex items-center justify-center p-3 sm:p-4 aspect-3/4"
                  >
                    <img
                      src={formalItems[0].image}
                      alt={lang === 'vi' ? 'Ghi nhận cá nhân' : 'Individual Recognition'}
                      className="max-h-full max-w-full object-contain rounded group-hover:scale-[1.02] transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-3.5 py-1.5 rounded-full bg-white/95 text-slate-900 text-xs font-semibold shadow-sm flex items-center gap-1.5">
                        <Maximize2 className="w-3.5 h-3.5 text-[#0068FF]" />
                        {lang === 'vi' ? 'Xem kích thước lớn' : 'View Full Image'}
                      </span>
                    </div>
                  </div>
                  <div className="mt-3.5 text-center">
                    <span className="px-3 py-1 rounded-full bg-blue-50 text-[#0068FF] text-xs font-bold font-mono tracking-wide uppercase">
                      {lang === 'vi' ? 'Cá nhân' : 'Individual'}
                    </span>
                  </div>
                </div>
              )}

              {/* Certificate 02: Tập thể / Team */}
              {formalItems[1] && (
                <div className="flex flex-col items-center">
                  <div
                    onClick={() =>
                      openModal(
                        formalItems[1],
                        lang === 'vi' ? 'Ghi nhận tập thể' : 'Team Recognition',
                        lang === 'vi'
                          ? 'Đóng góp trong vận hành chương trình được tổ chức ghi nhận ở cấp độ tập thể.'
                          : 'Program delivery contributions recognized at the team level.',
                        true
                      )
                    }
                    className="relative w-full max-w-sm rounded-2xl overflow-hidden border border-slate-200 bg-white group cursor-pointer shadow-sm hover:shadow-md transition-all flex items-center justify-center p-3 sm:p-4 aspect-3/4"
                  >
                    <img
                      src={formalItems[1].image}
                      alt={lang === 'vi' ? 'Ghi nhận tập thể' : 'Team Recognition'}
                      className="max-h-full max-w-full object-contain rounded group-hover:scale-[1.02] transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-3.5 py-1.5 rounded-full bg-white/95 text-slate-900 text-xs font-semibold shadow-sm flex items-center gap-1.5">
                        <Maximize2 className="w-3.5 h-3.5 text-[#0068FF]" />
                        {lang === 'vi' ? 'Xem kích thước lớn' : 'View Full Image'}
                      </span>
                    </div>
                  </div>
                  <div className="mt-3.5 text-center">
                    <span className="px-3 py-1 rounded-full bg-blue-50 text-[#0068FF] text-xs font-bold font-mono tracking-wide uppercase">
                      {lang === 'vi' ? 'Tập thể' : 'Team'}
                    </span>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* CHAPTER B: TIẾNG NÓI TỪ TRẢI NGHIỆM / VOICES FROM THE EXPERIENCE */}
        {/* ========================================================================= */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-8 pb-3 border-b border-slate-200">
            <div className="flex items-center gap-2.5">
              <MessageSquareHeart className="w-5 h-5 text-[#0068FF]" />
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                {lang === 'vi' ? 'TIẾNG NÓI TỪ TRẢI NGHIỆM' : 'VOICES FROM THE EXPERIENCE'}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 italic max-w-xl text-left sm:text-right">
              {lang === 'vi'
                ? '“Những phản hồi chân thực từ những người đã trực tiếp trải nghiệm các chương trình, hoạt động văn hóa, truyền thông, đào tạo hoặc những điểm chạm mà tôi tham gia thiết kế và triển khai.”'
                : '“Authentic feedback from people who directly experienced the programs, culture initiatives, storytelling, or touchpoints I designed and delivered.”'}
            </p>
          </div>

          {/* CURATED VOICE WALL — ASYMMETRIC EDITORIAL GRID */}
          <div className="space-y-6">
            
            {/* ROW 1: FEATURED VOICE — TOP 100 STUDENT HONORS */}
            {featuredVoice && (
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 lg:p-9 shadow-2xs hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
                  <span className="inline-flex px-3 py-1 rounded-full bg-blue-50 text-[#0068FF] text-xs font-bold font-mono">
                    Recognition Experience
                  </span>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium">
                    {featuredVoice.context[lang]}
                  </p>
                </div>

                <div
                  onClick={() =>
                    openModal(
                      featuredVoice,
                      lang === 'vi' ? 'Phản hồi người tham dự' : 'Attendee Feedback',
                      featuredVoice.context[lang],
                      true
                    )
                  }
                  className="relative rounded-2xl overflow-hidden border border-slate-200/90 bg-slate-50 group cursor-pointer shadow-inner"
                >
                  <img
                    src={featuredVoice.image}
                    alt={lang === 'vi' ? 'Phản hồi người tham dự Lễ Vinh danh Top 100' : 'Top 100 attendee email feedback'}
                    className="w-full h-auto max-h-[380px] object-cover object-top group-hover:scale-[1.01] transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3.5 py-1.5 rounded-full bg-white/95 text-slate-900 text-xs font-semibold shadow-sm flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5 text-[#0068FF]" />
                      {lang === 'vi' ? 'Xem ảnh gốc email' : 'View Full Email'}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* ROW 2: ASYMMETRIC PAIR — Human Connection & Culture / Engagement */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              
              {/* VOICE 02: Human Connection (7 Cols on desktop) */}
              {humanConnectionVoice && (
                <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold font-mono">
                        {lang === 'vi' ? 'Kết nối Con người' : 'Human Connection'}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                      {humanConnectionVoice.context[lang]}
                    </p>

                    <div
                      onClick={() =>
                        openModal(
                          humanConnectionVoice,
                          lang === 'vi' ? 'Kết nối Con người' : 'Human Connection',
                          humanConnectionVoice.context[lang],
                          true
                        )
                      }
                      className="relative rounded-2xl overflow-hidden border border-slate-200/80 bg-[#FAFAFA] group cursor-pointer p-4 sm:p-6 flex items-center justify-center min-h-[160px]"
                    >
                      <img
                        src={humanConnectionVoice.image}
                        alt={lang === 'vi' ? 'Phản hồi về kết nối và đồng hành' : 'Human connection feedback'}
                        className="max-h-48 w-auto object-contain rounded group-hover:scale-[1.02] transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="px-3 py-1 rounded-full bg-white/95 text-slate-900 text-xs font-semibold shadow-sm flex items-center gap-1">
                          <Maximize2 className="w-3.5 h-3.5 text-[#0068FF]" />
                          {lang === 'vi' ? 'Xem chi tiết' : 'View'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* VOICE 05: Culture & Engagement (5 Cols on desktop) */}
              {cultureVoice && (
                <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold font-mono">
                        {lang === 'vi' ? 'Văn hóa & Gắn kết' : 'Culture & Engagement'}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                      {cultureVoice.context[lang]}
                    </p>

                    <div
                      onClick={() =>
                        openModal(
                          cultureVoice,
                          lang === 'vi' ? 'Văn hóa & Gắn kết' : 'Culture & Engagement',
                          cultureVoice.context[lang],
                          true
                        )
                      }
                      className="relative rounded-2xl overflow-hidden border border-slate-200/80 bg-[#FAFAFA] group cursor-pointer p-4 flex items-center justify-center min-h-[160px]"
                    >
                      <img
                        src={cultureVoice.image}
                        alt={lang === 'vi' ? 'Phản hồi về văn hóa và gắn kết' : 'Culture and engagement feedback'}
                        className="max-h-48 w-auto object-contain rounded group-hover:scale-[1.02] transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="px-3 py-1 rounded-full bg-white/95 text-slate-900 text-xs font-semibold shadow-sm flex items-center gap-1">
                          <Maximize2 className="w-3.5 h-3.5 text-[#0068FF]" />
                          {lang === 'vi' ? 'Xem chi tiết' : 'View'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* ROW 3: PAIR — Storytelling & Program Experience */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              
              {/* VOICE 03: Communication & Storytelling */}
              {storytellingVoice && (
                <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold font-mono">
                        {lang === 'vi' ? 'Truyền thông & Kể chuyện' : 'Communication & Storytelling'}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                      {storytellingVoice.context[lang]}
                    </p>

                    <div
                      onClick={() =>
                        openModal(
                          storytellingVoice,
                          lang === 'vi' ? 'Truyền thông & Kể chuyện' : 'Communication & Storytelling',
                          storytellingVoice.context[lang],
                          true
                        )
                      }
                      className="relative rounded-2xl overflow-hidden border border-slate-200/80 bg-[#FAFAFA] group cursor-pointer p-4 flex items-center justify-center min-h-[160px]"
                    >
                      <img
                        src={storytellingVoice.image}
                        alt={lang === 'vi' ? 'Phản hồi về truyền thông và kịch bản' : 'Storytelling feedback'}
                        className="max-h-44 w-auto object-contain rounded group-hover:scale-[1.02] transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="px-3 py-1 rounded-full bg-white/95 text-slate-900 text-xs font-semibold shadow-sm flex items-center gap-1">
                          <Maximize2 className="w-3.5 h-3.5 text-[#0068FF]" />
                          {lang === 'vi' ? 'Xem chi tiết' : 'View'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* VOICE 04: Program Experience */}
              {programExpVoice && (
                <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold font-mono">
                        {lang === 'vi' ? 'Trải nghiệm Chương trình' : 'Program Experience'}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                      {programExpVoice.context[lang]}
                    </p>

                    <div
                      onClick={() =>
                        openModal(
                          programExpVoice,
                          lang === 'vi' ? 'Trải nghiệm Chương trình' : 'Program Experience',
                          programExpVoice.context[lang],
                          true
                        )
                      }
                      className="relative rounded-2xl overflow-hidden border border-slate-200/80 bg-[#FAFAFA] group cursor-pointer p-4 flex items-center justify-center min-h-[160px]"
                    >
                      <img
                        src={programExpVoice.image}
                        alt={lang === 'vi' ? 'Phản hồi về trải nghiệm chương trình' : 'Program experience feedback'}
                        className="max-h-44 w-auto object-contain rounded group-hover:scale-[1.02] transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="px-3 py-1 rounded-full bg-white/95 text-slate-900 text-xs font-semibold shadow-sm flex items-center gap-1">
                          <Maximize2 className="w-3.5 h-3.5 text-[#0068FF]" />
                          {lang === 'vi' ? 'Xem chi tiết' : 'View'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* CHAPTER C: VĂN HÓA TRONG THỰC HÀNH / CULTURE IN PRACTICE */}
        {/* ========================================================================= */}
        <div className="mb-14">
          <div className="flex items-center gap-2.5 mb-6 pb-3 border-b border-slate-200">
            <Sparkles className="w-5 h-5 text-[#0068FF]" />
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
              {lang === 'vi' ? 'VĂN HÓA TRONG THỰC HÀNH' : 'CULTURE IN PRACTICE'}
            </h3>
          </div>

          {cultureItem && (
            <div className="bg-[#FAF8F5] border border-amber-200/70 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xs hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Physical Artifact Photo (preserving the authentic hand holding card) */}
                <div className="lg:col-span-6 flex justify-center">
                  <div
                    onClick={() =>
                      openModal(
                        cultureItem,
                        lang === 'vi'
                          ? 'Thank You Card: từ thiết kế đến trải nghiệm thực tế'
                          : 'Thank You Card: From Culture Design to Real Experience',
                        cultureItem.context[lang],
                        true
                      )
                    }
                    className="relative rounded-2xl overflow-hidden border border-amber-200/80 bg-white group cursor-pointer shadow-sm p-3 max-w-sm w-full flex items-center justify-center"
                  >
                    <img
                      src={cultureItem.image}
                      alt={lang === 'vi' ? 'Thank You Card: Điểm chạm văn hóa Vua Nệm' : 'Vua Nệm Thank You Card artifact'}
                      className="w-full h-auto max-h-[380px] object-contain rounded group-hover:scale-[1.02] transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-3.5 py-1.5 rounded-full bg-white/95 text-slate-900 text-xs font-semibold shadow-sm flex items-center gap-1.5">
                        <Maximize2 className="w-3.5 h-3.5 text-amber-600" />
                        {lang === 'vi' ? 'Xem kỷ vật' : 'View Artifact'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Editorial Context & Narrative */}
                <div className="lg:col-span-6 flex flex-col justify-center space-y-4">
                  <div>
                    <span className="px-3 py-1 rounded-full bg-amber-100/70 text-amber-800 text-xs font-bold font-mono tracking-wide">
                      Culture Touchpoint
                    </span>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                    {lang === 'vi'
                      ? 'Thank You Card: từ thiết kế đến trải nghiệm thực tế'
                      : 'Thank You Card: From Culture Design to Real Experience'}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {lang === 'vi'
                      ? 'Một điểm chạm được triển khai trong dự án Phát triển Văn hóa tại Vua Nệm, giúp sự ghi nhận và lời cảm ơn trở nên hữu hình trong trải nghiệm làm việc hằng ngày.'
                      : 'A tangible touchpoint developed as part of Vua Nệm’s Culture Development project, designed to make recognition and appreciation visible within everyday employee experience.'}
                  </p>

                  <div className="p-4 rounded-2xl bg-white border border-amber-200/60 shadow-2xs">
                    <p className="text-xs text-slate-600 leading-relaxed italic">
                      {lang === 'vi'
                        ? '“Tấm card trong ảnh là một card thực tế do quản lý của tôi viết cho tôi, minh chứng cho việc điểm chạm văn hóa này đã được sử dụng trong thực tế.”'
                        : '“The card shown here was personally written to me by my manager, an authentic example of the culture touchpoint being used in practice.”'}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          )}
        </div>

        {/* Guided Journey Next Section CTA */}
        {onNavigateNext && (
          <div className="pt-8 border-t border-slate-200 flex justify-end">
            <button
              onClick={onNavigateNext}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0068FF] hover:bg-[#0052CC] text-white text-xs font-semibold shadow-sm transition-all cursor-pointer"
            >
              <span>{lang === 'vi' ? 'TIẾP THEO: KẾT NỐI (CONNECT)' : 'NEXT: CONNECT'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>

      {/* ========================================================================= */}
      {/* ACCESSIBLE LIGHTBOX MODAL */}
      {/* ========================================================================= */}
      {activeLightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeLightbox.title}
          onClick={() => setActiveLightbox(null)}
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 md:p-10 animate-fade-in"
        >
          <div
            onClick={e => e.stopPropagation()}
            className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Modal Header */}
            <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-2">
                {activeLightbox.badge && (
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-[#0068FF] text-[11px] font-bold font-mono">
                    {activeLightbox.badge}
                  </span>
                )}
                <h4 className="text-sm font-bold text-slate-900 truncate">
                  {activeLightbox.title}
                </h4>
              </div>
              <button
                onClick={() => setActiveLightbox(null)}
                aria-label="Đóng"
                className="p-1.5 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-200/70 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image Preview Container */}
            <div className="p-4 sm:p-6 bg-slate-900/5 flex items-center justify-center overflow-auto max-h-[68vh]">
              <img
                src={activeLightbox.src}
                alt={activeLightbox.title}
                className="max-w-full max-h-[62vh] object-contain rounded-lg shadow-sm"
              />
            </div>

            {/* Modal Footer / Caption */}
            <div className="px-5 py-3.5 border-t border-slate-200 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <p className="text-xs text-slate-600 leading-relaxed">
                {activeLightbox.caption}
              </p>
              {activeLightbox.date && (
                <span className="text-[11px] text-slate-400 font-mono shrink-0">
                  {activeLightbox.date}
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
