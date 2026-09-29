import Reveal from "./Reveal";
import TechBackground from "./TechBackground";
import { EXPERTISE_TOPICS } from "@/constants/data";

export default function Expertise() {
  return (
    <section id="expertise" className="relative overflow-hidden py-20">
      <TechBackground connectDist={120} />
      <div className="relative mx-auto max-w-wrap px-7">
        <Reveal className="mb-12 max-w-xl">
          <div className="mb-3.5 font-mono text-sm text-brand-cyan">
            TECHNICAL EXPERTISE
          </div>
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            The architecture concepts I design around.
          </h2>
        </Reveal>

        <Reveal className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {EXPERTISE_TOPICS.map((topic) => (
            <div
              key={topic}
              className="flex items-center gap-2.5 rounded-xl border border-border p-4.5 text-sm text-muted"
            >
              <span className="text-[10px] text-brand-cyan">◆</span>
              {topic}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
