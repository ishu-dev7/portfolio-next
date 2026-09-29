"use client";

import { useEffect, useRef } from "react";

interface ArchNode {
  id: string;
  label: string;
  sub: string;
  fx: number; // 0-1 fraction of canvas width
  fy: number; // 0-1 fraction of canvas height
  color: string;
  r: number;
}

interface Packet {
  edgeIdx: number;
  t: number;       // 0-1 progress along edge
  speed: number;
  color: string;
  size: number;
}

const NODES: ArchNode[] = [
  { id: "spa",    label: "Angular",      sub: "SPA Client",     fx: 0.55, fy: 0.14, color: "#f87171", r: 22 },
  { id: "api",    label: ".NET Core",    sub: "REST API",        fx: 0.73, fy: 0.35, color: "#7C5CFF", r: 30 },
  { id: "sql",    label: "SQL Server",   sub: "T-SQL · Procs",   fx: 0.93, fy: 0.22, color: "#22D3EE", r: 24 },
  { id: "azure",  label: "Azure",        sub: "App Service",     fx: 0.93, fy: 0.52, color: "#60a5fa", r: 22 },
  { id: "llm",    label: "OpenAI",       sub: "LLM · OCR",       fx: 0.73, fy: 0.68, color: "#34d399", r: 22 },
  { id: "sap",    label: "SAP",          sub: "Integration",     fx: 0.55, fy: 0.60, color: "#fb923c", r: 20 },
  { id: "auth",   label: "JWT Auth",     sub: "Middleware",      fx: 0.55, fy: 0.38, color: "#c084fc", r: 18 },
];

const EDGES: [string, string][] = [
  ["spa",   "api"],
  ["auth",  "api"],
  ["api",   "sql"],
  ["api",   "azure"],
  ["api",   "llm"],
  ["api",   "sap"],
  ["sql",   "azure"],
  ["sap",   "auth"],
];

export default function BackendArchitecture() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let packets: Packet[] = [];
    let nodes: Array<ArchNode & { cx: number; cy: number }> = [];
    let tick = 0;

    function resize() {
      canvas!.width = canvas!.parentElement?.offsetWidth || window.innerWidth;
      canvas!.height = canvas!.parentElement?.offsetHeight || window.innerHeight;
      buildNodes();
    }

    function buildNodes() {
      nodes = NODES.map((n) => ({
        ...n,
        cx: n.fx * canvas!.width,
        cy: n.fy * canvas!.height,
      }));
    }

    function getNode(id: string) {
      return nodes.find((n) => n.id === id)!;
    }

    function spawnPacket() {
      const edgeIdx = Math.floor(Math.random() * EDGES.length);
      const from = getNode(EDGES[edgeIdx][0]);
      if (!from) return;
      packets.push({
        edgeIdx,
        t: 0,
        speed: 0.003 + Math.random() * 0.003,
        color: from.color,
        size: 2.5 + Math.random() * 1.5,
      });
    }

    function drawHexagon(x: number, y: number, r: number) {
      ctx!.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i - Math.PI / 6;
        const px = x + r * Math.cos(angle);
        const py = y + r * Math.sin(angle);
        if (i === 0) ctx!.moveTo(px, py);
        else ctx!.lineTo(px, py);
      }
      ctx!.closePath();
    }

    function draw() {
      tick++;
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

      // Spawn packets
      if (tick % 45 === 0 && packets.length < 20) spawnPacket();

      // ── Draw edges ──
      EDGES.forEach(([fromId, toId]) => {
        const a = getNode(fromId);
        const b = getNode(toId);
        if (!a || !b) return;

        ctx!.save();
        ctx!.setLineDash([4, 8]);
        ctx!.strokeStyle = "rgba(255,255,255,0.07)";
        ctx!.lineWidth = 1;
        ctx!.beginPath();
        ctx!.moveTo(a.cx, a.cy);
        ctx!.lineTo(b.cx, b.cy);
        ctx!.stroke();
        ctx!.restore();
      });

      // ── Draw packets ──
      packets = packets.filter((p) => p.t < 1);
      packets.forEach((p) => {
        const [fromId, toId] = EDGES[p.edgeIdx];
        const a = getNode(fromId);
        const b = getNode(toId);
        if (!a || !b) return;

        p.t += p.speed;
        const x = a.cx + (b.cx - a.cx) * p.t;
        const y = a.cy + (b.cy - a.cy) * p.t;

        const g = ctx!.createRadialGradient(x, y, 0, x, y, p.size * 3);
        g.addColorStop(0, p.color + "cc");
        g.addColorStop(1, "transparent");
        ctx!.fillStyle = g;
        ctx!.beginPath();
        ctx!.arc(x, y, p.size * 3, 0, Math.PI * 2);
        ctx!.fill();

        ctx!.fillStyle = p.color;
        ctx!.beginPath();
        ctx!.arc(x, y, p.size, 0, Math.PI * 2);
        ctx!.fill();
      });

      // ── Draw nodes ──
      nodes.forEach((n) => {
        const pulse = 1 + 0.06 * Math.sin(tick * 0.025 + n.fx * 10);
        const r = n.r * pulse;

        const outerGlow = ctx!.createRadialGradient(n.cx, n.cy, r * 0.8, n.cx, n.cy, r * 2.5);
        outerGlow.addColorStop(0, n.color + "22");
        outerGlow.addColorStop(1, "transparent");
        ctx!.fillStyle = outerGlow;
        ctx!.beginPath();
        ctx!.arc(n.cx, n.cy, r * 2.5, 0, Math.PI * 2);
        ctx!.fill();

        drawHexagon(n.cx, n.cy, r);
        ctx!.fillStyle = n.color + "18";
        ctx!.fill();

        drawHexagon(n.cx, n.cy, r);
        ctx!.strokeStyle = n.color + "55";
        ctx!.lineWidth = 1.5;
        ctx!.stroke();

        drawHexagon(n.cx, n.cy, r * 0.55);
        ctx!.strokeStyle = n.color + "88";
        ctx!.lineWidth = 1;
        ctx!.stroke();

        ctx!.fillStyle = n.color + "cc";
        ctx!.font = "bold 10px 'JetBrains Mono', monospace";
        ctx!.textAlign = "center";
        ctx!.textBaseline = "middle";
        ctx!.fillText(n.label, n.cx, n.cy - 5);

        ctx!.fillStyle = "rgba(255,255,255,0.30)";
        ctx!.font = "8px 'JetBrains Mono', monospace";
        ctx!.fillText(n.sub, n.cx, n.cy + 7);
      });

      raf = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", () => { resize(); });
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 opacity-70"
      aria-hidden="true"
    />
  );
}
