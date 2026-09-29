"use client";

import { Server, Monitor, Database, Cloud, Brain, Wrench } from "lucide-react";
import Reveal from "./Reveal";
import TechBackground from "./TechBackground";
import { SKILLS } from "@/constants/data";

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  "Backend":        <Server   size={16} />,
  "Frontend":       <Monitor  size={16} />,
  "Database":       <Database size={16} />,
  "Cloud & DevOps": <Cloud    size={16} />,
  "AI":             <Brain    size={16} />,
  "Tools":          <Wrench   size={16} />,
};

const CATEGORY_COLORS: Record<string, { card: string; chip: string; icon: string }> = {
  "Backend":        { card: "hover:border-brand-purple/40", chip: "border-brand-purple/30 bg-brand-purple/10 text-brand-purple", icon: "text-brand-purple bg-brand-purple/10 border-brand-purple/20" },
  "Frontend":       { card: "hover:border-brand-cyan/40",   chip: "border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan",       icon: "text-brand-cyan bg-brand-cyan/10 border-brand-cyan/20" },
  "Database":       { card: "hover:border-sky-400/40",      chip: "border-sky-400/30 bg-sky-400/10 text-sky-400",               icon: "text-sky-400 bg-sky-400/10 border-sky-400/20" },
  "Cloud & DevOps": { card: "hover:border-blue-400/40",     chip: "border-blue-400/30 bg-blue-400/10 text-blue-400",            icon: "text-blue-400 bg-blue-400/10 border-blue-400/20" },
  "AI":             { card: "hover:border-emerald-400/40",  chip: "border-emerald-400/30 bg-emerald-400/10 text-emerald-400",   icon: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20" },
  "Tools":          { card: "hover:border-orange-400/40",   chip: "border-orange-400/30 bg-orange-400/10 text-orange-400",      icon: "text-orange-400 bg-orange-400/10 border-orange-400/20" },
};

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-24">
      <TechBackground connectDist={120} />
      <div className="pointer-events-none absolute -right-40 top-10 h-80 w-80 rounded-full bg-brand-purple/8 blur-[110px]" />
      <div className="pointer-events-none absolute -left-40 bottom-10 h-80 w-80 rounded-full bg-brand-cyan/6 blur-[110px]" />

      <div className="relative mx-auto max-w-wrap px-7">
        <Reveal className="mb-12 max-w-xl">
          <div className="mb-3.5 flex items-center font-mono text-sm text-brand-cyan section-label">
            SKILLS
          </div>
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            A full-stack toolkit, weighted toward the backend.
          </h2>
          <p className="mt-3.5 text-base text-muted">
            Categorized by where I spend my time — backend and data first,
            frontend and cloud close behind.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((category, i) => {
            const colors = CATEGORY_COLORS[category.title] ?? CATEGORY_COLORS["Backend"];
            return (
              <Reveal delay={i * 0.06} key={category.title}>
                <div className={`group h-full rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_40px_-12px_rgba(124,92,255,0.15)] ${colors.card}`}>
                  {/* Category header */}
                  <div className="mb-5 flex items-center gap-3">
                    <div className={`flex h-9 w-9 items-center justify-center rounded-lg border ${colors.icon}`}>
                      {CATEGORY_ICONS[category.title]}
                    </div>
                    <h4 className="text-sm font-semibold">{category.title}</h4>
                    <span className="ml-auto font-mono text-[10px] text-muted">
                      {category.skills.length} skills
                    </span>
                  </div>

                  {/* Skill chips */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${colors.chip}`}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
