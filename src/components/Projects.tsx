import React from 'react';
import { PROJECT_ITEMS } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';

interface ProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  return (
    <section
      id="projects"
      className="w-full py-20 sm:py-28 md:py-36 px-6 sm:px-10 md:px-14 lg:px-16 bg-[#F5F5F3] border-b border-black/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#2563EB] uppercase">
                03 — Selected Work
              </span>
              <div className="h-px w-12 bg-[#2563EB]/30" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#111111] tracking-tight max-w-2xl">
              Projects that moved people &amp; culture forward.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#666666] max-w-md">
            Case studies showcasing strategic internal communications, values-driven culture programs, and digital engagement ecosystems.
          </p>
        </div>

        {/* Alternating Project Cards List */}
        <div className="flex flex-col gap-12 sm:gap-16">
          {PROJECT_ITEMS.map((project, index) => {
            const isImageLeft = index % 2 === 0;

            return (
              <div
                key={project.id}
                className="group relative bg-white rounded-[28px] sm:rounded-[36px] overflow-hidden border border-black/5 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 items-center ${
                    isImageLeft ? '' : 'lg:grid-flow-dense'
                  }`}
                >
                  {/* Image Column */}
                  <div
                    className={`lg:col-span-7 h-72 sm:h-96 lg:h-[480px] overflow-hidden relative ${
                      isImageLeft ? '' : 'lg:col-start-6'
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

                    {/* Accent Tag Badge */}
                    <div className="absolute top-6 left-6 z-10">
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md text-[#111111] shadow-md">
                        <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
                        {project.accentTag}
                      </span>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div
                    className={`lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between gap-6 ${
                      isImageLeft ? '' : 'lg:col-start-1'
                    }`}
                  >
                    <div className="flex flex-col gap-3">
                      {/* Meta Tags */}
                      <div className="flex items-center gap-3 text-xs font-semibold text-[#2563EB]">
                        <span>{project.category}</span>
                        <span className="text-[#CCCCCC]">•</span>
                        <span className="text-[#666666] flex items-center gap-1 font-normal">
                          <Calendar className="w-3.5 h-3.5" />
                          {project.year}
                        </span>
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight group-hover:text-[#2563EB] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#777777]">
                        {project.subtitle}
                      </p>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-[#555555] leading-relaxed mt-2">
                        {project.description}
                      </p>
                    </div>

                    {/* View Project Action */}
                    <div className="pt-4 border-t border-black/5 flex items-center justify-between">
                      <button
                        onClick={() => onSelectProject(project)}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#111111] group-hover:text-[#2563EB] transition-colors cursor-pointer py-1"
                      >
                        <span>View Case Study</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#2563EB]" />
                      </button>

                      <span className="text-xs font-mono text-[#999999]">
                        0{index + 1} / 0{PROJECT_ITEMS.length}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
