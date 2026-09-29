import Reveal from "./Reveal";
import AboutCarousel from "./AboutCarousel";
import TechBackground from "./TechBackground";
import { ABOUT_STATS, ABOUT_HIGHLIGHTS } from "@/constants/data";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24">
      {/* Dynamic background */}
      <TechBackground connectDist={130} />
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-brand-purple/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-brand-cyan/8 blur-[100px]" />

      <div className="relative mx-auto max-w-wrap px-7">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-[1fr_1.3fr]">
          {/* Carousel */}
          <Reveal>
            <AboutCarousel />
          </Reveal>

          {/* Text */}
          <Reveal delay={0.1}>
            <div className="mb-3.5 flex items-center font-mono text-sm text-brand-cyan section-label">
              ABOUT
            </div>
            <h2 className="mb-6 font-display text-3xl font-semibold md:text-4xl">
              A backend specialist who thinks in systems, not just endpoints.
            </h2>

            <div className="space-y-4 text-base leading-relaxed text-text/75">
              <p>
                I&apos;m a software engineer specializing in Microsoft
                technologies, with around{" "}
                <strong className="text-text">3 years</strong> of experience
                building enterprise-scale applications end to end. I work
                primarily as a backend specialist, but my role has grown into
                leading technical implementation across multiple concurrent projects.
              </p>
              <p>
                Day to day, that means owning API design and system architecture
                conversations, optimizing SQL Server under real production load,
                resolving live issues on two enterprise applications I currently
                manage, and mentoring the developers around me. More recently,
                it&apos;s also meant bringing AI into places it hadn&apos;t been
                before — from LLM-powered reporting insights to OCR-based data
                entry automation.
              </p>
            </div>

            {/* Highlights */}
            <ul className="my-6 grid gap-2.5">
              {ABOUT_HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 h-5 w-5 shrink-0 rounded-md bg-brand-cyan/10 text-center font-mono text-[11px] leading-5 text-brand-cyan border border-brand-cyan/20">
                    ✓
                  </span>
                  <span className="text-text/85">{item}</span>
                </li>
              ))}
            </ul>

            {/* Stats — static values (no animated counter flicker) */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {ABOUT_STATS.map((s) => (
                <div
                  key={s.label}
                  className="group relative overflow-hidden rounded-xl border border-border bg-surface transition-all duration-200 hover:border-brand-purple/40 hover:-translate-y-0.5 hover:shadow-[0_6px_24px_-8px_rgba(124,92,255,0.25)]"
                >
                  <div className={`h-[3px] w-full bg-gradient-to-r ${s.color}`} />
                  <div className="px-4 py-4">
                    <div className="grad-text font-display text-2xl font-bold">
                      {s.value}{s.suffix}
                    </div>
                    <div className="mt-1 text-xs font-medium leading-snug text-text/65">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
