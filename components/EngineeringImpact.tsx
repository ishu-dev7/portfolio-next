"use client";

import Reveal from "./Reveal";
import TechBackground from "./TechBackground";
import { ENGINEERING_IMPACT } from "@/constants/data";

const CATEGORY_META: Record<string, { color: string; accent: string; label: string }> = {
  Performance:   { color: "text-orange-400",  accent: "bg-orange-400/10 border-orange-400/25",  label: "⚡ Performance" },
  Modernization: { color: "text-brand-purple", accent: "bg-brand-purple/10 border-brand-purple/25", label: "▲ Modernization" },
  AI:            { color: "text-brand-cyan",   accent: "bg-brand-cyan/10 border-brand-cyan/25",   label: "🤖 AI" },
  Production:    { color: "text-sky-400",      accent: "bg-sky-400/10 border-sky-400/25",         label: "🚀 Production" },
  Leadership:    { color: "text-yellow-400",   accent: "bg-yellow-400/10 border-yellow-400/25",   label: "★ Leadership" },
};

const CATEGORIES = ["Performance", "Modernization", "AI", "Production", "Leadership"];

export default function EngineeringImpact() {
  const grouped = CATEGORIES.map((cat) => ({
    cat,
    meta: CATEGORY_META[cat],
    items: ENGINEERING_IMPACT.filter((i) => i.category === cat),
  }));

  return (
    <section id="engineering-impact" className="relative overflow-hidden py-24">
      <TechBackground connectDist={120} />
      <div className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-brand-cyan/5 blur-[120px]" />
      <div className="pointer-events-none absolute left-0 bottom-1/4 h-80 w-80 rounded-full bg-brand-purple/5 blur-[120px]" />

      <div className="relative mx-auto max-w-wrap px-7">
        <Reveal className="mb-12 max-w-xl">
          <div className="mb-3.5 flex items-center font-mono text-sm text-brand-cyan section-label">
            ENGINEERING IMPACT
          </div>
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            What changed because of the work.
          </h2>
          <p className="mt-3.5 text-base text-muted">
            Grouped by domain — real outcomes from production systems, not project descriptions.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {grouped.map(({ cat, meta, items }) => (
            <Reveal key={cat} delay={CATEGORIES.indexOf(cat) * 0.06}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-surface overflow-hidden">
                {/* Category header */}
                <div className={`flex items-center gap-2.5 border-b border-border px-5 py-3.5 ${meta.accent} border`}>
                  <span className={`text-sm font-bold ${meta.color}`}>{meta.label}</span>
                </div>

                {/* Items */}
                <div className="flex flex-col divide-y divide-border/50 px-5">
                  {items.map((item, j) => (
                    <div key={j} className="py-4">
                      <div className={`mb-1 text-xs font-semibold ${meta.color}`}>{item.title}</div>
                      <p className="text-xs leading-relaxed text-text/75">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
