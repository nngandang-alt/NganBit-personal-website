import {
  CareerChapter,
  CaseStudy,
  CertificationItem,
  EducationItem,
  ExperienceRole,
  MethodologyStep,
  NavItem,
  PhilosophyPillar,
  SelectedWorkItem,
  VerifiedStat,
} from '../types';
import careerEvidenceFptSro from '../assets/career-evidence-fpt-sro.jpg';
import top100GrandCeremony from '../assets/top100-grand-ceremony.jpg';
import top100PinBadge from '../assets/top100-pin-badge.jpg';
import top100BackdropCurved from '../assets/top100-backdrop-curved.jpg';
import top100StageSpring2026 from '../assets/top100-stage-spring2026.jpg';
import top100HostNganbit from '../assets/top100-host-nganbit.jpg';
import top100RecognitionWall from '../assets/top100-recognition-wall.jpg';
import top100AiCheckin from '../assets/top100-ai-checkin.jpg';
import top100EmailFeedback from '../assets/top100-email-feedback.jpg';

export const PERSONAL_INFO = {
  fullName: 'ĐẶNG VŨ THÙY NGÂN',
  identity: 'THÙY NGÂN',
  shortName: 'Thùy Ngân',
  monogram: 'TN',
  domains: {
    vi: 'Internal Communication · Corporate Culture · Employee Engagement · Employee Experience',
    en: 'Internal Communication · Corporate Culture · Employee Engagement · Employee Experience',
  },
  tagline: {
    vi: 'Truyền thông · Văn hóa · Gắn kết · Trải nghiệm',
    en: 'Communication · Culture · Engagement · Experience',
  },
  corePositioning: {
    vi: 'Với tôi, truyền thông và văn hóa bắt đầu từ cách con người hiểu, cảm nhận và kết nối với nhau — để tạo nên sự gắn kết, đồng hướng và chuyển hóa thành hành động',
    en: 'To me, communication and culture begin with how people understand, feel and connect with one another — building connection, alignment and turning shared understanding into action',
  },
  heroHeadline: {
    vi: [
      'Kết nối con người',
      'Nuôi dưỡng những trải nghiệm có ý nghĩa',
      'Cùng hướng về một mục tiêu',
    ],
    en: [
      'Connecting people',
      'Nurturing meaningful experiences',
      'Aligning toward a shared purpose',
    ],
  },
  aiPhilosophy: {
    vi: 'Lấy sự thấu hiểu con người làm trọng tâm. Khai phóng hiệu quả cùng AI.',
    en: 'Human Insight First. AI Amplified.',
  },
  bioSummary: {
    vi: 'Tôi là Thùy Ngân, làm việc trong lĩnh vực Internal Communication & Corporate Culture. Hành trình của tôi đi từ truyền thông, văn hóa đến thiết kế trải nghiệm và xây dựng những hệ thống giúp con người kết nối tốt hơn với tổ chức.',
    en: 'I’m Thùy Ngân, working across Internal Communication and Corporate Culture. My journey has evolved from communication and culture into experience design and building systems that help people connect more meaningfully with their organizations.',
  },
  email: 'n.ngandang@gmail.com',
  linkedin: 'https://linkedin.com/in/thuyngandang',
  zalo: 'https://zalo.me/0909000000', // Đang chờ link chính thức từ user trong CONTENT_GAPS.md
  location: 'Ho Chi Minh City, Vietnam',
  yearsExperience: '6+',
  availabilityStatus: {
    vi: 'Sẵn sàng trao đổi về Văn hóa, Truyền thông nội bộ & Thiết kế trải nghiệm',
    en: 'Open for Culture, Internal Comms & Experience Architecture Conversations',
  },
};

export const NAV_ITEMS: NavItem[] = [
  { id: 'career', label: { vi: 'Hành trình & Kinh nghiệm', en: 'Career & Experience' }, href: '#career' },
  { id: 'philosophy', label: { vi: 'Triết lý', en: 'Philosophy' }, href: '#philosophy' },
  { id: 'cases', label: { vi: 'Case Studies', en: 'Case Studies' }, href: '#cases' },
  { id: 'work', label: { vi: 'Dự án', en: 'Selected Work' }, href: '#work' },
  { id: 'recognition', label: { vi: 'Sự công nhận', en: 'Recognition' }, href: '#recognition' },
  { id: 'approach', label: { vi: 'Phương pháp', en: 'How I Work' }, href: '#approach' },
  { id: 'education', label: { vi: 'Học vấn & Phát triển', en: 'Education & Learning' }, href: '#education' },
];

// Full-Circle Journey narrative removed per IA specifications

