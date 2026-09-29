"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import Reveal from "./Reveal";
import TechBackground from "./TechBackground";
import { ARCHITECTURE_FLOWS } from "@/constants/data";
import { ArchFlow } from "@/types";

function FlowDiagram({ flow }: { flow: ArchFlow }) {
  return (
    <div className="flex flex-col gap-0">
      {flow.steps.map((step, i) => (
        <div key={i} className="flex flex-col items-center">
          {/* Node */}
          <div
            className={`w-full max-w-sm rounded-xl border px-4 py-3 text-center transition-all duration-200 ${
              step.highlight
                ? "border-[currentColor] shadow-[0_0_24px_-4px_currentColor]"
                : "border-border bg-surface2"
            }`}
            style={
              step.highlight
                ? { color: flow.color, borderColor: `${flow.color}60`, background: `${flow.color}12` }
                : {}
            }
          >
            <div
              className={`text-sm font-semibold ${step.highlight ? "" : "text-text"}`}
              style={step.highlight ? { color: flow.color } : {}}
            >
              {step.label}
            </div>
            {step.sub && (
              <div className="mt-0.5 font-mono text-[10px] text-muted">{step.sub}</div>
            )}
          </div>

          {/* Arrow */}
          {i < flow.steps.length - 1 && (
            <div className="flex flex-col items-center py-1">
              <div className="h-3 w-px" style={{ background: `${flow.color}50` }} />
              <ChevronRight
                size={12}
                className="rotate-90"
                style={{ color: `${flow.color}80` }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function ArchitectureSection() {
  const [active, setActive] = useState(ARCHITECTURE_FLOWS[0].id);
  const flow = ARCHITECTURE_FLOWS.find((f) => f.id === active) ?? ARCHITECTURE_FLOWS[0];

  return (
    <section id="architecture" className="relative overflow-hidden py-24">
      <TechBackground connectDist={130} />
      <div className="pointer-events-none absolute left-1/3 top-20 h-96 w-96 rounded-full bg-brand-purple/6 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 bottom-20 h-72 w-72 rounded-full bg-brand-cyan/6 blur-[100px]" />

      <div className="relative mx-auto max-w-wrap px-7">
        <Reveal className="mb-12 max-w-xl">
          <div className="mb-3.5 flex items-center font-mono text-sm text-brand-cyan section-label">
            ARCHITECTURE
          </div>
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            How the systems actually work.
          </h2>
          <p className="mt-3.5 text-base text-muted">
            Visual flows for the key architectural patterns across the platforms I&apos;ve built.
          </p>
        </Reveal>

        <div className="flex flex-col gap-10 lg:flex-row lg:gap-14">
          {/* Sidebar: flow selector */}
          <Reveal className="flex flex-row flex-wrap gap-2 lg:flex-col lg:w-52 lg:shrink-0">
            {ARCHITECTURE_FLOWS.map((f) => (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                className={`rounded-xl border px-4 py-3 text-left text-sm font-medium transition-all duration-200 lg:w-full ${
                  active === f.id
                    ? "border-transparent text-white"
                    : "border-border bg-surface text-muted hover:border-border hover:text-text"
                }`}
                style={
                  active === f.id
                    ? { background: `${f.color}22`, borderColor: `${f.color}50`, color: f.color }
                    : {}
                }
              >
                {f.title}
              </button>
            ))}
          </Reveal>

          {/* Main: flow diagram + description */}
          <Reveal delay={0.05} className="flex flex-1 flex-col gap-8 md:flex-row md:items-start md:gap-12">
            {/* Flow diagram */}
            <div className="flex justify-center md:justify-start md:w-72 shrink-0">
              <FlowDiagram flow={flow} />
            </div>

            {/* Description */}
            <div className="flex flex-col gap-5">
              <div>
                <h3 className="font-display text-xl font-semibold">{flow.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{flow.description}</p>
              </div>

              {/* Step breakdown */}
              <div className="flex flex-col gap-2">
                {flow.steps.map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full font-mono text-[9px] font-bold"
                      style={{ background: `${flow.color}20`, color: flow.color }}
                    >
                      {i + 1}
                    </div>
                    <div>
                      <span className="text-sm font-medium text-text">{step.label}</span>
                      {step.sub && (
                        <span className="ml-2 font-mono text-[11px] text-muted">{step.sub}</span>
                      )}
                      {step.highlight && (
                        <span
                          className="ml-2 rounded-full px-1.5 py-0.5 font-mono text-[9px] font-semibold"
                          style={{ background: `${flow.color}20`, color: flow.color }}
                        >
                          KEY
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
