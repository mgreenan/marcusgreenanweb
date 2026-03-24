"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const INTRO_MS = 2400;

function clamp(value: number, min = 0, max = 1) {
  return Math.min(Math.max(value, min), max);
}

export function HeroNameIntro({ onComplete }: { onComplete?: () => void }) {
  const prefersReducedMotion = useReducedMotion();
  const [progress, setProgress] = useState(prefersReducedMotion ? 1 : 0);
  const doneRef = useRef(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      if (!doneRef.current) {
        doneRef.current = true;
        onComplete?.();
      }
      return;
    }

    let raf = 0;
    const start = performance.now();

    const step = (now: number) => {
      const next = clamp((now - start) / INTRO_MS);
      setProgress(next);
      if (next >= 1) {
        if (!doneRef.current) {
          doneRef.current = true;
          onComplete?.();
        }
        return;
      }
      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [onComplete, prefersReducedMotion]);

  const drawing = clamp((progress - 0.02) / 0.46);
  const lineOpacity = 1 - clamp((progress - 0.44) / 0.22);
  const metalOpacity = clamp((progress - 0.36) / 0.3);
  const subtitleOpacity = clamp((progress - 0.68) / 0.22);

  return (
    <div className="relative overflow-hidden rounded-[1.15rem] border border-white/10 bg-[#06080c] px-4 py-10 md:px-8 md:py-14">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_8%,rgba(166,193,223,0.11),transparent_46%),linear-gradient(180deg,rgba(2,4,8,0.12),rgba(2,4,8,0.62))]" />

      <div className="relative mx-auto max-w-[1120px] text-center">
        <svg viewBox="0 0 1500 300" className="h-auto w-full" aria-label="Marcus Greenan engineering wordmark intro">
          <line x1="210" y1="150" x2="1290" y2="150" stroke="rgba(173,201,225,0.18)" strokeDasharray="8 10" />
          <line x1="750" y1="40" x2="750" y2="260" stroke="rgba(173,201,225,0.18)" strokeDasharray="8 10" />
          <text
            x="750"
            y="192"
            textAnchor="middle"
            fontSize="118"
            letterSpacing="1.4"
            className="font-[family-name:var(--font-display)]"
            fill="none"
            stroke="rgba(188,218,240,0.9)"
            strokeWidth="1.18"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="1750"
            strokeDashoffset={(1 - drawing) * 1750}
            style={{ opacity: lineOpacity }}
          >
            Marcus Greenan
          </text>
        </svg>

        <motion.div
          className="pointer-events-none absolute inset-x-0 top-[33%] mx-auto h-12 w-[26%] bg-[linear-gradient(100deg,transparent_0%,rgba(255,255,255,0.02)_28%,rgba(255,255,255,0.32)_50%,rgba(255,255,255,0.02)_72%,transparent_100%)]"
          animate={{ x: ["-34%", "240%"], opacity: metalOpacity > 0.72 ? [0, 0.42, 0] : 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />

        <motion.h1
          className="pointer-events-none absolute inset-x-0 top-[39%] -translate-y-1/2 whitespace-nowrap font-[family-name:var(--font-display)] text-[clamp(2.2rem,6.8vw,5.25rem)] tracking-[0.03em] text-[#d6dce3]"
          animate={{ opacity: metalOpacity, y: [-1, -4, -1] }}
          transition={{ opacity: { duration: 0.3, ease: "easeOut" }, y: { duration: 2.6, repeat: Infinity, ease: "easeInOut" } }}
          style={{
            textShadow: "0 1px 0 rgba(255,255,255,0.24),0 8px 18px rgba(0,0,0,0.52),0 -1px 0 rgba(0,0,0,0.36)",
          }}
        >
          Marcus Greenan
        </motion.h1>

        <motion.p
          className="mt-2 text-[11px] uppercase tracking-[0.24em] text-zinc-300/70 md:text-xs"
          animate={{ opacity: subtitleOpacity, y: subtitleOpacity > 0 ? 0 : 5 }}
          transition={{ duration: 0.32, ease: "easeOut" }}
        >
          Mechanical Engineering • Robotics • Aerospace Systems
        </motion.p>
      </div>
    </div>
  );
}
