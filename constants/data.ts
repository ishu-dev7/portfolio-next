import {
  AboutStat,
  AchievementItem,
  ArchFlow,
  CertificationItem,
  CodingProfileItem,
  CounterItem,
  EngineeringDecisionItem,
  EngineeringImpactItem,
  ExperienceItem,
  JourneyStep,
  ProjectItem,
  ServiceItem,
  SkillCategory,
  SnapshotRow,
  StatItem,
  TestimonialItem,
} from "@/types";

export const SITE = {
  name: "Harendra Pratap Singh",
  title:
    ".NET Full Stack Developer | Backend Specialist | AI Integration | SQL Server",
  location: "Indore, Madhya Pradesh, India",
  email: "jnvk.harendrasingh1951999@gmail.com",
  github: "https://github.com/ishu-dev7",
  linkedin: "https://www.linkedin.com/in/harendra-pratap/",
};

export const TYPING_LINES = [
  "Backend Specialist · .NET Core / C# / SQL Server",
  "Full Stack Developer · Angular / TypeScript",
  "AI Integration · LLMs, OCR, Azure OpenAI",
];

// ── About section ──────────────────────────────────────────────────────────────

export const ABOUT_HIGHLIGHTS = [
  "Leading backend development and system architecture discussions",
  "Managing three live enterprise applications in production",
  "Delivered the organization's first AI and OCR integrations",
  "Mentoring junior developers and supporting clients directly",
];

// Static stats — no animated counters that could flicker to 0
export const ABOUT_STATS: AboutStat[] = [
  { value: "3",  suffix: "",  label: "Years Experience",     color: "from-brand-purple to-brand-blue" },
  { value: "15", suffix: "+", label: "Enterprise Modules",   color: "from-brand-blue to-indigo-400" },
  { value: "3",  suffix: "",  label: "Live Projects",        color: "from-brand-cyan to-brand-blue" },
  { value: "5",  suffix: "+", label: "AI Integrations",      color: "from-emerald-400 to-brand-cyan" },
];

// Kept for Statistics section only (animated)
export const ABOUT_COUNTERS: CounterItem[] = [
  { target: 3,  label: "Years Experience" },
  { target: 15, label: "Enterprise Modules" },
  { target: 3,  label: "Live Projects" },
  { target: 5,  label: "AI Integrations" },
];

// ── Recruiter Snapshot ────────────────────────────────────────────────────────

export const RECRUITER_SNAPSHOT: SnapshotRow[] = [
  { icon: "⏱",  label: "Experience",         value: "3 Years Professional" },
  { icon: "⚙",  label: "Primary Stack",       value: "C# · .NET Core · Angular · SQL Server" },
  { icon: "🏢",  label: "Current Role",        value: "Software Developer — Appstean Infotech" },
  { icon: "🔑",  label: "Technical Ownership", value: "Backend · Production · Client Support · Optimization" },
  { icon: "📦",  label: "Live Projects",       value: "3 Enterprise Applications in Production" },
  { icon: "🤖",  label: "AI Work",             value: "LLM Insights · OCR Automation · Azure OpenAI" },
  { icon: "☁",  label: "Cloud",               value: "Microsoft Azure · App Service · IIS" },
  { icon: "📍",  label: "Location",            value: "Indore, India — Open to Remote / Hybrid" },
  { icon: "🎯",  label: "Open To",             value: ".NET · Full Stack · Backend · Azure · AI Roles" },
];

// ── Skills ────────────────────────────────────────────────────────────────────

