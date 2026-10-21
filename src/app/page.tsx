import { ContactSection } from "@/components/sections/contact";
import { ExperienceSection } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects";
import { StackSection } from "@/components/sections/stack";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/content/site";

export default function HomePage() {
  return (
    <div id="top">
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-btn focus:bg-accent focus:px-4 focus:py-2 focus:text-body-sm focus:font-semibold focus:text-accent-ink"
        href="#main"
      >
        {site.actions.skipToContent}
      </a>

      <SiteHeader />

      <main className="pt-16" id="main">
        <Hero />
        <ProjectsSection />
        <StackSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}
