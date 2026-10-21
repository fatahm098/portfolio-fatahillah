import { cx } from "@/lib/cx";

/** Fallback canvas for projects that do not have a real screenshot yet. */
export function PreviewPlaceholder({
  alt,
  label,
  note,
  compact = false,
}: {
  alt: string;
  label: string;
  note: string;
  compact?: boolean;
}) {
  return (
    <div
      aria-label={alt}
      className="blueprint-grid flex h-full w-full items-center justify-center"
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
  );
}