export const SKILLS: SkillCategory[] = [
  {
    title: "Backend",
    skills: [
      { name: "C# / .NET Core",                 level: 95 },
      { name: "ASP.NET Core Web API",            level: 92 },
      { name: "Entity Framework Core / LINQ",    level: 90 },
      { name: "JWT Auth / Middleware / DI",      level: 88 },
      { name: ".NET Framework (Legacy)",         level: 85 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "Angular / TypeScript",            level: 85 },
      { name: "Angular Material / DevExtreme",   level: 80 },
      { name: "HTML5 / CSS3 / SCSS",            level: 85 },
      { name: "Bootstrap",                       level: 82 },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "SQL Server / T-SQL",              level: 93 },
      { name: "Stored Procedures / Views",       level: 90 },
      { name: "Query Optimization / Exec Plans", level: 88 },
      { name: "Indexes / Deadlock Resolution",   level: 84 },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "Azure App Service / IIS",         level: 80 },
      { name: "Git / GitHub / Azure DevOps",     level: 85 },
      { name: "CI/CD Pipelines / TFS",          level: 75 },
    ],
  },
  {
    title: "AI & Automation",
    skills: [
      { name: "Azure OpenAI / OpenAI API",       level: 82 },
      { name: "Prompt Engineering",              level: 85 },
      { name: "OCR / Vision Processing",         level: 78 },
      { name: "LLM Report Integration",          level: 80 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Visual Studio / VS Code",         level: 95 },
      { name: "SSMS / Postman / Swagger",        level: 90 },
      { name: "Jira / Azure Boards",             level: 72 },
    ],
  },
];

// ── Experience ────────────────────────────────────────────────────────────────

export const EXPERIENCE: ExperienceItem[] = [
  {
    date: "DEC 2023 — PRESENT",
    role: "Software Developer",
    org: "Appstean Infotech Pvt. Ltd. · Indore, Madhya Pradesh, India",
    points: [
      "Own backend development across two enterprise SaaS applications used in production by multiple client organizations, handling feature delivery, production deployments, and live issue resolution.",
      "Design and implement RESTful APIs with .NET Core, applying clean architecture principles, dependency injection, JWT authentication, and middleware pipelines.",
      "Led migration of legacy .NET Framework APIs to .NET Core, improving maintainability and enabling modern features across the platform.",
      "Optimize SQL Server performance through execution plan analysis, strategic indexing, stored procedure tuning, and deadlock investigation — measurably reducing API response times.",
      "Integrated Azure OpenAI into the reporting workflow, delivering the organization's first production LLM feature: natural-language sales analysis over real business data.",
      "Built OCR-based automation using Azure OpenAI Vision to extract product and quantity data from uploaded stock statement images, eliminating manual data entry.",
      "Delivered SAP integration connecting enterprise client data to the platform, coordinating technical requirements with client stakeholders.",
      "Take on technical lead responsibilities: conducting code reviews, providing technical guidance, mentoring junior developers, and supporting clients directly on production issues.",
      "Manage reporting workflows including dynamic SQL generation, Crystal Reports integration, and PDF/Excel export pipelines.",
    ],
  },
  {
    date: "JUN 2023 — DEC 2023",
    role: "Software Developer Intern",
    org: "YPSILON IT Solution",
    points: [
      "Built features for a Hospital Management System using Java and SQL, gaining first exposure to production-adjacent development.",
      "Worked across data modeling, business logic implementation, and query writing in a structured software team.",
    ],
  },
];

// ── Projects ──────────────────────────────────────────────────────────────────

