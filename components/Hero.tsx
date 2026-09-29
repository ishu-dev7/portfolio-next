"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Check, Github, Linkedin } from "lucide-react";
import BackendArchitecture from "./BackendArchitecture";
import { SITE, TYPING_LINES } from "@/constants/data";

const SKILL_CHIPS = [
  { label: "3 Years Professional",      color: "border-brand-purple/40 bg-brand-purple/10 text-brand-purple" },
  { label: ".NET Core / C#",           color: "border-brand-cyan/40 bg-brand-cyan/10 text-brand-cyan" },
  { label: "AI Integration",           color: "border-emerald-400/40 bg-emerald-400/10 text-emerald-400" },
  { label: "SQL Server Performance",   color: "border-sky-400/40 bg-sky-400/10 text-sky-400" },
];

const ACHIEVEMENTS = [
  "3 Live Enterprise Applications in Production",
  "First AI (LLM + OCR) Features at Appstean Infotech",
  "SAP Integration & Performance Optimization",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = TYPING_LINES[lineIndex];
    const speed = deleting ? 28 : 52;
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1600);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setLineIndex((i) => (i + 1) % TYPING_LINES.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, lineIndex]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      {/* Animated backend architecture background */}
      <BackendArchitecture />

      {/* Gradient orbs */}
      <div className="pointer-events-none absolute -right-24 -top-32 z-0 h-[480px] w-[480px] rounded-full bg-brand-purple opacity-15 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 z-0 h-[380px] w-[380px] rounded-full bg-brand-cyan opacity-15 blur-[110px]" />

      {/* Dot grid */}
      <div className="pointer-events-none absolute inset-0 z-0 dot-grid opacity-30" />

      <div className="relative z-10 mx-auto grid max-w-wrap grid-cols-1 items-center gap-12 px-7 md:grid-cols-[1.25fr_0.85fr]">
        {/* ── Left: text ── */}
        <div>
          {/* Available badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/5 px-4 py-1.5 text-sm text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-glow-pulse" />
            Available for new opportunities
          </div>

          {/* Name */}
          <p className="mb-2 font-mono text-sm text-brand-cyan">Hi, I&apos;m</p>
          <h1 className="font-display text-4xl font-bold leading-tight md:text-5xl lg:text-[3.5rem]">
            <span className="grad-text">Harendra</span> Pratap Singh
          </h1>

          {/* Role subtitle */}
          <p className="mt-3 text-base font-medium text-text/80 md:text-lg">
            .NET Full Stack Developer &nbsp;·&nbsp; Backend Specialist &nbsp;·&nbsp; AI Integration
          </p>

          {/* Typing line */}
          <div className="mt-3 flex min-h-[26px] items-center gap-2 font-mono text-sm text-brand-cyan">
            <span className="h-3 w-0.5 bg-brand-cyan opacity-70 shrink-0" />
            {text}
            <span className="typing-cursor" />
          </div>

          {/* Bio */}
          <p className="mt-4 max-w-[520px] text-[15px] leading-relaxed text-text/75">
            Software Developer with 3 years of experience building and
            optimizing enterprise applications using .NET, Angular, SQL Server, and
            AI-powered solutions — with hands-on technical ownership across production
            systems at{" "}
            <span className="font-medium text-text">Appstean Infotech</span>.
          </p>

          {/* Skill chips */}
          <div className="mt-5 flex flex-wrap gap-2">
            {SKILL_CHIPS.map((chip) => (
              <span
                key={chip.label}
                className={`rounded-full border px-3 py-1 text-xs font-medium ${chip.color}`}
              >
                {chip.label}
              </span>
            ))}
          </div>

          {/* Achievement checkmarks */}
          <div className="mt-5 flex flex-col gap-2">
            {ACHIEVEMENTS.map((ach) => (
              <div key={ach} className="flex items-center gap-2">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 border border-emerald-400/30">
                  <Check size={10} className="text-emerald-400" />
                </div>
                <span className="text-sm text-text/85">{ach}</span>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/HARENDRA_Updated_Resume.pdf"
              download="Harendra_Pratap_Singh_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-[10px] bg-brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_rgba(124,92,255,0.65)] transition-transform hover:-translate-y-0.5"
            >
              Download Resume
            </a>
            <a
              href="#projects"
              className="rounded-[10px] border border-border px-6 py-3 text-sm font-semibold transition-all hover:border-brand-purple hover:bg-brand-purple/5"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-[10px] border border-border px-6 py-3 text-sm font-semibold text-muted transition-all hover:border-brand-cyan hover:text-brand-cyan"
            >
              Contact Me
            </a>
          </div>

          {/* Social links */}
          <div className="mt-7 flex items-center gap-4">
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-border text-muted transition-all hover:border-brand-cyan hover:text-brand-cyan"
            >
              <Github size={17} />
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-border text-muted transition-all hover:border-brand-cyan hover:text-brand-cyan"
            >
              <Linkedin size={17} />
            </a>
          </div>
        </div>

        {/* ── Right: photo ── */}
        <div className="flex justify-center">
          <div className="relative">
            {/* Spinning decorative rings */}
            <div className="pointer-events-none absolute -inset-4 rounded-[36px] border border-dashed border-brand-purple/20 animate-spin-slow" />
            <div
              className="pointer-events-none absolute -inset-8 rounded-[44px] border border-dashed border-brand-cyan/12 animate-spin-slow"
              style={{ animationDirection: "reverse", animationDuration: "18s" }}
            />

            {/* Profile image */}
            <div className="relative h-[340px] w-[280px] overflow-hidden rounded-3xl border border-white/10 glow-purple md:h-[380px] md:w-[300px]">
              <Image
                src="/Profile.jpeg"
                alt="Harendra Pratap Singh"
                fill
                priority
                className="object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a0b12]/70 to-transparent" />
            </div>

            {/* Floating tech badges */}
            <div className="animate-float absolute -top-4 -left-7 rounded-full border border-brand-purple/50 bg-bg/85 px-3 py-1.5 font-mono text-[11px] font-medium text-brand-purple backdrop-blur-sm rotate-[-7deg]">
              .NET / C#
            </div>
            <div className="animate-float-2 absolute top-10 -right-8 rounded-full border border-brand-cyan/50 bg-bg/85 px-3 py-1.5 font-mono text-[11px] font-medium text-brand-cyan backdrop-blur-sm rotate-[5deg]">
              SQL Server
            </div>
            <div className="animate-float-3 absolute bottom-24 -left-8 rounded-full border border-red-400/50 bg-bg/85 px-3 py-1.5 font-mono text-[11px] font-medium text-red-400 backdrop-blur-sm rotate-[4deg]">
              Angular
            </div>
            <div className="animate-float-4 absolute bottom-10 -right-6 rounded-full border border-sky-400/50 bg-bg/85 px-3 py-1.5 font-mono text-[11px] font-medium text-sky-400 backdrop-blur-sm rotate-[-5deg]">
              Azure
            </div>
            <div className="animate-float-5 absolute top-1/2 -right-10 rounded-full border border-emerald-400/50 bg-bg/85 px-3 py-1.5 font-mono text-[11px] font-medium text-emerald-400 backdrop-blur-sm rotate-[3deg]">
              AI / LLM
            </div>

            {/* Star performer badge */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-xs font-semibold text-yellow-400 whitespace-nowrap backdrop-blur-sm">
              ★ Star Performer 2025
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-xs text-muted">
        <span>SCROLL</span>
        <span className="scroll-line" />
      </div>
    </section>
  );
}
