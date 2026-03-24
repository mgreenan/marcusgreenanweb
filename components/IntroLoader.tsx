"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "mg_intro_seen";
const INTRO_DURATION_MS = 1500;

export function IntroLoader() {
  const prefersReducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [statusIndex, setStatusIndex] = useState(0);
  const statuses = useMemo(() => ["Initializing Systems", "Loading Projects", "Preparing Interface"], []);

  useEffect(() => {
    const seen = window.sessionStorage.getItem(STORAGE_KEY);

    if (seen) {
      setVisible(false);
      document.documentElement.dataset.intro = "done";
      return;
    }

    if (prefersReducedMotion) {
      window.sessionStorage.setItem(STORAGE_KEY, "1");
      document.documentElement.dataset.intro = "done";
      setVisible(false);
      return;
    }

    setVisible(true);

    const statusTimer = window.setInterval(() => {
      setStatusIndex((current) => Math.min(current + 1, statuses.length - 1));
    }, 420);

    const closeTimer = window.setTimeout(() => {
      setVisible(false);
      window.sessionStorage.setItem(STORAGE_KEY, "1");
      document.documentElement.dataset.intro = "done";
    }, INTRO_DURATION_MS);

    return () => {
      window.clearInterval(statusTimer);
      window.clearTimeout(closeTimer);
    };
  }, [prefersReducedMotion, statuses.length]);

  useEffect(() => {
    if (!visible) {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [visible]);

  const handleSkip = () => {
    window.sessionStorage.setItem(STORAGE_KEY, "1");
    document.documentElement.dataset.intro = "done";
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.3, ease: "easeOut" } }}
          className="fixed inset-0 z-[100] bg-[#0a0a0a]"
          aria-live="polite"
        >
          <div className="absolute inset-0 opacity-25">
            <motion.div
              className="h-full w-full bg-grid bg-[size:56px_56px]"
              animate={{ backgroundPosition: ["0px 0px", "56px 56px"] }}
              transition={{ duration: 3.2, ease: "linear", repeat: Infinity }}
            />
          </div>
          <button
            type="button"
            onClick={handleSkip}
            className="absolute right-5 top-5 rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/80 transition hover:border-white/35 hover:text-white"
          >
            Skip
          </button>
          <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="font-[family-name:var(--font-display)] text-4xl tracking-tight text-white md:text-6xl"
            >
              Marcus Greenan
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.08, ease: "easeOut" }}
              className="mt-3 text-sm uppercase tracking-[0.28em] text-white/70 md:text-base"
            >
              Mechanical Engineering | Robotics & Aerospace
            </motion.p>
            <motion.p
              key={statuses[statusIndex]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.16 }}
              className="mt-9 text-xs uppercase tracking-[0.32em] text-[rgb(var(--accent))]"
            >
              {statuses[statusIndex]}
            </motion.p>
            <div className="mt-4 h-[3px] w-[min(420px,78vw)] overflow-hidden rounded-full bg-white/15">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.25, ease: "easeInOut" }}
                className="h-full bg-[rgb(var(--accent))]"
              />
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
