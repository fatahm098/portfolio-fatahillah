import { cx } from "@/lib/cx";

type BrowserFrameProps = {
  path: string;
  alt: string;
  label: string;
  note: string;
  compact?: boolean;
};

/**
 * Browser chrome with a placeholder canvas — used until real project
 * screenshots exist. No fabricated metrics or mock data inside.
 */
export function BrowserFrame({
  path,
  alt,
  label,
  note,
  compact = false,
}: BrowserFrameProps) {
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
        aria-label={alt}
        className={cx(
          "blueprint-grid relative flex items-center justify-center bg-surface-lowest",
          compact ? "h-[132px]" : "h-[204px]",
        )}
        role="img"
      >
        <div
          className={cx(
            "flex flex-col items-center gap-1 border border-dashed border-line/70 bg-surface-lowest/85 text-center backdrop-blur-[1px]",
            compact ? "px-3 py-2" : "px-4 py-3",
          )}
        >
          <span
            className={cx(
              "font-mono uppercase tracking-[0.14em] text-accent",
              compact ? "text-[10px]" : "text-label-sm",
            )}
          >
            {label}
          </span>
          <span
            className={cx(
              "font-mono text-ink-faint",
              compact ? "text-[9px]" : "text-[10px]",
            )}
          >
            {note}
          </span>
        </div>
      </div>
    </div>
  );
}
