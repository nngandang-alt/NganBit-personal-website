import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Language } from '../types';
import {
  Mail,
  Linkedin,
  MessageSquare,
  FileText,
  Copy,
  Check,
  ArrowUpRight,
  Phone,
} from 'lucide-react';

interface ContactProps {
  lang: Language;
}

export const Contact: React.FC<ContactProps> = ({ lang }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section
      id="connect"
      className="w-full py-20 sm:py-28 md:py-36 px-4 sm:px-8 md:px-12 lg:px-16 bg-slate-950 text-white relative overflow-hidden"
    >
      {/* Background Subtle Tech Network */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0068FF_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-8">
          <span className="text-xs font-bold tracking-widest text-[#0068FF] uppercase">
            {lang === 'vi' ? 'Kết nối & Đối thoại' : 'Connect'}
          </span>
          <div className="h-px w-12 bg-[#0068FF]/40" />
        </div>

        {/* Large Editorial Heading */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
            {lang === 'vi' ? (
              <>
                Văn hóa bền vững luôn khởi nguồn<br />
                <span className="text-blue-400">từ một cuộc đối thoại chân thành.</span>
              </>
            ) : (
              <>
                Enduring culture begins<br />
                <span className="text-blue-400">with an authentic conversation.</span>
              </>
            )}
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 mt-6 leading-relaxed max-w-2xl font-normal">
            {lang === 'vi'
              ? 'Dù bạn muốn trao đổi về chiến lược văn hóa doanh nghiệp, thiết kế trải nghiệm sự kiện gắn kết, hay ứng dụng AI trong truyền thông nội bộ, tôi luôn sẵn lòng lắng nghe.'
              : 'Whether you seek to discuss corporate culture transformation, experiential townhalls, or practical AI in internal comms, I am always glad to connect.'}
          </p>
        </div>

        {/* Action & Direct Channels (5 Connection Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5 pt-8 border-t border-slate-800">
          
          {/* 1. LinkedIn Button */}
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 sm:p-6 rounded-2xl bg-white/5 hover:bg-[#0A66C2] border border-white/10 hover:border-transparent transition-all duration-200 group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Linkedin className="w-5 h-5 text-[#0A66C2] group-hover:text-white transition-colors" />
              </div>
              <span className="text-xs font-mono uppercase text-slate-400 group-hover:text-blue-200 block mb-1">
                Professional Network
              </span>
              <h3 className="text-base font-bold text-white">LinkedIn Profile</h3>
            </div>
            <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 group-hover:text-white">
              <span>{lang === 'vi' ? 'Xem hồ sơ' : 'View Profile'}</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </a>

          {/* 2. Zalo Connect */}
          <a
            href={PERSONAL_INFO.zalo}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 sm:p-6 rounded-2xl bg-white/5 hover:bg-[#0068FF] border border-white/10 hover:border-transparent transition-all duration-200 group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <MessageSquare className="w-5 h-5 text-[#0068FF] group-hover:text-white transition-colors" />
              </div>
              <span className="text-xs font-mono uppercase text-slate-400 group-hover:text-blue-200 block mb-1">
                Direct Messaging
              </span>
              <h3 className="text-base font-bold text-white">Zalo Connect</h3>
            </div>
            <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 group-hover:text-white">
              <span>{lang === 'vi' ? 'Nhắn tin qua Zalo' : 'Message on Zalo'}</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </a>

          {/* 3. Phone Number / Hotline */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between group hover:border-emerald-500/40 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center mb-4">
                <Phone className="w-5 h-5 text-emerald-400" />
              </div>
              <span className="text-xs font-mono uppercase text-slate-400 block mb-1">
                {lang === 'vi' ? 'HOTLINE / ĐIỆN THOẠI' : 'PHONE NUMBER'}
              </span>
              <h3 className="text-base font-bold text-white truncate" title={PERSONAL_INFO.phone}>
                {PERSONAL_INFO.phoneDisplay}
              </h3>
            </div>
            <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs">
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1"
              >
                <span>{lang === 'vi' ? 'Gọi ngay' : 'Call Now'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={handleCopyPhone}
                className="text-slate-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                title="Copy phone number"
              >
                {copiedPhone ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-medium">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* 4. Direct Email */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center mb-4">
                <Mail className="w-5 h-5 text-blue-400" />
              </div>
              <span className="text-xs font-mono uppercase text-slate-400 block mb-1">
                Direct Email
              </span>
              <h3 className="text-base font-bold text-white truncate" title={PERSONAL_INFO.email}>
                {PERSONAL_INFO.email}
              </h3>
            </div>
            <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1"
              >
                <span>{lang === 'vi' ? 'Gửi email' : 'Send Email'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={handleCopyEmail}
                className="text-slate-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                title="Copy email"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-medium">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* 5. Optional CV Download */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center mb-4">
                <FileText className="w-5 h-5 text-purple-400" />
              </div>
              <span className="text-xs font-mono uppercase text-slate-400 block mb-1">
                Executive Profile
              </span>
              <h3 className="text-base font-bold text-white">Curriculum Vitae</h3>
            </div>
            <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span className="italic text-[11px] text-slate-400">
                {lang === 'vi' ? 'Cung cấp theo yêu cầu' : 'Available on request'}
              </span>
              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Request%20CV%20-%20Dang%20Vu%20Thuy%20Ngan`}
                className="text-blue-400 hover:text-blue-300 font-semibold"
              >
                {lang === 'vi' ? 'Yêu cầu CV' : 'Request CV'}
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