export const PROJECTS: ProjectItem[] = [
  {
    title: "Sales Force Automation System",
    tag: "SFA",
    categoryLabel: "Enterprise SaaS",
    category: "enterprise",
    description:
      "Enterprise pharmaceutical field-sales platform serving thousands of sales reps across multiple client organizations — covering the complete field-sales workflow.",
    problem:
      "Pharmaceutical companies needed a centralized platform to manage field sales operations: tour planning, expense approvals, doctor visits, stock tracking, and reporting — across large distributed teams.",
    role: "Backend Lead / Full Stack Developer",
    tech: ".NET Core, Angular 15, SQL Server, DevExtreme, Azure",
    features: ["Tour Planning", "Expense Management", "Doctor Visit Tracking", "Attendance", "Stock Statement", "Approvals", "AI-Powered Reports"],
    contribution:
      "Owned REST API design, SQL performance optimization, .NET Framework → .NET Core migration, production deployments, AI reporting integration, and client technical support.",
    highlights: [
      "Reduced API response times by rewriting slow SQL queries, restructuring indexes, and eliminating N+1 patterns identified through execution plan analysis.",
      "Delivered the organization's first production LLM feature — Azure OpenAI-powered natural-language sales insights embedded directly in the reporting module.",
      "Led .NET Framework to .NET Core migration across multiple modules, improving startup performance and enabling modern middleware patterns.",
      "Resolved a multi-table deadlock in production by analyzing SQL Server deadlock graphs, redesigning transaction boundaries, and adding covering indexes.",
    ],
    impact:
      "Platform supports multiple enterprise pharmaceutical clients in production, with measurably faster API performance and AI-powered reporting as competitive differentiators.",
    stack: ".NET Core · Angular · SQL Server · Azure OpenAI",
  },
  {
    title: "HRMS — Human Resource Management",
    tag: "HRMS",
    categoryLabel: "Enterprise SaaS",
    category: "enterprise",
    description:
      "Full-cycle HR management platform handling employee lifecycle from onboarding through payroll, leave, loans, and resignation — with multi-level approval workflows.",
    problem:
      "HR teams needed a single platform to manage the complete employee lifecycle — onboarding, payroll calculations, leave management, loans, and resignation — with configurable approval chains.",
    role: "Backend Developer / Full Stack",
    tech: ".NET Core, Angular, SQL Server",
    features: ["Payroll Engine", "Leave Management", "Loan Processing", "Onboarding", "Resignation Workflow", "Multi-level Approvals", "Employee Dashboard"],
    contribution:
      "Built the payroll calculation engine, multi-tier approval workflow system, employee self-service portal, and loan management module.",
    highlights: [
      "Designed a configurable multi-tier approval engine from scratch, supporting escalation rules, delegation, and parallel approval paths without hardcoded business logic.",
      "Built the payroll module handling complex salary structures, statutory deductions, and month-end batch processing with accuracy requirements.",
      "Implemented employee self-service features that reduced HR team manual intervention for routine requests.",
    ],
    impact:
      "Replaced manual HR processes for enterprise clients, reducing administrative overhead and providing audit-ready payroll and approval records.",
    stack: ".NET Core · Angular · SQL Server",
  },
  {
    title: "AI Sales Insights — LLM Reporting",
    tag: "AI",
    categoryLabel: "AI Feature",
    category: "ai",
    description:
      "Integrated Azure OpenAI into the enterprise reporting system, enabling users to ask natural-language questions about their sales data and receive contextual AI-generated insights.",
    problem:
      "Sales managers were drowning in tabular reports without the ability to quickly understand trends, regional performance, or root causes of changes. Standard BI reports required manual interpretation.",
    role: "AI Integration Lead",
    tech: "Azure OpenAI, .NET Core, SQL Server, Angular",
    features: ["Natural Language Queries", "Sales Trend Analysis", "Regional Performance", "Doctor Performance", "Product Analysis", "Month-over-Month Comparison"],
    contribution:
      "Designed the full pipeline from report data extraction through prompt construction, Azure OpenAI API integration, structured response parsing, and Angular UI presentation.",
    highlights: [
      "Built a context-aware prompt construction pipeline that converts structured SQL report data into grounded LLM input — ensuring responses stay anchored to real data.",
      "Implemented response validation and structured output parsing to handle LLM variability and ensure consistent display in the Angular UI.",
      "Designed the integration to work with the existing report infrastructure — no duplication of data processing logic.",
      "Delivered the organization's first production AI feature, opening the roadmap for further LLM-powered capabilities.",
    ],
    impact:
      "Sales managers can now ask questions like 'Which regions underperformed last quarter?' and receive data-grounded analysis — reducing report interpretation time from hours to seconds.",
    stack: "Azure OpenAI · .NET Core · SQL Server · Angular",
  },
  {
    title: "OCR Stock Statement Automation",
    tag: "OCR",
    categoryLabel: "AI Automation",
    category: "ai",
    description:
      "Upload a photo or scan of a stock statement — OCR extracts product names and quantities and auto-fills the form, eliminating manual data entry entirely.",
    problem:
      "Field sales reps were manually entering stock data from physical documents or photographs into the system — a slow, error-prone process that reduced data quality and field productivity.",
    role: "Backend Developer — AI Automation",
    tech: "Azure OpenAI Vision, .NET Core, Angular",
    features: ["Image Upload", "OCR Extraction", "Product Recognition", "Quantity Parsing", "Validation Layer", "Auto-population", "Error Handling"],
    contribution:
      "Built the complete OCR pipeline from image upload through Azure OpenAI Vision extraction, validation, and form auto-population, including handling for varied document formats.",
    highlights: [
      "Handled edge cases across handwritten documents, varied stock statement formats, poor image quality, and partial extractions — with graceful fallback to manual entry.",
      "Implemented a validation layer that checks extracted values against known product catalogs before writing to the database, preventing OCR errors from corrupting data.",
      "Integrated the pipeline into the existing Angular form without breaking the manual entry flow — OCR results pre-fill fields that users can correct if needed.",
    ],
    impact:
      "Eliminated manual stock statement data entry for field reps, improving data quality and reducing time-per-entry from several minutes to seconds.",
    stack: "Azure OpenAI Vision · .NET Core · Angular",
  },
  {
    title: "Dynamic Reporting Engine",
    tag: "Reports",
    categoryLabel: "Internal Tooling",
    category: "tooling",
    description:
      "Configurable reporting tool where business users define their own filters and column layouts — the backend generates optimized dynamic SQL and exports to PDF or Excel.",
    problem:
      "Business teams constantly requested new report variations from developers. Each report required a separate implementation cycle, creating a bottleneck and slowing business decisions.",
    role: "Backend Developer / Tooling",
    tech: ".NET Core, SQL Server, Crystal Reports, Angular",
    features: ["User-Defined Filters", "Custom Column Selection", "Dynamic SQL Generation", "PDF Export", "Excel Export", "Parameterized Queries"],
    contribution:
      "Designed the dynamic SQL generation engine, parameterized query builder (preventing SQL injection), Crystal Reports integration, and multi-format export pipeline.",
    highlights: [
      "Built a safe dynamic SQL generator supporting complex multi-table joins from user-configured column/filter selections — using parameterized queries throughout to prevent injection.",
      "Implemented PDF and Excel export with custom formatting, headers, and pagination that adapts to the dynamically defined structure.",
      "Enabled business users to build their own reports without developer involvement — reducing time-to-report from days to minutes.",
    ],
    impact:
      "Eliminated the reporting development backlog and gave business teams self-service reporting capability, freeing developer time for higher-value work.",
    stack: ".NET Core · SQL Server · Crystal Reports",
  },
];

