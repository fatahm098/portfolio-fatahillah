import { Container } from "@/components/container";
import { ArrowDownIcon, GithubIcon, GraduationIcon, MailIcon } from "@/components/icons";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="pb-10 pt-10 md:pb-14 md:pt-14">
      <Container>
        <div className="flex flex-col items-start gap-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-line/40 bg-surface px-4 py-1">
            <span aria-hidden="true" className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-live opacity-70" />
              <span className="relative inline-flex size-2 rounded-full bg-live" />
            </span>
            <span className="font-mono text-label-sm uppercase tracking-[0.12em] text-live">
              {site.heroLabel}
            </span>
          </p>

          <div className="flex max-w-4xl flex-col gap-2">
            <h1
              className="text-[2.25rem] font-bold leading-[2.75rem] tracking-[-0.02em] text-heading md:text-display-xl"
              id="hero-title"
            >
              {site.name}
            </h1>
            <p className="text-headline-md font-medium text-ink">{site.tagline}</p>
            <p className="mt-1 max-w-2xl text-body-lg text-ink-soft">{site.bio}</p>
          </div>

          <div className="mt-1 flex flex-wrap items-center gap-4">
            <a
              className="inline-flex items-center gap-1 rounded-btn bg-accent px-6 py-2 text-body-md font-semibold text-accent-ink transition-colors duration-150 hover:bg-accent-hover"
              href="#projects"
            >
              <span>{site.actions.primary}</span>
              <ArrowDownIcon size={18} />
            </a>
            <a
              className="inline-flex items-center gap-1 rounded-btn border border-line/60 bg-surface-low px-6 py-2 text-body-md font-medium text-ink transition-colors duration-150 hover:border-accent/50 hover:bg-surface-high"
              href="#contact"
            >
              <span>{site.actions.secondary}</span>
            </a>
          </div>

          <div className="flex w-full flex-wrap items-center gap-x-6 gap-y-2 border-t border-line/30 pt-4 font-mono text-label-sm text-ink-soft">
            <a
              className="inline-flex items-center gap-2 transition-colors hover:text-accent"
              href={site.contact.githubUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <GithubIcon className="text-accent" size={16} />
              <span>{site.contact.githubHandle}</span>
            </a>
            <a
              className="inline-flex items-center gap-2 transition-colors hover:text-accent"
              href={site.contact.emailHref}
            >
              <MailIcon className="text-accent" size={16} />
              <span>{site.contact.email}</span>
            </a>
            <span className="inline-flex items-center gap-2 text-ink-faint">
              <GraduationIcon size={16} />
              <span>
                {`${site.education.institution} // ${site.education.programme}`}
              </span>
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
