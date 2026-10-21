import type { ReactNode } from "react";
import { Container } from "@/components/container";

export function Section({
  id,
  index,
  title,
  description,
  children,
}: {
  id: string;
  index: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section
      aria-labelledby={`${id}-title`}
      className="border-t border-line/40 py-10 md:py-14"
      id={id}
    >
      <Container>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <h2
              className="font-mono text-label font-medium uppercase tracking-[0.12em] text-heading"
              id={`${id}-title`}
            >
              {`${index} // ${title}`}
            </h2>
            <p className="max-w-2xl text-body-md text-ink-soft">{description}</p>
          </div>
          {children}
        </div>
      </Container>
    </section>
  );
}
