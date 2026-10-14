"use client";

import { ArrowUp, Linkedin, Mail } from "lucide-react";
import { SITE } from "@/constants/data";

const LINKS = [
  { href: "#about",        label: "About" },
  { href: "#experience",   label: "Experience" },
  { href: "#projects",     label: "Projects" },
  { href: "#skills",       label: "Skills" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact",      label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border">
      {/* Gradient top line */}
      <div className="absolute left-0 right-0 top-0 h-px bg-brand-gradient" />

      {/* Background glow */}
      <div className="pointer-events-none absolute -left-32 bottom-0 h-64 w-64 rounded-full bg-brand-purple opacity-8 blur-[80px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-brand-cyan opacity-8 blur-[80px]" />

      <div className="relative mx-auto max-w-wrap px-7 pt-14 pb-8">
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand column */}
          <div>
            <div className="mb-4 font-display text-xl font-bold">
              <span className="grad-text">Harendra</span>{" "}
              <span className="text-text">Pratap Singh</span>
            </div>
            <p className="mb-5 max-w-xs text-sm leading-relaxed text-muted">
              Backend specialist and technical lead building enterprise-scale
              systems with .NET, SQL Server, and AI integrations.
            </p>
            <div className="flex gap-3">
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-[9px] border border-border text-muted transition-all hover:border-brand-cyan hover:text-brand-cyan"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={`mailto:${SITE.email}`}
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-[9px] border border-border text-muted transition-all hover:border-brand-purple hover:text-brand-purple"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">Quick Links</h4>
            <ul className="grid gap-2.5">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-muted transition-colors hover:text-text">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">Contact</h4>
            <div className="grid gap-2.5 text-sm text-muted">
              <a href={`mailto:${SITE.email}`} className="break-all hover:text-brand-cyan transition-colors">
                {SITE.email}
              </a>
              <span>{SITE.location}</span>
              <a
                href="/HARENDRA_Updated_Resume.pdf"
                download="Harendra_Pratap_Singh_Resume.pdf"
                className="mt-2 inline-block rounded-[9px] border border-border px-4 py-2 text-xs font-medium text-text transition-all hover:border-brand-purple hover:bg-brand-purple/5"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted">
          <span>
            © {new Date().getFullYear()}{" "}
            <span className="text-text font-medium">{SITE.name}</span>. All rights reserved.
          </span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-all hover:border-brand-cyan hover:bg-brand-cyan/5 hover:text-brand-cyan"
          >
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
