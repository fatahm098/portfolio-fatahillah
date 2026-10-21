import type { ReactNode } from "react";
import { Container } from "@/components/container";
import { cx } from "@/lib/cx";

export function Section({
  id,
  index,
  title,
  description,
  children,
  className,
  bordered = true,
}: {
  id: string;
  index: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  bordered?: boolean;
}) {
  return (
    <section
      aria-labelledby={`${id}-title`}
      className={cx(
        "py-10 md:py-14",
        bordered && "border-t border-line/40",
        className,
      )}
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
            {description ? (
              <p className="max-w-2xl text-body-md text-ink-soft">
                {description}
              </p>
            ) : null}
          </div>
          {children}
        </div>
      </Container>
    </section>
  );
}
