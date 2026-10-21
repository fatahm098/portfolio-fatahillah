import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

type BrowserFrameProps = {
  path: string;
  compact?: boolean;
  children: ReactNode;
};

/**
 * Browser chrome used for every project preview. The body is a fixed-height
 * canvas so cards keep a consistent rhythm whether they hold a screenshot or
 * the "preview pending" placeholder.
 */
export function BrowserFrame({ path, compact = false, children }: BrowserFrameProps) {
  return (
    <div className="border-b border-line/30 bg-surface-lowest">
      <div
        className={cx(
          "flex items-center justify-between gap-3 border-b border-line/30 bg-surface px-4",
          compact ? "h-8" : "h-9",
        )}
      >
        <div className="flex shrink-0 items-center gap-1.5">
          <span
            className={cx(
              "rounded-full bg-[#ff5f56]",
              compact ? "size-2" : "size-2.5",
            )}
          />
          <span
            className={cx(
              "rounded-full bg-[#ffbd2e]",
              compact ? "size-2" : "size-2.5",
            )}
          />
          <span
            className={cx(
              "rounded-full bg-[#27c93f]",
              compact ? "size-2" : "size-2.5",
            )}
          />
        </div>
        <span
          className={cx(
            "truncate font-mono text-ink-soft",
            compact ? "text-[10px]" : "text-label-sm",
          )}
        >
          {path}
        </span>
        <span aria-hidden="true" className={compact ? "w-4" : "w-6"} />
      </div>

      <div
        className={cx(
          "relative overflow-hidden bg-surface-lowest",
          compact ? "h-[132px]" : "h-[204px]",
        )}
      >
        {children}
      </div>
    </div>
  );
}
