"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import IntroScene from "@/components/three/IntroScene";

const STORAGE_KEY = "mg_intro_seen";
const TOTAL_MS = 4000;
const REDUCED_MS = 180;

function clamp(value: number, min = 0, max = 1) {
  return Math.min(Math.max(value, min), max);
}

export function IntroLoader() {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [elapsedMs, setElapsedMs] = useState(0);
  const [fastExit, setFastExit] = useState(false);
  const [forceIntro, setForceIntro] = useState(false);

  const rafRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);
  const startRef = useRef(0);

  const clearTimers = () => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const finish = (instant = false) => {
    document.documentElement.dataset.intro = "done";
    sessionStorage.setItem(STORAGE_KEY, "1");
    clearTimers();
    if (instant) {
      setFastExit(true);
    }
    setVisible(false);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) {
      return;
    }

    const params = new URLSearchParams(window.location.search);
    const shouldForce = params.get("intro") === "1";
    setForceIntro(shouldForce);
    if (shouldForce) {
      sessionStorage.removeItem(STORAGE_KEY);
      document.documentElement.dataset.intro = "loading";
    }
  }, [mounted]);

  useEffect(() => {
    if (!mounted) {
      return;
    }

    const seen = sessionStorage.getItem(STORAGE_KEY);
    if (seen && !forceIntro) {
      document.documentElement.dataset.intro = "done";
      return;
    }

    document.documentElement.dataset.intro = "loading";
    setVisible(true);
    setElapsedMs(0);
    setFastExit(false);

    if (prefersReducedMotion) {
      timeoutRef.current = window.setTimeout(() => {
        finish();
      }, REDUCED_MS / 2);
      return () => clearTimers();
    }

    startRef.current = performance.now();

    const step = (now: number) => {
      const elapsed = now - startRef.current;
      setElapsedMs(elapsed);

      if (elapsed >= TOTAL_MS) {
        finish();
        return;
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    return () => clearTimers();
  }, [forceIntro, mounted, prefersReducedMotion]);

  const normalized = clamp(elapsedMs / TOTAL_MS);
  const phase = useMemo(() => {
    if (elapsedMs < 1000) {
      return "blueprint";
    }
    if (elapsedMs < 2200) {
      return "cad";
    }
    if (elapsedMs < 3200) {
      return "real";
    }
    return "launch";
  }, [elapsedMs]);

  const status = useMemo(() => {
    if (elapsedMs < 1000) {
      return "Blueprint drafting";
    }
    if (elapsedMs < 2200) {
      return "CAD conversion";
    }
    if (elapsedMs < 3200) {
      return "Flight hardware";
    }
    return "Ignition + liftoff";
  }, [elapsedMs]);

  if (!mounted) {
    return null;
  }

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: prefersReducedMotion || fastExit ? 0.12 : 0.24, ease: "easeOut" } }}
          className="fixed inset-0 z-[130] bg-[#040b17]"
          aria-live="polite"
        >
          {prefersReducedMotion ? (
            <div className="absolute inset-0 blueprint-grid bg-[#061426]" />
          ) : (
            <IntroScene elapsedMs={elapsedMs} totalMs={TOTAL_MS} />
          )}

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(166,214,255,0.08),transparent_56%),radial-gradient(circle_at_10%_10%,rgba(148,205,255,0.1),transparent_40%),radial-gradient(circle_at_90%_90%,rgba(0,0,0,0.75),transparent_45%)]" />

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: phase === "blueprint" ? 1 : 0, y: phase === "blueprint" ? 0 : -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="pointer-events-none absolute left-1/2 top-[11%] -translate-x-1/2 text-center"
          >
            <h1 className="font-[family-name:var(--font-display)] text-2xl tracking-[0.04em] text-cyan-50 md:text-3xl">Marcus Greenan</h1>
            <p className="mt-2 text-[11px] uppercase tracking-[0.28em] text-cyan-100/70 md:text-xs">Robotics & Aerospace Systems</p>
          </motion.div>

          {phase === "cad" ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="pointer-events-none absolute left-1/2 top-[12%] -translate-x-1/2 rounded-md border border-cyan-100/20 bg-[#0a1c2d]/45 px-3 py-2 text-[10px] uppercase tracking-[0.24em] text-cyan-50/85"
            >
              CAD VIEW | REV A
            </motion.div>
          ) : null}

          {phase === "cad" ? (
            <div className="pointer-events-none absolute left-4 top-[22%] w-[210px] rounded-md border border-cyan-100/20 bg-[#0a1c2d]/50 px-3 py-2 text-[9px] uppercase tracking-[0.2em] text-cyan-100/70 md:left-6">
              <div>Body OD: 0.49 m</div>
              <div className="mt-1">Fin Span: 0.42 m</div>
              <div className="mt-1">Material: AL-6061 + CFRP</div>
            </div>
          ) : null}

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => finish(true)}
            className="absolute right-4 top-4 rounded-full border border-cyan-100/25 bg-[#0a1c2d]/65 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-cyan-50/85 transition hover:border-cyan-100/50 hover:text-white md:right-6 md:top-6"
          >
            Skip
          </motion.button>

          <div className="absolute inset-x-4 bottom-5 md:inset-x-8">
            <div className="mb-2 flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-cyan-100/70">
              <span>{status}</span>
              <span>T+{(elapsedMs / 1000).toFixed(1)}s</span>
            </div>
            <div className="h-[2px] w-full overflow-hidden rounded-full bg-cyan-100/20">
              <motion.div
                className="h-full bg-cyan-200/90"
                animate={{ width: `${normalized * 100}%` }}
                transition={{ duration: 0.06, ease: "linear" }}
              />
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
