import React, { useEffect } from 'react';
import { X, CheckCircle2, Calendar, Tag, ArrowRight } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onConnect: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onConnect,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-[32px] shadow-2xl border border-black/10 text-[#111111] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white border border-black/10 flex items-center justify-center text-[#111111] shadow-md transition-transform hover:scale-105 cursor-pointer"
          aria-label="Close Project Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image Header */}
        <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden rounded-t-[32px]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#2563EB] text-white">
                {project.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-sm text-white flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {project.year}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-10 flex flex-col gap-8">
          {/* Subtitle & Overview */}
          <div>
            <h3 className="text-xl font-bold text-[#111111] mb-3">
              {project.subtitle}
            </h3>
            <p className="text-base sm:text-lg text-[#444444] leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#F9F9F8] p-6 sm:p-8 rounded-2xl border border-black/5">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#888888] mb-2 flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>The Challenge</span>
              </h4>
              <p className="text-sm text-[#333333] leading-relaxed">
                {project.challenge || 'Navigating organizational alignment during rapid strategic transition.'}
              </p>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#888888] mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Strategic Communication Approach</span>
              </h4>
              <p className="text-sm text-[#333333] leading-relaxed">
                {project.solution || 'Designed structured feedback loops, multi-tiered narrative playbooks, and manager micro-habits.'}
              </p>
            </div>
          </div>

          {/* Impact Metrics */}
          {project.impactMetrics && project.impactMetrics.length > 0 && (
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#111111]">
                Measurable Impact &amp; Results
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.impactMetrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-[#1E3A8A]">
                      {metric}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Scope Deliverables */}
          {project.scopeDeliverables && (
            <div className="flex flex-col gap-2 pt-4 border-t border-black/5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#888888]">
                Key Deliverables
              </h4>
              <ul className="flex flex-wrap gap-2">
                {project.scopeDeliverables.map((item, idx) => (
                  <li
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-[#ECECEA] text-xs font-medium text-[#222222]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Bottom Action Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-black/10">
            <p className="text-xs text-[#777777]">
              Interested in implementing a similar culture framework at your organization?
            </p>
            <button
              onClick={() => {
                onClose();
                onConnect();
              }}
              className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-medium px-6 py-3 rounded-full transition-all cursor-pointer shadow-md"
            >
              <span>Discuss This Program</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
