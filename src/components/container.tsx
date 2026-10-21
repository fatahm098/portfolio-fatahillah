import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

/** 1280px engineering grid with 20px mobile / 48px desktop margins. */
export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cx("mx-auto w-full max-w-[1280px] px-5 md:px-12", className)}>
      {children}
    </div>
  );
}
