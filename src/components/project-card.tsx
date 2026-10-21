import Image from "next/image";
import { BrowserFrame } from "@/components/browser-frame";
import { PreviewPlaceholder } from "@/components/preview-placeholder";
import { CodeIcon, ExternalLinkIcon } from "@/components/icons";
import type { Project } from "@/content/site";
import { cx } from "@/lib/cx";

type ProjectCardProps = {
  project: Project;
  labels: {
    repo: string;
    demo: string;
    previewLabel: string;
    previewNote: string;
    stackLabel: string;
  };
};

export function ProjectCard({ project, labels }: ProjectCardProps) {
  const featured = project.featured;
  const hasDemo = Boolean(project.demoUrl);

  return (
    <article
      className="group flex flex-col overflow-hidden rounded-card border border-line/40 bg-surface-low transition-colors duration-150 hover:border-accent/50"
      id={`project-${project.slug}`}
    >
      <BrowserFrame compact={!featured} path={project.previewPath}>
        {project.image ? (
          <Image
            alt={project.image.alt}
            className="object-cover object-top"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            src={project.image.src}
          />
        ) : (
          <PreviewPlaceholder
            alt={project.previewAlt}
            compact={!featured}
            label={labels.previewLabel}
            note={labels.previewNote}
          />
        )}
      </BrowserFrame>

      <div
        className={cx(
          "flex flex-1 flex-col justify-between gap-4",
          featured ? "p-6" : "p-4",
        )}
      >
        <div>
          <h3
            className={cx(
              "font-semibold text-heading",
              featured ? "text-headline-md" : "text-headline-sm",
            )}
          >
            {project.name}
          </h3>
          <p
            className={cx(
              "mt-1 text-ink-soft",
              featured ? "text-body-md" : "text-body-sm",
            )}
          >
            {project.summary}
          </p>

          <ul
            aria-label={`${project.name} — ${labels.stackLabel}`}
            className={cx("flex flex-wrap", featured ? "mt-4 gap-1.5" : "mt-3 gap-1")}
          >
            {project.stack.map((item) => (
              <li
                className={cx(
                  "rounded-btn border border-line/50 bg-surface font-mono text-heading",
                  featured
                    ? "px-2 py-0.5 text-label-sm"
                    : "px-1.5 py-0.5 text-[10px]",
                )}
                key={item}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {project.repoUrl || hasDemo ? (
          <div className="flex flex-wrap items-center gap-4 border-t border-line/30 pt-3">
            {project.repoUrl ? (
              <a
                className="inline-flex items-center gap-1 font-mono text-label-sm text-ink transition-colors hover:text-accent"
                href={project.repoUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <CodeIcon size={15} />
                <span>{labels.repo}</span>
              </a>
            ) : null}
            {hasDemo ? (
              <a
                className="inline-flex items-center gap-1 font-mono text-label-sm text-accent transition-colors hover:text-accent-hover"
                href={project.demoUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <ExternalLinkIcon size={15} />
                <span>{labels.demo}</span>
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}
