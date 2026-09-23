import React, { useState } from 'react';
import { CASE_STUDIES, SELECTED_WORK_DATA } from '../data/portfolioData';
import { CaseStudy, Language, SelectedWorkItem } from '../types';
import { ProjectModal } from './ProjectModal';
import {
  ArrowRight,
  ArrowUpRight,
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

/* ==============================================================
   6 MINIMALIST SINGLE-COLOR BLUE LINE ILLUSTRATIONS (SVGs)
   Matching the visual family from the approved mockup
   ============================================================== */

// Chapter 06: Institution / University building with clock tower & trees
const Illustration06 = () => (
  <svg viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-12 text-[#0060FF]">
    <path d="M40 7V13M40 13L34 19H46L40 13Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="35" y="19" width="10" height="11" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="40" cy="24.5" r="2" stroke="currentColor" strokeWidth="1.5" />
    <rect x="24" y="30" width="32" height="24" stroke="currentColor" strokeWidth="1.5" />
    <path d="M22 30L40 21L58 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M37 54V45C37 43.3431 38.3431 42 40 42C41.6569 42 43 43.3431 43 45V54" stroke="currentColor" strokeWidth="1.5" />
    <rect x="27" y="34" width="4" height="6" rx="0.5" stroke="currentColor" strokeWidth="1.5" />
    <rect x="49" y="34" width="4" height="6" rx="0.5" stroke="currentColor" strokeWidth="1.5" />
    <rect x="27" y="44" width="4" height="6" rx="0.5" stroke="currentColor" strokeWidth="1.5" />
    <rect x="49" y="44" width="4" height="6" rx="0.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M14 54V42M14 42C11 42 9 38 11 35C13 32 17 33 17 36C19 37 18 42 14 42Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M66 54V42M66 42C63 42 61 38 63 35C65 32 69 33 69 36C71 37 70 42 66 42Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 54H72" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// Chapter 05: Interconnected puzzle / jigsaw pieces
const Illustration05 = () => (
  <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14 text-[#0060FF]">
    <path
      d="M18 30V18C18 16.9 18.9 16 20 16H27C27 13.8 28.8 12 31 12C33.2 12 35 13.8 35 16H42C43.1 16 44 16.9 44 18V25C46.2 25 48 26.8 48 29C48 31.2 46.2 33 44 33V40C44 41.1 43.1 42 42 42H33"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 30H27C27 32.2 28.8 34 31 34C33.2 34 35 32.2 35 30H42V40H33C33 42.2 31.2 44 29 44C26.8 44 25 42.2 25 40H18C16.9 40 16 39.1 16 38V31C13.8 31 12 29.2 12 27C12 24.8 13.8 23 16 23V19"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Chapter 04: Bar chart with upward trend arrow
const Illustration04 = () => (
  <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-13 h-13 text-[#0060FF]">
    <rect x="14" y="38" width="5" height="14" rx="0.5" stroke="currentColor" strokeWidth="1.5" />
    <rect x="23" y="30" width="5" height="22" rx="0.5" stroke="currentColor" strokeWidth="1.5" />
    <rect x="32" y="24" width="5" height="28" rx="0.5" stroke="currentColor" strokeWidth="1.5" />
    <rect x="41" y="16" width="5" height="36" rx="0.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 38C20 30 31 18 46 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M40 10H46V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 52H50" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// Chapter 03: Three figures with floating heart
const Illustration03 = () => (
  <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-13 h-13 text-[#0060FF]">
    <path
      d="M30 18C28.2 15 24.8 15 23.8 17.2C22.8 19.5 24.8 22.2 30 25.8C35.2 22.2 37.2 19.5 36.2 17.2C35.2 15 31.8 15 30 18Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="30" cy="33" r="3.8" stroke="currentColor" strokeWidth="1.5" />
    <path d="M23.5 48C23.5 43.5 26.5 40.5 30 40.5C33.5 40.5 36.5 43.5 36.5 48" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="19" cy="37" r="3.4" stroke="currentColor" strokeWidth="1.5" />
    <path d="M14 50C14 46.5 16.5 44.5 19 44.5C20.5 44.5 22 45.2 23 46.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="41" cy="37" r="3.4" stroke="currentColor" strokeWidth="1.5" />
    <path d="M37 46.5C38 45.2 39.5 44.5 41 44.5C43.5 44.5 46 46.5 46 50" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// Chapter 02: Megaphone with radiating sound waves
const Illustration02 = () => (
  <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-13 h-13 text-[#0060FF]">
    <path d="M17 27L32 20V40L17 33V27Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="12" y="26" width="5" height="8" rx="0.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M21 32V40C21 41 21.8 41.8 22.8 41.8H24.2C25.2 41.8 26 41 26 40V30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M36 23C38.5 25.5 38.5 34.5 36 37" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M41 19C45 23.5 45 36.5 41 41" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M46 15C52 21.5 52 38.5 46 45" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// Chapter 01: Sprouting seedling
const Illustration01 = () => (
  <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-13 h-13 text-[#0060FF]">
    <path d="M14 47H46" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M30 47V25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M30 33C22 33 18 27 20 21C26 21 30 27 30 33Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M30 29C38 29 42 23 40 17C34 17 30 23 30 29Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M26 47L24 51.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M30 47V52.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M34 47L36 51.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

/* ==============================================================
   6 CAREER CHAPTERS SPECIFICATION (STRICT MOCKUP ADHERENCE)
   ============================================================== */
interface ChapterConfig {
  id: string;
  number: string;
  year: string;
  spineStatus?: { vi: string; en: string };
  keyword: { vi: string; en: string };
  period: { vi: string; en: string };
  title: { vi: string; en: string };
  organization: { vi: string; en: string };
  narrative: { vi: string; en: string };
  handwrittenNote: { vi: string; en: string };
  Illustration: React.FC;
  relatedWork: ChapterRelatedItem[];
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

  const chapters: ChapterConfig[] = [
    {
      id: 'ch-01',
      number: '06',
      year: '2025',
      spineStatus: { vi: 'HIỆN TẠI', en: 'PRESENT' },
      keyword: { vi: 'Lan tỏa', en: 'Scale' },
      period: { vi: 'Tháng 4/2025 đến nay', en: 'Apr 2025 to Present' },
      title: {
        vi: 'FPT University: Dẫn dắt trải nghiệm quy mô lớn',
        en: 'FPT University: Leading Experience at Scale',
      },
      organization: {
        vi: 'Trường Đại học FPT TP.HCM',
        en: 'FPT University HCMC',
      },
      narrative: {
        vi: 'Đảm nhiệm vai trò Trưởng phòng Công tác Sinh viên (Head of Student Relations Office). Tôi dẫn dắt các hoạt động và chương trình hướng đến trải nghiệm, sự phát triển và gắn kết của sinh viên, đồng thời ứng dụng dữ liệu và AI để nâng cao hiệu quả vận hành.',
        en: 'As Head of Student Relations Office, I directly lead student development programs, inspire and connect student communities, while leveraging data and AI to enhance operational effectiveness.',
      },
      handwrittenNote: {
        vi: 'Cho thế hệ tương lai',
        en: 'For the next generation',
      },
      Illustration: Illustration06,
      relatedWork: [
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
      ],
    },
    {
      id: 'ch-02',
      number: '05',
      year: '2024',
      keyword: { vi: 'Hệ thống', en: 'System' },
      period: { vi: 'Tháng 7/2024 đến 3/2025', en: 'Jul 2024 to Mar 2025' },
      title: {
        vi: 'transcosmos Vietnam: Định hình Văn hóa Doanh nghiệp & Hệ thống Quản trị Trải nghiệm Nhân sự',
        en: 'transcosmos Vietnam: Shaping Corporate Culture & Employee Experience Systems',
      },
      organization: {
        vi: 'transcosmos Vietnam',
        en: 'transcosmos Vietnam',
      },
      narrative: {
        vi: 'Đảm nhận vai trò Phát triển Tổ chức tại transcosmos Vietnam, tôi đồng thời từng bước định hình và xây dựng bản sắc văn hóa doanh nghiệp phù hợp với nhân sự Việt Nam cho một tập đoàn Nhật Bản đã hiện diện 10 năm. Song song đó, tôi thiết lập hệ thống giữ chân nhân sự cốt lõi, chuẩn hóa khung năng lực và thúc đẩy mức độ gắn kết cho đội ngũ trong môi trường BPO quy mô lớn.',
        en: 'In an Organizational Development role at transcosmos Vietnam, I helped shape and build a corporate culture that resonated with the Vietnamese workforce within a Japanese corporation with a 10-year presence in Vietnam. In parallel, I established core employee retention systems, standardized competency frameworks, and strengthened employee engagement across a large-scale BPO environment.',
      },
      handwrittenNote: {
        vi: 'Hệ thống\nTrải nghiệm\nNhân sự',
        en: 'People\nExperience\nSystems',
      },
      Illustration: Illustration05,
      relatedWork: [
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
      ],
    },
    {
      id: 'ch-03',
      number: '04',
      year: '2023',
      keyword: { vi: 'Mở rộng', en: 'Expand' },
      period: { vi: '2023 đến 2024', en: '2023 to 2024' },
      title: {
        vi: 'Savvycom: Mở rộng sang People & Culture toàn diện',
        en: 'Savvycom: Expanding into People & Culture',
      },
      organization: {
        vi: 'Savvycom',
        en: 'Savvycom',
      },
      narrative: {
        vi: 'Đảm nhiệm vai trò People & Culture Lead tại Savvycom. Dẫn dắt toàn diện các mảng truyền thông nội bộ, văn hóa tổ chức, EVP, L&D và các sáng kiến CSR gắn kết nhân sự công nghệ.',
        en: 'As People & Culture Lead at Savvycom, I took ownership of internal communication, organizational culture, employer branding (EVP), L&D, and CSR initiatives in a fast-growing tech environment.',
      },
      handwrittenNote: {
        vi: 'Công nghệ\nNhững tác động\nTích cực',
        en: 'Tech\nPeople\nPositive Impact',
      },
      Illustration: Illustration04,
      relatedWork: [
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
      ],
    },
    {
      id: 'ch-04',
      number: '03',
      year: '2020',
      keyword: { vi: 'Kiến tạo\nvăn hóa', en: 'Culture' },
      period: { vi: '2020 đến 2023', en: '2020 to 2023' },
      title: {
        vi: 'F88, CMC & Vua Nệm: Bước chuyển mình từ Truyền thông nội bộ sang Phát triển Văn hóa',
        en: 'F88, CMC & Vua Nệm: From Internal Communication to Culture Development',
      },
      organization: {
        vi: 'F88 | CMC Corporation | Vua Nệm',
        en: 'F88 | CMC Corporation | Vua Nệm',
      },
      narrative: {
        vi: 'Giai đoạn chuyển dịch quan trọng tại F88, CMC và Vua Nệm, đánh dấu hành trình nghề nghiệp tiến xa hơn từ Truyền thông nội bộ sang Kích hoạt Văn hóa và Dẫn dắt Thay đổi. Qua đó, tôi góp phần đồng bộ hóa giá trị cốt lõi của doanh nghiệp, chuyển hóa giá trị thành thói quen và hành vi hằng ngày, kết nối hội sở với hàng trăm cửa hàng bán lẻ và hàng ngàn nhân sự.',
        en: 'A pivotal stage across F88, CMC, and Vua Nệm, marking my professional transition from Internal Communication into Culture Activation and Change Leadership. I helped align organizational core values and translate them into everyday habits and behaviors, connecting headquarters with hundreds of retail stores and thousands of employees.',
      },
      handwrittenNote: {
        vi: 'Từ Truyền thông\nđến Văn hóa',
        en: 'From Communication\nto Culture',
      },
      Illustration: Illustration03,
      relatedWork: [
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
      ],
    },
    {
      id: 'ch-05',
      number: '02',
      year: '2019',
      keyword: { vi: 'Tìm tiếng nói', en: 'Voice' },
      period: { vi: '2019 đến 2020', en: '2019 to 2020' },
      title: {
        vi: 'Bellsystem24-Hoasao: Định hình Lối đi trong Truyền thông Nội bộ',
        en: 'Bellsystem24-Hoasao: Finding My Path in Internal Communication',
      },
      organization: {
        vi: 'Bellsystem24-Hoasao',
        en: 'Bellsystem24-Hoasao',
      },
      narrative: {
        vi: 'Đảm nhiệm vai trò Chuyên viên Truyền thông nội bộ tại Bellsystem24-Hoasao, tôi phụ trách sản xuất các bản tin Radio nội bộ, sự kiện nội bộ và thiết lập mạng lưới kết nối nhân sự cho đội ngũ trực ca 24/7 trên toàn quốc.',
        en: 'As an Internal Communication Executive at Bellsystem24-Hoasao, I produced internal radio content and employee events while building a communication network that connected 24/7 shift-based teams across Vietnam.',
      },
      handwrittenNote: {
        vi: 'Những câu chuyện\nKết nối',
        en: 'Stories\nthat\nConnect',
      },
      Illustration: Illustration02,
      relatedWork: [
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
      ],
    },
    {
      id: 'ch-06',
      number: '01',
      year: '2018',
      keyword: { vi: 'Con người', en: 'People' },
      period: { vi: '2018 đến 2019', en: '2018 to 2019' },
      title: {
        vi: 'FPT University: Nơi Khởi đầu Hành trình',
        en: 'FPT University: Where the Journey Began',
      },
      organization: {
        vi: 'Trường Đại học FPT TP.HCM',
        en: 'FPT University HCMC',
      },
      narrative: {
        vi: 'Khởi đầu sự nghiệp tại Đại học FPT với trọng tâm là kết nối con người và khơi dậy tinh thần lãnh đạo (Leadership) trong cộng đồng sinh viên thông qua các hoạt động câu lạc bộ. Đây chính là nơi đúc kết nên niềm tin cốt lõi của tôi: Một cộng đồng bền vững luôn bắt đầu từ sự thấu hiểu sâu sắc và cảm giác thuộc về.',
        en: 'I began my career at FPT University with a focus on connecting people and fostering leadership within the student community through club activities. This is where I formed a belief that continues to shape my work: a sustainable community begins with deep understanding and a sense of belonging.',
      },
      handwrittenNote: {
        vi: 'Cùng một niềm tin\nvề một tương lai\ntốt đẹp hơn',
        en: 'Same belief\nA brighter\ntomorrow',
      },
      Illustration: Illustration01,
      relatedWork: [
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
      ],
    },
  ];

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
      className="w-full py-16 sm:py-24 md:py-28 px-4 sm:px-8 md:px-12 lg:px-16 bg-[#f8fbff] border-b border-slate-200/70 relative overflow-hidden"
    >
      {/* ============================================================== */}
      {/* PAGE-LEVEL ATMOSPHERIC LIGHTING SYSTEM                         */}
      {/* Exact color recipe from Homepage Hero (Hero.tsx lines 40-64)   */}
      {/* ============================================================== */}
      {/* Layer 0A: Hero Right Radial Glow 1 (Ellipse at center) */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: '-40px',
          top: '-20px',
          width: '600px',
          height: '450px',
          background: 'radial-gradient(ellipse at center, rgba(175, 215, 255, 0.55) 0%, rgba(248, 251, 255, 0) 70%)',
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      {/* Layer 0B: Hero Right Radial Glow 2 (Circle at center) */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: '60px',
          top: '40px',
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle at center, rgba(185, 225, 255, 0.45) 0%, rgba(248, 251, 255, 0) 65%)',
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      {/* Transition Glow: Hero -> Career Chapters */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: '20%',
          top: '280px',
          width: '650px',
          height: '350px',
          background: 'radial-gradient(ellipse at center, rgba(185, 225, 255, 0.35) 0%, rgba(248, 251, 255, 0) 70%)',
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      {/* Career Spine Upper Atmospheric Depth (Left) */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: '-80px',
          top: '420px',
          width: '450px',
          height: '750px',
          background: 'radial-gradient(ellipse at center, rgba(175, 215, 255, 0.30) 0%, rgba(248, 251, 255, 0) 70%)',
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      {/* Mid Chapters Organic Depth (Right Edge) */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: '-80px',
          top: '950px',
          width: '500px',
          height: '700px',
          background: 'radial-gradient(ellipse at center, rgba(185, 225, 255, 0.30) 0%, rgba(248, 251, 255, 0) 70%)',
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      {/* Career Spine Lower Atmospheric Depth (Left) */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: '-60px',
          bottom: '260px',
          width: '400px',
          height: '650px',
          background: 'radial-gradient(ellipse at center, rgba(185, 225, 255, 0.25) 0%, rgba(248, 251, 255, 0) 70%)',
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      {/* Bottom Chapters Ambient Wash */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: '15%',
          bottom: '-40px',
          width: '500px',
          height: '450px',
          background: 'radial-gradient(ellipse at center, rgba(175, 215, 255, 0.25) 0%, rgba(248, 251, 255, 0) 70%)',
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16 relative z-10">
        {/* ============================================================== */}
        {/* 1. HERO HEADER: EXACT HIERARCHY + SUBTLE ATMOSPHERE            */}
        {/* ============================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-4">
          {/* Left: Eyebrow + Headline */}
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-0.5 w-6 bg-[#0060FF]" />
              <span className="text-xs font-bold tracking-widest text-[#0060FF] uppercase font-mono">
                {lang === 'vi' ? 'HÀNH TRÌNH & TRẢI NGHIỆM' : 'CAREER & EXPERIENCE'}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
              {lang === 'vi' ? (
                <>
                  Hành trình &amp; Trải nghiệm:<br />
                  <span className="text-[#0060FF]">
                    Gắn kết Con người bằng<br />Sứ mệnh.
                  </span>
                </>
              ) : (
                <>
                  Career &amp; Experience:<br />
                  <span className="text-[#0060FF]">
                    Connecting People with<br />Purpose.
                  </span>
                </>
              )}
            </h1>
          </div>

          {/* Right: Soft Blue Atmospheric Glow with Freely Floating Handwritten Statement (NO Portrait, NO Borders/Circles) */}
          <div className="relative shrink-0 flex items-center justify-center p-6 sm:p-10 select-none min-w-[260px] min-h-[180px]">
            {/* Handwritten statement floating naturally without container borders */}
            <div className="relative z-10 font-handwriting text-[#0060FF] text-2xl sm:text-3xl leading-snug text-center -rotate-6 font-medium tracking-wide">
              People<br />
              Culture<br />
              <span className="text-xl sm:text-2xl">A Better Tomorrow</span>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* 2. CAREER SPINE + CHAPTER CARDS COMPOSITION                     */}
        {/* ============================================================== */}
        <div className="space-y-6 sm:space-y-8">
          {chapters.map((chapter) => {
            const isExpanded = expandedChapterId === chapter.id;

            return (
              <div key={chapter.id} className="flex flex-col md:flex-row items-stretch gap-4 md:gap-6 lg:gap-8">
                {/* CAREER SPINE (LEFT COLUMN ON DESKTOP/TABLET) */}
                <div className="md:w-32 lg:w-36 shrink-0 relative flex md:flex-col items-center md:items-end justify-between md:justify-start pt-1 md:pr-6">
                  {/* Vertical Line spanning from node to bottom on desktop */}
                  <div className="hidden md:block absolute right-0 top-3 bottom-[-32px] w-[1.5px] bg-[#0060FF]/20" />

                  {/* Node Circle on the line */}
                  <div className="hidden md:block absolute right-[-5px] top-4 w-3 h-3 rounded-full bg-[#0060FF] ring-4 ring-white shadow-xs z-10" />

                  {/* Year & Status */}
                  <div className="text-right flex md:flex-col items-center md:items-end gap-2 md:gap-0.5">
                    {chapter.spineStatus && (
                      <span className="text-[10px] font-bold font-mono text-emerald-600 uppercase tracking-wider block">
                        {chapter.spineStatus[lang]}
                      </span>
                    )}
                    <span className="font-mono text-xs text-slate-500 font-semibold block">
                      {chapter.year}
                    </span>
                  </div>

                  {/* Large Chapter Number */}
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black font-mono text-[#0060FF] tracking-tight leading-none my-1">
                    {chapter.number}
                  </div>

                  {/* Signature Keyword */}
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 md:text-right whitespace-pre-line leading-tight">
                    {chapter.keyword[lang]}
                  </div>
                </div>

                {/* CHAPTER CARD (RIGHT COLUMN) */}
                <div
                  className={`flex-1 relative bg-white rounded-2xl sm:rounded-3xl border transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between overflow-hidden group ${
                    isExpanded
                      ? 'border-[#0060FF]/50 shadow-[0_8px_30px_rgba(0,96,255,0.08)] ring-1 ring-[#0060FF]/20'
                      : 'border-blue-100/80 shadow-[0_4px_20px_rgba(0,96,255,0.03)] hover:border-[#0060FF]/30 hover:shadow-[0_6px_24px_rgba(0,96,255,0.06)]'
                  }`}
                >
                  {/* Subtle right-side pale blue background gradient (Homepage recipe) */}
                  <div
                    className="absolute right-0 top-0 bottom-0 w-2/5 pointer-events-none"
                    style={{
                      background: 'linear-gradient(to left, rgba(185, 225, 255, 0.28) 0%, rgba(248, 251, 255, 0) 100%)',
                    }}
                  />

                  {/* Card Content Row */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 relative z-10">
                    {/* Left Side: Chapter Label, Period, Title, Org, Narrative, CTA */}
                    <div className="flex-1 max-w-2xl">
                      {/* Top Meta: Pill Badge + Period */}
                      <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
                        <span className="px-3 py-1 rounded-full bg-[#0060FF]/10 text-[#0060FF] font-bold text-xs font-mono">
                          Chapter {chapter.number}
                        </span>
                        <span className="text-xs font-medium text-slate-500 font-mono">
                          {chapter.period[lang]}
                        </span>
                      </div>

                      {/* Chapter Title */}
                      <h2 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 tracking-tight leading-snug">
                        {chapter.title[lang]}
                      </h2>

                      {/* Organization */}
                      <p className="text-xs font-semibold text-[#0060FF] mt-1">
                        {chapter.organization[lang]}
                      </p>

                      {/* Concise 1–2 sentence narrative */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2.5">
                        {chapter.narrative[lang]}
                      </p>

                      {/* ONE Disclosure CTA Only (NO count displayed) */}
                      <div className="mt-4 pt-4 border-t border-slate-100/90 flex items-center justify-between">
                        <button
                          onClick={() => toggleChapter(chapter.id)}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0060FF] hover:text-[#0052CC] cursor-pointer transition-colors group"
                        >
                          <span>
                            {isExpanded
                              ? (lang === 'vi' ? 'Thu gọn dự án liên quan ↑' : 'Hide related work ↑')
                              : (lang === 'vi' ? 'Xem các dự án liên quan ↓' : 'Explore related work ↓')}
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* Right Side: Pale Blue Zone + Minimal Line Illustration + Handwritten Note */}
                    <div className="hidden sm:flex flex-col items-center justify-center shrink-0 w-36 lg:w-44 pl-2 relative">
                      {/* Atmospheric glow behind the illustration zone (Homepage recipe) */}
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background: 'radial-gradient(circle at center, rgba(175, 215, 255, 0.40) 0%, rgba(248, 251, 255, 0) 70%)',
                        }}
                      />

                      {/* Pale Blue Circular Backplate Container (Remains separate from atmospheric gradient) */}
                      <div className="relative z-10 w-20 h-20 lg:w-22 lg:h-22 rounded-full bg-blue-50/70 border border-blue-100/60 flex items-center justify-center mb-2 shadow-2xs">
                        <chapter.Illustration />
                      </div>

                      {/* Handwritten Annotation in Caveat Font (Option B: English decorative stamp for pure glyph rendering) */}
                      <div className="relative z-10 font-handwriting text-[#0060FF] text-sm lg:text-base leading-tight text-center -rotate-3 font-medium whitespace-pre-line tracking-wide">
                        {chapter.handwrittenNote.en}
                      </div>
                    </div>
                  </div>

                  {/* Circular Arrow Button (Visual Touch matching mockup) */}
                  <div className="hidden lg:flex w-7 h-7 rounded-full border border-slate-200 group-hover:border-[#0060FF] text-slate-400 group-hover:text-[#0060FF] items-center justify-center transition-all absolute right-5 bottom-5">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>

                  {/* ========================================================== */}
                  {/* EXPANDED ACCORDION: COMPACT RELATED WORK (CASE STUDY & PROJECT) */}
                  {/* ========================================================== */}
                  {isExpanded && (
                    <div className="mt-5 pt-5 border-t border-slate-100 animate-in fade-in duration-200 relative z-10">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {chapter.relatedWork.map((item) => (
                          <div
                            key={item.id}
                            onClick={() => handleItemClick(item)}
                            className="group/item cursor-pointer bg-slate-50 hover:bg-blue-50/50 border border-slate-200/90 hover:border-[#0060FF]/50 rounded-xl p-3.5 transition-all flex flex-col justify-between"
                          >
                            <div>
                              <div className="flex items-center justify-between gap-2 mb-2">
                                <span
                                  className={`px-2 py-0.5 rounded-full text-[9px] font-bold font-mono uppercase tracking-wider ${
                                    item.type === 'case-study'
                                      ? 'bg-[#0060FF]/10 text-[#0060FF]'
                                      : 'bg-purple-100 text-purple-700'
                                  }`}
                                >
                                  {item.type === 'case-study' ? 'CASE STUDY' : 'PROJECT'}
                                </span>
                                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover/item:text-[#0060FF] transition-colors" />
                              </div>

                              <h3 className="text-xs sm:text-[13px] font-bold text-slate-900 group-hover/item:text-[#0060FF] transition-colors leading-snug line-clamp-2">
                                {item.title[lang]}
                              </h3>

                              <p className="text-[11px] text-slate-500 line-clamp-2 mt-1 leading-relaxed">
                                {item.description[lang]}
                              </p>
                            </div>

                            <div className="mt-3 pt-2 border-t border-slate-200/60 flex items-center justify-between text-[10px] font-semibold text-[#0060FF]">
                              <span>{lang === 'vi' ? 'Xem chi tiết' : 'View details'}</span>
                              <ArrowRight className="w-3 h-3 group-hover/item:translate-x-0.5 transition-transform" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {/* Spine Bottom Note (Matching Mockup) */}
          <div className="flex items-center gap-4 md:gap-6 lg:gap-8 pt-2">
            <div className="md:w-32 lg:w-36 shrink-0 md:text-right">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 leading-tight block">
                {lang === 'vi' ? (
                  <>
                    PHIÊN BẢN TỐT HƠN<br />
                    CỦA CHÍNH MÌNH
                  </>
                ) : (
                  <>
                    A SMALLER ME<br />
                    A BRIGHTER TOMORROW
                  </>
                )}
              </span>
            </div>
            <div className="flex-1" />
          </div>
        </div>

        {/* Section Bottom Next CTA */}
        {onNavigateNext && (
          <div className="pt-8 border-t border-slate-200 flex justify-end">
            <button
              onClick={onNavigateNext}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0060FF] hover:bg-[#0050DF] text-white text-xs font-semibold shadow-sm transition-all cursor-pointer"
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
              <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0060FF] text-[11px] font-bold font-mono">
                {selectedProjectModal.category[lang]}
              </span>
              <span className="text-xs text-slate-400 font-mono">• {selectedProjectModal.context[lang]}</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-snug">
              {selectedProjectModal.title[lang]}
            </h2>

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
