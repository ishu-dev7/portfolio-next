import { Server, Code2, Webhook, Database, Brain, MessageSquare } from "lucide-react";
import Reveal from "./Reveal";
import TechBackground from "./TechBackground";
import { SERVICES } from "@/constants/data";

const SERVICE_ICONS = [Server, Code2, Webhook, Database, Brain, MessageSquare];

const SERVICE_COLORS = [
  "text-brand-purple bg-brand-purple/10 border-brand-purple/25",
  "text-brand-cyan   bg-brand-cyan/10   border-brand-cyan/25",
  "text-sky-400      bg-sky-400/10      border-sky-400/25",
  "text-orange-400   bg-orange-400/10   border-orange-400/25",
  "text-emerald-400  bg-emerald-400/10  border-emerald-400/25",
  "text-violet-400   bg-violet-400/10   border-violet-400/25",
];

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-24">
      <TechBackground connectDist={125} />
      <div className="relative mx-auto max-w-wrap px-7">
        <Reveal className="mb-12 max-w-xl">
          <div className="mb-3.5 flex items-center font-mono text-sm text-brand-cyan section-label">
            WHAT I BRING
          </div>
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            How I contribute to a team.
          </h2>
          <p className="mt-3.5 text-base text-muted">
            End-to-end technical ownership — from API design and SQL performance to AI integration and mentoring.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon  = SERVICE_ICONS[i % SERVICE_ICONS.length];
            const color = SERVICE_COLORS[i % SERVICE_COLORS.length];
            return (
              <Reveal delay={i * 0.05} key={s.title}>
                <div className="group h-full overflow-hidden rounded-2xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-purple/40 hover:shadow-[0_8px_40px_-12px_rgba(124,92,255,0.2)]">
                  {/* Number + icon row */}
                  <div className="mb-5 flex items-center justify-between">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl border ${color}`}>
                      <Icon size={20} />
                    </div>
                    <span className="font-display text-4xl font-bold text-border group-hover:text-brand-purple/20 transition-colors duration-300">
                      {s.number}
                    </span>
                  </div>

                  <h4 className="mb-2.5 text-base font-semibold">{s.title}</h4>
                  <p className="text-sm leading-relaxed text-text/75">{s.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