// ── Architecture Flows ────────────────────────────────────────────────────────

export const ARCHITECTURE_FLOWS: ArchFlow[] = [
  {
    id: "webapp",
    title: "Enterprise Web Application",
    description: "Standard layered architecture used across the SFA and HRMS platforms.",
    color: "#7C5CFF",
    steps: [
      { label: "Angular SPA", sub: "TypeScript · DevExtreme · Material" },
      { label: "ASP.NET Core API", sub: "REST · JWT · Middleware", highlight: true },
      { label: "Business Logic Layer", sub: "Services · Validators · DI" },
      { label: "Data Access Layer", sub: "EF Core · Stored Procedures" },
      { label: "SQL Server", sub: "T-SQL · Views · Indexes" },
    ],
  },
  {
    id: "auth",
    title: "Authentication Flow",
    description: "JWT-based stateless authentication with middleware pipeline.",
    color: "#22D3EE",
    steps: [
      { label: "Login Request", sub: "Credentials · Angular" },
      { label: "Auth Controller", sub: "ASP.NET Core" },
      { label: "User Validation", sub: "SQL Server · Hashed Password" },
      { label: "JWT Generation", sub: "Claims · Expiry · Signing Key", highlight: true },
      { label: "Token → Client", sub: "LocalStorage · HTTP Header" },
      { label: "Auth Middleware", sub: "Every Subsequent Request" },
    ],
  },
  {
    id: "ai",
    title: "AI Sales Insights Pipeline",
    description: "LLM-powered natural-language analysis of real sales report data.",
    color: "#34d399",
    steps: [
      { label: "Sales Data", sub: "SQL Server · Report Tables" },
      { label: "Report Generation", sub: ".NET Core · Dynamic SQL" },
      { label: "Data Preparation", sub: "Filtering · Aggregation · Structuring" },
      { label: "Prompt Construction", sub: "Context + Question + Schema", highlight: true },
      { label: "Azure OpenAI API", sub: "GPT · Completion Endpoint" },
      { label: "Response Parsing", sub: "Structured Output · Validation" },
      { label: "Angular Insights UI", sub: "Display · Formatting · Export" },
    ],
  },
  {
    id: "ocr",
    title: "OCR Automation Pipeline",
    description: "Document-to-database automation via Azure OpenAI Vision.",
    color: "#fb923c",
    steps: [
      { label: "Document / Image", sub: "Photo · Scan · Upload" },
      { label: "File Upload API", sub: "ASP.NET Core · Validation" },
      { label: "OCR Processing", sub: "Azure OpenAI Vision API", highlight: true },
      { label: "Data Extraction", sub: "Product Names · Quantities" },
      { label: "Validation Layer", sub: "Catalog Check · Error Handling" },
      { label: "Form Auto-Population", sub: "Angular · User Review" },
      { label: "Database Write", sub: "SQL Server · Confirmed Records" },
    ],
  },
];

