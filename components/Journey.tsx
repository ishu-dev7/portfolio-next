import { GraduationCap, Briefcase, Code2, BookOpen, TrendingUp } from "lucide-react";
import Reveal from "./Reveal";
import TechBackground from "./TechBackground";
import { JOURNEY } from "@/constants/data";

const STEP_ICONS  = [GraduationCap, Code2, Briefcase, BookOpen, TrendingUp];
const STEP_COLORS = [
  { ring: "border-brand-cyan/40   bg-brand-cyan/10",   text: "text-brand-cyan",   line: "bg-brand-cyan/30"   },
  { ring: "border-brand-purple/40 bg-brand-purple/10", text: "text-brand-purple", line: "bg-brand-purple/30" },
  { ring: "border-emerald-400/40  bg-emerald-400/10",  text: "text-emerald-400",  line: "bg-emerald-400/30"  },
  { ring: "border-sky-400/40      bg-sky-400/10",      text: "text-sky-400",      line: "bg-sky-400/30"      },
  { ring: "border-yellow-400/40   bg-yellow-400/10",   text: "text-yellow-400",   line: "bg-yellow-400/30"   },
];

export default function Journey() {
  return (
    <section id="journey" className="relative overflow-hidden py-20">
      <TechBackground connectDist={115} />
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-20" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/8 blur-[80px]" />

      <div className="relative mx-auto max-w-wrap px-7">
        <Reveal className="mb-12 max-w-xl">
          <div className="mb-3.5 flex items-center font-mono text-sm text-brand-cyan section-label">
            DEVELOPMENT JOURNEY
          </div>
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            From BCA to technical lead.
          </h2>
          <p className="mt-3.5 text-base text-muted">
            Five milestones that shaped how I think about software.
          </p>
        </Reveal>

        {/* Desktop: 5-col horizontal. Mobile: vertical timeline */}
        <div className="block lg:hidden">
          {/* Mobile vertical timeline */}
          <div className="relative pl-8">
            <div className="absolute left-3.5 top-0 bottom-0 w-px bg-gradient-to-b from-brand-cyan/40 via-border to-transparent" />
            {JOURNEY.map((step, i) => {
              const Icon  = STEP_ICONS[i];
              const meta  = STEP_COLORS[i];
              return (
                <Reveal delay={i * 0.08} key={step.title}>
                  <div className="relative mb-6 last:mb-0">
                    {/* Dot */}
                    <div className={`absolute -left-[22px] top-3 flex h-7 w-7 items-center justify-center rounded-full border ${meta.ring}`}>
                      <Icon size={13} className={meta.text} />
                    </div>
                    <div className="rounded-xl border border-border bg-surface p-4">
                      <div className={`mb-0.5 font-mono text-[11px] ${meta.text}`}>{step.year}</div>
                      <h4 className="mb-1 text-sm font-semibold">{step.title}</h4>
                      <p className="text-xs leading-relaxed text-muted">{step.description}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Desktop 5-column */}
        <div className="relative hidden lg:block">
          {/* Horizontal connector line */}
          <div className="absolute left-[10%] right-[10%] top-5 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Icons row */}
          <div className="mb-3 grid grid-cols-5">
            {JOURNEY.map((step, i) => {
              const Icon = STEP_ICONS[i];
              const meta = STEP_COLORS[i];
              return (
                <div key={step.title + "-icon"} className="flex flex-col items-center">
                  <div className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border ${meta.ring}`}>
                    <Icon size={16} className={meta.text} />
                    <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full border border-border bg-bg font-mono text-[9px] text-muted">
                      {i + 1}
                    </span>
                  </div>
                  {/* Connector from icon down to card */}
                  <div className={`mt-1 h-4 w-px ${meta.line}`} />
                </div>
              );
            })}
          </div>

          {/* Cards row */}
          <div className="grid grid-cols-5 gap-3">
            {JOURNEY.map((step, i) => {
              const meta = STEP_COLORS[i];
              return (
                <Reveal delay={i * 0.1} key={step.title}>
                  <div className={`h-full rounded-xl border bg-surface p-4 transition-all duration-200 hover:border-opacity-60 hover:bg-surface2 border-border hover:border-[color:var(--border)]`}>
                    <div className={`mb-1 font-mono text-[11px] ${meta.text}`}>{step.year}</div>
                    <h4 className="mb-1.5 text-sm font-semibold">{step.title}</h4>
                    <p className="text-xs leading-relaxed text-muted">{step.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
