"use client";

import { useState } from "react";
import {
  CheckCircle, Github, Linkedin, Mail, MapPin, Clock, Send,
} from "lucide-react";
import Reveal from "./Reveal";
import { SITE } from "@/constants/data";

const CONTACT_ITEMS = [
  { Icon: Mail,   label: "Email",    value: SITE.email    },
  { Icon: MapPin, label: "Location", value: SITE.location },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const body = {
      name:    fd.get("name"),
      email:   fd.get("email"),
      phone:   fd.get("phone"),
      company: fd.get("company"),
      subject: fd.get("subject"),
      message: fd.get("message"),
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      alert("Something went wrong. Please email me directly.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-purple/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-brand-cyan/8 blur-[100px]" />
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-20" />

      <div className="relative mx-auto max-w-wrap px-7">
        <Reveal className="mb-12 max-w-xl">
          <div className="mb-3.5 flex items-center font-mono text-sm text-brand-cyan section-label">
            CONTACT
          </div>
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            Let&apos;s Build Something Meaningful.
          </h2>
          <p className="mt-3.5 text-base text-muted">
            Looking to bring on a .NET backend specialist, full stack developer,
            or AI integration engineer? Open to full-time roles, contracts, and
            technical consultations. I typically respond within 24 hours.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* ── Left column ────────────────────────────── */}
          <Reveal>
            <div className="flex h-full flex-col gap-6">
              {/* Contact info cards */}
              <div className="grid gap-3">
                {CONTACT_ITEMS.map(({ Icon, label, value }) => (
                  <div
                    key={label}
                    className="flex items-center gap-4 rounded-xl border border-border bg-surface p-4 transition-colors hover:border-brand-purple/40"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-surface2 text-brand-purple">
                      <Icon size={16} />
                    </div>
                    <div>
                      <p className="text-xs text-muted">{label}</p>
                      <p className="text-sm font-medium text-text">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div className="flex gap-3">
                <a
                  href={SITE.github}
                  target="_blank" rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted transition-all hover:border-brand-cyan hover:text-brand-cyan"
                >
                  <Github size={17} />
                </a>
                <a
                  href={SITE.linkedin}
                  target="_blank" rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted transition-all hover:border-brand-cyan hover:text-brand-cyan"
                >
                  <Linkedin size={17} />
                </a>
              </div>

              {/* Availability card — fills remaining height */}
              <div className="flex flex-1 flex-col justify-end">
                <div className="overflow-hidden rounded-xl border border-emerald-400/20 bg-gradient-to-br from-emerald-400/8 via-surface to-surface p-5">
                  <div className="mb-3 flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-glow-pulse" />
                    <span className="text-sm font-semibold text-emerald-400">Available for work</span>
                  </div>
                  <p className="mb-3 text-xs leading-relaxed text-text/75">
                    Currently open to full-time roles, freelance projects, and technical
                    consultation engagements. Based in Indore, India — open to remote
                    and hybrid opportunities.
                  </p>
                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-text/60">
                    <Clock size={11} />
                    Response time: within 24 hours
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ── Right column — form ─────────────────────── */}
          <Reveal delay={0.1}>
            {submitted ? (
              <div className="flex h-full min-h-[420px] flex-col items-center justify-center gap-4 rounded-2xl border border-border bg-surface p-10 text-center">
                <CheckCircle size={44} className="text-emerald-400" />
                <h3 className="font-display text-xl font-semibold">Message received!</h3>
                <p className="max-w-xs text-sm text-muted">
                  Thanks for reaching out. I&apos;ll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 rounded-[10px] border border-border px-5 py-2 text-sm text-muted transition-colors hover:border-brand-purple hover:text-text"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <div className="rounded-2xl border border-border bg-surface p-7">
                <h3 className="mb-5 text-base font-semibold">Send a message</h3>
                <form onSubmit={handleSubmit} className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Field label="Name">
                      <input name="name" type="text" placeholder="Your name" required />
                    </Field>
                    <Field label="Email">
                      <input name="email" type="email" placeholder="you@company.com" required />
                    </Field>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Field label="Phone">
                      <input name="phone" type="tel" placeholder="Optional" />
                    </Field>
                    <Field label="Company">
                      <input name="company" type="text" placeholder="Optional" />
                    </Field>
                  </div>
                  <Field label="Subject">
                    <input name="subject" type="text" placeholder="What's this about?" />
                  </Field>
                  <Field label="Message">
                    <textarea name="message" rows={4} placeholder="Tell me about the project or role…" required />
                  </Field>
                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-[10px] bg-brand-gradient py-3.5 text-sm font-semibold text-white shadow-[0_6px_20px_-6px_rgba(124,92,255,0.5)] transition-opacity disabled:opacity-70"
                  >
                    <Send size={14} />
                    {loading ? "Sending…" : "Send Message"}
                  </button>
                </form>
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs text-muted">{label}</span>
      <div className="
        [&_input]:w-full [&_input]:rounded-[9px] [&_input]:border [&_input]:border-border
        [&_input]:bg-surface2 [&_input]:px-3.5 [&_input]:py-2.5 [&_input]:text-sm
        [&_input]:text-text [&_input]:outline-none [&_input:focus]:border-brand-purple
        [&_textarea]:w-full [&_textarea]:rounded-[9px] [&_textarea]:border [&_textarea]:border-border
        [&_textarea]:bg-surface2 [&_textarea]:px-3.5 [&_textarea]:py-2.5 [&_textarea]:text-sm
        [&_textarea]:text-text [&_textarea]:outline-none [&_textarea]:resize-none
        [&_textarea:focus]:border-brand-purple
      ">
        {children}
      </div>
    </label>
  );
}
