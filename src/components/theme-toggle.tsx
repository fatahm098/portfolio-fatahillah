"use client";

import { MoonIcon, SunIcon } from "@/components/icons";

export function ThemeToggle({ label }: { label: string }) {
  function toggleTheme() {
    const root = document.documentElement;
    const nextDark = !root.classList.contains("dark");

    root.classList.toggle("dark", nextDark);
    root.style.colorScheme = nextDark ? "dark" : "light";

    try {
      localStorage.setItem("theme", nextDark ? "dark" : "light");
    } catch {
      /* storage blocked — theme still applies for this session */
    }
  }

  return (
    <button
      aria-label={label}
      className="inline-flex size-9 items-center justify-center rounded-btn border border-transparent bg-surface-low text-ink-soft transition-colors hover:bg-surface hover:text-ink"
      onClick={toggleTheme}
      title={label}
      type="button"
    >
      <SunIcon className="hidden dark:block" size={18} />
      <MoonIcon className="block dark:hidden" size={18} />
    </button>
  );
}
