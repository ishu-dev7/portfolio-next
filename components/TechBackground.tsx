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
const COLORS  = ["#7C5CFF", "#22D3EE", "#3D5AFE", "#a78bfa", "#38bdf8", "#34d399"];

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
    let particles: Particle[] = [];

    function resize() {
      // Use the section element as source of truth for dimensions
      const parent = canvas!.parentElement;
      const w = (parent?.offsetWidth  ?? 0) || window.innerWidth;
      const h = (parent?.offsetHeight ?? 0) || window.innerHeight;
      canvas!.width  = w;
      canvas!.height = h;
      particles = buildParticles(w, h);
    }

    function draw() {
      const W = canvas!.width;
      const H = canvas!.height;
      if (!W || !H) { raf = requestAnimationFrame(draw); return; }

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
            ctx!.strokeStyle = `rgba(124,92,255,${a})`;
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
          const glow = ctx!.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 5);
          glow.addColorStop(0, p.color + "30");
          glow.addColorStop(1, "transparent");
          ctx!.fillStyle = glow;
          ctx!.beginPath();
          ctx!.arc(p.x, p.y, p.r * 5, 0, Math.PI * 2);
          ctx!.fill();

          // Solid core
          ctx!.globalAlpha = p.alpha;
          ctx!.fillStyle   = p.color;
          ctx!.beginPath();
          ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx!.fill();
          ctx!.globalAlpha = 1;
        }
      }

      raf = requestAnimationFrame(draw);
    }

    // Synchronous start (same pattern as BackendArchitecture)
    resize();
    draw();

    const onResize = () => { cancelAnimationFrame(raf); resize(); draw(); };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
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
