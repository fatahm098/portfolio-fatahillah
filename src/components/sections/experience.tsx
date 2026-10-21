import { Section } from "@/components/section";
import { BriefcaseIcon, GraduationIcon } from "@/components/icons";
import { site } from "@/content/site";

export function ExperienceSection() {
  const { experience } = site.sections;

  return (
    <Section
      description={experience.description}
      id="experience"
      index={experience.index}
      title={experience.title}
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <article className="flex flex-col gap-3 rounded-card border border-line/40 bg-surface-low p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-headline-sm font-semibold text-heading">
              {site.experience.role}
            </h3>
            <BriefcaseIcon className="shrink-0 text-accent" size={18} />
          </div>
          <p className="font-mono text-label-sm uppercase tracking-[0.06em] text-ink-faint">
            {site.experience.mode}
          </p>
        </article>

        <article className="flex flex-col gap-3 rounded-card border border-line/40 bg-surface-low p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-headline-sm font-semibold text-heading">
              {site.education.institution}
            </h3>
            <GraduationIcon className="shrink-0 text-accent" size={18} />
          </div>
          <p className="font-mono text-label-sm uppercase tracking-[0.06em] text-ink-faint">
            {site.education.programme}
          </p>
        </article>
      </div>
    </Section>
  );
}
