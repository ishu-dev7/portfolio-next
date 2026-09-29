export interface SkillItem {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  date: string;
  role: string;
  org: string;
  points: string[];
}

export type ProjectCategory = "enterprise" | "ai" | "tooling";

export interface ProjectItem {
  title: string;
  tag: string;
  categoryLabel: string;
  category: ProjectCategory;
  description: string;
  problem: string;
  role: string;
  tech: string;
  features: string[];
  contribution: string;
  highlights: string[];
  impact: string;
  stack: string;
}

export interface AchievementItem {
  icon: string;
  title: string;
  description: string;
}

export interface JourneyStep {
  year: string;
  title: string;
  description: string;
}

export interface CertificationItem {
  icon: string;
  name: string;
  status: "Completed" | "In Progress";
  detail?: string;
}

export interface CodingProfileItem {
  short: string;
  name: string;
  url: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
}

export interface StatItem {
  target: number;
  label: string;
}

export interface CounterItem {
  target: number;
  label: string;
}

export interface AboutStat {
  value: string;
  suffix: string;
  label: string;
  color: string;
}

export interface SnapshotRow {
  label: string;
  value: string;
  icon: string;
}

export interface EngineeringDecisionItem {
  category: string;
  question: string;
  answer: string;
  tags: string[];
}

export interface EngineeringImpactItem {
  category: string;
  title: string;
  description: string;
}

export interface ArchFlowStep {
  label: string;
  sub?: string;
  highlight?: boolean;
}

export interface ArchFlow {
  id: string;
  title: string;
  description: string;
  color: string;
  steps: ArchFlowStep[];
}
