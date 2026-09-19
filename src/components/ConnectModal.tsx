import React, { useState } from 'react';
import { X, Mail, Check, Copy, ArrowRight, Linkedin, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConnectModal: React.FC<ConnectModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    topic: 'Culture Transformation',
    message: '',
  });

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-white rounded-[32px] shadow-2xl border border-black/10 text-[#111111] p-6 sm:p-10 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#F5F5F3] hover:bg-[#ECECEA] flex items-center justify-center text-[#555555] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <span className="text-xs font-semibold tracking-widest text-[#2563EB] uppercase">
            Let’s Connect
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight mt-1">
            Start a Conversation
          </h2>
          <p className="text-sm text-[#666666] mt-2">
            Whether you want to revitalise your company culture, redesign your all-hands, or exchange perspectives on AI in internal comms.
          </p>
        </div>

        {/* Quick Email & LinkedIn Bar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6 p-4 rounded-2xl bg-[#F9F9F8] border border-black/5">
          <div className="flex-1 flex items-center justify-between gap-2 px-3 py-2 bg-white rounded-xl border border-black/5">
            <div className="flex items-center gap-2 overflow-hidden text-xs">
              <Mail className="w-4 h-4 text-[#2563EB] shrink-0" />
              <span className="font-mono text-[#333333] truncate">
                {PERSONAL_INFO.email}
              </span>
            </div>
            <button
              onClick={handleCopyEmail}
              className="px-2.5 py-1 text-xs font-semibold text-[#2563EB] hover:bg-blue-50 rounded-lg flex items-center gap-1 transition-colors cursor-pointer shrink-0"
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-600 font-medium">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0A66C2] hover:bg-[#084e96] text-white text-xs font-semibold transition-colors cursor-pointer shrink-0"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn Profile</span>
          </a>
        </div>

        {/* Interactive Inquiry Form */}
        {submitted ? (
          <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-100 text-center flex flex-col items-center gap-3 animate-in fade-in">
            <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-emerald-950">
              Message Received
            </h3>
            <p className="text-sm text-emerald-800 max-w-sm">
              Thank you for reaching out, {formData.name || 'there'}! I will get back to you via <span className="font-semibold">{formData.email || PERSONAL_INFO.email}</span> shortly.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-3 px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold rounded-full transition-colors cursor-pointer"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#444444] mb-1.5 uppercase tracking-wider">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Jane Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-black/10 bg-[#FBFBFA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB] text-sm text-[#111111]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#444444] mb-1.5 uppercase tracking-wider">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="jane@organization.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-black/10 bg-[#FBFBFA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB] text-sm text-[#111111]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#444444] mb-1.5 uppercase tracking-wider">
                Inquiry Topic
              </label>
              <select
                value={formData.topic}
                onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-black/10 bg-[#FBFBFA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB] text-sm text-[#111111]"
              >
                <option value="Culture Transformation">Corporate Culture Transformation</option>
                <option value="Internal Communication Strategy">Internal Communication Architecture</option>
                <option value="Townhall & Internal Events">Townhalls &amp; High-Impact Events</option>
                <option value="AI in Internal Comms">AI for Internal Communications</option>
                <option value="Advisory / Speaking">Speaking &amp; Advisory</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#444444] mb-1.5 uppercase tracking-wider">
                Message / Brief
              </label>
              <textarea
                rows={3}
                required
                placeholder="Tell me about your team, current cultural goals, or project scope..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-black/10 bg-[#FBFBFA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB] text-sm text-[#111111]"
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-full py-3.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-full font-medium text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25 transition-all cursor-pointer"
            >
              <span>Send Message</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
