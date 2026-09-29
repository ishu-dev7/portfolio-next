import { Cloud, Hash, Database, Sparkles, Triangle, Clock, Coffee, Zap, CheckCircle2, Loader2 } from "lucide-react";
import Reveal from "./Reveal";
import TechBackground from "./TechBackground";
import { CERTIFICATIONS } from "@/constants/data";

const CERT_ICONS = [Cloud, Hash, Database, Sparkles, Triangle, Coffee, Zap];
const CERT_COLORS = [
  "text-sky-400      bg-sky-400/8      border-sky-400/25",
  "text-brand-purple bg-brand-purple/8 border-brand-purple/25",
  "text-orange-400   bg-orange-400/8   border-orange-400/25",
  "text-emerald-400  bg-emerald-400/8  border-emerald-400/25",
  "text-red-400      bg-red-400/8      border-red-400/25",
  "text-amber-400    bg-amber-400/8    border-amber-400/25",
  "text-yellow-400   bg-yellow-400/8   border-yellow-400/25",
];

function StatusBadge({ status }: { status: string }) {
  if (status === "Completed") {
    return (
      <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2.5 py-1 font-mono text-[10px] text-emerald-400">
        <CheckCircle2 size={9} />
        Completed
      </div>
    );
  }
  if (status === "In Progress") {
    return (
      <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-brand-cyan/25 bg-brand-cyan/10 px-2.5 py-1 font-mono text-[10px] text-brand-cyan">
        <Loader2 size={9} className="animate-spin" />
        In Progress
      </div>
    );
  }
  return (
    <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-border bg-surface2 px-2.5 py-1 font-mono text-[10px] text-muted">
      <Clock size={9} />
      Planned
    </div>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-20 overflow-hidden">
      <TechBackground connectDist={110} />
      {/* Background */}
      <div className="pointer-events-none absolute -right-32 top-10 h-64 w-64 rounded-full bg-brand-cyan/5 blur-[90px]" />

      <div className="relative mx-auto max-w-wrap px-7">
        <Reveal className="mb-12 max-w-xl">
          <div className="mb-3.5 flex items-center font-mono text-sm text-brand-cyan section-label">
            CERTIFICATIONS
          </div>
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            Credentials &amp; learning.
          </h2>
          <p className="mt-3.5 text-base text-muted">
            Formal certifications alongside completed workshops and active study.
          </p>
        </Reveal>

        <Reveal className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {CERTIFICATIONS.map((cert, i) => {
            const Icon  = CERT_ICONS[i % CERT_ICONS.length];
            const color = CERT_COLORS[i % CERT_COLORS.length];
            const isCompleted  = cert.status === "Completed";
            const isInProgress = cert.status === "In Progress";

            return (
              <div
                key={cert.name}
                className={`group relative overflow-hidden rounded-2xl border p-5 text-center transition-all duration-300 hover:-translate-y-1 ${
                  isCompleted
                    ? "border-emerald-400/20 bg-emerald-400/5 hover:border-emerald-400/40"
                    : isInProgress
                    ? "border-brand-cyan/20 bg-brand-cyan/5 hover:border-brand-cyan/40"
                    : "border-dashed border-border bg-surface hover:border-brand-purple/30"
                }`}
              >
                {/* Shimmer on hover */}
                <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <div className={`mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl border ${color}`}>
                  <Icon size={19} />
                </div>
                <div className="text-xs font-semibold leading-tight text-text">{cert.name}</div>
                <StatusBadge status={cert.status} />
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
