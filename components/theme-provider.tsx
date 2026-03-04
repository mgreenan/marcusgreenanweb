"use client";

import { useEffect } from "react";

const STORAGE_KEY = "marcus-theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const root = document.documentElement;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const preferredLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    const theme = stored ?? (preferredLight ? "light" : "dark");

    root.classList.toggle("light", theme === "light");
    root.classList.toggle("dark", theme === "dark");
  }, []);

  return <>{children}</>;
}

export function toggleTheme() {
  const root = document.documentElement;
  const nextTheme = root.classList.contains("light") ? "dark" : "light";

  root.classList.toggle("light", nextTheme === "light");
  root.classList.toggle("dark", nextTheme === "dark");
  window.localStorage.setItem(STORAGE_KEY, nextTheme);
}

export function getCurrentTheme() {
  if (typeof document === "undefined") {
    return "dark";
  }

  return document.documentElement.classList.contains("light") ? "light" : "dark";
}
