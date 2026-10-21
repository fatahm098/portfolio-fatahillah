import type { ReactNode } from "react";

/** 1280px engineering grid with 20px mobile / 48px desktop margins. */
export function Container({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[1280px] px-5 md:px-12">{children}</div>
  );
}
