import { Briefcase, Calendar, MapPin } from "lucide-react";
import Reveal from "./Reveal";
import TechBackground from "./TechBackground";
import { EXPERIENCE } from "@/constants/data";

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden py-24">
      <TechBackground connectDist={120} />
      <div className="relative mx-auto max-w-wrap px-7">
        <Reveal className="mb-12 max-w-xl">
          <div className="mb-3.5 flex items-center font-mono text-sm text-brand-cyan section-label">
            EXPERIENCE
          </div>
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            Where the work actually happened.
          </h2>
          <p className="mt-3.5 text-base text-muted">
            Production systems, real clients, and measurable outcomes.
          </p>
        </Reveal>

        <div className="relative">
          {/*
            Line is at left-[19px] on mobile, left-[23px] on md.
            Dot is 20px wide; left edge = line_pos - 10px so center = line_pos.
          */}
          <div className="absolute left-[19px] top-3 bottom-3 w-px bg-gradient-to-b from-brand-purple via-brand-blue to-transparent md:left-[23px]" />

          <div className="flex flex-col gap-8">
            {EXPERIENCE.map((item, i) => (
              <Reveal delay={i * 0.1} key={item.role}>
                {/* pl-12 (48px) on mobile, pl-14 (56px) on md */}
                <div className="relative pl-12 md:pl-14">
                  {/* Dot — left-[9px] mobile (center 19px), left-[13px] md (center 23px) */}
                  <div className="absolute left-[9px] top-[22px] flex h-5 w-5 items-center justify-center rounded-full border-2 border-brand-cyan bg-bg md:left-[13px]">
                    <div className="h-2 w-2 rounded-full bg-brand-cyan animate-glow-pulse" />
                  </div>

                  {/* Card */}
                  <div className="group overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:border-brand-purple/50 hover:-translate-y-1 hover:shadow-[0_8px_40px_-12px_rgba(124,92,255,0.3)]">
                    <div className={`h-[3px] w-full ${i === 0 ? "card-top-bar" : "bg-gradient-to-r from-border to-transparent"}`} />

                    <div className="p-6 md:p-7">
                      {/* Header row */}
                      <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
                        <div className="flex items-start gap-4">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface2">
                            <Briefcase size={18} className="text-brand-purple" />
                          </div>
                          <div>
                            <div className="flex flex-wrap items-center gap-2.5">
                              <h3 className="text-lg font-semibold">{item.role}</h3>
                              {i === 0 && (
                                <span className="rounded-full bg-emerald-400/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-emerald-400 border border-emerald-400/20">
                                  CURRENT
                                </span>
                              )}
                            </div>
                            <div className="mt-1 flex flex-wrap items-center gap-1.5 text-sm text-muted">
                              <MapPin size={12} />
                              <span>{item.org}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 rounded-full border border-border bg-surface2 px-3 py-1.5 font-mono text-xs text-brand-cyan">
                          <Calendar size={11} />
                          {item.date}
                        </div>
                      </div>

                      {/* Points */}
                      <ul className="grid gap-2.5">
                        {item.points.map((point, j) => (
                          <li key={j} className="flex gap-3 text-sm text-text/80">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-cyan/70" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
