import Reveal from "./Reveal";
import Counter from "./Counter";
import { STATS } from "@/constants/data";

export default function Statistics() {
  return (
    <section id="statistics" className="py-20">
      <div className="mx-auto max-w-wrap px-7">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-brand-purple/20 bg-gradient-to-br from-brand-purple/10 via-surface to-brand-blue/10 p-10 md:p-12">
            {/* Background glows */}
            <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-brand-purple opacity-15 blur-[80px]" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-brand-cyan opacity-15 blur-[80px]" />
            <div className="pointer-events-none absolute inset-0 dot-grid opacity-30" />

            {/* Heading */}
            <div className="relative mb-8 text-center">
              <div className="mb-2 inline-flex items-center font-mono text-sm text-brand-cyan section-label">
                BY THE NUMBERS
              </div>
              <h2 className="font-display text-3xl font-semibold md:text-4xl">
                Measurable impact.
              </h2>
            </div>

            {/* Stats grid — 3 cols on sm+, 2 on mobile */}
            <div className="relative grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border/50 sm:grid-cols-3 lg:grid-cols-6">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center justify-center bg-surface/60 px-4 py-7 text-center backdrop-blur-sm"
                >
                  <Counter
                    target={s.target}
                    suffix="+"
                    className="font-display text-3xl font-bold grad-text md:text-4xl"
                  />
                  <div className="mt-2 max-w-[110px] text-xs font-medium leading-snug text-text/70">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
