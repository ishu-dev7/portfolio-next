"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  {
    src: "/Profile.jpeg",
    alt: "Harendra Pratap Singh",
    label: "Harendra Pratap Singh",
    sublabel: "Backend Specialist & Tech Lead",
    objectPosition: "top",
  },
  {
    src: "/WorkSpace.jpeg",
    alt: "Harendra at work — Appstean Infotech",
    label: "In the Zone",
    sublabel: "Building enterprise systems at Appstean",
    objectPosition: "center",
  },
  {
    src: "/Award.jpeg",
    alt: "Star Performer of the Year Award 2025",
    label: "Star Performer of the Year",
    sublabel: "Appstean Infotech · 2025",
    objectPosition: "top",
  },
];

export default function AboutCarousel() {
  const [current, setCurrent] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const drag = useRef({ active: false, startX: 0, startY: 0, locked: false, width: 1 });

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % SLIDES.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  // Restarts whenever the slide changes, so a manual click delays the next auto-advance
  useEffect(() => {
    const id = setInterval(() => {
      if (!drag.current.active) next();
    }, 4000);
    return () => clearInterval(id);
  }, [current, next]);

  const slide = SLIDES[current];

  // Drag / swipe — pointer events cover both touch and mouse
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest("button")) return;
    drag.current = {
      active: true,
      startX: e.clientX,
      startY: e.clientY,
      locked: false,
      width: e.currentTarget.offsetWidth || 1,
    };
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    if (!d.active) return;
    const dx = e.clientX - d.startX;
    if (!d.locked) {
      if (Math.abs(dx) < 6) return;
      d.locked = true;
      setDragging(true);
      e.currentTarget.setPointerCapture(e.pointerId);
    }
    // Resist dragging past the first / last slide
    const atEdge = (current === 0 && dx > 0) || (current === SLIDES.length - 1 && dx < 0);
    setDragX(atEdge ? dx * 0.35 : dx);
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    if (!d.active) return;
    d.active = false;
    if (!d.locked) return;
    const dx = e.clientX - d.startX;
    const threshold = Math.min(80, d.width * 0.2);
    if (dx <= -threshold && current < SLIDES.length - 1) setCurrent(current + 1);
    else if (dx >= threshold && current > 0) setCurrent(current - 1);
    setDragging(false);
    setDragX(0);
  };

  return (
    <div
      className="group relative aspect-[4/5] cursor-grab touch-pan-y select-none overflow-hidden rounded-[20px] border border-border bg-surface active:cursor-grabbing"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
    >
      {/* Sliding track — all slides stay mounted so none has to load at swap time */}
      <div
        className="absolute inset-0 flex"
        style={{
          transform: `translateX(calc(${-current * 100}% + ${dragX}px))`,
          transition: dragging ? "none" : "transform 0.4s cubic-bezier(.4,0,.2,1)",
        }}
      >
      {SLIDES.map((s, i) => (
        <div
          key={s.src}
          className="relative h-full w-full shrink-0"
          aria-hidden={i !== current}
        >
          <Image
            src={s.src}
            alt={s.alt}
            fill
            priority={i === 0}
            loading="eager"
            sizes="(min-width: 768px) 480px, 100vw"
            quality={80}
            draggable={false}
            className="object-cover"
            style={{ objectPosition: s.objectPosition }}
          />
        </div>
      ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="font-display text-sm font-semibold text-white drop-shadow">
          {slide.label}
        </p>
        <p className="mt-0.5 font-mono text-[11px] text-white/70">
          {slide.sublabel}
        </p>

        {/* Dots */}
        <div className="mt-3 flex gap-1.5">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 bg-brand-cyan"
                  : "w-1.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Arrow buttons — visible on hover */}
      <button
        onClick={prev}
        aria-label="Previous"
        className="absolute left-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 hover:bg-black/60"
      >
        <ChevronLeft size={16} />
      </button>
      <button
        onClick={next}
        aria-label="Next"
        className="absolute right-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 hover:bg-black/60"
      >
        <ChevronRight size={16} />
      </button>

      {/* Slide counter pill */}
      <div className="absolute right-4 top-4 rounded-full bg-black/40 px-2.5 py-1 font-mono text-[11px] text-white/80 backdrop-blur-sm">
        {current + 1} / {SLIDES.length}
      </div>
    </div>
  );
}