export const CAREER_CHAPTERS: CareerChapter[] = [
  {
    id: 'ch-01',
    number: '06',
    period: 'Apr 2025 — Present',
    isCurrent: true,
    title: {
      vi: 'FPT University: Dẫn dắt trải nghiệm quy mô lớn',
      en: 'FPT University: Leading Experience at Scale',
    },
    tagline: {
      vi: 'NOW: LEADING EXPERIENCE AT SCALE (Student Relations Officer → Head of Student Relations Office)',
      en: 'NOW: LEADING EXPERIENCE AT SCALE (Student Relations Officer → Head of Student Relations Office)',
    },
    story: {
      vi: 'Đảm nhiệm vai trò Trưởng phòng Công tác Sinh viên (Head of Student Relations Office), sau khi thăng tiến từ vị trí Cán bộ Công tác Sinh viên. Tôi dẫn dắt các hoạt động và chương trình hướng đến trải nghiệm, sự phát triển và gắn kết của sinh viên, xoay quanh ba trọng tâm: Hỗ trợ Phát triển – Truyền Cảm hứng – Kết nối Cộng đồng. Ở vai trò hiện tại, tôi tập trung xây dựng cách vận hành có hệ thống cho danh mục chương trình, cộng đồng sinh viên và các sáng kiến trải nghiệm, đồng thời ứng dụng dữ liệu và AI để nâng cao hiệu quả triển khai và trải nghiệm sinh viên.',
      en: 'Serving as Head of Student Relations Office, advancing from Student Relations Officer. I lead programs and initiatives dedicated to student experience, personal development, and engagement around three core pillars: Developmental Support – Inspiration – Community Connection. In my current role, I focus on building systematic operations for the program portfolio, student communities, and experiential initiatives, while leveraging data and AI to elevate operational effectiveness and student experience.',
    },
    coreShift: {
      from: { vi: 'Thực thi hoạt động đơn lẻ', en: 'Isolated program execution' },
      to: { vi: 'Lãnh đạo hệ thống trải nghiệm & danh mục chương trình sinh viên', en: 'Leading student experience systems & program portfolio' },
    },
    keyRealization: {
      vi: 'Lãnh đạo trải nghiệm ở quy mô lớn không chỉ là tổ chức nhiều hoạt động, mà là xây dựng một hệ thống giúp mỗi chương trình cùng hướng đến mục tiêu phát triển, truyền cảm hứng và kết nối sinh viên.',
      en: 'Leading experience at scale is not merely organizing numerous activities, but engineering a system where every program purposefully advances student development, inspiration, and community connection.',
    },
    toolkit: [
      'Program Leadership',
      'Student Experience Design',
      'Community Engagement',
      'Portfolio Management',
      'Data-informed Operations',
      'AI-Amplified Workflows',
    ],
    contextHighlight: { vi: 'Chức danh: Head of Student Relations Office (Jan 2026 — Present)', en: 'Official Title: Head of Student Relations Office (Jan 2026 — Present)' },
    verifiedRoles: [
      {
        id: 'vr-fpt-01',
        officialTitle: {
          vi: 'Head of Student Relations Office',
          en: 'Head of Student Relations Office',
        },
        company: 'Trường Đại học FPT TP.HCM',
        period: 'Apr 2025 — Present',
        location: 'TP. Hồ Chí Minh',
        workType: 'Full-time',
        progressionSteps: [
          {
            title: { vi: 'Student Relations Officer', en: 'Student Relations Officer' },
            period: 'Apr 2025 — Dec 2025',
          },
          {
            title: { vi: 'Head of Student Relations Office', en: 'Head of Student Relations Office' },
            period: 'Jan 2026 — Present',
            isCurrent: true,
          },
        ],
        scopeDistinction: {
          vi: 'Kiến tạo hệ sinh thái hỗ trợ sự phát triển và trải nghiệm của sinh viên, tập trung vào ba trọng tâm: Hỗ trợ Phát triển – Truyền Cảm hứng – Kết nối Cộng đồng, qua đó phát triển năng lực, nuôi dưỡng tinh thần học tập suốt đời và xây dựng cộng đồng sinh viên năng động, gắn kết.',
          en: 'Building an ecosystem that supports student development and experience through three core pillars: Development Support – Inspiration – Community Connection, helping students strengthen their capabilities, cultivate lifelong learning, and thrive in an active, connected community.',
        },
        actualScopeNote: {
          vi: 'Thăng tiến từ Cán bộ Công tác Sinh viên (Student Relations Officer) lên Trưởng phòng Công tác Sinh viên (Head of SRO): mở rộng từ trực tiếp điều phối hoạt động sang lãnh đạo chiến lược danh mục trải nghiệm, phát triển sinh viên và quản trị vận hành tổ chức.',
          en: 'Promoted from Student Relations Officer to Head of Student Relations Office: transition from direct program execution to strategic leadership of student experience portfolio, student development, and organizational governance.',
        },
        leadershipScope: {
          vi: 'Lãnh đạo toàn diện đội ngũ Phòng Công tác Sinh viên (SRO), mạng lưới Cộng tác viên phòng ban và chỉ đạo các ban tổ chức chương trình quy mô toàn trường.',
          en: 'Direct leadership of Student Relations Office (SRO) team, student collaborators network, and presiding over university-wide program committees.',
        },
        mandateScope: {
          vi: [
            'Hệ sinh thái CLB Học thuật & Phát triển Năng lực: Quản lý và định hướng hơn 20 câu lạc bộ học thuật với khoảng 700 thành viên; tạo bệ phóng rèn luyện năng lực chuyên môn, chuẩn bị cho các cuộc thi học thuật trong nước/quốc tế, thúc đẩy nghiên cứu khoa học sinh viên và hướng tới công bố bài báo quốc tế.',
            'Vinh danh & Khen thưởng — Kỷ luật Sinh viên: Chỉ đạo chương trình vinh danh định kỳ Top 100 Sinh viên tiêu biểu (Top 100 Student Achievement Awards) mỗi học kỳ; quản lý công tác khen thưởng, kỷ luật và hỗ trợ tâm lý/đời sống sinh viên.',
            'Trải nghiệm Sinh viên & Danh mục Chương trình Trọng điểm: Thiết kế và chỉ đạo danh mục các sự kiện trải nghiệm sinh viên quy mô lớn (trong đó TechX Camp là một flagship project tiêu biểu trong danh mục).',
            'Gắn kết Cộng đồng & Hoạt động Tân sinh viên: Tổ chức các chương trình định hướng (Orientation), tư vấn học tập, chăm sóc sinh viên và nuôi dưỡng môi trường văn hóa năng động, hòa nhập.',
            'Tối ưu Hóa Vận Hành, Dữ Liệu & AI: Ứng dụng công nghệ, phân tích dữ liệu khảo sát và các workflow hỗ trợ bởi AI để nâng cao hiệu suất xử lý thông tin, chuẩn hóa dịch vụ và tối ưu trải nghiệm sinh viên.',
          ],
          en: [
            'Academic Club Ecosystem & Student Development: Mentoring and governing 20+ academic clubs (~700 members) into a structured platform for specialized capability building, national/international competitions, student research, and international academic publications.',
            'Recognition & Student Conduct: Directing the recurring semesterly Top 100 Student Achievement Awards; managing formal commendations, student conduct governance, and student advisory support.',
            'Student Experience & Flagship Programs: Architecting university-wide experiential initiatives (with TechX Camp serving as one flagship project within a diverse program portfolio).',
            'Community Engagement & Orientation: Orchestrating freshman Orientation, academic advisory, student welfare touchpoints, and vibrant inclusive student community culture.',
            'Operations, Data & AI-Enabled Workflows: Integrating data analytics, student sentiment tracking, and AI-augmented operational workflows to elevate service speed and student satisfaction.',
          ],
        },
        selectedImpact: {
          vi: [
            'Nâng tầm và vận hành bền vững hệ sinh thái 20+ CLB học thuật (~700 sinh viên), tạo nền tảng cho các đội thi đạt giải quốc tế và tham gia nghiên cứu học thuật.',
            'Chỉ đạo thành công chương trình vinh danh Top 100 Student Achievement Awards định kỳ và các chương trình trải nghiệm quy mô lớn như TechX Camp.',
            'Chuẩn hóa hệ thống dữ liệu phản hồi sinh viên và tích hợp AI vào quy trình tổng hợp, nâng cao tốc độ phản hồi và chỉ số hài lòng sinh viên.',
          ],
          en: [
            'Elevated and sustained 20+ academic clubs (~700 students), fostering national/international competition winners and active undergraduate research.',
            'Successfully directed semesterly Top 100 Student Achievement Awards ceremonies and flagship experiential events including TechX Camp.',
            'Standardized student feedback systems and integrated AI-assisted workflows to accelerate operational responsiveness and student satisfaction.',
          ],
        },
        relatedCaseId: 'case-top100-awards',
      },
    ],
    visualEvidence: {
      number: '01',
      src: careerEvidenceFptSro,
      alt: {
        vi: 'Đội ngũ Phòng Công tác Sinh viên và Cộng tác viên Phòng Công tác Sinh viên · Trường Đại học FPT TP.HCM',
        en: 'Student Relations Office team and Student Relations collaborators · FPT University HCMC',
      },
      caption: {
        vi: 'Đội ngũ Phòng Công tác Sinh viên và Cộng tác viên Phòng Công tác Sinh viên · Trường Đại học FPT TP.HCM',
        en: 'Student Relations Office team and Student Relations collaborators · FPT University HCMC',
      },
      objectPosition: 'center 50%',
    },
  },
  {
    id: 'ch-02',
    number: '05',
    period: 'Jul 2024 — Mar 2025',
    title: {
      vi: 'transcosmos Vietnam: Vượt trên văn hóa — Kiến tạo hệ thống',
      en: 'transcosmos Vietnam: Beyond Culture — Building the System',
    },
    tagline: {
      vi: 'BEYOND CULTURE: BUILDING THE SYSTEM (Senior Specialist, Organizational Development)',
      en: 'BEYOND CULTURE: BUILDING THE SYSTEM (Senior Specialist, Organizational Development)',
    },
    story: {
      vi: 'Đảm nhiệm vai trò Chuyên viên cao cấp Phát triển Tổ chức (Senior Specialist, Organizational Development). Đây là bước chuyển mình mang tính bước ngoặt: từ hoạt động truyền thông văn hóa đơn thuần sang xây dựng hệ thống nền tảng tổ chức. Tập trung chuyên sâu vào toàn bộ vòng đời nhân viên (employee lifecycle), hành trình hội nhập & giữ chân (15/60/90-day journey), thu thập dữ liệu thấu hiểu nhân viên (employee insight), chuẩn hóa chức danh & phạm vi công việc (role/SOW standardization), cùng hệ thống khung năng lực và quản trị hiệu suất.',
      en: 'Served as Senior Specialist, Organizational Development. A pivotal career elevation from internal comms campaigns to foundational organizational systems: architecting the employee lifecycle, structured retention touchpoints (15/60/90-day onboarding journey), employee sentiment insights, role/SOW standardization, competency rubrics, and performance frameworks.',
    },
    coreShift: {
      from: { vi: 'Thực thi chiến dịch truyền thông văn hóa', en: 'Culture campaign execution' },
      to: { vi: 'Kiến tạo hệ thống nhân sự, chuẩn hóa năng lực & vòng đời nhân viên', en: 'Employee lifecycle architecture & systemic role/competency frameworks' },
    },
    keyRealization: {
      vi: 'Văn hóa không thể bền vững nếu thiếu hệ thống vận hành hỗ trợ: hành vi chỉ thực sự thay đổi khi các tiêu chuẩn vai trò, mốc đánh giá năng lực và trải nghiệm hội nhập được đồng bộ hóa.',
      en: 'Culture cannot endure without underlying operating systems: genuine behavior shift requires synchronizing role clarity, competency rubrics, and structured lifecycle checkpoints.',
    },
    toolkit: ['Organizational Development', 'Employee Lifecycle Architecture', '15/60/90-Day Retention Journey', 'Role/SOW Standardization', 'Competency & Performance Systems'],
    contextHighlight: { vi: 'Official Title: Senior Specialist, Organizational Development', en: 'Official Title: Senior Specialist, Organizational Development' },
    verifiedRoles: [
      {
        id: 'vr-transcosmos',
        officialTitle: {
          vi: 'Senior Specialist, Organizational Development',
          en: 'Senior Specialist, Organizational Development',
        },
        company: 'transcosmos Vietnam',
        period: 'Jul 2024 — Mar 2025',
        location: 'TP. Hồ Chí Minh',
        workType: 'Full-time',
        milestoneTag: {
          vi: 'BEYOND CULTURE: BUILDING THE SYSTEM',
          en: 'BEYOND CULTURE: BUILDING THE SYSTEM',
        },
        actualScopeNote: {
          vi: 'Đảm nhiệm vai trò Chuyên viên cao cấp Phát triển Tổ chức trong môi trường BPO/Contact Center quy mô lớn: bước chuyển then chốt từ truyền thông văn hóa sang kiến trúc hệ thống tổ chức nền tảng.',
          en: 'Served as Senior Specialist, Organizational Development in a large-scale Contact Center/BPO environment: pivotal evolution from comms to systemic organizational architecture.',
        },
        mandateScope: {
          vi: [
            'Kiến trúc Vòng đời Nhân viên: Chuẩn hóa toàn diện các điểm chạm từ tuyển dụng, hội nhập (Onboarding), gắn kết (Engagement) đến giữ chân nhân sự (Retention).',
            'Hành trình Giữ chân 15/60/90 Ngày: Thiết lập quy trình đánh giá và hỗ trợ tân nhân viên thích nghi văn hóa, giảm tỷ lệ thôi việc sớm.',
            'Dữ liệu Thấu hiểu Nhân viên (Employee Insight): Xây dựng hệ thống khảo sát định kỳ, pulse checks, và phân tích nguyên nhân thôi việc (exit interviews).',
            'Chuẩn hóa Vai trò & Phạm vi Công việc (Role/SOW Standardization): Xây dựng hệ thống SOW chuẩn hóa đầu tiên cho khối Sales & Vận hành.',
            'Khung Năng lực & Quản trị Hiệu suất: Đồng bộ hóa ma trận năng lực chuyên môn và tiêu chuẩn đánh giá hiệu suất định kỳ.',
          ],
          en: [
            'Employee Lifecycle Architecture: Designing and standardizing touchpoints across Onboarding, Engagement, and Retention in high-volume operations.',
            '15/60/90-Day Retention Journey: Structuring formal check-ins and cultural onboarding milestones to accelerate assimilation and curb early turnover.',
            'Employee Insight Systems: Architecting recurring sentiment surveys, pulse checks, and structured exit interview data analytics.',
            'Role & SOW Standardization: Engineering the first standardized Scope of Work (SOW) matrix for Sales and Operational functions.',
            'Competency Rubrics & Performance Frameworks: Synchronizing behavioral competencies with performance review criteria.',
          ],
        },
        selectedImpact: {
          vi: [
            'Gia tăng tỷ lệ hài lòng trong hành trình hội nhập 90 ngày (90-day onboarding satisfaction) từ ~60% lên ~80%.',
            'Xây dựng và bàn giao thành công hệ thống SOW chuẩn hóa đầu tiên cho khối Sales, xóa bỏ sự mơ hồ về vai trò và trách nhiệm.',
            'Đồng bộ hóa khung năng lực và tiêu chí đo lường hiệu suất với mục tiêu vận hành của tổ chức BPO.',
          ],
          en: [
            'Elevated 90-day onboarding satisfaction from ~60% to ~80% across operational cohorts.',
            'Pioneered the first standardized SOW framework for Sales, eliminating role ambiguity and improving operational handoffs.',
            'Synchronized core competency rubrics with corporate BPO performance evaluation benchmarks.',
          ],
        },
        relatedCaseId: 'case-transcosmos-retention',
      },
    ],
  },
  {
    id: 'ch-03',
    number: '04',
    period: '2023 — 2024',
    title: {
      vi: 'Savvycom: Mở rộng sang People & Culture toàn diện',
      en: 'Savvycom: Expanding into People & Culture',
    },
    tagline: {
      vi: 'EXPANDING INTO PEOPLE & CULTURE (People & Culture Lead)',
      en: 'EXPANDING INTO PEOPLE & CULTURE (People & Culture Lead)',
    },
    story: {
      vi: 'Đảm nhiệm vai trò People & Culture Lead tại doanh nghiệp công nghệ thông tin Savvycom. Phạm vi quản trị mở rộng toàn diện: dẫn dắt truyền thông nội bộ (IC), chiến lược gắn kết nhân sự (engagement), củng cố văn hóa tổ chức, xây dựng thương hiệu nhà tuyển dụng (EVP & Employer Branding), điều phối học tập & phát triển (L&D), các sáng kiến trách nhiệm xã hội (CSR), và trực tiếp xử lý truyền thông thay đổi & khủng hoảng (change & crisis communication).',
      en: 'Led People & Culture at Savvycom in a high-growth tech consultancy environment. Broadened mandate across Internal Communications (IC), employee engagement, organizational culture, employer value proposition (EVP & EB), learning & development (L&D), CSR initiatives, and executive change/crisis communications.',
    },
    coreShift: {
      from: { vi: 'Phạm vi chuyên viên chức năng', en: 'Specialist-level delivery' },
      to: { vi: 'Lãnh đạo mảng People & Culture đa chức năng', en: 'Holistic cross-functional People & Culture leadership' },
    },
    keyRealization: {
      vi: 'Trong môi trường công nghệ làm việc linh hoạt (hybrid), sự gắn kết không đến từ sự giám sát mà đến từ tính minh bạch, văn hóa học tập liên tục và niềm tự hào về sứ mệnh tổ chức.',
      en: 'In agile and hybrid tech environments, belonging is driven not by oversight, but by radical transparency, continuous learning cultures, and collective mission pride.',
    },
    toolkit: ['People & Culture Leadership', 'Internal Communications (IC)', 'Employer Branding & EVP', 'L&D & CSR Programs', 'Change & Crisis Management'],
    contextHighlight: { vi: 'Official Title: People & Culture Lead', en: 'Official Title: People & Culture Lead' },
    verifiedRoles: [
      {
        id: 'vr-savvycom',
        officialTitle: {
          vi: 'People & Culture Lead',
          en: 'People & Culture Lead',
        },
        company: 'Savvycom',
        period: '2023 — 2024',
        location: 'Hà Nội / TP.HCM / Hybrid',
        workType: 'Full-time',
        reportingTo: {
          vi: 'Chief People Officer (CPO)',
          en: 'Chief People Officer (CPO)',
        },
        teamSize: '4 nhân sự / 4 members',
        milestoneTag: {
          vi: 'EXPANDING INTO PEOPLE & CULTURE + FORMAL LEADERSHIP',
          en: 'EXPANDING INTO PEOPLE & CULTURE + FORMAL LEADERSHIP',
        },
        leadershipScope: {
          vi: 'Báo cáo trực tiếp cho Chief People Officer (CPO); trực tiếp quản lý và phát triển đội ngũ 4 nhân sự; đồng hành cùng CEO và Ban Giám Đốc trong các chiến lược văn hóa và truyền thông thay đổi.',
          en: 'Reporting to Chief People Officer (CPO); directly leading and developing a 4-person team; partnering closely with CEO and Senior Leadership on culture and change communications.',
        },
        mandateScope: {
          vi: [
            'Truyền thông Nội bộ & Văn hóa Doanh nghiệp: Hoạch định và triển khai chiến lược truyền thông đa kênh, củng cố tính minh bạch và gắn kết trong mô hình làm việc linh hoạt (hybrid work).',
            'Chiến lược Gắn kết Nhân sự (Employee Engagement): Thiết kế các chương trình trải nghiệm, đối thoại lãnh đạo (townhalls) và hoạt động nâng cao tinh thần đội ngũ kỹ thuật.',
            'Truyền thông Thay đổi & Khủng hoảng (Change & Crisis Communication): Xử lý trực tiếp các thông điệp tái cấu trúc và định hướng chiến lược từ ban điều hành.',
            'Thương hiệu Nhà tuyển dụng (EVP & Employer Branding): Định vị giá trị Savvycom trên thị trường nhân tài công nghệ, gia tăng độ nhận diện thương hiệu.',
            'Đào tạo & CSR: Điều phối các chương trình Học tập & Phát triển (L&D) cùng các sáng kiến trách nhiệm xã hội hướng đến cộng đồng.',
          ],
          en: [
            'Internal Comms & Culture Strategy: Formulating omnichannel communication rhythms to foster radical transparency and belonging across hybrid tech teams.',
            'Employee Engagement Architecture: Directing experiential engagement campaigns, executive townhalls, and engineering pride initiatives.',
            'Change & Crisis Communication: Crafting executive messaging for organizational realignment and change navigation.',
            'Employer Branding & EVP: Codifying the Employer Value Proposition to attract and retain premier IT talent.',
            'L&D & CSR Initiatives: Coordinating capability development roadmaps and community social impact projects.',
          ],
        },
        selectedImpact: {
          vi: [
            'Nâng chỉ số gắn kết nhân viên (Employee Engagement) từ 70% lên 88%, tỷ lệ hài lòng chung đạt trên 90%+.',
            'Tăng trưởng +120% độ tiếp cận tự nhiên (Organic Reach) của Thương hiệu Nhà tuyển dụng trên các kênh truyền thông xã hội.',
            'Dẫn dắt các dự án CSR tiếp cận và hỗ trợ thiết thực cho hơn 800+ đối tượng hưởng lợi trong cộng đồng.',
            'Hoàn thành xuất sắc 100% KPI phòng ban và cá nhân trong giai đoạn chuyển đổi tổ chức.',
          ],
          en: [
            'Elevated employee engagement rate from 70% to 88%, achieving 90%+ overall workplace satisfaction.',
            'Achieved +120% organic reach growth for Employer Branding across professional social channels.',
            'Delivered high-impact CSR initiatives positively supporting over 800+ community beneficiaries.',
            'Delivered 100% of departmental and individual performance KPIs during strategic transitions.',
          ],
        },
        relatedCaseId: 'case-savvycom',
      },
    ],
  },
  {
    id: 'ch-04',
    number: '03',
    period: '2020 — 2023',
    internalProgression: 'F88 → CMC → Vua Nệm',
    title: {
      vi: 'F88 → CMC → Vua Nệm: Từ truyền thông đến văn hóa',
      en: 'F88 → CMC → Vua Nệm: From Communication to Culture',
    },
    tagline: {
      vi: 'FROM COMMUNICATION TO CULTURE (Progression: F88 → CMC → Vua Nệm)',
      en: 'FROM COMMUNICATION TO CULTURE (Progression: F88 → CMC → Vua Nệm)',
    },
    story: {
      vi: 'Giai đoạn tiến hóa bản lề với hành trình trải qua 3 môi trường kinh doanh đặc thù (F88 → CMC → Vua Nệm). Tôi chuyển mình rõ rệt từ Truyền thông nội bộ (F88) sang Phát triển văn hóa doanh nghiệp (CMC) và tiến đến Kích hoạt văn hóa, dẫn dắt thay đổi và quản lý (Vua Nệm - Acting Internal Communication Lead). Tại Vua Nệm, tôi hiện thực hóa việc chuyển đổi giá trị thành hành vi hàng ngày thông qua chương trình Happy Journey, chiến lược văn hóa gắn kết Together We Shine và các điểm chạm truyền thông kết nối hội sở với hàng trăm cửa hàng bán lẻ toàn quốc.',
      en: 'A decisive developmental trajectory spanning three distinct business landscapes (F88 → CMC → Vua Nệm). Progressed from foundational Internal Communications (F88) to corporate culture development (CMC), and culminated in culture activation, change leadership, and team management (Vua Nệm - Acting Internal Communication Lead). At Vua Nệm, activated culture and employee engagement through Happy Journey, Together We Shine EVP alignment, and omnichannel touchpoints uniting HQ with nationwide retail stores.',
    },
    coreShift: {
      from: { vi: 'Sản xuất nội dung truyền thông (Communication)', en: 'Communication output & content creation' },
      to: { vi: 'Phát triển & Kích hoạt văn hóa, dẫn dắt thay đổi (Culture & Change Leadership)', en: 'Culture activation, behavioral codification & change leadership' },
    },
    keyRealization: {
      vi: 'Truyền thông là công cụ, nhưng Văn hóa mới là đích đến. Để kết nối được nhân sự tuyến đầu phân tán, thông điệp lãnh đạo phải chuyển hóa thành sự tôn vinh chân thành và những thói quen hành vi cụ thể.',
      en: 'Communication is the catalyst, but Culture is the destination. Frontline retail alignment requires translating executive vision into genuine recognition and tangible behavioral habits.',
    },
    toolkit: ['Culture Activation', 'EVP Strategy & Cultural Touchpoints', 'Happy Journey Recognition', 'Retail Frontline Engagement', 'Omnichannel Internal Media'],
    contextHighlight: { vi: 'Tiến trình nội bộ: F88 → CMC → Vua Nệm (Acting Internal Communication Lead)', en: 'Internal Progression: F88 → CMC → Vua Nệm (Acting Internal Communication Lead)' },
    verifiedRoles: [
      {
        id: 'vr-f88',
        subNumber: '04.1',
        officialTitle: {
          vi: 'Senior Specialist, Corporate Culture Development',
          en: 'Senior Specialist, Corporate Culture Development',
        },
        company: 'F88',
        period: 'Mar 2020 — Sep 2021',
        location: 'Hà Nội / Toàn quốc',
        workType: 'Full-time',
        milestoneTag: {
          vi: 'FIRST STEP INTO CULTURE',
          en: 'FIRST STEP INTO CULTURE',
        },
        actualScopeNote: {
          vi: 'Bắt đầu bước chuyển dịch then chốt từ Truyền thông nội bộ sang Phát triển Văn hóa doanh nghiệp.',
          en: 'Initial decisive transition from Internal Communications into Corporate Culture development.',
        },
        mandateScope: {
          vi: [
            'Xây dựng và phát triển các kênh truyền thông văn hóa kết nối hội sở với hệ thống hàng trăm phòng giao dịch trên toàn quốc.',
            'Triển khai nền tảng giao tiếp và gắn kết nội bộ GapoWork cho toàn thể cán bộ nhân viên.',
            'Sản xuất các ấn phẩm văn hóa, phóng sự tôn vinh nhân viên tuyến đầu và lan tỏa giá trị cốt lõi.',
          ],
          en: [
            'Built cultural communication channels connecting headquarters with hundreds of retail branches nationwide.',
            'Rolled out corporate internal platform GapoWork across the entire workforce.',
            'Produced culture publications, human-interest frontline spotlights, and core values storytelling.',
          ],
        },
        selectedImpact: {
          vi: [
            'Đạt 100% tỷ lệ kích hoạt và tương tác của cán bộ nhân viên trên nền tảng GapoWork trong vòng 2 tháng.',
            'Sản xuất 20+ số bản tin nội bộ và chuỗi video văn hóa củng cố tinh thần đồng đội thời điểm mở rộng quy mô nhanh.',
          ],
          en: [
            'Attained 100% employee engagement and activation on GapoWork within 2 months of rollout.',
            'Produced 20+ issues of internal culture newsletters and video series strengthening camaraderie during hyper-growth.',
          ],
        },
      },
      {
        id: 'vr-cmc',
        subNumber: '04.2',
        officialTitle: {
          vi: 'Senior Specialist, Corporate Culture Development',
          en: 'Senior Specialist, Corporate Culture Development',
        },
        company: 'CMC Corporation',
        period: 'Oct 2021 — Apr 2022',
        location: 'Hà Nội / Toàn tập đoàn',
        workType: 'Full-time',
        milestoneTag: {
          vi: 'PROFESSIONALIZING CULTURE AT SCALE',
          en: 'PROFESSIONALIZING CULTURE AT SCALE',
        },
        actualScopeNote: {
          vi: 'Làm văn hóa trong môi trường tập đoàn công nghệ quy mô lớn theo hướng chuyên nghiệp hóa và có hệ thống hơn.',
          en: 'Advancing corporate culture development in a large-scale IT conglomerate with systemic professional rigor.',
        },
        mandateScope: {
          vi: [
            'Quản trị thương hiệu nội bộ (Internal Branding) và truyền thông văn hóa doanh nghiệp trên quy mô toàn tập đoàn.',
            'Xây dựng và lan tỏa Bộ thói quen hành vi văn hóa C7+ Habits nhằm đồng bộ hóa chuẩn mực làm việc giữa các công ty thành viên.',
            'Chỉ đạo và hướng dẫn tổ chức các sự kiện văn hóa, phong trào gắn kết cán bộ nhân viên tập đoàn công nghệ quy mô lớn.',
          ],
          en: [
            'Directing Internal Branding and corporate culture communications across the entire conglomerate ecosystem.',
            'Co-developed and managed Together We Shine internal communications platform uniting business units.',
            'Guided corporate culture events and engagement initiatives across distributed subsidiaries.',
          ],
        },
        selectedImpact: {
          vi: [
            'Triển khai thành công các chiến dịch truyền thông văn hóa cốt lõi, nâng cao chỉ số gắn kết nhân sự toàn tập đoàn.',
            'Thúc đẩy tỷ lệ tương tác hai chiều trên nền tảng Together We Shine qua các ấn phẩm truyền thông sáng tạo.',
          ],
          en: [
            'Successfully rolled out group-wide culture campaigns, elevating workforce cohesion.',
            'Boosted two-way interactive participation on Together We Shine through multimedia storytelling.',
          ],
        },
        relatedCaseId: 'case-cmc-c7',
      },
      {
        id: 'vr-vuanem',
        subNumber: '04.3',
        officialTitle: {
          vi: 'Acting Internal Communication Lead',
          en: 'Acting Internal Communication Lead',
        },
        company: 'Vua Nệm',
        period: 'May 2022 — Feb 2023',
        location: 'TP. Hồ Chí Minh',
        workType: 'Full-time',
        reportingTo: {
          vi: 'HR Director',
          en: 'HR Director',
        },
        teamSize: '5 nhân sự / 5 members',
        milestoneTag: {
          vi: 'FIRST STEP INTO LEADERSHIP',
          en: 'FIRST STEP INTO LEADERSHIP',
        },
        leadershipScope: {
          vi: 'Báo cáo trực tiếp cho HR Director; lần đầu tiên đảm nhiệm vai trò Leader xây dựng và vận hành đội ngũ 5 thành viên phụ trách Truyền thông nội bộ & Văn hóa toàn quốc.',
          en: 'Reported to HR Director; first formal leadership milestone establishing and directing a 5-member national Internal Comms & Culture team.',
        },
        mandateScope: {
          vi: [
            'Chiến lược Truyền thông nội bộ (IC Strategy) & Kích hoạt văn hóa: Kết nối khối văn phòng với mạng lưới showroom bán lẻ toàn quốc.',
            'Chương trình Happy Journey & Gắn kết Văn hóa: Thiết kế và vận hành các điểm chạm vinh danh, tôn vinh tinh thần tận tâm của đội ngũ bán lẻ.',
            'Chiến lược EVP & Chiến dịch Together We Shine: Xây dựng nền tảng giá trị nhân tài, củng cố niềm tự hào tổ chức và định vị thương hiệu tuyển dụng.',
            'Truyền thông thay đổi (Change Communication): Đồng hành cùng ban điều hành trong các giai đoạn tái định vị thương hiệu và chuyển đổi vận hành chuỗi.',
          ],
          en: [
            'Internal Comms Strategy & Culture Activation: Uniting headquarters with nationwide retail showroom networks.',
            'Happy Journey Culture Recognition: Spearheading recognition touchpoints celebrating retail frontline dedication.',
            'EVP Strategy & Together We Shine: Architecting employer value proposition and workforce pride campaigns.',
            'Change Communication: Partnering with leadership during brand realignment and retail operations expansion.',
          ],
        },
        selectedImpact: {
          vi: [
            '91% cán bộ nhân viên toàn hệ thống thấu hiểu và chủ động ứng dụng Bộ giá trị cốt lõi vào công việc hàng ngày.',
            'Đạt 90% tỷ lệ tham gia của khối bán lẻ tuyến đầu vào các sự kiện văn hóa nội bộ toàn quốc.',
            'Thiết lập thành công chiến lược EVP và hoàn thành xuất sắc 96% chỉ tiêu KPI cá nhân và hiệu suất đội ngũ.',
          ],
          en: [
            '91% of total workforce demonstrated deep comprehension and daily application of core organizational values.',
            'Achieved 90% voluntary participation from retail frontline teams across national internal campaigns.',
            'Established comprehensive EVP roadmap and achieved 96% individual and team KPI delivery.',
          ],
        },
        relatedCaseId: 'case-values-behaviors',
      },
    ],
  },
  {
    id: 'ch-05',
    number: '02',
    period: '2019 — 2020',
    title: {
      vi: 'Bellsystem24-Hoasao: Định hình bản sắc trong truyền thông',
      en: 'Bellsystem24-Hoasao: Finding My Voice in Communication',
    },
    tagline: {
      vi: 'FINDING MY VOICE IN COMMUNICATION (Internal Communication Specialist)',
      en: 'FINDING MY VOICE IN COMMUNICATION (Internal Communication Specialist)',
    },
    story: {
      vi: 'Đảm nhiệm vai trò Chuyên viên Truyền thông nội bộ tại Bellsystem24-Hoasao — môi trường dịch vụ contact center quy mô lớn với hàng nghìn nhân sự làm việc theo ca. Tôi rèn giũa nghệ thuật kể chuyện (storytelling), tổ chức sự kiện nội bộ, sản xuất nội dung đa phương tiện (video nội bộ, bản tin phát thanh/radio), và thiết lập mạng lưới truyền thông kết nối các chi nhánh trên toàn quốc.',
      en: 'Served as Internal Communication Specialist at Bellsystem24-Hoasao within a large-scale 24/7 contact center operations environment. Honed the craft of empathetic storytelling, internal engagement events, multimedia content production (internal video, radio broadcasts), and established nationwide branch communication networks.',
    },
    coreShift: {
      from: { vi: 'Truyền thông nghiệp dư theo cảm xúc', en: 'Informal community engagement' },
      to: { vi: 'Truyền thông nội bộ chuyên nghiệp, đa phương tiện quy mô doanh nghiệp', en: 'Professional multi-channel corporate internal communications' },
    },
    keyRealization: {
      vi: 'Trong môi trường vận hành ca kíp cường độ cao, những câu chuyện ấm áp về sự tận tụy và chương trình phát thanh nội bộ có sức mạnh gắn kết tinh thần vượt xa mọi bản thông báo khô khan.',
      en: 'In fast-paced operational shift environments, heartfelt human stories and internal broadcasts generate authentic connection that formal memos never achieve.',
    },
    toolkit: ['Internal Storytelling', 'Video & Audio Radio Production', 'Branch Communication Networks', 'Large-Scale Engagement Events'],
    contextHighlight: { vi: 'Official Title: Internal Communication Specialist', en: 'Official Title: Internal Communication Specialist' },
    verifiedRoles: [
      {
        id: 'vr-bellsystem',
        officialTitle: {
          vi: 'Internal Communication Executive',
          en: 'Internal Communication Executive',
        },
        company: 'Bellsystem24-Hoasao',
        period: 'Apr 2019 — Jan 2020',
        location: 'Hà Nội / Toàn quốc',
        workType: 'Full-time',
        milestoneTag: {
          vi: 'DISCOVERING INTERNAL COMMUNICATION',
          en: 'DISCOVERING INTERNAL COMMUNICATION',
        },
        actualScopeNote: {
          vi: 'Trải nghiệm nghề nghiệp đầu tiên với Truyền thông nội bộ chuyên nghiệp sau khi rời FPT University: từ nền tảng con người/cộng đồng bước vào môi trường contact center 24/7 quy mô hàng nghìn nhân sự.',
          en: 'First professional Internal Communication role after FPT University: translating human/community foundations into high-volume 24/7 contact center operations.',
        },
        mandateScope: {
          vi: [
            'Tổ chức các sự kiện văn hóa nội bộ, ngày hội gia đình và hoạt động vinh danh nhân sự làm việc theo ca kíp.',
            'Sản xuất nội dung truyền thông đa phương tiện: làm MC, điều phối kênh phát thanh nội bộ (Internal Radio) và video văn hóa.',
            'Xây dựng và duy trì mạng lưới cộng tác viên truyền thông nội bộ kết nối các chi nhánh toàn quốc.',
            'Thiết kế các sáng kiến gắn kết tinh thần cho đội ngũ điện thoại viên trong môi trường áp lực cao.',
          ],
          en: [
            'Organized corporate culture festivals, family days, and shift-based employee recognition programs.',
            'Produced multimedia storytelling: internal radio host, video documentaries, and monthly newsletters.',
            'Formed and mentored a nationwide branch communication contributor network across regional offices.',
            'Engineered engagement touchpoints sustaining high morale across 24/7 customer care frontline staff.',
          ],
        },
        selectedImpact: {
          vi: [
            'Tăng trưởng +40% tỷ lệ nhân viên tham gia các sự kiện văn hóa và hoạt động gắn kết nội bộ toàn quốc.',
            'Xây dựng mạng lưới hơn 15+ cộng tác viên truyền thông chi nhánh, duy trì luồng thông tin hai chiều thông suốt.',
            'Sản xuất chuỗi bản tin phát thanh và video văn hóa trở thành điểm chạm tinh thần thân thuộc của hàng nghìn nhân sự ca kíp.',
          ],
          en: [
            'Boosted employee participation in internal events and engagement campaigns by +40% nationwide.',
            'Established and mobilized a 15+ member regional comms contributor network across branch hubs.',
            'Produced internal radio broadcasts and video series embraced as beloved cultural rituals by shift workers.',
          ],
        },
      },
    ],
  },
  {
    id: 'ch-06',
    number: '01',
    period: '2018 — 2019',
    title: {
      vi: 'FPT University: Nơi mọi thứ bắt đầu',
      en: 'FPT University: Where It All Started',
    },
    tagline: {
      vi: 'WHERE IT ALL STARTED (Student Relations & Community Foundations)',
      en: 'WHERE IT ALL STARTED (Student Relations & Community Foundations)',
    },
    story: {
      vi: 'Khởi đầu sự nghiệp tại FPT University với các công việc gắn kết con người, xây dựng cộng đồng, hỗ trợ câu lạc bộ sinh viên và điều phối các hoạt động phát triển kỹ năng. Giai đoạn này đặt nền móng sâu sắc cho niềm tin nghề nghiệp của tôi: bất kỳ tổ chức nào muốn thành công bền vững đều phải bắt đầu từ việc thấu hiểu con người và tạo dựng môi trường thuộc về.',
      en: 'Career launchpad at FPT University, focused on human connection, community building, student club mentorship, and youth development initiatives. Established the fundamental conviction that every thriving community begins with deep empathy and cultivating a shared sense of belonging.',
    },
    coreShift: {
      from: { vi: 'Nghiên cứu học thuật thuần túy', en: 'Academic student mindset' },
      to: { vi: 'Hành động thực tiễn: Kết nối con người & nuôi dưỡng cộng đồng', en: 'Active practice: Connecting humans & nurturing vibrant communities' },
    },
    keyRealization: {
      vi: 'Nền tảng của sự gắn kết là lắng nghe chân thành. Khi người trẻ cảm nhận được sự tin cậy, họ sẽ phát huy nguồn năng lượng sáng tạo vượt ngoài mong đợi.',
      en: 'The foundation of connection is genuine listening. When people feel trusted, their creative potential unfolds beyond expectations.',
    },
    toolkit: ['Community Nurturing', 'Youth & Student Engagement', 'Club Mentorship', 'Interpersonal Empathy'],
    contextHighlight: { vi: 'Khởi đầu sự nghiệp trong môi trường giáo dục', en: 'Foundational career launchpad in higher education' },
    verifiedRoles: [
      {
        id: 'vr-fpt-2018',
        officialTitle: {
          vi: 'Personal Development Specialist',
          en: 'Personal Development Specialist',
        },
        company: 'Trường Đại học FPT TP.HCM',
        period: 'Mar 2018 — Mar 2019',
        location: 'TP. Hồ Chí Minh',
        workType: 'Full-time',
        milestoneTag: {
          vi: 'WHERE IT ALL STARTED — THE FOUNDATION',
          en: 'WHERE IT ALL STARTED — THE FOUNDATION',
        },
        actualScopeNote: {
          vi: 'Khởi đầu sự nghiệp với trọng tâm sâu sắc vào sự phát triển cá nhân, lắng nghe con người và nuôi dưỡng cộng đồng sinh viên.',
          en: 'Foundational career launchpad focusing on human development, active listening, and vibrant community nurturing.',
        },
        mandateScope: {
          vi: [
            'Cố vấn và hỗ trợ hoạt động của các câu lạc bộ sinh viên trường; định hướng phát triển kỹ năng mềm và kỹ năng lãnh đạo thanh niên.',
            'Tổ chức các sự kiện trải nghiệm, hội thảo kỹ năng và hoạt động ngoại khóa quy mô lớn trong năm học.',
            'Điều phối chương trình Tuần lễ định hướng (Orientation Week) cho sinh viên mới nhập học.',
            'Đồng hành, lắng nghe tâm tư và hỗ trợ sinh viên hòa nhập với môi trường đại học.',
          ],
          en: [
            'Mentored student clubs, guiding youth leadership competencies and interpersonal skills development.',
            'Organized large-scale student development workshops, cultural festivals, and extracurricular experiences.',
            'Coordinated comprehensive Orientation Week immersion programs for incoming university freshmen.',
            'Provided empathetic student advisory support, facilitating seamless academic and social transitions.',
          ],
        },
        selectedImpact: {
          vi: [
            'Cố vấn trực tiếp và đồng hành cùng 19 câu lạc bộ sinh viên, duy trì tỷ lệ hoạt động ổn định và bền vững trên 80%.',
            'Tổ chức thành công hơn 20+ sự kiện, workshop và ngày hội sinh viên thường niên.',
            'Đạt 90% tỷ lệ tham gia và phản hồi tích cực của tân sinh viên trong các kỳ Orientation Week.',
            'Tạo dựng nền tảng phương pháp luận thấu cảm con người làm bệ phóng cho toàn bộ hành trình sự nghiệp sau này.',
          ],
          en: [
            'Mentored 19 student clubs directly, maintaining an active operational sustainability rate above 80%.',
            'Successfully orchestrated 20+ annual student development workshops and major engagement festivals.',
            'Achieved 90% active participation and positive sentiment during freshman Orientation Weeks.',
            'Established foundational human-centered methodology underpinning all subsequent leadership chapters.',
          ],
        },
      },
    ],
  },
];

