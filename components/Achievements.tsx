import { Trophy, Medal, ThumbsUp, Cpu, Layers, Zap, Rocket, Users, Link2 } from "lucide-react";
import Reveal from "./Reveal";
import TechBackground from "./TechBackground";
import { ACHIEVEMENTS } from "@/constants/data";

const ICONS = [
  { icon: Trophy,    color: "text-yellow-400 bg-yellow-400/10 border-yellow-400/25",  glow: "hover:shadow-[0_8px_30px_-8px_rgba(250,204,21,0.4)]",   special: true  },
  { icon: Medal,     color: "text-amber-400  bg-amber-400/10  border-amber-400/25",   glow: "hover:shadow-[0_8px_30px_-8px_rgba(251,191,36,0.4)]",   special: true  },
  { icon: ThumbsUp,  color: "text-pink-400   bg-pink-400/10   border-pink-400/25",    glow: "hover:shadow-[0_8px_30px_-8px_rgba(244,114,182,0.35)]", special: false },
  { icon: Cpu,       color: "text-emerald-400 bg-emerald-400/10 border-emerald-400/25", glow: "hover:shadow-[0_8px_30px_-8px_rgba(52,211,153,0.35)]", special: false },
  { icon: Layers,    color: "text-brand-cyan  bg-brand-cyan/10  border-brand-cyan/25",  glow: "hover:shadow-[0_8px_30px_-8px_rgba(34,211,238,0.35)]", special: false },
  { icon: Zap,       color: "text-orange-400  bg-orange-400/10  border-orange-400/25",  glow: "hover:shadow-[0_8px_30px_-8px_rgba(251,146,60,0.35)]",  special: false },
  { icon: Rocket,    color: "text-sky-400     bg-sky-400/10     border-sky-400/25",     glow: "hover:shadow-[0_8px_30px_-8px_rgba(56,189,248,0.35)]",  special: false },
  { icon: Users,     color: "text-violet-400  bg-violet-400/10  border-violet-400/25",  glow: "hover:shadow-[0_8px_30px_-8px_rgba(167,139,250,0.35)]", special: false },
  { icon: Link2,     color: "text-brand-blue  bg-brand-blue/10  border-brand-blue/25",  glow: "hover:shadow-[0_8px_30px_-8px_rgba(61,90,254,0.35)]",   special: false },
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 overflow-hidden">
      {/* Background graphics */}
      <TechBackground connectDist={110} />
      <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-yellow-400/5 blur-[100px]" />
      <div className="pointer-events-none absolute -left-40 bottom-20 h-80 w-80 rounded-full bg-brand-purple/8 blur-[100px]" />

      <div className="mx-auto max-w-wrap px-7">
        <Reveal className="mb-12 max-w-xl">
          <div className="mb-3.5 flex items-center font-mono text-sm text-brand-cyan section-label">
            ACHIEVEMENTS
          </div>
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            Recognition along the way.
          </h2>
          <p className="mt-3.5 text-base text-muted">
            Milestones earned through consistent delivery and technical ownership.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ACHIEVEMENTS.map((a, i) => {
            const meta = ICONS[i % ICONS.length];
            const Icon = meta.icon;

            return (
              <Reveal delay={i * 0.04} key={a.title}>
                <div
                  className={`group relative overflow-hidden rounded-2xl border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 ${meta.glow} ${
                    meta.special
                      ? i === 0
                        ? "border-yellow-400/30 bg-gradient-to-br from-yellow-400/8 via-surface to-surface"
                        : "border-amber-400/30 bg-gradient-to-br from-amber-400/8 via-surface to-surface"
                      : "border-border"
                  }`}
                >
                  {/* Background glow blob */}
                  <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full opacity-20 blur-2xl" style={{ background: "currentColor" }} />

                  {/* Icon */}
                  <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl border ${meta.color}`}>
                    <Icon size={18} />
                  </div>

                  {/* Title */}
                  <h4 className={`mb-1.5 text-sm font-semibold ${
                    i === 0 ? "text-yellow-400" : i === 1 ? "text-amber-400" : "text-text"
                  }`}>
                    {a.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-text/75">{a.description}</p>

                  {/* Award badges for top-2 */}
                  {i === 0 && (
                    <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-yellow-400/25 bg-yellow-400/10 px-2.5 py-1 font-mono text-[10px] text-yellow-400">
                      ★ Appstean Infotech · 2025
                    </div>
                  )}
                  {i === 1 && (
                    <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-amber-400/25 bg-amber-400/10 px-2.5 py-1 font-mono text-[10px] text-amber-400">
                      🏅 Appstean Infotech · 2024
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
