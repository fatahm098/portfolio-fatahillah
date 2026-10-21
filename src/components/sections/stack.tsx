import { Section } from "@/components/section";
import { site } from "@/content/site";

export function StackSection() {
  const { stack } = site.sections;

  return (
    <Section
      description={stack.description}
      id="stack"
      index={stack.index}
      title={stack.title}
    >
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {site.stackGroups.map((group) => (
          <li
            className="flex flex-col gap-1 rounded-card border border-line/40 bg-surface-low p-4"
            key={group.label}
          >
            <h3 className="border-b border-line/30 pb-2 font-mono text-label font-medium uppercase tracking-[0.08em] text-accent">
              {group.label}
            </h3>
            <ul className="flex flex-wrap gap-1.5 pt-2">
              {group.items.map((item) => (
                <li
                  className="rounded-btn border border-line/50 bg-surface px-2 py-1 font-mono text-label-sm text-ink"
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}