export const PHILOSOPHY_CHAIN = [
  {
    step: '01',
    from: { vi: 'Truyền thông', en: 'Communication' },
    to: {
      vi: 'Khởi đầu từ việc lắng nghe, thấu cảm và truyền đạt thông điệp rõ ràng, chân thực',
      en: 'Initiated through active listening, empathy, and transparent, authentic messaging',
    },
  },
  {
    step: '02',
    from: { vi: 'Thấu hiểu', en: 'Understanding' },
    to: {
      vi: 'Chuyển hóa thông tin thành sự đồng cảm sâu sắc về bối cảnh và tâm lý con người',
      en: 'Transforming information into deep empathy for human context and motivation',
    },
  },
  {
    step: '03',
    from: { vi: 'Niềm tin', en: 'Trust' },
    to: {
      vi: 'Xây dựng sự an tâm tâm lý và niềm tin vững chắc vào định hướng của tổ chức',
      en: 'Cultivating psychological safety and enduring institutional belief',
    },
  },
  {
    step: '04',
    from: { vi: 'Gắn kết', en: 'Connection' },
    to: {
      vi: 'Tạo nên sợi dây liên kết tinh thần bền chặt giữa mỗi cá nhân với tổ chức',
      en: 'Forging authentic interpersonal and emotional bonds uniting individuals with the organization',
    },
  },
  {
    step: '05',
    from: { vi: 'Đồng hướng', en: 'Alignment' },
    to: {
      vi: 'Quy tụ mọi nỗ lực và sự thấu hiểu cùng hướng về một mục tiêu, sứ mệnh chung',
      en: 'Harmonizing diverse talents and energies toward a shared collective purpose',
    },
  },
  {
    step: '06',
    from: { vi: 'Hành động', en: 'Action' },
    to: {
      vi: 'Biến nhận thức và sự đồng lòng thành hành động thực tế, thói quen tích cực mỗi ngày',
      en: 'Translating shared conviction into purposeful everyday behaviors and proactive contributions',
    },
  },
  {
    step: '07',
    from: { vi: 'Văn hóa', en: 'Culture' },
    to: {
      vi: 'Đúc kết thành bản sắc, chuẩn mực hành vi và giá trị trường tồn của tổ chức',
      en: 'Solidifying into enduring rituals, behavioral standards, and living institutional values',
    },
  },
];

export const PHILOSOPHY_QUESTIONS = [
  {
    q: {
      vi: '“Con người thực sự trải nghiệm điều gì tại đây?”',
      en: '“What did people genuinely experience?”',
    },
    detail: {
      vi: 'Không chỉ dừng lại ở danh sách nhiệm vụ bàn giao, mà là chất lượng của từng điểm chạm tương tác và sự thấu cảm trong tổ chức.',
      en: 'Beyond task deliverables, examining the experiential quality and human empathy across organizational touchpoints.',
    },
  },
  {
    q: {
      vi: '“Họ cảm thấy thế nào trong khoảnh khắc đó?”',
      en: '“How did they honestly feel?”',
    },
    detail: {
      vi: 'Cảm xúc quyết định sự gắn kết. Khi con người cảm thấy được nhìn nhận, được tôn trọng và an toàn, sự cam kết trở thành nội tại.',
      en: 'Emotion governs commitment. When individuals feel seen, respected, and safe, dedication becomes intrinsic.',
    },
  },
  {
    q: {
      vi: '“Điều gì đã thực sự chuyển hóa sau đó?”',
      en: '“What measurably changed afterwards?”',
    },
    detail: {
      vi: 'Một chương trình thành công không dừng lại ở tiếng vỗ tay khi sự kiện kết thúc, mà ở sự chuyển biến tích cực trong thói quen và sự cộng tác bền lâu.',
      en: 'Success is not applause when curtains close; it is the lasting shift in collaborative habits, morale, and organizational resilience.',
    },
  },
];

export const PHILOSOPHY_PILLARS: PhilosophyPillar[] = [
  {
    title: {
      vi: 'Truyền thông dựa trên sự thấu cảm',
      en: 'Empathy-First Communication',
    },
    desc: {
      vi: 'Chuyển hóa chiến lược trừu tượng của ban điều hành thành những câu chuyện sống động, gần gũi và khơi gợi cảm hứng hành động.',
      en: 'Translating executive strategy into human narratives that resonate with frontline and leadership teams alike.',
    },
  },
  {
    title: {
      vi: 'Văn hóa được bảo chứng bằng hệ thống',
      en: 'Culture Backed by Systems',
    },
    desc: {
      vi: 'Đưa giá trị cốt lõi vào nghi thức làm việc, khung chuẩn hóa hành vi và cơ chế quản trị thay vì chỉ là khẩu hiệu trên giấy.',
      en: 'Grounding core values in concrete daily rituals, behavioral rubrics, and governance systems.',
    },
  },
  {
    title: {
      vi: 'AI mở rộng năng lực, con người giữ bản sắc',
      en: 'Human Insight First, AI Amplified',
    },
    desc: {
      vi: 'Ứng dụng AI như trợ thủ đắc lực trong phân tích xu hướng, tổng hợp dữ liệu và tối ưu vận hành; trong khi sự thấu hiểu con người luôn dẫn dắt mọi quyết định.',
      en: 'Harnessing AI to eliminate operational friction and synthesize insights, while human empathy guides every strategic intent.',
    },
  },
];

