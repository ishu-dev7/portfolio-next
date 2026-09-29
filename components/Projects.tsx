"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Reveal from "./Reveal";
import TechBackground from "./TechBackground";
import { PROJECTS } from "@/constants/data";
import { ProjectCategory } from "@/types";

const FILTERS: { label: string; value: ProjectCategory | "all" }[] = [
  { label: "All",        value: "all" },
  { label: "Enterprise", value: "enterprise" },
  { label: "AI",         value: "ai" },
  { label: "Tooling",    value: "tooling" },
];

const CATEGORY_META: Record<string, { bar: string; badge: string; glow: string }> = {
  enterprise: {
    bar:   "card-top-bar-enterprise",
    badge: "border-brand-purple/40 bg-brand-purple/10 text-brand-purple",
    glow:  "hover:shadow-[0_8px_40px_-12px_rgba(124,92,255,0.3)]",
  },
  ai: {
    bar:   "card-top-bar-ai",
    badge: "border-brand-cyan/40 bg-brand-cyan/10 text-brand-cyan",
    glow:  "hover:shadow-[0_8px_40px_-12px_rgba(34,211,238,0.3)]",
  },
  tooling: {
    bar:   "card-top-bar-tooling",
    badge: "border-brand-blue/40 bg-brand-blue/10 text-brand-blue",
    glow:  "hover:shadow-[0_8px_40px_-12px_rgba(61,90,254,0.3)]",
  },
};

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[90px_1fr] gap-2 py-2.5 border-b border-border/50 last:border-0">
      <span className="text-xs font-semibold text-brand-cyan/70">{label}</span>
      <span className="text-xs text-text/85 leading-relaxed">{value}</span>
    </div>
  );
}

function ProjectCard({ project, delay }: { project: typeof PROJECTS[0]; delay: number }) {
  const [expanded, setExpanded] = useState(false);
  const meta = CATEGORY_META[project.category] ?? CATEGORY_META.tooling;

  return (
    <Reveal delay={delay}>
      <div className={`flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-0.5 ${meta.glow}`}>
        {/* Gradient top bar */}
        <div className={`h-[3px] w-full ${meta.bar}`} />

        <div className="flex flex-1 flex-col p-6">
          {/* Category badge */}
          <div className="mb-3">
            <span className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-semibold ${meta.badge}`}>
              {project.categoryLabel}
            </span>
          </div>

          {/* Title + tag */}
          <div className="mb-2 flex items-start justify-between gap-3">
            <h3 className="text-lg font-semibold leading-snug">
              {project.title}{" "}
              <span className="font-mono text-sm font-normal text-muted">({project.tag})</span>
            </h3>
          </div>

          {/* Description */}
          <p className="mb-4 text-sm leading-relaxed text-text/75">{project.description}</p>

          {/* Meta table */}
          <div className="mb-4 rounded-xl border border-border/50 bg-surface2 px-4">
            <MetaRow label="Role"         value={project.role} />
            <MetaRow label="Tech"         value={project.tech} />
            <MetaRow label="Features"     value={project.features.join(", ")} />
            <MetaRow label="Contribution" value={project.contribution} />
          </div>

          {/* Engineering highlights toggle */}
          <button
            onClick={() => setExpanded((e) => !e)}
            className="mb-3 flex items-center gap-2 text-xs font-semibold text-brand-purple hover:text-brand-cyan transition-colors"
          >
            <span className="h-px flex-1 bg-brand-purple/20" />
            Engineering Highlights
            {expanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
            <span className="h-px flex-1 bg-brand-purple/20" />
          </button>

          {/* Highlights — collapsible */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              expanded ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <ul className="mb-3 flex flex-col gap-2 pl-1">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-xs text-text/85 leading-relaxed">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-purple/60" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Stack footer */}
          <div className="mt-auto border-t border-border/50 pt-3">
            <span className="font-mono text-[11px] text-brand-purple/80">{project.stack}</span>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");
  const visible = filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative overflow-hidden py-24">
      <TechBackground connectDist={125} />
      <div className="pointer-events-none absolute left-0 top-1/3 h-96 w-96 rounded-full bg-brand-blue/6 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 bottom-1/3 h-96 w-96 rounded-full bg-brand-purple/6 blur-[120px]" />

      <div className="relative mx-auto max-w-wrap px-7">
        <Reveal className="mb-12 max-w-xl">
          <div className="mb-3.5 flex items-center font-mono text-sm text-brand-cyan section-label">
            PROJECTS
          </div>
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            Systems I&apos;ve built and shipped.
          </h2>
          <p className="mt-3.5 text-base text-muted">
            Enterprise applications, AI-powered reporting, and automation tooling.
            Click <span className="text-brand-purple font-medium">Engineering Highlights</span> on any card to see technical depth.
          </p>
        </Reveal>

        {/* Filter pills */}
        <Reveal className="mb-9 flex flex-wrap gap-2.5">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                filter === f.value
                  ? "bg-brand-gradient text-white shadow-[0_4px_20px_-4px_rgba(124,92,255,0.5)]"
                  : "border border-border text-muted hover:border-brand-purple hover:text-text"
              }`}
            >
              {f.label}
            </button>
          ))}
        </Reveal>

        {/* Project grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {visible.map((project, i) => (
            <ProjectCard key={project.title} project={project} delay={i * 0.05} />
          ))}
        </div>
      </div>
    </section>
  );
}
