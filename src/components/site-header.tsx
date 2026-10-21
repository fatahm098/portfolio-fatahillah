"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/container";
import { CloseIcon, MenuIcon } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";
import { site } from "@/content/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    function onHashChange() {
      setOpen(false);
    }

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/40 bg-canvas/85 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <a
            className="group flex shrink-0 items-center gap-3"
            href="#top"
            onClick={() => setOpen(false)}
          >
            <span
              aria-hidden="true"
              className="flex size-8 items-center justify-center rounded-btn border border-line/60 bg-surface-low font-mono text-label-sm font-medium tracking-[0.08em] text-accent transition-colors group-hover:border-accent/60"
            >
              {site.monogram}
            </span>
            <span className="text-headline-sm font-semibold tracking-tight text-heading">
              {site.shortName}
            </span>
          </a>

          <nav
            aria-label={site.actions.navPrimary}
            className="hidden items-center gap-6 lg:flex"
          >
            {site.nav.map((item) => (
              <a
                className="text-body-sm text-ink-soft transition-colors hover:text-ink"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <ThemeToggle label={site.actions.theme} />
            <button
              aria-controls="mobile-nav"
              aria-expanded={open}
              aria-label={open ? site.actions.closeMenu : site.actions.menu}
              className="inline-flex size-9 items-center justify-center rounded-btn border border-line/50 bg-surface-low text-ink-soft transition-colors hover:bg-surface hover:text-ink lg:hidden"
              onClick={() => setOpen((value) => !value)}
              type="button"
            >
              {open ? <CloseIcon size={18} /> : <MenuIcon size={18} />}
            </button>
          </div>
        </div>
      </Container>

      <div
        className="border-t border-line/40 bg-surface-low lg:hidden"
        hidden={!open}
        id="mobile-nav"
      >
        <Container>
          <nav
            aria-label={site.actions.navMobile}
            className="flex flex-col py-2"
          >
            {site.nav.map((item) => (
              <a
                className="rounded-btn px-2 py-3 text-body-md text-ink-soft transition-colors hover:bg-surface hover:text-ink"
                href={item.href}
                key={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </Container>
      </div>
    </header>
  );
}