export const EXPERIENCE_ROLES: ExperienceRole[] = [
  {
    id: 'exp-fpt-head',
    officialTitle: {
      vi: 'Head of Student Relations Office',
      en: 'Head of Student Relations Office',
    },
    company: 'FPT University',
    period: 'Apr 2025 — Present',
    location: 'Ho Chi Minh City',
    workType: 'Full-time',
    tier: 'flagship',
    scopeDistinction: {
      vi: 'Kiến tạo hệ sinh thái hỗ trợ sự phát triển và trải nghiệm của sinh viên, tập trung vào ba trọng tâm: Hỗ trợ Phát triển – Truyền Cảm hứng – Kết nối Cộng đồng, qua đó phát triển năng lực, nuôi dưỡng tinh thần học tập suốt đời và xây dựng cộng đồng sinh viên năng động, gắn kết.',
      en: 'Building an ecosystem that supports student development and experience through three core pillars: Development Support – Inspiration – Community Connection, helping students strengthen their capabilities, cultivate lifelong learning, and thrive in an active, connected community.',
    },
    mandateScope: {
      vi: [
        'Dẫn dắt toàn diện Phòng Quan hệ Doanh nghiệp & Sinh viên: hoạch định chiến lược trải nghiệm sinh viên, danh mục chương trình trọng điểm và quản trị vận hành phòng ban.',
        'Trực tiếp chỉ đạo và điều phối các chương trình trải nghiệm quy mô lớn tiêu biểu như TechX Camp, kết nối đa bên giữa Nhà trường, sinh viên và mạng lưới doanh nghiệp công nghệ.',
        'Ứng dụng tư duy hệ thống và đòn bẩy AI trong chuẩn hóa quy trình phân tích phản hồi, tổng hợp dữ liệu khảo sát và tối ưu hóa vận hành dịch vụ sinh viên.',
        'Quản lý mối quan hệ đối tác chiến lược với các doanh nghiệp công nghệ hàng đầu, tạo hành lang cơ hội nghề nghiệp và dự án thực chiến cho sinh viên.',
      ],
      en: [
        'Directing the Student Relations Office: orchestrating holistic student experience strategy, flagship program portfolio, and department operational governance.',
        'Leading high-impact experiential boot camps including TechX Camp, bridging university academia, student cohorts, and tech industry ecosystems.',
        'Embedding systems thinking and AI-assisted workflows to synthesize student sentiment data, streamline reporting, and elevate service quality.',
        'Managing strategic enterprise partnerships with premier tech corporations, securing project immersion and career pathways for students.',
      ],
    },
    actualScopeNote: {
      vi: 'Thăng tiến từ Student Relations Officer lên Head of Student Relations Office: mở rộng từ điều phối nghiệp vụ sang lãnh đạo chiến lược, phát triển đội ngũ và kiến trúc hệ sinh thái trải nghiệm đa bên.',
      en: 'Promoted from Student Relations Officer to Head of Student Relations Office: elevated from operational coordination to strategic leadership, team development, and multi-stakeholder ecosystem architecture.',
    },
    leadershipScope: {
      vi: 'Quản lý trực tiếp đội ngũ nhân sự phòng ban, chỉ đạo ban tổ chức các dự án quy mô toàn trường, và điều phối mạng lưới đối tác doanh nghiệp.',
      en: 'Direct leadership of department staff, presiding over university-wide flagship task forces, and coordinating industry partner networks.',
    },
    selectedImpact: {
      vi: [
        'Hệ thống hóa toàn diện quy trình quan hệ sinh viên thành khung trải nghiệm có lộ trình rõ ràng và cơ chế đo lường sự hài lòng.',
        'Tổ chức thành công chuỗi sự kiện TechX Camp, tạo dấu ấn gắn kết cộng đồng học thuật và doanh nghiệp công nghệ.',
        'Nâng cao hiệu suất xử lý thông tin và chất lượng gắn kết sinh viên thông qua ứng dụng công cụ hỗ trợ AI.',
      ],
      en: [
        'Systematized student relations into a structured experiential framework with measurable satisfaction metrics.',
        'Successfully directed TechX Camp, strengthening institutional pride and university-industry connectivity.',
        'Accelerated operational responsiveness and engagement quality via AI-augmented administrative workflows.',
      ],
    },
    relatedCaseId: 'case-top100-awards',
  },
  {
    id: 'exp-transcosmos',
    officialTitle: {
      vi: 'Senior Specialist, Organizational Development',
      en: 'Senior Specialist, Organizational Development',
    },
    company: 'transcosmos Vietnam',
    period: 'Jul 2024 — Mar 2025',
    location: 'Ho Chi Minh City',
    workType: 'Full-time',
    tier: 'high',
    mandateScope: {
      vi: [
        'Thiết kế và chuẩn hóa các điểm chạm trong toàn bộ vòng đời nhân viên (Employee Lifecycle), trọng tâm là hành trình hội nhập và giữ chân nhân sự (15/60/90-day retention journey).',
        'Xây dựng các cơ chế khảo sát và thu thập dữ liệu thấu hiểu nhân viên (Employee Insight) nhằm phát hiện sớm các rủi ro rời bỏ tổ chức và đo lường cảm nhận nhân sự.',
        'Tham gia chuẩn hóa bản mô tả vai trò & phạm vi công việc (Role/SOW standardization), đồng bộ hóa khung năng lực chuyên môn và hệ thống quản trị hiệu suất.',
        'Chuyển hóa định hướng chiến lược của ban lãnh đạo thành các chỉ dẫn văn hóa và tiêu chuẩn hành vi cụ thể cho nhân sự.',
      ],
      en: [
        'Architected critical touchpoints across the employee lifecycle, establishing structured retention checkpoints during the 15/60/90-day onboarding journey.',
        'Built employee insight pulse surveys and qualitative sentiment checkpoints to identify retention risks and measure engagement.',
        'Standardized job profiles and scope of work (Role/SOW standardization), aligning competency rubrics and performance management frameworks.',
        'Translated corporate strategic objectives into actionable cultural guidelines and observable behavioral benchmarks.',
      ],
    },
    actualScopeNote: {
      vi: 'Official Title: Senior Specialist, Organizational Development. Thể hiện bước chuyển then chốt từ truyền thông văn hóa đơn thuần sang tư duy kiến trúc hệ thống nhân sự và quản trị tổ chức.',
      en: 'Official Title: Senior Specialist, Organizational Development. Represented the critical evolution from comms execution to systemic organizational development and employee lifecycle architecture.',
    },
    leadershipScope: {
      vi: 'Chủ trì các dự án chuẩn hóa vòng đời nhân viên và điều phối liên phòng ban giữa OD, Tuyển dụng, Đào tạo và Vận hành.',
      en: 'Led employee lifecycle standardization initiatives, coordinating cross-functionally across OD, Talent Acquisition, L&D, and Operations.',
    },
    selectedImpact: {
      vi: [
        'Thiết lập hành trình trải nghiệm 15/60/90 ngày giúp nhân sự mới hòa nhập văn hóa nhanh chóng và giảm tỷ lệ thôi việc sớm.',
        'Chuẩn hóa thành công bộ chỉ dẫn hành vi tương thích với khung năng lực và tiêu chí đánh giá hiệu suất của tổ chức.',
      ],
      en: [
        'Instituted structured 15/60/90-day journey milestones accelerating cultural assimilation and curbing early attrition.',
        'Standardized behavioral benchmarks aligned with organizational competency frameworks and performance evaluations.',
      ],
    },
    relatedCaseId: 'case-transcosmos-retention',
  },
  {
    id: 'exp-savvycom',
    officialTitle: {
      vi: 'People & Culture Lead',
      en: 'People & Culture Lead',
    },
    company: 'Savvycom',
    period: '2023 — 2024',
    location: 'Hanoi / Ho Chi Minh City / Hybrid',
    workType: 'Full-time',
    tier: 'high',
    mandateScope: {
      vi: [
        'Lãnh đạo toàn diện mảng People & Culture: hoạch định chiến lược truyền thông nội bộ (IC), chương trình gắn kết nhân sự (engagement) và nuôi dưỡng văn hóa tổ chức.',
        'Xây dựng và phát triển Thương hiệu nhà tuyển dụng (EVP & Employer Branding), định vị giá trị nhân tài trong ngành công nghệ thông tin.',
        'Chỉ đạo các hoạt động Học tập & Phát triển (L&D), các dự án Trách nhiệm xã hội (CSR) và các chương trình đối thoại lãnh đạo.',
        'Trực tiếp quản lý truyền thông thay đổi & xử lý khủng hoảng (change & crisis communication) trong các giai đoạn chuyển đổi tổ chức.',
      ],
      en: [
        'Led comprehensive People & Culture functions: directing internal communications strategy, employee engagement, and culture cultivation.',
        'Formulated and activated Employer Value Proposition (EVP & Employer Branding), highlighting engineering excellence.',
        'Directed Learning & Development (L&D) roadmaps, Corporate Social Responsibility (CSR) initiatives, and townhall dialogue sessions.',
        'Spearheaded executive change communication and crisis response during key organizational transitions.',
      ],
    },
    actualScopeNote: {
      vi: 'Official Title: People & Culture Lead. Quản trị đa chức năng kết hợp chặt chẽ giữa Truyền thông nội bộ, Nhân sự và Văn hóa trong môi trường công nghệ hybrid.',
      en: 'Official Title: People & Culture Lead. Multi-functional leadership combining Internal Comms, HR engagement, and culture within a hybrid tech landscape.',
    },
    leadershipScope: {
      vi: 'Lãnh đạo bộ phận People & Culture, dẫn dắt các sáng kiến gắn kết toàn công ty và làm việc trực tiếp cùng Ban Giám Đốc (C-Level).',
      en: 'Led People & Culture function, orchestrating company-wide culture initiatives and partnering directly with C-Level executives.',
    },
    selectedImpact: {
      vi: [
        'Củng cố sự gắn kết và tính minh bạch thông tin giữa các nhóm kỹ sư làm việc phân tán trong mô hình hybrid.',
        'Nâng cao mức độ nhận diện thương hiệu tuyển dụng thông qua các ấn phẩm văn hóa và câu chuyện nhân vật truyền cảm hứng.',
      ],
      en: [
        'Reinforced team cohesion and communication transparency across distributed engineering teams in hybrid settings.',
        'Elevated employer brand visibility through human-centered culture narratives and staff spotlights.',
      ],
    },
    relatedCaseId: 'case-savvycom',
  },
  {
    id: 'exp-vuanem',
    officialTitle: {
      vi: 'Acting Internal Communication Lead',
      en: 'Acting Internal Communication Lead',
    },
    company: 'Vua Nệm',
    period: '2022 — 2023',
    location: 'Ho Chi Minh City',
    workType: 'Full-time',
    tier: 'compact',
    mandateScope: {
      vi: [
        'Phụ trách dẫn dắt Truyền thông nội bộ và Kích hoạt văn hóa doanh nghiệp: kết nối thông tin giữa khối Hội sở và hệ thống cửa hàng bán lẻ toàn quốc.',
        'Chuyển hóa giá trị cốt lõi thành hành vi cụ thể: triển khai chương trình Happy Journey, Bộ quy tắc ứng xử (Code of Conduct) và Thói quen C7+.',
        'Thiết kế các chiến dịch thi đua bán hàng, nghi thức vinh danh nhân viên tuyến đầu và ấn phẩm truyền thông nội bộ sống động.',
      ],
      en: [
        'Led Internal Communications and Culture Activation, bridging corporate headquarters with nationwide retail store networks.',
        'Codified core values into observable daily habits: rolling out Happy Journey, Code of Conduct, and C7+ Habits framework.',
        'Engineered frontline recognition campaigns, retail sales motivators, and dynamic internal storytelling platforms.',
      ],
    },
    actualScopeNote: {
      vi: 'Official Title: Acting Internal Communication Lead. Bước phát triển then chốt về năng lực lãnh đạo đội ngũ và kích hoạt văn hóa ở quy mô chuỗi bán lẻ phân tán.',
      en: 'Official Title: Acting Internal Communication Lead. Marked a key milestone in team leadership and retail frontline culture activation.',
    },
    selectedImpact: {
      vi: [
        'Đưa Bộ quy tắc ứng xử và thói quen C7+ vào đời sống hàng ngày của nhân viên tại hệ thống showroom trên toàn quốc.',
        'Gia tăng niềm tự hào và sự gắn kết của khối bán lẻ tuyến đầu thông qua chương trình vinh danh Happy Journey.',
      ],
      en: [
        'Embedded Code of Conduct and C7+ Habits into everyday routines across nationwide retail showrooms.',
        'Elevated frontline pride and connection to organizational mission via Happy Journey recognition.',
      ],
    },
    relatedCaseId: 'case-values-behaviors',
  },
  {
    id: 'exp-cmc',
    officialTitle: {
      vi: 'Corporate Culture Specialist',
      en: 'Corporate Culture Specialist',
    },
    company: 'CMC Corporation',
    period: '2021 — 2022',
    location: 'Hanoi / Nationwide',
    workType: 'Full-time',
    tier: 'compact',
    mandateScope: {
      vi: [
        'Thực thi các chương trình văn hóa doanh nghiệp và truyền thông nội bộ quy mô tập đoàn công nghệ.',
        'Tham gia phát triển nền tảng truyền thông nội bộ Together We Shine, kết nối các đơn vị thành viên.',
        'Sản xuất các ấn phẩm văn hóa, video bản tin và phong trào gắn kết cán bộ nhân viên.',
      ],
      en: [
        'Executed corporate culture programs and group-level internal communications for a premier tech corporation.',
        'Co-developed Together We Shine internal communication platform connecting subsidiary business units.',
        'Produced culture publications, news videos, and employee engagement campaigns.',
      ],
    },
    selectedImpact: {
      vi: [
        'Lan tỏa giá trị văn hóa và nâng cao tỷ lệ tương tác của nhân sự trên nền tảng truyền thông tập đoàn.',
      ],
      en: [
        'Amplified core cultural values and boosted interaction rates across corporate internal channels.',
      ],
    },
    relatedCaseId: 'case-together-we-shine',
  },
  {
    id: 'exp-f88',
    officialTitle: {
      vi: 'Internal Communication & Culture Specialist',
      en: 'Internal Communication & Culture Specialist',
    },
    company: 'F88',
    period: '2020 — 2021',
    location: 'Hanoi / Nationwide',
    workType: 'Full-time',
    tier: 'compact',
    mandateScope: {
      vi: [
        'Phát triển các kênh truyền thông nội bộ kết nối mạng lưới phòng giao dịch trên toàn quốc.',
        'Xây dựng các câu chuyện văn hóa tuyến đầu, tôn vinh tinh thần vượt khó và phục vụ khách hàng.',
      ],
      en: [
        'Developed internal comms channels connecting extensive nationwide branch office networks.',
        'Created frontline cultural human-interest stories celebrating service excellence.',
      ],
    },
    selectedImpact: {
      vi: [
        'Thiết lập mạng lưới truyền thông hai chiều hiệu quả giữa hội sở và các phòng giao dịch địa phương.',
      ],
      en: [
        'Established effective two-way communication rhythms between corporate HQ and regional branches.',
      ],
    },
  },
  {
    id: 'exp-bellsystem',
    officialTitle: {
      vi: 'Internal Communication Specialist',
      en: 'Internal Communication Specialist',
    },
    company: 'Bellsystem24-Hoasao',
    period: '2019 — 2020',
    location: 'Hanoi / Nationwide',
    workType: 'Full-time',
    tier: 'compact',
    mandateScope: {
      vi: [
        'Sản xuất nội dung truyền thông đa phương tiện: video nội bộ, chương trình phát thanh Radio kết nối nhân sự trực tổng đài.',
        'Tổ chức các sự kiện văn hóa, ngày hội gia đình và hoạt động ghi nhận nhân viên làm việc theo ca.',
      ],
      en: [
        'Produced multimedia communications: internal video documentaries and radio broadcasts for contact center teams.',
        'Organized corporate culture festivals, family days, and shift-based employee recognition initiatives.',
      ],
    },
    selectedImpact: {
      vi: [
        'Xây dựng kênh phát thanh nội bộ trở thành điểm chạm tinh thần thân thuộc cho hàng nghìn nhân sự ca kíp.',
      ],
      en: [
        'Turned internal radio into a beloved cultural touchpoint for thousands of 24/7 operational staff.',
      ],
    },
  },
  {
    id: 'exp-fpt-early',
    officialTitle: {
      vi: 'Student Relations Officer / Community Coordinator',
      en: 'Student Relations Officer / Community Coordinator',
    },
    company: 'FPT University',
    period: '2018 — 2019',
    location: 'Ho Chi Minh City',
    workType: 'Full-time',
    tier: 'compact',
    mandateScope: {
      vi: [
        'Hỗ trợ công tác quan hệ sinh viên, gắn kết các câu lạc bộ và điều phối hoạt động phong trào thanh niên.',
        'Lắng nghe tâm tư sinh viên và tạo dựng môi trường sinh hoạt ngoại khóa năng động, gắn kết.',
      ],
      en: [
        'Supported student affairs, coordinated student club activities, and facilitated youth engagement programs.',
        'Listened to student sentiment and fostered a vibrant, inclusive extracurricular community environment.',
      ],
    },
    selectedImpact: {
      vi: [
        'Đặt nền móng thấu cảm và phương pháp luận gắn kết cộng đồng cho toàn bộ sự nghiệp sau này.',
      ],
      en: [
        'Laid the foundations of human-first empathy and community-building methodology for future career chapters.',
      ],
    },
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-top100-awards',
    title: {
      vi: 'Top 100 Student Achievement Awards — FPT University',
      en: 'Top 100 Student Achievement Awards — FPT University',
    },
    subtitle: {
      vi: 'Chương trình vinh danh sinh viên xuất sắc định kỳ: Thiết kế trải nghiệm ghi nhận đa điểm chạm, giàu cảm xúc và mang tính cá nhân.',
      en: 'A recurring student recognition program designed as a multi-touchpoint, emotional and personalized recognition experience.',
    },
    organization: 'FPT University HCMC',
    year: '2025 — Hiện tại (Định kỳ mỗi học kỳ)',
    category: {
      vi: 'Chương trình Vinh danh · Trải nghiệm Sinh viên · Thiết kế Trải nghiệm · Vận hành Ứng dụng AI',
      en: 'Recognition Program · Student Experience · Experience Design · AI-enabled Operations',
    },
    accentBadge: {
      vi: 'Vinh danh & Trải nghiệm',
      en: 'Recognition & Experience',
    },
    coverImage: {
      src: top100GrandCeremony,
      alt: {
        vi: 'Đêm vinh danh Top 100 Student Achievement Awards — Vinh Quy Bái Tổ trên sân khấu lớn ngoài trời',
        en: 'Top 100 Student Achievement Awards Ceremony — The Triumphant Return Grand Outdoor Stage',
      },
      category: 'event',
      recommendedRatio: '16:9',
      caption: {
        vi: 'Nghi lễ vinh danh trang trọng kết hợp hiệu ứng sân khấu và pháo sáng rực rỡ tôn vinh sinh viên cùng giảng viên',
        en: 'Dignified recognition ceremony blending stage arts and pyrotechnics honoring students alongside university faculty',
      },
    },
    context: {
      vi: 'Top 100 Student Achievement Awards là chương trình vinh danh sinh viên xuất sắc được tổ chức định kỳ mỗi học kỳ tại Trường Đại học FPT TP.HCM, thuộc phạm vi công việc hiện tại của tôi tại Phòng Công tác Sinh viên (Student Relations Office - SRO). Không chỉ dừng lại ở một buổi lễ trao giải sự vụ, chương trình được định vị là một cột mốc trải nghiệm mang tính biểu tượng trong hành trình sinh viên: ghi nhận nỗ lực học thuật và hoạt động phong trào, khơi dậy niềm tự hào cá nhân và truyền cảm hứng học tập suốt đời cho toàn thể cộng đồng người học.',
      en: 'The Top 100 Student Achievement Awards is a flagship student recognition program held every semester at FPT University HCMC, within my current leadership mandate at the Student Relations Office (SRO). Far from an ordinary award event, the program is architected as an iconic experiential milestone in the student journey: celebrating academic excellence and leadership, igniting individual pride, and inspiring lifelong learning across the university community.',
    },
    challenge: {
      vi: 'Việc tổ chức định kỳ theo từng học kỳ đòi hỏi tính chuẩn xác cao trong điều phối đa bên: từ kiểm chứng danh sách sinh viên xuất sắc, thiết kế kỷ vật vinh danh cá nhân hóa từng sinh viên, dàn dựng nghi lễ sân khấu đến điều phối khách mời và gia đình. Thách thức cốt lõi là chuyển hóa một lễ tổng kết thuần túy thành một trải nghiệm công nhận (Recognition Experience) sâu sắc và đáng nhớ đối với từng cá nhân sinh viên và phụ huynh, đồng thời tối ưu hóa khối lượng vận hành đồ sộ của đội ngũ tổ chức.',
      en: 'Organized every semester, the program requires a high level of precision across multiple stakeholders — from verifying the list of outstanding students and creating personalized recognition keepsakes for each student, to staging the ceremony and coordinating guests and families. The core challenge is to transform what could otherwise be a conventional end-of-semester recognition ceremony into a meaningful and memorable Recognition Experience for each student and their family, while managing the substantial operational workload behind the program.',
    },
    insight: {
      vi: 'Sự công nhận (Recognition) chỉ thực sự tạo ra động lực nội tại khi nó được chuyển hóa thành một trải nghiệm cảm xúc trọn vẹn: từ cảm giác tự hào khi cầm trên tay chiếc huy hiệu kim loại danh dự, khoảnh khắc bước lên sân khấu trước thầy cô bạn bè, đến ánh mắt xúc động của phụ huynh khi chứng kiến con em mình được tôn vinh.',
      en: 'Recognition fosters enduring intrinsic motivation only when engineered as a holistic emotional experience: from the tactile pride of holding a bespoke honor pin, to the shared spotlight before mentors and peers, and parents’ proud tears witnessing their milestone.',
    },
    myRole: {
      vi: 'Head of Student Relations Office: Định hướng concept trải nghiệm, chỉ đạo tổ chức và điều phối tổng thể chương trình qua các học kỳ; dẫn dắt đội ngũ SRO và mạng lưới cộng tác viên sinh viên trong khâu vận hành; định hướng và ứng dụng AI nhằm cải thiện trải nghiệm và nâng cao hiệu quả triển khai.',
      en: 'Head of Student Relations Office: Spearheaded experiential concept direction, overall program governance and semesterly execution; led the SRO core team and student collaborators; guided AI integration to elevate the recognition journey and streamline operational workflows.',
    },
    stakeholders: {
      vi: 'Top 100 sinh viên xuất sắc (học thuật, phong trào và CLB xuất sắc), gia đình & phụ huynh sinh viên, Ban Giám hiệu Trường Đại học FPT TP.HCM, các Khoa/Viện chuyên môn, đội ngũ cán bộ Phòng Công tác Sinh viên và mạng lưới cộng tác viên sinh viên.',
      en: 'Top 100 honored students (Academic Achievers, Extracurricular Leaders & Outstanding Clubs), families and parents, FPT University HCMC Executive Board, Academic Faculties, SRO department staff, and student collaborators.',
    },
    approach: {
      vi: 'Thiết kế trải nghiệm vinh danh đa điểm chạm (Multi-touchpoint Recognition Experience Architecture)',
      en: 'Multi-touchpoint Recognition Experience Architecture',
    },
    approachItems: [
      {
        title: {
          vi: 'Thiết kế trải nghiệm vinh danh đa điểm chạm (Multi-touchpoint Recognition Experience Architecture)',
          en: 'Multi-touchpoint Recognition Experience Architecture',
        },
      },
      {
        title: {
          vi: 'Nghi lễ tôn vinh trang trọng (Ceremony Experience):',
          en: 'Ceremony Experience:',
        },
        desc: {
          vi: 'Thiết kế sân khấu và kịch bản nghệ thuật theo từng chủ đề học kỳ (như Vinh Quy Bái Tổ, The Prompt to Lead, Build Up — Upward — Rise Up) tạo cảm xúc tự hào và truyền cảm hứng.',
          en: 'Thematic stage narratives adapted each semester (such as The Triumphant Return, The Prompt to Lead, Build Up — Upward — Rise Up) evoking deep pride and institutional belonging.',
        },
      },
      {
        title: {
          vi: 'Kỷ vật danh dự cá nhân hóa (Tangible Artifacts):',
          en: 'Tangible Artifacts:',
        },
        desc: {
          vi: 'Thiết kế và trao tặng huy hiệu danh dự kim loại Top 100 Student Achievement Awards được cá nhân hóa cho từng sinh viên được vinh danh — biểu trưng vật lý lưu giữ dấu ấn học tập bền bỉ.',
          en: 'Designing and bestowing bespoke metallic Top 100 Student Achievement Awards pins personalized for each honored student — tangible keepsakes cementing lasting achievement.',
        },
      },
      {
        title: {
          vi: 'Điểm chạm tương tác & lan tỏa (Social & Community Touchpoints):',
          en: 'Social & Community Touchpoints:',
        },
        desc: {
          vi: 'Dựng bức tường vinh danh (Recognition Wall) khắc tên từng sinh viên kết hợp backdrop cong và hệ thống photobooth xoay 360° trên thảm đỏ để sinh viên tìm thấy tên mình và lưu giữ khoảnh khắc tự hào cùng bạn bè, người thân.',
          en: 'Constructing a dedicated Recognition Wall featuring every student name alongside curved backdrops and a 360° rotating video booth on the red carpet, enabling students to find their names and celebrate with peers and families.',
        },
      },
      {
        title: {
          vi: 'Vận hành & điều phối:',
          en: 'Operations & Coordination:',
        },
        desc: {
          vi: 'Chuẩn hóa quy trình điều phối đa luồng, phân công vai trò rõ ràng giữa cán bộ phòng ban và mạng lưới cộng tác viên sinh viên.',
          en: 'Standardizing cross-functional execution workflows between department staff and student collaborator teams.',
        },
      },
    ],
    visualEvidence: [
      {
        src: top100PinBadge,
        alt: {
          vi: 'Huy hiệu kim loại danh dự Top 100 Student Achievement Awards',
          en: 'Bespoke metallic Top 100 Student Achievement Awards honor pin',
        },
        category: 'material',
        recommendedRatio: '4:3',
        caption: {
          vi: 'Huy hiệu kim loại danh dự — Kỷ vật cầm tay được cá nhân hóa biểu trưng cho sự công nhận thành tích học tập và rèn luyện.',
          en: 'Bespoke metallic honor pin — A personalized artifact symbolizing academic and extracurricular dedication.',
        },
      },
      {
        src: top100RecognitionWall,
        alt: {
          vi: 'Sinh viên tìm thấy tên mình trên Recognition Wall',
          en: 'Students finding their names on the Recognition Wall',
        },
        category: 'event',
        recommendedRatio: '4:3',
        caption: {
          vi: 'Khoảnh khắc tìm thấy tên mình trên bức tường vinh danh — một điểm chạm nhỏ nhưng khiến sự ghi nhận trở nên hữu hình và mang tính cá nhân hơn.',
          en: 'Finding their names on the Recognition Wall — a small touchpoint that makes recognition feel more tangible and personal.',
        },
      },
      {
        src: top100BackdropCurved,
        alt: {
          vi: 'Backdrop cong vinh danh Top 100 và khu vực photobooth 360 độ chủ đề The Prompt to Lead',
          en: 'Curved Honoree Wall with 360 photo booth themed The Prompt to Lead',
        },
        category: 'event',
        recommendedRatio: '16:9',
        caption: {
          vi: 'Bức tường danh dự cong khắc tên sinh viên Top 100 kết hợp photobooth 360° lưu giữ khoảnh khắc vinh quang.',
          en: 'Curved honoree wall featuring all Top 100 names paired with a 360° video booth to capture milestone memories.',
        },
      },
      {
        src: top100StageSpring2026,
        alt: {
          vi: 'Sân khấu visual LED chủ đề Build Up — Upward — Rise Up, Top 100 Spring 2026',
          en: 'LED visual stage themed Build Up — Upward — Rise Up, Top 100 Spring 2026',
        },
        category: 'event',
        recommendedRatio: '16:9',
        caption: {
          vi: 'Thiết kế sân khấu và nhận diện thị giác hiện đại truyền tải thông điệp bứt phá qua từng học kỳ.',
          en: 'Modern stage design and dynamic visual identity conveying an empowering theme each semester.',
        },
      },
      {
        src: top100HostNganbit,
        alt: {
          vi: 'Thùy Ngân kết nối từ sân khấu trong chương trình vinh danh',
          en: 'Thùy Ngân connecting directly from stage during ceremony',
        },
        category: 'portrait',
        recommendedRatio: '4:3',
        caption: {
          vi: 'Một góc khác của trải nghiệm: trực tiếp kết nối với người tham gia từ sân khấu.',
          en: 'Another side of the experience: connecting directly with participants from the stage.',
        },
      },
    ],
    videoEvidence: {
      url: '/videos/top100-ceremony-recap.mp4',
      poster: '/videos/top100-video-poster.jpg',
      title: {
        vi: 'Experience & Emotion',
        en: 'Experience & Emotion',
      },
      caption: {
        vi: 'Cảm xúc của người được vinh danh là một phần cốt lõi của Recognition Experience — từ khoảnh khắc bước lên sân khấu, nhận sự ghi nhận đến việc chia sẻ niềm tự hào cùng gia đình và những người quan trọng với họ.',
        en: 'The emotions of those being recognized are a core part of the Recognition Experience — from stepping onto the stage and receiving recognition to sharing that sense of pride with family and the people who matter to them.',
      },
    },
    aiFeature: {
      title: {
        vi: 'AI Facial Recognition Check-in',
        en: 'AI Facial Recognition Check-in',
      },
      desc: {
        vi: 'Tại điểm đón tiếp, hệ thống camera và màn hình nhận diện gương mặt hỗ trợ sinh viên, phụ huynh và người tham dự:',
        en: 'At the welcoming reception, the smart facial recognition camera and display system support students, parents, and attendees:',
      },
      capabilities: {
        vi: [
          'Nhận diện người tham dự',
          'Xác nhận check-in/có mặt',
          'Hiển thị check-in thành công',
          'Hiển thị vị trí chỗ ngồi',
        ],
        en: [
          'Attendee facial identification',
          'Attendance confirmation',
          'On-screen check-in success verification',
          'Assigned seating display',
        ],
      },
      layers: {
        participantExperience: {
          vi: 'Giúp quá trình check-in và tìm vị trí chỗ ngồi thuận tiện, liền mạch hơn.',
          en: 'Streamlines the check-in and seating navigation, delivering a smooth, welcoming arrival experience.',
        },
        operationalEfficiency: {
          vi: 'Giảm thao tác tra cứu/check-in thủ công và hỗ trợ đội ngũ điều phối người tham dự hiệu quả hơn.',
          en: 'Minimizes manual rosters and lines, empowering coordinators to manage guest flows smoothly.',
        },
      },
      image: top100AiCheckin,
      caption: {
        vi: 'Facial Recognition Check-in hỗ trợ xác nhận người tham dự và hiển thị vị trí chỗ ngồi, giúp trải nghiệm đón tiếp nhanh và thuận tiện hơn.',
        en: 'Facial Recognition Check-in supports attendee verification and seat guidance, creating a faster and more seamless arrival experience.',
      },
    },
    quantitativeStats: [
      {
        value: '350–500',
        label: {
          vi: 'Người tham dự trung bình mỗi kỳ',
          en: 'Average Attendees per Semester',
        },
        subtext: {
          vi: 'Quy mô tổng thể sự kiện',
          en: 'Overall ceremony scale',
        },
        notes: {
          vi: 'Tổng quy mô người tham dự trung bình mỗi kỳ, bao gồm: sinh viên Top 100 được vinh danh, các câu lạc bộ/đội nhóm được vinh danh, sinh viên hoạt động phong trào tiêu biểu, phụ huynh/người thân và bạn bè của sinh viên.',
          en: 'Average total attendance per semester, comprising: Top 100 student honorees, recognized clubs/teams, extracurricular leaders, parents/relatives, and peer supporters.',
        },
      },
      {
        value: '4.9/5',
        label: {
          vi: 'Mức độ hài lòng của người tham dự',
          en: 'Attendee Satisfaction Score',
        },
        subtext: {
          vi: 'Chỉ số đo lường trải nghiệm',
          en: 'Experience measurement index',
        },
        notes: {
          vi: 'Mức độ hài lòng chung từ người tham dự qua các kỳ tổ chức chương trình.',
          en: 'Overall satisfaction recorded across semesters from participating honorees and families.',
        },
      },
    ],
    qualitativeEvidence: {
      badge: {
        vi: 'Student feedback · Qualitative evidence',
        en: 'Student feedback · Qualitative evidence',
      },
      caption: {
        vi: 'Thư cảm ơn từ một sinh viên sau lần thứ 4 tham dự Top 100 Student Achievement Awards.',
        en: 'Thank you letter from a graduating senior attending their 4th Top 100 Student Achievement Awards.',
      },
      image: top100EmailFeedback,
      alt: {
        vi: 'Thư cảm ơn từ sinh viên sau lần thứ 4 tham dự Top 100 Student Achievement Awards',
        en: 'Thank you letter from student attending 4th Top 100 ceremony',
      },
    },
    impact: {
      vi: [
        'Duy trì tổ chức định kỳ và nâng tầm chất lượng trải nghiệm vinh danh cho Top 100 sinh viên xuất sắc nhất mỗi học kỳ tại FPT University HCMC.',
        'Tạo dấu ấn gắn kết cảm xúc sâu sắc giữa sinh viên, gia đình và nhà trường thông qua các chủ đề sáng tạo và nghi lễ vinh danh chuyên nghiệp.',
        'Ứng dụng giải pháp công nghệ AI Facial Recognition vào điểm đón tiếp nhằm tối ưu thời gian điều phối và nâng cao trải nghiệm người tham gia.',
      ],
      en: [
        'Sustained recurring semesterly recognition, elevating experience quality for the top 100 student achievers at FPT University HCMC.',
        'Forged profound emotional belonging among students, families, and university faculty through thematic storytelling and ceremonial excellence.',
        'Applied AI Facial Recognition solution at reception touchpoints to streamline coordination time and elevate attendee experience.',
      ],
    },
    learning: {
      vi: 'Tôn vinh không đơn thuần là trao đi một phần thưởng, mà là kiến tạo một khoảnh khắc được công nhận trọn vẹn — nơi nỗ lực của người trẻ được chứng kiến, trân trọng và tiếp thêm động lực cho những chặng đường tương lai.',
      en: 'True recognition is not merely bestowing an award; it is crafting an indelible moment of validation — where human dedication is witnessed, celebrated, and empowered for the future.',
    },
  },
  {
    id: 'case-techx',
    title: {
      vi: 'FPTU Tech XCamp — Thiết kế Trải nghiệm & Dẫn dắt Chương trình',
      en: 'FPTU Tech XCamp — Experience Design & Program Leadership',
    },
    subtitle: {
      vi: 'Thiết kế chương trình trại nhập vai công nghệ quy mô lớn kết nối sinh viên, chuyên gia và doanh nghiệp',
      en: 'Designing large-scale immersive tech boot camps bridging students, mentors, and industry pioneers',
    },
    organization: 'FPT University',
    year: '2025',
    category: {
      vi: 'Thiết kế Trải nghiệm & Dẫn dắt Chương trình',
      en: 'Experience Design & Program Leadership',
    },
    accentBadge: {
      vi: 'Trọng điểm Trải nghiệm',
      en: 'Flagship Experience',
    },
    coverImage: {
      src: null,
      alt: { vi: 'Toàn cảnh chương trình FPTU Tech XCamp', en: 'FPTU Tech XCamp Program Overview' },
      category: 'case-cover',
      recommendedRatio: '16:9',
      placeholderHint: {
        vi: 'Hình ảnh hoạt động chính Tech XCamp, sinh viên làm việc nhóm hoặc sân khấu tổng kết',
        en: 'Photo of Tech XCamp team challenges, participant activities, or keynote stage',
      },
    },
    context: {
      vi: 'Sinh viên công nghệ thế hệ mới cần những trải nghiệm cọ xát thực chiến hơn là các buổi tọa đàm một chiều. Tech XCamp được thiết kế như một đấu trường trải nghiệm nhập vai, nơi người tham dự trực tiếp giải bài toán công nghệ cùng chuyên gia doanh nghiệp và rèn luyện tinh thần đồng đội.',
      en: 'Next-gen learners require hands-on real-world immersion beyond traditional lectures. Tech XCamp was conceived as an experiential boot camp where students tackle authentic tech challenges alongside industry mentors in high-energy team settings.',
    },
    challenge: {
      vi: 'Dung hòa giữa chiều sâu tri thức công nghệ và tính hấp dẫn, hào hứng của một trại trải nghiệm; điều phối an toàn, hậu cần và năng lượng cho hàng trăm người tham gia cùng lúc.',
      en: 'Harmonizing technical intellectual depth with high-spirited gamified engagement; managing logistics, team safety, and energy across large participant cohorts.',
    },
    insight: {
      vi: 'Khoảnh khắc tạo nên ký ức sâu đậm nhất không phải là lượng slide trình chiếu, mà là khoảnh khắc người tham gia cùng nhau vượt qua áp lực thời gian để hoàn thành giải pháp chung.',
      en: 'The most enduring memories are never forged by slide decks, but in intense moments where diverse teams conquer high-pressure challenges together.',
    },
    myRole: {
      vi: 'Chỉ đạo chương trình (Program Director): Khởi xướng ý tưởng, thiết kế toàn bộ hành trình trải nghiệm người tham dự, quản trị tiến độ và trực tiếp điều phối nguồn lực thực thi.',
      en: 'Program Director: Conceptualized overarching narrative, architected participant touchpoints, governed timelines, and directed cross-functional delivery teams.',
    },
    stakeholders: {
      vi: 'Ban Lãnh đạo Trường, các đối tác công nghệ đồng hành, đội ngũ chuyên gia cố vấn, ban tổ chức phòng ban và các đội sinh viên tham dự.',
      en: 'University Leadership, tech corporate partners, expert industry judges, operations staff, and participating cohorts.',
    },
    approach: {
      vi: 'Áp dụng phương pháp Journey Mapping 3 giai đoạn: Kích thích tò mò (Pre-camp) → Nhập vai & Chinh phục thử thách (In-camp) → Lan tỏa tự hào & Duy trì kết nối (Post-camp).',
      en: 'Employed a 3-stage Journey Mapping framework: Provoke Curiosity (Pre-camp) → Deep Immersion & Challenge (In-camp) → Enduring Pride & Community (Post-camp).',
    },
    systemFramework: {
      vi: 'Mô hình 4E trong thiết kế trải nghiệm: Entertainment (Hào hứng) - Education (Học hỏi) - Escapism (Hóa thân vào bối cảnh) - Esthetics (Môi trường thẩm mỹ ấn tượng).',
      en: '4E Experience Design Architecture: Entertainment - Education - Escapism - Esthetics applied to every program touchpoint.',
    },
    impact: {
      vi: [
        'Tạo lập chuẩn mực mới cho các chương trình trải nghiệm sinh viên quy mô lớn tại FPT University.',
        'Thắt chặt mối quan hệ hợp tác chiến lược giữa nhà trường và các doanh nghiệp công nghệ đồng hành.',
        'Ghi nhận tỷ lệ phản hồi hào hứng và đánh giá cao từ người tham gia về sự chuyên nghiệp và cảm xúc mang lại.',
      ],
      en: [
        'Set a transformative benchmark for large-scale experiential education initiatives at FPT University.',
        'Deepened institutional alignment and goodwill with premier technology enterprise partners.',
        'Achieved outstanding positive participant feedback regarding engagement, teamwork, and emotional resonance.',
      ],
    },
    learning: {
      vi: 'Năng lượng của một sự kiện quy mô lớn được quyết định bởi sự chuẩn bị chu đáo đến từng chi tiết vi mô: từ lời chào đón ban đầu, âm nhạc nền đến nhịp độ chuyển giao giữa các hoạt động.',
      en: 'The collective energy of large-scale programs is determined by meticulous care in micro-moments: from initial greeting and acoustic pacing to seamless activity transitions.',
    },
  },
  {
    id: 'case-transcosmos-retention',
    title: {
      vi: 'Trải nghiệm Nhân viên Dựa trên Dữ liệu — Hành trình 15/60/90 Ngày',
      en: 'Data-driven Employee Experience — 15/60/90-Day Journey',
    },
    subtitle: {
      vi: 'Thiết kế hành trình hội nhập và giữ chân nhân sự qua các điểm chạm đo lường cảm nhận và phân tích insight',
      en: 'Architecting onboarding and retention touchpoints via structured sentiment checkpoints and data insights',
    },
    organization: 'transcosmos Vietnam',
    year: 'Jul 2024 — Mar 2025',
    category: {
      vi: 'Vòng đời Nhân viên & Giữ chân Nhân tài',
      en: 'Employee Lifecycle & Retention Architecture',
    },
    accentBadge: {
      vi: 'Hệ thống OD & EX',
      en: 'OD & EX Systems',
    },
    coverImage: {
      src: null,
      alt: { vi: 'Hành trình 15/60/90 ngày tại transcosmos', en: '15/60/90-Day Retention Journey Architecture' },
      category: 'framework',
      recommendedRatio: '16:9',
      placeholderHint: {
        vi: 'Sơ đồ hành trình vòng đời nhân viên hoặc bảng chỉ số đo lường khảo sát hội nhập',
        en: 'Employee lifecycle journey diagram or onboarding sentiment analytics dashboard',
      },
    },
    context: {
      vi: 'Giai đoạn thử việc và những tháng đầu tiên là thời điểm nhạy cảm nhất quyết định sự gắn bó lâu dài của nhân sự. Tại môi trường dịch vụ quy mô lớn, việc thiếu các điểm chạm lắng nghe định kỳ dẫn đến tỷ lệ thôi việc sớm và làm gián đoạn kế hoạch vận hành.',
      en: 'The probationary period and initial months represent the most fragile window determining long-term retention. In high-scale service environments, the lack of structured listening checkpoints causes early attrition and operational friction.',
    },
    challenge: {
      vi: 'Thiết kế cơ chế thu thập phản hồi có hệ thống mà không làm phiền công việc hàng ngày của nhân viên; đồng thời chuyển hóa dữ liệu khảo sát thành các hành động can thiệp kịp thời của người quản lý trực tiếp.',
      en: 'Designing systematic pulse checkpoints without interrupting operational workflows, while translating sentiment data into immediate, actionable managerial interventions.',
    },
    insight: {
      vi: 'Nhân viên không rời bỏ công ty vào ngày thứ 90 vì một lý do đột ngột; những băn khoăn và cảm giác lạc lõng thường bắt đầu từ tuần thứ 2 (ngày 15) nhưng bị bỏ qua vì thiếu kênh đối thoại an toàn.',
      en: 'Employees rarely decide to leave on day 90 out of nowhere; feelings of disconnect take root around day 15 and escalate when safe dialogue channels are absent.',
    },
    myRole: {
      vi: 'Senior Specialist, Organizational Development: Thiết kế toàn bộ kiến trúc hành trình 15/60/90 ngày, xây dựng bộ câu hỏi khảo sát thấu hiểu, thiết lập bảng điều khiển dữ liệu và đào tạo quản lý về kỹ năng phản hồi.',
      en: 'Senior Specialist, Organizational Development: Architected the complete 15/60/90-day framework, designed pulse survey questions, established insight dashboards, and coached people managers on constructive follow-up.',
    },
    stakeholders: {
      vi: 'Giám đốc Vận hành, Quản lý Bộ phận trực tiếp, Bộ phận Tuyển dụng, Đội ngũ Đào tạo (L&D) và toàn bộ nhân sự mới gia nhập.',
      en: 'Operations Directors, Line Managers, Talent Acquisition, Training & Enablement, and newly onboarded employees.',
    },
    approach: {
      vi: 'Thiết lập 3 mốc đo lường chiến lược: Ngày 15 (Sự an tâm & Tiếp cận công cụ) → Ngày 60 (Sự hòa nhập văn hóa & Tiến độ công việc) → Ngày 90 (Sự tự tin & Cam kết gắn bó dài lâu).',
      en: 'Deployed 3 strategic measurement milestones: Day 15 (Psychological safety & enablement) → Day 60 (Cultural integration & role clarity) → Day 90 (Autonomy & long-term commitment).',
    },
    systemFramework: {
      vi: 'Khung vòng lặp thấu hiểu 4 bước: Listen (Khảo sát vi mô) → Analyze (Phân tích xu hướng) → Intervene (Can thiệp cùng quản lý) → Retain (Giữ chân & Củng cố niềm tin).',
      en: '4-Step Insight Loop: Listen (Micro-pulses) → Analyze (Trend diagnostics) → Intervene (Managerial alignment) → Retain (Reinforcing trust).',
    },
    impact: {
      vi: [
        'Cung cấp dữ liệu thời gian thực giúp ban quản lý nhận diện sớm các nguy cơ thôi việc ngay từ tháng đầu tiên.',
        'Cải thiện rõ rệt trải nghiệm hội nhập và mức độ hài lòng của nhân viên mới đối với sự đồng hành của tổ chức.',
        'Chuẩn hóa trách nhiệm đồng hành của cấp quản lý trực tiếp trong quy trình phát triển con người.',
      ],
      en: [
        'Delivered real-time sentiment analytics enabling management to preempt early attrition within the initial month.',
        'Substantially improved onboarding satisfaction indices and new hire sentiment regarding managerial support.',
        'Standardized people-management accountability during early-tenure employee development.',
      ],
    },
    learning: {
      vi: 'Dữ liệu chỉ là những con số vô tri nếu không có sự can thiệp chân thành và kịp thời từ người quản lý trực tiếp để giải tỏa những băn khoăn của nhân sự.',
      en: 'Data remains passive numbers without compassionate, prompt managerial intervention addressing human vulnerabilities in real time.',
    },
  },
  {
    id: 'case-savvycom',
    title: {
      vi: 'People & Culture tại Savvycom — Gắn kết Tổ chức Công nghệ',
      en: 'People & Culture at Savvycom — High-Tech Engagement',
    },
    subtitle: {
      vi: 'Dẫn dắt truyền thông nội bộ, văn hóa học tập, EVP và gắn kết nhân sự trong môi trường làm việc linh hoạt (hybrid)',
      en: 'Leading internal comms, continuous learning, EVP, and employee engagement in hybrid engineering environments',
    },
    organization: 'Savvycom',
    year: '2023 — 2024',
    category: {
      vi: 'Lãnh đạo People & Culture',
      en: 'People & Culture Leadership',
    },
    accentBadge: {
      vi: 'Lãnh đạo Văn hóa',
      en: 'Culture Leadership',
    },
    coverImage: {
      src: null,
      alt: { vi: 'Văn hóa People & Culture tại Savvycom', en: 'Savvycom People & Culture Overview' },
      category: 'case-cover',
      recommendedRatio: '16:9',
      placeholderHint: {
        vi: 'Hình ảnh sự kiện All-Hands hybrid, hoạt động văn hóa công nghệ hoặc ấn phẩm EVP',
        en: 'Photo of hybrid All-Hands townhall, engineering culture festival, or EVP branding asset',
      },
    },
    context: {
      vi: 'Trong lĩnh vực tư vấn phần mềm và phát triển công nghệ, nhân sự kỹ sư thường làm việc phân tán tại nhiều dự án khách hàng khác nhau. Thách thức lớn là duy trì bản sắc văn hóa chung, tinh thần tự hào và sự gắn bó với thương hiệu mẹ trong mô hình hybrid.',
      en: 'In fast-paced software consultancy, engineers often work dispersed across disparate client project streams. The core leadership challenge is sustaining unified corporate identity, peer belonging, and pride in a hybrid work environment.',
    },
    challenge: {
      vi: 'Kết nối hai nhóm đối tượng có phong cách tư duy khác nhau: khối kỹ sư công nghệ chú trọng hiệu quả thực tế và khối văn phòng/kinh doanh; đồng thời quản trị truyền thông thay đổi trong các giai đoạn tái cơ cấu.',
      en: 'Bridging diverse employee mindsets: pragmatically minded software engineers and business development teams; while leading change comms during organizational pivots.',
    },
    insight: {
      vi: 'Dân công nghệ không thích những bài diễn thuyết sáo rỗng; họ gắn kết thông qua sự minh bạch về định hướng của ban lãnh đạo, sự tôn vinh tài năng kỹ thuật và những cơ hội học tập phát triển bản thân.',
      en: 'Tech professionals resist hollow slogans; they engage through executive transparency, celebration of technical mastery, and concrete professional growth pathways.',
    },
    myRole: {
      vi: 'People & Culture Lead: Hoạch định chiến lược truyền thông nội bộ, chủ trì các buổi All-Hands định kỳ, định vị thương hiệu nhà tuyển dụng (EVP), điều phối chương trình CSR và làm việc chặt chẽ cùng Ban Giám Đốc.',
      en: 'People & Culture Lead: Formulated internal comms roadmaps, hosted interactive All-Hands townhalls, developed EVP branding, led CSR initiatives, and advised executive leadership.',
    },
    stakeholders: {
      vi: 'Ban Tổng Giám Đốc (C-Level), Đội ngũ Quản lý Dự án (PM/Tech Leads), toàn thể kỹ sư phần mềm và các ứng viên tiềm năng.',
      en: 'C-Level Executives, Project Managers, Engineering Leads, software developer squads, and talent prospective pipeline.',
    },
    approach: {
      vi: 'Tái thiết kế định dạng All-Hands thành diễn đàn hỏi đáp mở (Ask Me Anything) với ban điều hành; xây dựng các chuỗi bài viết tôn vinh kỹ sư tiêu biểu và triển khai các chiến dịch CSR gắn liền với công nghệ.',
      en: 'Redesigned All-Hands meetings into dynamic, open Ask-Me-Anything forums with executives; crafted spotlight engineering stories, and led tech-for-good CSR campaigns.',
    },
    systemFramework: {
      vi: 'Khung gắn kết nhân tài công nghệ 3 trụ cột: Transparency (Minh bạch thông tin) - Recognition (Ghi nhận chuyên môn) - Growth (Cơ hội học tập và đóng góp cộng đồng).',
      en: '3-Pillar Tech Talent Engagement: Transparency (Open dialogue) - Recognition (Technical mastery) - Growth (Learning & purpose-driven impact).',
    },
    impact: {
      vi: [
        'Gia tăng đáng kể tỷ lệ tham gia tự nguyện và tương tác tích cực của nhân sự kỹ thuật tại các buổi All-Hands toàn công ty.',
        'Nâng cao uy tín thương hiệu tuyển dụng thông qua các câu chuyện người thật việc thật được chia sẻ rộng rãi.',
        'Duy trì sự ổn định tâm lý và tinh thần đoàn kết của đội ngũ trong các giai đoạn chuyển đổi chiến lược.',
      ],
      en: [
        'Significantly increased voluntary attendance and active engagement among technical staff in corporate townhalls.',
        'Enhanced employer brand reputation through authentic employee-driven stories celebrating engineering excellence.',
        'Maintained workforce morale, clarity, and trust across strategic change management phases.',
      ],
    },
    learning: {
      vi: 'Văn hóa công nghệ mạnh mẽ không phụ thuộc vào không gian văn phòng cố định, mà được nuôi dưỡng bằng sự tin tưởng trao quyền và dòng chảy thông tin thông suốt.',
      en: 'A vibrant tech culture does not depend on a physical office—it is nurtured through autonomous trust and unimpeded, candid communication channels.',
    },
  },
  {
    id: 'case-vuanem-culture',
    title: {
      vi: 'Hệ thống hóa Giá trị thành Hành vi: Happy Journey + C7+ Habits — Vua Nệm',
      en: 'Values Into Behaviors: Happy Journey + C7+ Habits — Vua Nệm',
    },
    subtitle: {
      vi: 'Chuyển hóa giá trị cốt lõi thành thói quen hành vi hàng ngày và cơ chế vinh danh kết nối hội sở với mạng lưới bán lẻ toàn quốc',
      en: 'Codifying corporate core values into observable daily habits and frontline recognition connecting HQ with retail stores',
    },
    organization: 'Vua Nệm',
    year: '2022 — 2023',
    category: {
      vi: 'Kích hoạt Văn hóa & Chuẩn mực Hành vi',
      en: 'Culture Activation & Behavioral Systems',
    },
    accentBadge: {
      vi: 'Văn hóa Tuyến đầu',
      en: 'Frontline Culture',
    },
    coverImage: {
      src: null,
      alt: { vi: 'Hành trình Happy Journey và chuẩn mực C7+ tại Vua Nệm', en: 'Vua Nem Happy Journey & C7+ Behavioral Codification' },
      category: 'material',
      recommendedRatio: '16:9',
      placeholderHint: {
        vi: 'Ấn phẩm cẩm nang Happy Journey, bộ nhận diện Thói quen C7+ hoặc khoảnh khắc vinh danh nhân viên showroom',
        en: 'Happy Journey handbook, C7+ Habits identity visual, or retail showroom recognition ceremony photo',
      },
    },
    context: {
      vi: 'Với mạng lưới hàng trăm cửa hàng bán lẻ trải dài trên toàn quốc, khoảng cách địa lý và thông tin giữa khối văn phòng hội sở và nhân sự bán hàng tuyến đầu là một rào cản lớn. Các giá trị cốt lõi trên giấy tờ khó có thể đi vào thực tế nếu không được đơn giản hóa thành hành vi dễ hiểu.',
      en: 'Across nationwide retail showrooms, geographic and emotional distance between corporate HQ and frontline retail associates posed a critical challenge. Corporate value statements risked remaining mere boardroom theory unless translated into observable daily habits.',
    },
    challenge: {
      vi: 'Làm thế nào để một nhân viên bán hàng ở chi nhánh xa xôi cảm thấy mình được tôn trọng, thấu hiểu giá trị công ty và tự hào về công việc phục vụ khách hàng mỗi ngày.',
      en: 'Ensuring frontline sales champions in remote stores feel genuinely seen, clearly understand company ethos, and take deep personal pride in their everyday service mission.',
    },
    insight: {
      vi: 'Nhân viên bán lẻ không cần những cẩm nang lý thuyết dày đặc; họ cần những quy tắc hành vi cụ thể (Thói quen C7+), những chỉ dẫn ứng xử rõ ràng (Code of Conduct) và được ghi nhận công khai mỗi khi làm điều đúng đắn (Happy Journey).',
      en: 'Frontline staff do not need dense theoretical handbooks; they need actionable, memorable habits (C7+), clear conduct guidelines, and public celebration when living those values (Happy Journey).',
    },
    myRole: {
      vi: 'Acting Internal Communication Lead: Dẫn dắt nhóm truyền thông nội bộ, phối hợp cùng ban điều hành xây dựng Bộ quy tắc ứng xử, thiết kế chiến dịch Happy Journey và truyền thông đa kênh đến từng điểm bán.',
      en: 'Acting Internal Communication Lead: Guided internal comms team, partnered with leadership to draft Code of Conduct, conceptualized Happy Journey, and orchestrated omnichannel frontline rollouts.',
    },
    stakeholders: {
      vi: 'Ban Điều Hành, Giám đốc Chuỗi Bán Lẻ, Quản lý Vùng/Khu vực, Cửa hàng trưởng và hàng trăm chuyên viên tư vấn bán hàng toàn quốc.',
      en: 'Executive Committee, Retail Operations Directors, Regional Sales Managers, Store Managers, and nationwide showroom consultants.',
    },
    approach: {
      vi: 'Chuyển đổi giá trị thành thói quen: Đơn giản hóa thành bộ Thói quen C7+ (những việc nên làm và không nên làm); kết hợp chương trình vinh danh Happy Journey định kỳ để tạo động lực thi đua lành mạnh.',
      en: 'Translated values into daily micro-habits: Codified C7+ Habits (do’s and don’ts); reinforced by recurring Happy Journey peer and leadership recognition initiatives.',
    },
    systemFramework: {
      vi: 'Khung chuyển hóa hành vi: Awareness (Biết & Hiểu) → Habituation (Thực hành Thói quen C7+) → Recognition (Tôn vinh Happy Journey) → Embodiment (Trở thành bản sắc).',
      en: 'Behavioral Assimilation Loop: Awareness (Clarity) → Habituation (C7+ Daily Habits) → Recognition (Happy Journey Spotlight) → Embodiment (Organic Culture).',
    },
    impact: {
      vi: [
        'Rút ngắn khoảng cách thông tin và tâm lý giữa hội sở và các cửa hàng bán lẻ trên toàn quốc.',
        'Đưa bộ quy chuẩn hành vi C7+ trở thành ngôn ngữ chung được áp dụng thường nhật trong giao tiếp và phục vụ khách hàng.',
        'Tạo dựng niềm tự hào nghề nghiệp mạnh mẽ cho đội ngũ bán hàng tuyến đầu thông qua các câu chuyện người thật việc thật.',
      ],
      en: [
        'Significantly bridged the geographic and psychological divide between HQ and remote retail showrooms.',
        'Turned C7+ behavioral habits into the shared operational language across daily customer service touchpoints.',
        'Ignited authentic frontline morale and service pride through genuine peer and managerial recognition.',
      ],
    },
    learning: {
      vi: 'Văn hóa doanh nghiệp bán lẻ nằm ở ánh mắt và nụ cười của nhân viên tiếp xúc với khách hàng; khi họ cảm nhận được sự hạnh phúc từ tổ chức, họ sẽ mang sự tận tâm đó trao gửi cho khách hàng.',
      en: 'Retail corporate culture lives in the eyes and smile of frontline staff; when they feel supported and valued by the organization, they naturally extend that empathy to every customer.',
    },
  },
  {
    id: 'case-cmc-c7',
    title: {
      vi: 'Together We Shine — Nền tảng Truyền thông & Thương hiệu Nhà Tuyển dụng',
      en: 'Together We Shine — EVP, Brand & Internal Communication Platform',
    },
    subtitle: {
      vi: 'Xây dựng nền tảng truyền thông kết nối đa kênh, lan tỏa giá trị EVP và tôn vinh câu chuyện nhân sự trên toàn hệ thống',
      en: 'Building an omnichannel internal communications ecosystem, activating EVP, and celebrating employee pride nationwide',
    },
    organization: 'CMC Corporation / F88 / Bellsystem24',
    year: '2020 — 2022',
    category: {
      vi: 'EVP & Nền tảng Truyền thông',
      en: 'EVP & Internal Communication Platform',
    },
    accentBadge: {
      vi: 'Nền tảng Truyền thông',
      en: 'Comms Platform',
    },
    coverImage: {
      src: null,
      alt: { vi: 'Nền tảng truyền thông Together We Shine', en: 'Together We Shine Communication Platform' },
      category: 'material',
      recommendedRatio: '16:9',
      placeholderHint: {
        vi: 'Giao diện bản tin Together We Shine, hình ảnh phát thanh nội bộ hoặc chiến dịch lan tỏa EVP',
        en: 'Together We Shine newsletter UI, internal radio broadcast photo, or EVP activation asset',
      },
    },
    context: {
      vi: 'Trong các tập đoàn và doanh nghiệp có nhiều chi nhánh phân tán, thông tin nội bộ thường bị phân mảnh hoặc chỉ mang tính một chiều khô khan. Nhu cầu đặt ra là xây dựng một nền tảng truyền thông hiện đại (Together We Shine) kết hợp giữa bản tin, video, radio và sự kiện trực tiếp để gắn kết toàn diện.',
      en: 'In large distributed corporations with multi-branch footprints, internal communications frequently suffer from fragmentation and one-way top-down broadcast. The mandate was to engineer an omnichannel platform (Together We Shine) uniting newsletters, video, radio, and live events into a cohesive shared identity.',
    },
    challenge: {
      vi: 'Thu hút sự chú ý của nhân sự trong bối cảnh công việc bận rộn; làm cho thông điệp chiến lược của ban lãnh đạo trở nên hấp dẫn, dễ nhớ và tạo được diễn đàn để nhân viên các chi nhánh tương tác cùng nhau.',
      en: 'Capturing employee mindshare amidst demanding operational schedules; translating executive mandates into engaging storytelling and giving regional staff a genuine voice.',
    },
    insight: {
      vi: 'Nhân viên muốn nhìn thấy chính họ và đồng nghiệp của mình được xuất hiện trên các ấn phẩm truyền thông; sự tự hào lan tỏa mạnh mẽ nhất khi những đóng góp thầm lặng được công nhận công khai.',
      en: 'Employees yearn to see themselves and their peers represented in corporate media; organizational pride surges when silent contributions receive authentic public celebration.',
    },
    myRole: {
      vi: 'Chuyên viên Truyền thông & Văn hóa: Trực tiếp biên tập nội dung, chỉ đạo sản xuất video phóng sự, phát triển format phát thanh nội bộ, và điều phối mạng lưới cộng tác viên truyền thông tại các chi nhánh.',
      en: 'Internal Communication & Culture Specialist: Managed editorial content, directed internal video features, produced radio broadcasts, and coordinated regional communication champion networks.',
    },
    stakeholders: {
      vi: 'Ban Lãnh Đạo Tập Đoàn, Giám đốc các Khối chuyên môn, mạng lưới cộng tác viên truyền thông chi nhánh và toàn thể cán bộ nhân viên.',
      en: 'Corporate Executive Leadership, Functional Division Heads, branch communication champions, and company-wide workforce.',
    },
    approach: {
      vi: 'Xây dựng hệ sinh thái nội dung đa định dạng: Bản tin tuần (Weekly Digest), Phóng sự nhân vật (Spotlight Heroes), Chương trình phát thanh radio vào giờ nghỉ và các minigame tương tác trực tuyến.',
      en: 'Architected a multi-format content ecosystem: Weekly Digest, Spotlight Heroes video features, lunchtime internal radio broadcasts, and interactive digital engagement contests.',
    },
    systemFramework: {
      vi: 'Mô hình truyền thông 3 nhịp: Inform (Thông tin chính xác) - Inspire (Truyền cảm hứng qua câu chuyện) - Involve (Khuyến khích đối thoại và đóng góp ý kiến).',
      en: '3-Beat Communication Cadence: Inform (Accurate updates) - Inspire (Human stories) - Involve (Interactive feedback and dialogue).',
    },
    impact: {
      vi: [
        'Biến nền tảng Together We Shine thành kênh kết nối tinh thần thân thuộc và được đón chờ hàng tuần của nhân sự toàn quốc.',
        'Góp phần củng cố định vị thương hiệu nhà tuyển dụng (EVP) thông qua kho tư liệu câu chuyện thực tế phong phú.',
        'Nâng cao mức độ thấu hiểu của nhân viên đối với các mục tiêu chiến lược và định hướng kinh doanh của công ty.',
      ],
      en: [
        'Established Together We Shine as a beloved weekly cultural touchpoint eagerly anticipated across nationwide branches.',
        'Solidified Employer Value Proposition (EVP) foundations through a rich repository of authentic employee narratives.',
        'Strengthened employee comprehension of strategic milestones and organizational trajectories.',
      ],
    },
    learning: {
      vi: 'Kênh truyền thông nội bộ hiệu quả nhất không phải là kênh nói nhiều nhất về lãnh đạo, mà là kênh tôn vinh nhiều nhất những con người bình dị đang tạo nên thành công của doanh nghiệp.',
      en: 'The most impactful internal communications channel is never the one speaking most about leadership, but the one honoring the everyday champions building the company’s success.',
    },
  },
];

