import { Container } from "@/components/container";
import { GithubIcon, MailIcon } from "@/components/icons";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line/40 bg-surface-lowest">
      <Container>
        <div className="flex flex-col items-start justify-between gap-3 py-6 md:flex-row md:items-center">
          <div className="flex flex-wrap items-center gap-2">
            <span aria-hidden="true" className="font-mono text-label-sm text-ink-faint">
              {site.footer.signature}
            </span>
            <p className="text-body-sm text-ink-soft">
              {site.name} © <span className="tnum">{site.year}</span>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-label-sm">
            <a
              className="inline-flex items-center gap-1.5 text-ink-soft transition-colors hover:text-accent"
              href={site.contact.emailHref}
            >
              <MailIcon size={15} />
              <span>{site.contact.email}</span>
            </a>
            <a
              className="inline-flex items-center gap-1.5 text-ink-soft transition-colors hover:text-accent"
              href={site.contact.githubUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <GithubIcon size={15} />
              <span>{site.contact.githubHandle}</span>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
