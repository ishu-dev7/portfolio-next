"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Reveal from "./Reveal";
import TechBackground from "./TechBackground";
import { ENGINEERING_DECISIONS } from "@/constants/data";

const CATEGORY_COLORS: Record<string, string> = {
  Modernization:    "border-brand-purple/40 bg-brand-purple/10 text-brand-purple",
  Database:         "border-sky-400/40 bg-sky-400/10 text-sky-400",
  Security:         "border-emerald-400/40 bg-emerald-400/10 text-emerald-400",
  "AI Integration": "border-brand-cyan/40 bg-brand-cyan/10 text-brand-cyan",
  "API Design":     "border-orange-400/40 bg-orange-400/10 text-orange-400",
  Production:       "border-yellow-400/40 bg-yellow-400/10 text-yellow-400",
};

export default function EngineeringDecisions() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="engineering-decisions" className="relative overflow-hidden py-24">
      <TechBackground connectDist={125} />
      <div className="pointer-events-none absolute -left-32 top-1/2 h-80 w-80 rounded-full bg-brand-blue/6 blur-[120px]" />

      <div className="relative mx-auto max-w-wrap px-7">
        <Reveal className="mb-12 max-w-xl">
          <div className="mb-3.5 flex items-center font-mono text-sm text-brand-cyan section-label">
            ENGINEERING DECISIONS
          </div>
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            How I think, not just what I&apos;ve built.
          </h2>
          <p className="mt-3.5 text-base text-muted">
            Real decisions from production systems — the reasoning behind technical
            choices, not just the outcomes.
          </p>
        </Reveal>

        <div className="flex flex-col gap-3">
          {ENGINEERING_DECISIONS.map((item, i) => {
            const isOpen = open === i;
            const catColor = CATEGORY_COLORS[item.category] ?? "border-border bg-surface2 text-muted";

            return (
              <Reveal key={i} delay={i * 0.03}>
                <div
                  className={`overflow-hidden rounded-xl border transition-all duration-200 ${
                    isOpen
                      ? "border-brand-purple/40 bg-surface"
                      : "border-border bg-surface hover:border-border/80"
                  }`}
                >
                  {/* Header */}
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-start gap-4 px-5 py-4 text-left"
                  >
                    <span className={`mt-0.5 shrink-0 rounded-full border px-2 py-0.5 font-mono text-[9px] font-semibold ${catColor}`}>
                      {item.category}
                    </span>
                    <span className="flex-1 text-sm font-medium text-text leading-snug">
                      {item.question}
                    </span>
                    <ChevronDown
                      size={15}
                      className={`mt-0.5 shrink-0 text-muted transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {/* Answer */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="border-t border-border/50 px-5 pb-5 pt-4">
                      <p className="text-sm leading-relaxed text-text/80">{item.answer}</p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-border bg-surface2 px-2 py-0.5 font-mono text-[10px] text-muted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
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