export const SELECTED_WORK_DATA: SelectedWorkItem[] = [
  {
    id: 'sw-the-face',
    title: {
      vi: 'The Face — Cuộc thi & Vinh danh Bản sắc Nhân tài Nội bộ',
      en: 'The Face — Internal Talent & Culture Identification Program',
    },
    category: {
      vi: 'Gắn kết & Tôn vinh Văn hóa',
      en: 'Culture & Talent Engagement',
    },
    context: {
      vi: 'Chương trình thi đua và nhận diện nhân vật đại diện cho giá trị văn hóa tổ chức',
      en: 'Company-wide culture ambassadorship and talent spotlight competition',
    },
    description: {
      vi: 'Thiết kế và triển khai cuộc thi nội bộ tôn vinh những cá nhân tiêu biểu hiện thân cho giá trị văn hóa doanh nghiệp. Tạo sân chơi lành mạnh, khơi dậy niềm tự hào nghề nghiệp và tìm kiếm các đại sứ văn hóa lan tỏa năng lượng tích cực.',
      en: 'Designed and executed an internal competition spotlighting individuals who embody corporate cultural values. Fostered healthy camaraderie, pride, and nurtured peer culture ambassadors.',
    },
    highlights: {
      vi: [
        'Thu hút sự tham gia sôi nổi từ các khối phòng ban và chi nhánh toàn quốc.',
        'Tạo ra chuỗi câu chuyện truyền thông người thật việc thật chạm đến cảm xúc đồng nghiệp.',
      ],
      en: [
        'Mobilized widespread voluntary participation across departments and regional branches.',
        'Generated an authentic storytelling series celebrating inspiring workplace role models.',
      ],
    },
  },
  {
    id: 'sw-video-storytelling',
    title: {
      vi: 'Video Storytelling & Bản tin Truyền thông Đa phương tiện',
      en: 'Video Storytelling & Multimedia Internal Broadcasts',
    },
    category: {
      vi: 'Sản xuất Nội dung Truyền thông',
      en: 'Internal Media Production',
    },
    context: {
      vi: 'Sản xuất phóng sự video, bản tin phát thanh và podcast truyền cảm hứng nội bộ',
      en: 'Internal documentary features, radio broadcasts, and inspiring podcasts',
    },
    description: {
      vi: 'Trực tiếp lên ý tưởng, viết kịch bản và đạo diễn sản xuất các video phóng sự nhân vật, bản tin tổng kết quý và các số phát thanh radio nội bộ, mang hơi thở ấm áp và năng lượng gắn kết đến với nhân sự ca kíp.',
      en: 'Conceptualized, scripted, and directed employee video documentaries, quarterly recap broadcasts, and internal radio episodes, bringing warmth and energy to shift-based teams.',
    },
    highlights: {
      vi: [
        'Chuyển hóa thông tin khô khan thành định dạng hình ảnh và âm thanh sống động.',
        'Xây dựng thư viện tư liệu truyền thông chân thực phục vụ thương hiệu tuyển dụng.',
      ],
      en: [
        'Transformed corporate communications into dynamic, engaging audiovisual formats.',
        'Built an authentic media archive serving internal pride and employer branding.',
      ],
    },
  },
  {
    id: 'sw-university-relations',
    title: {
      vi: 'Quan hệ Doanh nghiệp & Hướng nghiệp Sinh viên',
      en: 'University Relations & Corporate Partnership Programs',
    },
    category: {
      vi: 'Quan hệ Đối tác & Hệ sinh thái',
      en: 'Partnership & Ecosystem',
    },
    context: {
      vi: 'Kết nối Nhà trường với các doanh nghiệp công nghệ hàng đầu',
      en: 'Bridging higher education with premier tech industry partners',
    },
    description: {
      vi: 'Thiết lập và duy trì quan hệ hợp tác chiến lược với các đối tác doanh nghiệp công nghệ, phối hợp tổ chức các ngày hội việc làm, hội thảo chuyên gia và chương trình tham quan thực tế (company tour) cho sinh viên.',
      en: 'Established and maintained strategic alliances with tech industry partners, coordinating career fairs, expert tech talks, and on-site enterprise company tours for students.',
    },
    highlights: {
      vi: [
        'Ký kết và triển khai nhiều thỏa thuận hợp tác đào tạo và tuyển dụng thực tập.',
        'Tạo cầu nối thực tiễn giúp sinh viên sẵn sàng đáp ứng yêu cầu tuyển dụng của thị trường.',
      ],
      en: [
        'Brokered long-term corporate partnerships for student internships and practicums.',
        'Created direct practical pathways preparing graduates for competitive tech markets.',
      ],
    },
  },
  {
    id: 'sw-csr-community',
    title: {
      vi: 'Các Sáng kiến Trách nhiệm Xã hội (CSR) & Gắn kết Cộng đồng',
      en: 'CSR & Purpose-driven Community Initiatives',
    },
    category: {
      vi: 'CSR & Mục đích Tổ chức',
      en: 'CSR & Organizational Purpose',
    },
    context: {
      vi: 'Gắn kết nhân sự thông qua các hoạt động chia sẻ giá trị vì cộng đồng',
      en: 'Uniting workforce commitment through meaningful community social impact',
    },
    description: {
      vi: 'Hoạch định và điều phối các chiến dịch vì cộng đồng: hoạt động thiện nguyện, ngày hội hiến máu nhân đạo, chương trình trao tặng sách và các dự án lan tỏa tri thức công nghệ đến thanh niên có hoàn cảnh khó khăn.',
      en: 'Orchestrated community impact campaigns: charitable outreach, blood donation drives, educational book initiatives, and tech-enablement projects for underserved youth.',
    },
    highlights: {
      vi: [
        'Khơi dậy niềm tự hào và sự gắn kết nhân văn giữa các thành viên trong tổ chức.',
        'Góp phần khẳng định trách nhiệm xã hội và giá trị nhân văn của thương hiệu.',
      ],
      en: [
        'Strengthened employee emotional connection and humanistic organizational pride.',
        'Reinforced company social responsibility and corporate civic citizenship.',
      ],
    },
  },
  {
    id: 'sw-culture-materials',
    title: {
      vi: 'Cẩm nang Văn hóa, Sổ tay Nhân viên & Quy chuẩn Hành vi',
      en: 'Culture Handbooks, Onboarding Kits & Behavioral Guidelines',
    },
    category: {
      vi: 'Chuẩn hóa Tài liệu Văn hóa',
      en: 'Culture Codification',
    },
    context: {
      vi: 'Hệ thống hóa tài liệu văn hóa và hướng dẫn ứng xử chuyên nghiệp',
      en: 'Codifying culture literature, onboarding welcome kits, and conduct guidelines',
    },
    description: {
      vi: 'Biên soạn và thiết kế các tài liệu văn hóa nền tảng: Cẩm nang chào đón nhân sự mới (Welcome Kit), Sổ tay giá trị cốt lõi, Bộ chỉ dẫn ứng xử văn minh và tài liệu hướng dẫn giao tiếp dành cho cấp quản lý.',
      en: 'Authored and designed foundational culture publications: New Hire Welcome Kits, Core Values Handbook, Code of Conduct Guides, and Managerial Communication Playbooks.',
    },
    highlights: {
      vi: [
        'Tài liệu hóa các giá trị vô hình thành công cụ trực quan, dễ hiểu và dễ áp dụng.',
        'Đồng bộ hóa nhận thức về quy chuẩn hành vi trong toàn bộ hệ thống.',
      ],
      en: [
        'Codified abstract cultural ideals into visual, accessible, daily workplace guides.',
        'Aligned behavioral standards and shared corporate etiquette across all levels.',
      ],
    },
  },
];

