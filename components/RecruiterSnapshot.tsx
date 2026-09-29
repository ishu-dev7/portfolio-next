"use client";

import Reveal from "./Reveal";
import { RECRUITER_SNAPSHOT } from "@/constants/data";

export default function RecruiterSnapshot() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-surface/60 py-10 backdrop-blur-sm">
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-10" />

      <div className="relative mx-auto max-w-wrap px-7">
        <Reveal className="mb-6 flex items-center gap-3">
          <span className="font-mono text-xs text-brand-cyan/70 tracking-widest">QUICK SNAPSHOT</span>
          <span className="h-px flex-1 bg-gradient-to-r from-brand-cyan/20 to-transparent" />
        </Reveal>

        <div className="grid grid-cols-1 gap-y-0 sm:grid-cols-2 lg:grid-cols-3">
          {RECRUITER_SNAPSHOT.map((row, i) => (
            <Reveal key={row.label} delay={i * 0.03}>
              <div className="flex items-start gap-3 border-b border-border/50 py-3.5 pr-6 last:border-0 sm:last:border-b sm:nth-last-2:border-0 lg:last:border-b lg:nth-last-3:border-0">
                <span className="mt-0.5 w-5 shrink-0 text-center text-base leading-none">{row.icon}</span>
                <div className="min-w-0">
                  <span className="block font-mono text-[10px] font-semibold uppercase tracking-wider text-muted">
                    {row.label}
                  </span>
                  <span className="mt-0.5 block text-sm text-text/90 leading-snug">{row.value}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
