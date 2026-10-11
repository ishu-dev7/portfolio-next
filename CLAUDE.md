# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm start        # Start production server
npm run lint     # Run ESLint
```

No test suite is configured.

## Architecture

**Next.js 14 App Router** single-page portfolio. All routes resolve to `app/page.tsx`, which composes section components in order. Navigation is hash-based (`#home`, `#about`, etc.).

### Content layer

All editable data lives in [constants/data.ts](constants/data.ts). This is the single source of truth for every section's content — site metadata, skills, projects, experience, testimonials, etc. Components read from this file; they contain no hardcoded content.

TypeScript interfaces for those data shapes are in [types/index.ts](types/index.ts).

### Component model

Every component in [components/](components/) is a `"use client"` component. The server boundary is only at the layout/page level (`app/layout.tsx` and `app/page.tsx`), which handle metadata, JSON-LD schema, and font loading via `next/font/google`.

Key patterns:
- **[Reveal.tsx](components/Reveal.tsx)** — wraps content in a Framer Motion scroll-triggered fade/slide; used extensively across sections
- **[Counter.tsx](components/Counter.tsx)** — animated number counter used in About and Statistics sections
- **[ParticlesBackground.tsx](components/ParticlesBackground.tsx)** — canvas-based particle animation rendered behind the hero

### Theming

CSS custom properties defined in [app/globals.css](app/globals.css) control all colors (`--bg`, `--surface`, `--border`, `--text`, `--muted`). Light mode overrides live on `html.light`. Theme preference is persisted to `localStorage` under the key `portfolio-theme` and hydrated via an inline script in the root layout to avoid flash.

Tailwind config in [tailwind.config.ts](tailwind.config.ts) maps all design tokens to Tailwind utilities (`bg-bg`, `bg-surface`, `text-text`, etc.) and extends with brand gradient, custom fonts (`display`/`body`/`mono`), card border radius, and max-width `wrap` (1180px).

### Fonts

Three Google Fonts loaded server-side: **Space Grotesk** (display headings), **Inter** (body), **JetBrains Mono** (labels/code). Applied via CSS variables and the Tailwind `font-display`, `font-body`, `font-mono` utilities.

### Contact form / API

`components/Contact.tsx` POSTs JSON to [app/api/contact/route.ts](app/api/contact/route.ts), the only server route. It sends an HTML email via **Resend**. Env vars:
- `RESEND_API_KEY` (required)
- `CONTACT_TO_EMAIL` (optional; falls back to a hardcoded address in the route)

The sender is `onboarding@resend.dev` (Resend's sandbox sender), so a verified domain is needed for production delivery to arbitrary recipients. The route escapes only `message` for HTML. `name`, `email`, `phone`, `company` and `subject` are interpolated raw into the email template. The route also returns the Resend error detail to the client (added for debugging) and has no rate limiting.

### SEO / PWA

- Dynamic sitemap: `app/sitemap.ts`
- Robots: `app/robots.ts`
- PWA manifest: `app/manifest.ts`
- OG image: `public/og-image.png`
- JSON-LD schema injected in `app/layout.tsx`

Update the canonical URL (currently `https://example.com`) in `constants/data.ts` before deploying.

## Known incomplete areas

- **Certifications** — all marked "Coming Soon" in `constants/data.ts`
- **Hero profile photo** — placeholder box; swap in a real `<Image>` component
- **Social links** — GitHub/LinkedIn URLs in `constants/data.ts` default to `#`
- **Resume** — `public/resume.pdf` is a placeholder file