export const METHODOLOGY_STEPS: MethodologyStep[] = [
  {
    number: '01',
    name: { vi: 'Lắng nghe & Thấu cảm', en: 'Understand' },
    headline: { vi: 'Lắng nghe trước khi lên tiếng', en: 'Listening before broadcasting' },
    details: {
      vi: 'Tiếp cận tổ chức không bằng những định kiến có sẵn mà bằng sự lắng nghe chủ động qua khảo sát, phỏng vấn sâu và quan sát các tương tác thường nhật.',
      en: 'Approaching organizations through active qualitative listening: pulse checks, in-depth interviews, and observing daily organic interactions.',
    },
    deliverable: { vi: 'Báo cáo thấu hiểu bối cảnh', en: 'Contextual Empathy Map' },
  },
  {
    number: '02',
    name: { vi: 'Chẩn đoán Điểm nghẽn', en: 'Diagnose' },
    headline: { vi: 'Tìm ra căn nguyên của sự rời rạc', en: 'Uncovering root causes of disconnect' },
    details: {
      vi: 'Phân tích khoảng cách giữa điều ban lãnh đạo kỳ vọng và điều nhân viên tuyến đầu thực sự cảm nhận; xác định rõ các rào cản tâm lý và điểm nghẽn thông tin.',
      en: 'Analyzing the gap between executive strategic expectations and frontline reality; identifying psychological friction and communication silos.',
    },
    deliverable: { vi: 'Báo cáo khoảng cách văn hóa', en: 'Cultural Disconnect Audit' },
  },
  {
    number: '03',
    name: { vi: 'Thiết kế Trải nghiệm', en: 'Design' },
    headline: { vi: 'Xây dựng thông điệp & hành trình', en: 'Designing narrative & journeys' },
    details: {
      vi: 'Thiết kế hành trình trải nghiệm người tham gia (Experience Journey), kiến trúc thông điệp đa tầng và bộ công cụ hỗ trợ lãnh đạo giao tiếp.',
      en: 'Architecting participant journey touchpoints, omnichannel message frameworks, and contextual talking points for people managers.',
    },
    deliverable: { vi: 'Khung trải nghiệm & thông điệp', en: 'Narrative & Journey Architecture' },
  },
  {
    number: '04',
    name: { vi: 'Đồng thuận Lãnh đạo', en: 'Align' },
    headline: { vi: 'Tạo tiếng nói chung giữa các bên', en: 'Securing leadership alignment' },
    details: {
      vi: 'Làm việc chặt chẽ với ban giám đốc và các quản lý chủ chốt để đảm bảo sự nhất quán từ nhận thức, cam kết đến hành động gương mẫu.',
      en: 'Engaging executives and middle managers to ensure complete alignment from mindset to role-modeled behaviors.',
    },
    deliverable: { vi: 'Bộ hướng dẫn truyền thông quản lý', en: 'Leadership Alignment Playbook' },
  },
  {
    number: '05',
    name: { vi: 'Kích hoạt Văn hóa', en: 'Activate' },
    headline: { vi: 'Biến ý niệm thành tương tác', en: 'Translating concepts into rituals' },
    details: {
      vi: 'Triển khai các chương trình trải nghiệm, sự kiện all-hands tương tác, nghi thức ghi nhận và nội dung truyền thông đa kênh sống động.',
      en: 'Launching immersive programs, interactive townhalls, daily recognition rituals, and human-centered multi-channel communications.',
    },
    deliverable: { vi: 'Nghi thức & Chiến dịch văn hóa', en: 'Experiential Programs & Rituals' },
  },
  {
    number: '06',
    name: { vi: 'Đo lường & Phản hồi', en: 'Measure' },
    headline: { vi: 'Theo dõi cảm xúc & hiệu quả', en: 'Tracking sentiment & impact' },
    details: {
      vi: 'Thu thập phản hồi thực tế, tỷ lệ tương tác và các chỉ số chuyển biến hành vi để đánh giá mức độ chạm tới con người.',
      en: 'Monitoring qualitative feedback, real-time engagement data, and observable behavioral shifts against strategic intent.',
    },
    deliverable: { vi: 'Bảng theo dõi cảm nhận & chỉ số', en: 'Sentiment & Adoption Metrics' },
  },
  {
    number: '07',
    name: { vi: 'Tối ưu & Lan tỏa', en: 'Improve' },
    headline: { vi: 'Duy trì sức sống dài lâu', en: 'Iterating for longevity' },
    details: {
      vi: 'Liên tục tinh chỉnh dựa trên phản hồi của nhân sự, biến văn hóa thành thói quen tự nhiên của tổ chức thay vì chỉ là phong trào nhất thời.',
      en: 'Embedding continuous learning loops so organizational culture sustains itself organically as a living, enduring habit.',
    },
    deliverable: { vi: 'Hệ thống vận hành bền vững', en: 'Sustainable Operating Rhythm' },
  },
];

