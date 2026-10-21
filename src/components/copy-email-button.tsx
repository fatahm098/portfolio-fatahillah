"use client";

import { useEffect, useRef, useState } from "react";
import { CheckIcon, CopyIcon } from "@/components/icons";

export function CopyEmailButton({
  value,
  label,
  copiedLabel,
}: {
  value: string;
  label: string;
  copiedLabel: string;
}) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable — the address is still selectable */
    }
  }

  return (
    <>
      <button
        aria-label={label}
        className="shrink-0 rounded-btn p-1 text-ink-soft transition-colors hover:text-accent"
        onClick={handleCopy}
        title={label}
        type="button"
      >
        {copied ? (
          <CheckIcon className="text-live" size={18} />
        ) : (
          <CopyIcon size={18} />
        )}
      </button>
      <span aria-live="polite" className="sr-only" role="status">
        {copied ? copiedLabel : ""}
      </span>
    </>
  );
}
