import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import { site } from "@/content/site";

export function ProjectsSection() {
  const { projects } = site.sections;

  return (
    <Section
      description={projects.description}
      id="projects"
      index={projects.index}
      title={projects.title}
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {site.projects.map((project) => (
          <ProjectCard
            key={project.slug}
            labels={{
              repo: site.actions.repo,
              demo: site.actions.demo,
              previewLabel: site.actions.previewPending,
              previewNote: site.actions.previewNote,
            }}
            project={project}
          />
        ))}
      </div>
    </Section>
  );
}