export const VERIFIED_STATS: VerifiedStat[] = [
  {
    value: '6+',
    label: {
      vi: 'Năm chuyên sâu Truyền thông & Văn hóa',
      en: 'Years in Culture & Internal Communication',
    },
    context: {
      vi: 'Hành trình xuyên suốt từ 2018: FPT University, Bellsystem24, F88, CMC, Vua Nệm, Savvycom, transcosmos.',
      en: 'Continuous dedicated journey from 2018 spanning higher education, tech, and retail.',
    },
  },
  {
    value: '4',
    label: {
      vi: 'Lĩnh vực chuyên môn cốt lõi',
      en: 'Core Professional Domains',
    },
    context: {
      vi: 'Internal Communication · Corporate Culture · Employee Engagement · Employee Experience.',
      en: 'Internal Communication · Corporate Culture · Employee Engagement · Employee Experience.',
    },
  },
  {
    value: '6',
    label: {
      vi: 'Môi trường & Quy mô tổ chức thực chiến',
      en: 'Diverse Organizational Contexts',
    },
    context: {
      vi: 'FPT University, transcosmos Vietnam, Savvycom, Vua Nệm, CMC Corporation, F88.',
      en: 'FPT University, transcosmos Vietnam, Savvycom, Vua Nệm, CMC Corporation, F88.',
    },
  },
  {
    value: 'AI',
    label: {
      vi: 'Khai phóng năng lực & Tối ưu quy trình',
      en: 'AI-Amplified Operational Agility',
    },
    context: {
      vi: 'Human Insight First. AI Amplified: Đòn bẩy phân tích dữ liệu, tổng hợp insight và tăng tốc thực thi.',
      en: 'Human Insight First. AI Amplified: Accelerating research, sentiment analysis and execution.',
    },
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: {
      vi: 'Cử nhân',
      en: 'Bachelor Degree',
    },
    field: {
      vi: 'Quan hệ Quốc tế và Nghiên cứu An ninh Quốc gia',
      en: 'International Relations and National Security Studies',
    },
    institution: {
      vi: 'Đại học Quốc tế Hồng Bàng (HIU)',
      en: 'Hong Bang International University (HIU)',
    },
    period: '2014 — 2018',
    note: {
      vi: 'Nền tảng về tư duy ngoại giao, đàm phán, quản trị các bên liên quan và nghiên cứu hành vi cộng đồng.',
      en: 'Foundation in diplomatic negotiation, multi-stakeholder governance, and community socio-behavioral dynamics.',
    },
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    title: {
      vi: 'Chứng chỉ chuyên môn cập nhật trên hồ sơ LinkedIn chính thức',
      en: 'Professional Certifications Verified on Official LinkedIn Profile',
    },
    issuer: 'LinkedIn Verified Profile',
    year: 'Continuous',
    domain: 'Culture & Comms',
    status: 'verified',
    verificationUrl: 'https://linkedin.com/in/thuyngandang',
  },
];