// ── Engineering Decisions ─────────────────────────────────────────────────────

export const ENGINEERING_DECISIONS: EngineeringDecisionItem[] = [
  {
    category: "Modernization",
    question: "Why migrate from .NET Framework to .NET Core?",
    answer:
      ".NET Framework is Windows-only and no longer receives feature updates. .NET Core gives us cross-platform deployment, significantly better performance on REST API workloads, modern middleware pipeline control, and access to the current ecosystem. We migrated incrementally — module by module — to reduce risk on live production systems.",
    tags: [".NET Core", "Migration", "Architecture"],
  },
  {
    category: "Database",
    question: "How were SQL Server performance issues diagnosed and resolved?",
    answer:
      "Using SQL Server Management Studio's execution plan analyzer to identify missing indexes, key lookups, and table scans. Added covering indexes for high-frequency API queries, rewrote correlated subqueries as JOINs, and eliminated N+1 patterns in EF Core by switching to explicit Includes or raw SQL where needed. Measured before/after using SET STATISTICS TIME.",
    tags: ["SQL Server", "Performance", "Indexing", "Execution Plans"],
  },
  {
    category: "Database",
    question: "How was a production deadlock investigated and resolved?",
    answer:
      "Captured the deadlock graph from SQL Server's system_health extended events session. Identified two transactions acquiring locks in opposite order on the same tables. Resolved by standardizing lock acquisition order, reducing transaction scope, and adding a covering index that eliminated one table access entirely — removing the contention point.",
    tags: ["SQL Server", "Deadlock", "Concurrency", "Production"],
  },
  {
    category: "Security",
    question: "How is JWT authentication implemented in the API?",
    answer:
      "Users authenticate with credentials, the API validates against hashed passwords in SQL Server, then generates a signed JWT containing user claims (role, ID, tenant). All subsequent API requests pass the token in the Authorization header. ASP.NET Core's authentication middleware validates the signature and expiry on every request — no database hit needed per request.",
    tags: ["JWT", "Authentication", "Middleware", "Security"],
  },
  {
    category: "AI Integration",
    question: "How is large sales data prepared for LLM processing?",
    answer:
      "Raw SQL result sets cannot be sent directly — they are too large and unstructured. We filter to the relevant time period, aggregate to key dimensions (region, product, doctor), and format as structured key-value context. The prompt includes this prepared context plus the user's natural-language question. This keeps token usage manageable and ensures the LLM grounds its response in actual data.",
    tags: ["Azure OpenAI", "Prompt Engineering", "LLM", "Data Preparation"],
  },
  {
    category: "AI Integration",
    question: "How is OCR extraction output validated before database write?",
    answer:
      "After Azure OpenAI Vision extracts product names and quantities, the extracted product names are checked against the known product catalog using fuzzy matching. Quantities are range-validated. Unmatched or out-of-range values are flagged for manual user review rather than silently written, preserving data integrity.",
    tags: ["OCR", "Validation", "Data Quality", "Azure OpenAI"],
  },
  {
    category: "API Design",
    question: "How is dynamic SQL generated safely without SQL injection risk?",
    answer:
      "User-selected columns and filters define the query shape, but all actual values are passed as SQL parameters — never interpolated into query strings. Column names are validated against an allowlist of permitted fields before being included in the SELECT clause. This gives flexibility without opening injection vectors.",
    tags: ["SQL", "Security", "Dynamic SQL", "API Design"],
  },
  {
    category: "Production",
    question: "How are production deployments handled?",
    answer:
      "API deployments go to IIS / Azure App Service. We follow a checklist: build verification, database migration scripts reviewed and applied, configuration validated for the environment, smoke tests on key endpoints post-deploy. Rollback plan is documented before every deployment. For database changes, additive-first migrations reduce rollback risk.",
    tags: ["Production", "Deployment", "Azure", "IIS"],
  },
];

