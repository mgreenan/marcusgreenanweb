"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const STORAGE_KEY = "mg_intro_seen";
const INTRO_DURATION_MS = 2600;

export function IntroLoader() {
  const prefersReducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);

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

    const closeTimer = window.setTimeout(() => {
      setVisible(false);
      window.sessionStorage.setItem(STORAGE_KEY, "1");
      document.documentElement.dataset.intro = "done";
    }, INTRO_DURATION_MS);

    return () => {
      window.clearTimeout(closeTimer);
    };
  }, [prefersReducedMotion]);

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
          exit={{ opacity: 0, transition: { duration: 0.45, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] overflow-hidden bg-[#050609]"
          aria-live="polite"
        >
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(214,224,231,0.16),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.035),transparent_34%),#050609]"
            exit={{ opacity: 0, transition: { duration: 0.42, ease: "easeInOut" } }}
          />
          <motion.div
            className="absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(255,255,255,0.9)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.9)_1px,transparent_1px)] [background-size:96px_96px]"
            exit={{ opacity: 0, transition: { duration: 0.3, ease: "easeOut" } }}
          />
          <motion.div
            className="absolute left-1/2 top-1/2 h-[28rem] w-[min(72rem,92vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(145,167,183,0.12),transparent_68%)] blur-2xl"
            animate={{ opacity: [0.32, 0.52, 0.34] }}
            transition={{ duration: 2.8, ease: "easeInOut" }}
          />

          <div className="absolute inset-x-0 bottom-10 mx-auto h-px w-[min(520px,70vw)] overflow-hidden bg-white/10">
            <motion.div
              className="h-full bg-[linear-gradient(90deg,transparent,rgba(222,232,240,0.95),transparent)]"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 2.25, ease: "easeInOut" }}
            />
          </div>

          <button
            type="button"
            onClick={handleSkip}
            className="absolute right-5 top-5 z-10 rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/70 transition hover:border-white/35 hover:text-white"
          >
            Skip
          </button>

          <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
            <motion.div
              className="relative w-[min(1120px,94vw)]"
              exit={{ opacity: 0, y: -10, scale: 0.992, transition: { duration: 0.36, ease: "easeInOut" } }}
            >
              <motion.svg
                viewBox="0 0 1500 360"
                className="h-auto w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                aria-label="Marcus Greenan CNC toolpath wordmark"
              >
                <defs>
                  <linearGradient id="cnc-stroke" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="rgba(154,179,197,0.18)" />
                    <stop offset="50%" stopColor="rgba(235,244,249,0.88)" />
                    <stop offset="100%" stopColor="rgba(120,143,160,0.25)" />
                  </linearGradient>
                  <linearGradient id="aluminum-fill" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="#626b72" />
                    <stop offset="13%" stopColor="#f0f4f6" />
                    <stop offset="26%" stopColor="#8f9aa1" />
                    <stop offset="42%" stopColor="#ffffff" />
                    <stop offset="56%" stopColor="#7d878e" />
                    <stop offset="72%" stopColor="#d6dde1" />
                    <stop offset="100%" stopColor="#596168" />
                  </linearGradient>
                  <pattern id="brushed-lines" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(10)">
                    <line x1="0" y1="0" x2="0" y2="9" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                    <line x1="5" y1="0" x2="5" y2="9" stroke="rgba(0,0,0,0.22)" strokeWidth="1" />
                  </pattern>
                  <filter id="machined-shadow" x="-12%" y="-35%" width="124%" height="180%">
                    <feDropShadow dx="0" dy="18" stdDeviation="12" floodColor="rgba(0,0,0,0.62)" />
                    <feDropShadow dx="0" dy="-1" stdDeviation="0.7" floodColor="rgba(255,255,255,0.45)" />
                  </filter>
                  <clipPath id="name-clip">
                    <text x="750" y="214" textAnchor="middle" fontSize="124" className="font-[family-name:var(--font-display)]">
                      Marcus Greenan
                    </text>
                  </clipPath>
                  <linearGradient id="cutter-glow" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="transparent" />
                    <stop offset="46%" stopColor="rgba(255,255,255,0.82)" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
                <line x1="190" y1="178" x2="1310" y2="178" stroke="rgba(190,210,225,0.12)" strokeDasharray="9 16" />
                <line x1="750" y1="68" x2="750" y2="286" stroke="rgba(190,210,225,0.08)" strokeDasharray="9 16" />
                <motion.text
                  x="750"
                  y="214"
                  textAnchor="middle"
                  fontSize="124"
                  className="font-[family-name:var(--font-display)]"
                  fill="none"
                  stroke="url(#cnc-stroke)"
                  strokeWidth="1.35"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="1820"
                  initial={{ strokeDashoffset: 1820, opacity: 0 }}
                  animate={{ strokeDashoffset: 0, opacity: [0, 1, 0.42] }}
                  transition={{ duration: 1.28, ease: "easeInOut", opacity: { times: [0, 0.2, 1], duration: 1.9 } }}
                >
                  Marcus Greenan
                </motion.text>

                <motion.text
                  x="750"
                  y="214"
                  textAnchor="middle"
                  fontSize="124"
                  className="font-[family-name:var(--font-display)]"
                  fill="url(#aluminum-fill)"
                  stroke="rgba(255,255,255,0.28)"
                  strokeWidth="0.8"
                  filter="url(#machined-shadow)"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.02, duration: 0.62, ease: "easeOut" }}
                >
                  Marcus Greenan
                </motion.text>

                <motion.rect
                  x="190"
                  y="80"
                  width="1120"
                  height="190"
                  fill="url(#brushed-lines)"
                  clipPath="url(#name-clip)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.42 }}
                  transition={{ delay: 1.32, duration: 0.45, ease: "easeOut" }}
                />

                <motion.rect
                  x="-220"
                  y="76"
                  width="230"
                  height="205"
                  fill="url(#cutter-glow)"
                  clipPath="url(#name-clip)"
                  initial={{ x: 0, opacity: 0 }}
                  animate={{ x: 1700, opacity: [0, 0.9, 0] }}
                  transition={{ delay: 1.16, duration: 0.82, ease: "easeInOut" }}
                />

                <motion.g
                  initial={{ x: 205, y: 118, opacity: 0 }}
                  animate={{ x: [205, 680, 1210], y: [118, 96, 118], opacity: [0, 0.86, 0] }}
                  transition={{ delay: 0.44, duration: 1.28, ease: "easeInOut" }}
                >
                  <rect x="-12" y="-58" width="24" height="58" rx="3" fill="#aeb8bf" />
                  <rect x="-8" y="-22" width="16" height="34" rx="2" fill="#d7dee2" />
                  <circle cx="0" cy="20" r="17" fill="rgba(230,237,241,0.86)" />
                  <circle cx="0" cy="20" r="7" fill="rgba(62,70,76,0.78)" />
                  <path d="M0 38 L-10 58 L10 58 Z" fill="rgba(213,223,230,0.75)" />
                  <line x1="-33" y1="61" x2="33" y2="61" stroke="rgba(255,255,255,0.34)" strokeWidth="1.5" />
                </motion.g>
              </motion.svg>
            </motion.div>

            <div className="mt-7 h-[2px] w-[min(460px,72vw)] overflow-hidden rounded-full bg-white/12">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.25, ease: "easeInOut" }}
                className="h-full bg-[linear-gradient(90deg,rgba(117,144,164,0.2),rgba(235,244,248,0.95),rgba(117,144,164,0.2))]"
              />
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