// ==============================================================================
// 06 — RECOGNITION / VOICES (ECHOES & QUALITATIVE EVIDENCE)
// ==============================================================================
export const RECOGNITION_DATA: RecognitionItem[] = [
  {
    id: 'rec-01',
    category: {
      vi: 'Phản hồi từ Phụ huynh & Sinh viên',
      en: 'Attendee & Family Echoes',
    },
    source: {
      vi: 'Lễ Vinh Danh Top 100 Sinh viên Xuất sắc — FPT University',
      en: 'Top 100 Student Achievement Awards — FPT University',
    },
    context: {
      vi: 'Email cảm nhận chân thành từ phụ huynh sinh viên sau lễ vinh danh học kỳ',
      en: 'Heartfelt email reflections from a student parent following the semester ceremony',
    },
    quote: {
      vi: '“Chương trình đã tạo nên một dấu ấn tự hào không thể nào quên cho gia đình tôi. Từng chi tiết từ đón tiếp, kỷ vật đến khoảnh khắc xướng tên trên sân khấu đều đong đầy sự trân trọng và thấu hiểu con trẻ.”',
      en: '“The ceremony created an indelible mark of pride for our family. Every touchpoint from the warm welcome to the bespoke keepsakes and the naming moment on stage was imbued with genuine care and honor.”',
    },
    image: top100EmailFeedback,
    highlights: {
      vi: [
        'Chuyển hóa buổi lễ tổng kết thành trải nghiệm công nhận (Recognition Experience) sâu sắc',
        'Điểm chạm thấu cảm giữa Nhà trường, Sinh viên và Gia đình',
      ],
      en: [
        'Transformed routine ceremonies into profound, memorable recognition experiences',
        'Empathic institutional touchpoint uniting University, Honorees, and Families',
      ],
    },
    year: '2025–2026',
    isHighlight: true,
  },
  {
    id: 'rec-02',
    category: {
      vi: 'Bức tường Danh dự & Dấu ấn Khắc tên',
      en: 'Honoree Wall Echoes',
    },
    source: {
      vi: 'Không gian Vinh danh The Prompt to Lead & Rise Up',
      en: 'Thematic Recognition Architecture & Honoree Wall',
    },
    context: {
      vi: 'Cảm xúc của người tham gia khi nhìn thấy tên mình được khắc ghi trang trọng',
      en: 'Participant emotional validation seeing their achievements tangibly etched',
    },
    quote: {
      vi: '“Tìm thấy tên mình trên Bức tường Danh dự — một điểm chạm nhỏ nhưng biến sự ghi nhận thành điều hữu hình, thiêng liêng và đáng tự hào.”',
      en: '“Finding our names on the Honoree Wall turned validation into something tangible, sacred, and deeply inspiring.”',
    },
    image: top100RecognitionWall,
    highlights: {
      vi: [
        'Tạo điểm chạm thị giác giàu tính kết nối và tự hào cá nhân',
        'Hợp lưu giữa kỷ vật vật lý (Huy hiệu kim loại) và không gian tôn vinh',
      ],
      en: [
        'Curated emotionally resonant visual milestones for peer celebration',
        'Synthesized physical artifacts (metal pins) with celebratory spatial design',
      ],
    },
    year: '2025–2026',
    isHighlight: true,
  },
  {
    id: 'rec-03',
    category: {
      vi: 'Ghi nhận từ Đội ngũ Đồng nghiệp & Cộng tác viên',
      en: 'Team & Cross-functional Voices',
    },
    source: {
      vi: 'Mạng lưới Vận hành Sự kiện & Văn hóa Phòng ban',
      en: 'Operational Delivery & Departmental Culture Collaborators',
    },
    context: {
      vi: 'Phản hồi từ cán bộ phòng ban và cộng tác viên sau các chiến dịch quy mô 1.000+ người',
      en: 'Direct feedback from staff and student collaborators managing 1,000+ attendee operations',
    },
    quote: {
      vi: '“Quy trình điều phối đa luồng rõ ràng, kịch bản chi tiết và sự phân vai thấu cảm giúp toàn đội ngũ phối hợp nhịp nhàng, dù áp lực chương trình trực tiếp rất lớn.”',
      en: '“Clear cross-functional workflows, empathetic briefing, and seamless backstage coordination enabled our team to deliver flawlessly under live ceremonial pressure.”',
    },
    highlights: {
      vi: [
        'Tối ưu hóa thời gian check-in từ 30–45 phút xuống dưới 5 giây/người nhờ AI FaceID',
        'Xây dựng tinh thần đồng đội vững chắc và sự tự hào của đội ngũ vận hành',
      ],
      en: [
        'Reduced registration check-in time from 45 mins to under 5s per honoree via AI',
        'Cemented resilient teamwork and operational camaraderie across workstreams',
      ],
    },
    year: '2025–2026',
    isHighlight: false,
  },
];

// ==============================================================================
// 08 — EDUCATION & CONTINUOUS LEARNING DATA
// ==============================================================================
export const EDUCATION_LEARNING_DATA: LearningCategory[] = [
  {
    id: 'formal',
    title: {
      vi: 'Học vấn Chính quy (Formal Education)',
      en: 'Formal Education',
    },
    description: {
      vi: 'Nền tảng tư duy quản trị, truyền thông tiếp thị và phương pháp luận học thuật chính quy.',
      en: 'Formal foundation in business administration, marketing communications, and management methodology.',
    },
    items: [
      {
        title: {
          vi: 'Cử nhân Quản trị Kinh doanh (Chuyên ngành Marketing / Truyền thông)',
          en: 'Bachelor of Business Administration (Marketing & Communications)',
        },
        institution: {
          vi: 'Đại học FPT (FPT University)',
          en: 'FPT University',
        },
        period: '2014 — 2018',
        badge: {
          vi: 'Tốt nghiệp Chính quy',
          en: 'Bachelor of Science Degree',
        },
        description: {
          vi: 'Trang bị tư duy hệ thống, năng lực lập kế hoạch chiến lược, nghiên cứu hành vi người tiêu dùng/nhân sự và kỹ năng dẫn dắt dự án trong môi trường đa văn hóa.',
          en: 'Grounded in systems thinking, strategic communication planning, consumer/employee behavior research, and cross-cultural project leadership.',
        },
      },
    ],
  },
  {
    id: 'interdisciplinary',
    title: {
      vi: 'Học tập Liên ngành (Interdisciplinary Learning)',
      en: 'Supplementary & Interdisciplinary Learning',
    },
    description: {
      vi: 'Mở rộng chiều sâu tư duy thông qua tâm lý học tổ chức, khoa học hành vi và thiết kế trải nghiệm.',
      en: 'Deepening operational impact through organizational psychology, behavioral science, and experience design.',
    },
    items: [
      {
        title: {
          vi: 'Tâm lý học Tổ chức & Động lực Con người',
          en: 'Organizational Psychology & Human Motivation',
        },
        institution: {
          vi: 'Tự nghiên cứu & Ứng dụng Thực hành',
          en: 'Self-directed Research & Applied Practice',
        },
        period: '2020 — Hiện tại',
        badge: {
          vi: 'Lĩnh vực Bổ trợ',
          en: 'Core Specialization',
        },
        description: {
          vi: 'Nghiên cứu cơ chế tạo động lực nội tại (Self-Determination Theory), tâm lý học an toàn (Psychological Safety) và cách con người tiếp nhận sự thay đổi trong doanh nghiệp.',
          en: 'Investigating intrinsic motivational drivers (Self-Determination Theory), psychological safety, and cognitive acceptance during organizational transitions.',
        },
      },
      {
        title: {
          vi: 'Khoa học Hành vi & Thiết kế Cú hích Văn hóa (Nudge in Culture)',
          en: 'Behavioral Science & Cultural Nudge Architecture',
        },
        institution: {
          vi: 'Mô hình Ứng dụng Doanh nghiệp',
          en: 'Organizational Frameworks',
        },
        period: '2022 — Hiện tại',
        badge: {
          vi: 'Phương pháp luận',
          en: 'Methodology',
        },
        description: {
          vi: 'Ứng dụng các quy chuẩn vi mô (micro-habits) và thiết kế môi trường làm việc để khuyến khích hành vi văn hóa tích cực nảy sinh tự nhiên thay vì ép buộc.',
          en: 'Applying micro-habit loops and choice architecture to encourage organic positive behaviors over bureaucratic enforcement.',
        },
      },
      {
        title: {
          vi: 'Thiết kế Trải nghiệm Nhân viên (Employee Experience — EX)',
          en: 'Employee Experience (EX) & Journey Design',
        },
        institution: {
          vi: 'Hệ sinh thái Nhân sự & Văn hóa',
          en: 'People & Culture Systems',
        },
        period: '2023 — Hiện tại',
        badge: {
          vi: 'Kiến trúc Hệ thống',
          en: 'System Architecture',
        },
        description: {
          vi: 'Tiếp cận vòng đời nhân sự như một hành trình trải nghiệm người dùng: tối ưu hóa điểm chạm từ ngày đầu hội nhập đến các cột mốc vinh danh quan trọng.',
          en: 'Treating the employee lifecycle as a curated user journey: optimizing key defining moments from Day-1 onboarding to career recognition peaks.',
        },
      },
    ],
  },
  {
    id: 'certifications',
    title: {
      vi: 'Chứng chỉ Chuyên môn Tuyển chọn (Professional Certifications)',
      en: 'Curated Professional Certifications',
    },
    description: {
      vi: 'Hồ sơ năng lực thực tế được đối chiếu trực tiếp từ LinkedIn Source of Truth.',
      en: 'Verified professional competencies anchored directly to official LinkedIn profile.',
    },
    items: [
      {
        title: {
          vi: 'Năng lực AI Thực hành & Nâng cao Hiệu suất Làm việc',
          en: 'Applied AI & Workflow Productivity Capabilities',
        },
        institution: {
          vi: 'LinkedIn Verified Profile',
          en: 'LinkedIn Verified Profile',
        },
        period: 'Cập nhật liên tục',
        badge: {
          vi: 'Xác thực LinkedIn',
          en: 'Verified',
        },
        description: {
          vi: 'Ứng dụng AI trong tự động hóa kịch bản, phân tích dữ liệu phản hồi nhân sự và tích hợp công nghệ nhận diện vào sự kiện văn hóa.',
          en: 'Applied AI integration in content automation, employee feedback synthesis, and facial recognition for organizational events.',
        },
      },
      {
        title: {
          vi: 'Lãnh đạo Gắn kết & Văn hóa Doanh nghiệp Thời đại Mới',
          en: 'Modern Employee Engagement & Culture Leadership',
        },
        institution: {
          vi: 'Chứng chỉ Chuyên môn Ngành',
          en: 'Professional Industry Credentials',
        },
        period: 'Được công nhận',
        badge: {
          vi: 'Năng lực Cốt lõi',
          en: 'Core Competency',
        },
        description: {
          vi: 'Phương pháp điều phối đối thoại lãnh đạo (Town Hall), xử lý khủng hoảng truyền thông nội bộ và kiến tạo môi trường làm việc cởi mở.',
          en: 'Town hall leadership facilitation, internal crisis communication, and cultivating transparent organizational dialogues.',
        },
      },
    ],
  },
];