// ── Engineering Impact ────────────────────────────────────────────────────────

export const ENGINEERING_IMPACT: EngineeringImpactItem[] = [
  // Performance
  { category: "Performance", title: "SQL Execution Plan Analysis", description: "Diagnosed slow queries using SSMS execution plan analyzer; added covering indexes and rewrote subqueries — measurably reducing API response times in production." },
  { category: "Performance", title: "Deadlock Resolution", description: "Identified and resolved a production multi-table deadlock by analyzing deadlock graphs, standardizing lock order, and restructuring the transaction boundary." },
  { category: "Performance", title: "EF Core Query Optimization", description: "Eliminated N+1 query patterns by converting to explicit joins and raw SQL where ORM overhead was measurable." },
  // Modernization
  { category: "Modernization", title: ".NET Framework → .NET Core Migration", description: "Led incremental migration of legacy API modules to .NET Core, enabling modern middleware, better performance, and cross-platform deployment capability." },
  { category: "Modernization", title: "Dynamic Reporting Engine", description: "Built a self-service reporting tool eliminating developer bottleneck — business users configure their own reports without code changes." },
  // AI
  { category: "AI", title: "LLM-Powered Sales Insights", description: "Integrated Azure OpenAI into the reporting workflow — first production AI feature at Appstean Infotech, enabling natural-language analysis of real sales data." },
  { category: "AI", title: "OCR Stock Statement Automation", description: "Built end-to-end OCR pipeline using Azure OpenAI Vision, eliminating manual stock data entry for field sales reps." },
  // Production
  { category: "Production", title: "Live Production Ownership", description: "Sole backend owner for two enterprise SaaS applications, handling feature delivery, production deployments, and live issue resolution." },
  { category: "Production", title: "SAP Integration", description: "Delivered a successful SAP integration for an enterprise client, coordinating technical requirements across both systems." },
  { category: "Production", title: "Client Technical Support", description: "Direct technical point of contact for production issues — diagnosing, resolving, and communicating fixes to enterprise client stakeholders." },
  // Leadership
  { category: "Leadership", title: "Technical Guidance & Mentoring", description: "Providing architectural direction, code reviews, and hands-on mentoring for junior developers on the team." },
  { category: "Leadership", title: "Star Performer Recognition", description: "Recognized as Star Performer of the Year (2025) for consistent delivery and technical ownership across multiple concurrent projects." },
];

// ── Achievements ──────────────────────────────────────────────────────────────

export const ACHIEVEMENTS: AchievementItem[] = [
  { icon: "★", title: "Star Performer of the Year", description: "Recognized for consistent delivery and technical ownership — Appstean Infotech 2025." },
  { icon: "🏅", title: "Notable New Comer Award", description: "Awarded for exceptional ramp-up speed and early impact in the first year — Appstean Infotech 2024." },
  { icon: "✓", title: "Multiple Client Appreciations", description: "Direct recognition from enterprise client stakeholders for outstanding support, delivery, and communication." },
  { icon: "◆", title: "First AI Integration Delivered", description: "Delivered the organization's first production AI feature — LLM-powered sales reporting insights on real business data." },
  { icon: "⬡", title: "Multi-Project Ownership", description: "Managed two enterprise SaaS applications concurrently while leading feature delivery across both." },
  { icon: "⚡", title: "SQL Performance Optimization", description: "Measurably reduced API response times through advanced query tuning, index optimization, and deadlock resolution." },
  { icon: "▲", title: "Production Deployments", description: "Successfully owned and executed multiple live production releases with full rollback planning and zero critical incidents." },
  { icon: "◎", title: "Mentored Junior Developers", description: "Guided developers through onboarding, code reviews, and end-to-end feature delivery in a production codebase." },
  { icon: "■", title: "SAP Integration Success", description: "Delivered a successful SAP integration for an enterprise client within tight timelines and complex technical requirements." },
];

// ── Expertise topics ──────────────────────────────────────────────────────────

