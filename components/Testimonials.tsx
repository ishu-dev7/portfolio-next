import Reveal from "./Reveal";
import TechBackground from "./TechBackground";
import { TESTIMONIALS } from "@/constants/data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden py-24">
      <TechBackground connectDist={120} />
      <div className="relative mx-auto max-w-wrap px-7">
        <Reveal className="mb-12 max-w-xl">
          <div className="mb-3.5 flex items-center font-mono text-sm text-brand-cyan section-label">
            TESTIMONIALS
          </div>
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            What people I&apos;ve worked with say.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal delay={i * 0.06} key={t.name}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-purple/40 hover:shadow-[0_8px_40px_-12px_rgba(124,92,255,0.2)]">
                {/* Large decorative quote mark */}
                <div className="pointer-events-none absolute right-5 top-3 font-display text-8xl font-bold leading-none text-border select-none">
                  &ldquo;
                </div>

                {/* Star rating */}
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <span key={j} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="relative mb-6 flex-1 text-sm leading-relaxed text-text">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 border-t border-border pt-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-gradient font-display text-sm font-bold text-white">
                    {t.name.charAt(1).toUpperCase()}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted">{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
