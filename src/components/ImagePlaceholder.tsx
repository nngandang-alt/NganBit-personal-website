import React from 'react';
import { Camera, Image as ImageIcon, Layers, FileSpreadsheet, Plus } from 'lucide-react';
import { PortfolioImage, Language } from '../types';

interface ImagePlaceholderProps {
  image?: PortfolioImage | null;
  category?: 'portrait' | 'case-cover' | 'event' | 'material' | 'framework' | 'report';
  recommendedRatio?: '4:5' | '16:9' | '4:3' | 'original';
  hint?: { vi: string; en: string };
  lang?: Language;
  className?: string;
  onAddClick?: () => void;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  image,
  category = 'case-cover',
  recommendedRatio = '16:9',
  hint,
  lang = 'vi',
  className = '',
}) => {
  const actualSrc = image?.src;
  const actualCategory = image?.category || category;
  const actualRatio = image?.recommendedRatio || recommendedRatio;
  const actualHint = image?.placeholderHint || hint || {
    vi: 'Cần bổ sung hình ảnh thực tế',
    en: 'Real image to be provided',
  };

  // If real image is provided, render the image
  if (actualSrc) {
    return (
      <figure className={`overflow-hidden rounded-2xl sm:rounded-3xl border border-black/5 bg-black/5 ${className}`}>
        <img
          src={actualSrc}
          alt={image?.alt?.[lang] || 'Portfolio visual'}
          className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
          loading="lazy"
        />
        {image?.caption?.[lang] && (
          <figcaption className="px-4 py-2.5 text-xs text-slate-500 bg-white/80 backdrop-blur-sm border-t border-black/5">
            {image.caption[lang]}
          </figcaption>
        )}
      </figure>
    );
  }

  // Aspect ratio classes
  const aspectClass =
    actualRatio === '4:5'
      ? 'aspect-[4/5]'
      : actualRatio === '16:9'
      ? 'aspect-[16/9]'
      : actualRatio === '4:3'
      ? 'aspect-[4/3]'
      : 'aspect-video';

  const getCategoryMeta = () => {
    switch (actualCategory) {
      case 'portrait':
        return {
          icon: <Camera className="w-5 h-5 text-[#0068FF]" />,
          label: { vi: 'Chân dung chân thực', en: 'Authentic Portrait' },
        };
      case 'event':
        return {
          icon: <Camera className="w-5 h-5 text-[#0068FF]" />,
          label: { vi: 'Ảnh sự kiện / Hoạt động', en: 'Event / Activity Photo' },
        };
      case 'material':
        return {
          icon: <Layers className="w-5 h-5 text-[#0068FF]" />,
          label: { vi: 'Tài liệu truyền thông / Ấn phẩm', en: 'Comms Material / Publication' },
        };
      case 'framework':
        return {
          icon: <Layers className="w-5 h-5 text-[#0068FF]" />,
          label: { vi: 'Sơ đồ hệ thống / Framework', en: 'System Diagram / Framework' },
        };
      case 'report':
        return {
          icon: <FileSpreadsheet className="w-5 h-5 text-[#0068FF]" />,
          label: { vi: 'Báo cáo số liệu / Đo lường', en: 'Measurement / Report' },
        };
      default:
        return {
          icon: <ImageIcon className="w-5 h-5 text-[#0068FF]" />,
          label: { vi: 'Ảnh bìa Case Study', en: 'Case Study Cover' },
        };
    }
  };

  const meta = getCategoryMeta();

  return (
    <div
      className={`relative w-full ${aspectClass} rounded-2xl sm:rounded-3xl border border-dashed border-[#0068FF]/30 bg-gradient-to-br from-[#F5F8FF] via-white to-[#EBF3FF]/40 p-6 flex flex-col justify-between overflow-hidden group hover:border-[#0068FF]/60 transition-all duration-300 ${className}`}
    >
      {/* Background subtle tech grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0068FF_1px,transparent_1px)] [background-size:16px_16px]"
        aria-hidden="true"
      />

      {/* Top Header Bar inside placeholder */}
      <div className="relative z-10 flex items-center justify-between gap-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-[#0068FF]/20 shadow-xs text-xs font-semibold text-[#0068FF]">
          {meta.icon}
          <span>{meta.label[lang]}</span>
        </div>

        <span className="px-2.5 py-0.5 rounded-md bg-[#0068FF]/10 text-[11px] font-mono font-medium text-[#0068FF]">
          Ratio {actualRatio}
        </span>
      </div>

      {/* Middle Content */}
      <div className="relative z-10 my-auto text-center py-4">
        <p className="text-xs sm:text-sm font-medium text-slate-700 max-w-sm mx-auto leading-relaxed">
          {actualHint[lang]}
        </p>
        <p className="text-[11px] text-slate-500 mt-1 font-mono">
          {lang === 'vi' ? 'Không dùng stock photo — chờ cập nhật ảnh thực' : 'No stock photos — waiting for authentic visual'}
        </p>
      </div>

      {/* Bottom Action Hint */}
      <div className="relative z-10 flex items-center justify-between pt-3 border-t border-[#0068FF]/15 text-xs">
        <span className="text-slate-500 text-[11px]">
          {lang === 'vi' ? 'Dữ liệu hình ảnh đang chờ' : 'Visual slot pending'}
        </span>
        <div className="inline-flex items-center gap-1 text-[#0068FF] font-semibold text-xs bg-white px-2.5 py-1 rounded-lg border border-[#0068FF]/25 shadow-2xs">
          <Plus className="w-3.5 h-3.5" />
          <span>{lang === 'vi' ? 'Thêm ảnh thật sau' : 'Add authentic photo'}</span>
        </div>
      </div>
    </div>
  );
};
