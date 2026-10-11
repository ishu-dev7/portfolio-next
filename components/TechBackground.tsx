"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  r: number;
  symbol: string | null;
  color: string;
  alpha: number;
}

const SYMBOLS = ["</>", "{}", "=>", "[]", "&&", "fn()", "API", ".NET", "SQL", "AI", "async", "GET"];
const COLORS  = ["#2563A6", "#3B82C4", "#1D4F85", "#6EA8E6", "#0E7490", "#5B8DB8"];

// Pre-rendered glow sprites (one per colour) so no gradient is built per particle per frame
const GLOW_R = 24;
const glowSprites = new Map<string, HTMLCanvasElement>();
function getGlowSprite(color: string) {
  let sprite = glowSprites.get(color);
  if (!sprite) {
    sprite = document.createElement("canvas");
    sprite.width = sprite.height = GLOW_R * 2;
    const g = sprite.getContext("2d")!;
    const grad = g.createRadialGradient(GLOW_R, GLOW_R, 0, GLOW_R, GLOW_R, GLOW_R);
    grad.addColorStop(0, color + "30");
    grad.addColorStop(1, "transparent");
    g.fillStyle = grad;
    g.fillRect(0, 0, GLOW_R * 2, GLOW_R * 2);
    glowSprites.set(color, sprite);
  }
  return sprite;
}

function buildParticles(w: number, h: number): Particle[] {
  const count = Math.min(Math.max(Math.floor((w * h) / 9000), 40), 90);
  return Array.from({ length: count }, () => ({
    x:      Math.random() * w,
    y:      Math.random() * h,
    vx:     (Math.random() - 0.5) * 0.4,
    vy:     (Math.random() - 0.5) * 0.4,
    r:      2.5 + Math.random() * 2,       // 2.5–4.5 px solid core
    symbol: Math.random() < 0.28 ? SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)] : null,
    color:  COLORS[Math.floor(Math.random() * COLORS.length)],
    alpha:  0.45 + Math.random() * 0.25,   // 0.45–0.70
  }));
}

export default function TechBackground({ connectDist = 160 }: { connectDist?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    let running = false;
    let particles: Particle[] = [];
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function resize() {
      // Use the section element as source of truth for dimensions
      const parent = canvas!.parentElement;
      const w = (parent?.offsetWidth  ?? 0) || window.innerWidth;
      const h = (parent?.offsetHeight ?? 0) || window.innerHeight;
      if (w === canvas!.width && h === canvas!.height && particles.length) return;
      canvas!.width  = w;
      canvas!.height = h;
      particles = buildParticles(w, h);
    }

    function draw() {
      const W = canvas!.width;
      const H = canvas!.height;
      if (!W || !H) { if (running) raf = requestAnimationFrame(draw); return; }

      ctx!.clearRect(0, 0, W, H);

      // Move particles, bounce off walls
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
      }

      // Connection lines
      ctx!.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectDist) {
            const a = ((1 - dist / connectDist) * 0.3).toFixed(2);
            ctx!.strokeStyle = `rgba(37,99,166,${a})`;
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.stroke();
          }
        }
      }

      // Particles
      for (const p of particles) {
        if (p.symbol) {
          ctx!.save();
          ctx!.globalAlpha  = p.alpha;
          ctx!.font         = "bold 12px 'JetBrains Mono', monospace";
          ctx!.textAlign    = "center";
          ctx!.textBaseline = "middle";
          ctx!.fillStyle    = p.color;
          ctx!.fillText(p.symbol, p.x, p.y);
          ctx!.restore();
        } else {
          // Soft glow corona
          const gr = p.r * 5;
          ctx!.drawImage(getGlowSprite(p.color), p.x - gr, p.y - gr, gr * 2, gr * 2);

          // Solid core
          ctx!.globalAlpha = p.alpha;
          ctx!.fillStyle   = p.color;
          ctx!.beginPath();
          ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx!.fill();
          ctx!.globalAlpha = 1;
        }
      }

      if (running) raf = requestAnimationFrame(draw);
    }

    function start() {
      if (running || reducedMotion) return;
      running = true;
      raf = requestAnimationFrame(draw);
    }
    function stop() {
      running = false;
      cancelAnimationFrame(raf);
    }

    resize();
    draw(); // first frame is always painted; the loop only runs while on screen

    // Only animate while the section is on screen — 14 of these exist on the page
    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { rootMargin: "100px" }
    );
    io.observe(canvas);

    const onResize = () => { resize(); draw(); };
    window.addEventListener("resize", onResize, { passive: true });
    return () => { stop(); io.disconnect(); window.removeEventListener("resize", onResize); };
  }, [connectDist]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 opacity-50"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
}
