import { CopyEmailButton } from "@/components/copy-email-button";
import {
  ExternalLinkIcon,
  GithubIcon,
  MailIcon,
  WhatsappIcon,
} from "@/components/icons";
import { Section } from "@/components/section";
import { site } from "@/content/site";

const labelClass =
  "font-mono text-label-sm uppercase tracking-[0.12em] text-ink-faint";
const rowClass =
  "flex items-center justify-between gap-2 rounded-btn border border-line/50 bg-surface p-2.5";
const valueClass =
  "min-w-0 truncate font-mono text-code text-accent hover:underline";
const primaryClass =
  "inline-flex items-center gap-1 self-start rounded-btn bg-accent px-5 py-2 text-body-md font-semibold text-accent-ink transition-colors duration-150 hover:bg-accent-hover";
const secondaryClass =
  "inline-flex items-center gap-1 self-start rounded-btn border border-line/60 bg-surface px-5 py-2 text-body-md font-medium text-ink transition-colors duration-150 hover:border-accent/50 hover:bg-surface-high";

export function ContactSection() {
  const { contact } = site.sections;

  return (
    <Section
      description={contact.description}
      id="contact"
      index={contact.index}
      title={contact.title}
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="flex flex-col gap-4 rounded-card border border-line/40 bg-surface-low p-6">
          <div className="flex flex-col gap-1.5">
            <span className={labelClass}>{site.actions.emailLabel}</span>
            <div className={rowClass}>
              <a className={valueClass} href={site.contact.emailHref}>
                {site.contact.email}
              </a>
              <CopyEmailButton
                copiedLabel={site.actions.copied}
                label={site.actions.copyEmail}
                value={site.contact.email}
              />
            </div>
          </div>

          <p className="border-t border-line/30 pt-3 font-mono text-label-sm text-ink-faint">
            {site.actions.mailNote}
          </p>

          <a className={`${primaryClass} mt-auto`} href={site.contact.emailHref}>
            <MailIcon size={16} />
            <span>{site.actions.emailMe}</span>
          </a>
        </div>

        <div className="flex flex-col gap-4 rounded-card border border-line/40 bg-surface-low p-6">
          <div className="flex flex-col gap-1.5">
            <span className={labelClass}>{site.actions.whatsappLabel}</span>
            <div className={rowClass}>
              <a
                className={valueClass}
                href={site.contact.whatsappHref}
                rel="noopener noreferrer"
                target="_blank"
              >
                {site.contact.whatsapp}
              </a>
              <WhatsappIcon className="shrink-0 text-ink-soft" size={18} />
            </div>
          </div>

          <a
            className={`${primaryClass} mt-auto`}
            href={site.contact.whatsappHref}
            rel="noopener noreferrer"
            target="_blank"
          >
            <WhatsappIcon size={16} />
            <span>{site.actions.whatsappMe}</span>
          </a>
        </div>

        <div className="flex flex-col gap-4 rounded-card border border-line/40 bg-surface-low p-6">
          <div className="flex flex-col gap-1.5">
            <span className={labelClass}>{site.actions.githubLabel}</span>
            <div className={rowClass}>
              <a
                className={valueClass}
                href={site.contact.githubUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                {site.contact.githubHandle}
              </a>
              <a
                aria-label={site.actions.openGithub}
                className="shrink-0 rounded-btn p-1 text-ink-soft transition-colors hover:text-accent"
                href={site.contact.githubUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <ExternalLinkIcon size={18} />
              </a>
            </div>
          </div>

          <a
            className={`${secondaryClass} mt-auto`}
            href={site.contact.githubUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <GithubIcon size={16} />
            <span>{site.actions.openGithub}</span>
          </a>
        </div>
      </div>
    </Section>
  );
}
