import { Download, FileText } from "lucide-react";
import Reveal from "./Reveal";
import TechBackground from "./TechBackground";

export default function Resume() {
  return (
    <section id="resume" className="relative overflow-hidden py-20">
      <TechBackground connectDist={115} />
      {/* Background */}
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-brand-purple/8 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-brand-cyan/6 blur-[100px]" />

      <div className="relative mx-auto max-w-wrap px-7">
        <Reveal className="mb-12 max-w-xl">
          <div className="mb-3.5 flex items-center font-mono text-sm text-brand-cyan section-label">
            RESUME
          </div>
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            Everything above, in one document.
          </h2>
        </Reveal>

        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr]">
              {/* PDF preview panel */}
              <div className="relative min-h-[420px] overflow-hidden border-b border-border md:border-b-0 md:border-r">
                {/* Gradient backdrop so it never looks completely blank */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/10 via-surface2 to-brand-blue/10" />
                <div className="pointer-events-none absolute inset-0 dot-grid opacity-30" />

                {/* iframe — loads in real browser */}
                <iframe
                  src="/HARENDRA_Updated_Resume.pdf"
                  className="relative z-10 h-full min-h-[420px] w-full"
                  title="Harendra Pratap Singh — Resume"
                />

                {/* Fallback overlay shown only when iframe can't render (headless/blocked) */}
                <div className="pointer-events-none absolute inset-0 z-0 flex flex-col items-center justify-center gap-3 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-surface2">
                    <FileText size={28} className="text-brand-purple" />
                  </div>
                  <p className="font-mono text-xs text-muted">PDF Preview</p>
                </div>
              </div>

              {/* Right info panel — vertically centred */}
              <div className="flex flex-col justify-center p-10">
                {/* Accent bar */}
                <div className="mb-6 h-1 w-16 rounded-full bg-brand-gradient" />

                <h3 className="mb-3 font-display text-2xl font-semibold">
                  Download the full resume
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted">
                  Includes complete role history, project details, and technical
                  skill breakdown — formatted for ATS compatibility.
                </p>

                {/* Highlights */}
                <ul className="mb-8 grid gap-2">
                  {[
                    "3 years enterprise .NET development",
                    "Technical lead & AI integration experience",
                    "SQL Server optimization & production deployments",
                    "Angular frontend + backend full-stack delivery",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-muted">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-cyan" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="/HARENDRA_Updated_Resume.pdf"
                  download="Harendra_Pratap_Singh_Resume.pdf"
                  className="inline-flex w-fit items-center gap-2.5 rounded-[10px] bg-brand-gradient px-7 py-3.5 text-sm font-semibold text-white shadow-[0_6px_24px_-6px_rgba(124,92,255,0.6)] transition-transform hover:-translate-y-0.5"
                >
                  <Download size={15} />
                  Download Resume (PDF)
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