export const EXPERTISE_TOPICS = [
  "REST API Architecture",
  "JWT Authentication",
  "Middleware Pipeline",
  "SQL Server Optimization",
  "Execution Plan Analysis",
  "Deadlock Resolution",
  "Background Jobs",
  "SOLID Principles",
  "Clean Architecture",
  "Repository Pattern",
  "Dependency Injection",
  "LLM Integration",
];

// ── Journey ───────────────────────────────────────────────────────────────────

export const JOURNEY: JourneyStep[] = [
  { year: "2020–2023", title: "BCA",               description: "Maharishi Mahesh Yogi Vedic Vishwavidyalaya" },
  { year: "Jun–Dec 2023", title: "Internship",     description: "Java, SQL, Hospital Management System @ YPSILON" },
  { year: "Dec 2023", title: "Software Developer", description: "Joined Appstean Infotech — .NET / Angular enterprise SaaS" },
  { year: "2024–2026", title: "MCA",               description: "Chandigarh University, alongside full-time delivery" },
  { year: "Ongoing", title: "Technical Ownership", description: "Backend architecture, AI integration, mentoring & production" },
];

// ── Certifications ────────────────────────────────────────────────────────────

export const CERTIFICATIONS: CertificationItem[] = [
  { icon: "☕", name: "Java Full Stack Development",  status: "Completed",    detail: "Practical full-stack development with Java and SQL" },
  { icon: "⚡", name: "AI Implementation Workshop",   status: "Completed",    detail: "Applied AI concepts and implementation practices" },
  { icon: "🤖", name: "Azure AI-200 (AI Engineer)",   status: "In Progress",  detail: "Actively preparing — Azure AI Engineer Associate" },
];

// ── Coding Profiles ───────────────────────────────────────────────────────────

export const CODING_PROFILES: CodingProfileItem[] = [
  { short: "GH", name: "GitHub",   url: "https://github.com/ishu-dev7" },
  { short: "in", name: "LinkedIn", url: "https://www.linkedin.com/in/harendra-pratap/" },
];

// ── Testimonials ──────────────────────────────────────────────────────────────

export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote: "Reliable under production pressure — when something broke, they were already halfway to the fix.",
    name: "Engineering Manager",
    role: "Appstean Infotech",
  },
  {
    quote: "Explained a complex integration in terms our non-technical team could actually act on.",
    name: "Client Stakeholder",
    role: "Pharmaceutical Client",
  },
  {
    quote: "Patient with questions and generous with context — made ramping up onto the codebase easy.",
    name: "Junior Developer",
    role: "Appstean Infotech",
  },
];

// ── Services / What I Bring ───────────────────────────────────────────────────

export const SERVICES: ServiceItem[] = [
  { number: "01", title: "Backend Engineering",      description: "Building robust, scalable .NET backends for enterprise SaaS — APIs, auth, background jobs, and deployment." },
  { number: "02", title: "Full Stack Delivery",      description: "End-to-end feature ownership across Angular frontends and .NET backends, from design to production." },
  { number: "03", title: "API Design & Optimization",description: "RESTful API architecture that teams can consume confidently — versioned, documented, and performance-tuned." },
  { number: "04", title: "SQL Server Performance",   description: "Query tuning, index optimization, execution plan analysis, and deadlock resolution on production databases." },
  { number: "05", title: "AI Integration",           description: "Embedding LLMs and OCR into real business workflows — reporting insights, data entry automation, and decision support." },
  { number: "06", title: "Technical Leadership",     description: "Code reviews, architecture decisions, junior mentoring, and cross-team technical collaboration." },
];

// ── Statistics ────────────────────────────────────────────────────────────────

export const STATS: StatItem[] = [
  { target: 3,  label: "Years Experience" },
  { target: 15, label: "Technologies in Stack" },
  { target: 15, label: "Modules Delivered" },
  { target: 3,  label: "Live Enterprise Projects" },
  { target: 5,  label: "AI Features Delivered" },
  { target: 8,  label: "Developers Mentored" },
];

// ── Navigation ────────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { href: "#home",         label: "Home" },
  { href: "#about",        label: "About" },
  { href: "#experience",   label: "Experience" },
  { href: "#projects",     label: "Projects" },
  { href: "#architecture", label: "Architecture" },
  { href: "#skills",       label: "Skills" },
  { href: "#achievements", label: "Achievements" },
  { href: "#resume",       label: "Resume" },
  { href: "#contact",      label: "Contact" },
];
