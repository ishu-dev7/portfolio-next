"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { NAV_LINKS, SITE } from "@/constants/data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));

    function onScroll() {
      setScrolled(window.scrollY > 20);
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      }
      setActiveSection(current);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-[100] transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-bg/80 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl"
          : "border-b border-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-wrap items-center justify-between px-7">
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-1.5">
          <span className="font-display text-lg font-bold tracking-tight">
            H<span className="grad-text">arendra</span>
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-glow-pulse" />
        </a>

        {/* Desktop nav */}
        <ul className="hidden gap-6 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <li key={link.href} className="relative">
                <a
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive ? "text-text" : "text-muted hover:text-text"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-brand-gradient" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href={`mailto:${SITE.email}`}
            className="hidden rounded-[10px] bg-brand-gradient px-4 py-2 text-sm font-semibold text-white shadow-[0_4px_20px_-4px_rgba(37,99,166,0.6)] transition-transform hover:-translate-y-0.5 md:inline-block"
          >
            Hire Me
          </a>
          <button
            className="flex lg:hidden"
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="mt-1 border-b border-border bg-surface/95 backdrop-blur-xl lg:hidden">
          <ul className="flex flex-col px-7 py-4">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-2.5 py-3 text-sm font-medium border-b border-border/50 last:border-0 ${
                      isActive ? "text-brand-cyan" : "text-muted"
                    }`}
                  >
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
                    )}
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="px-7 py-4">
            <a
              href={`mailto:${SITE.email}`}
              className="block w-full rounded-[10px] bg-brand-gradient py-3 text-center text-sm font-semibold text-white"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
