import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { getProjects } from "@/lib/content";
import { defaultMetadata } from "@/lib/site/seo";

export const metadata = {
  title: "Projects",
  description:
    "Explore our initiatives and programs that are transforming food systems.",
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <Section title="Projects" eyebrow="Our Work">
      <p className="text-lg text-muted-text mb-8 max-w-2xl">
        Explore our initiatives and programs that are transforming food systems
        through technology, data, and community engagement.
      </p>

      <div className="mb-8 flex flex-col sm:flex-row gap-4">
        <input
          type="search"
          placeholder="Search projects..."
          className="flex-1 px-4 py-2 border border-subtle-border rounded-lg bg-surface text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent/20"
          disabled
          aria-label="Search projects"
        />
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            className="px-4 py-2 text-sm border border-subtle-border rounded-lg bg-surface text-muted-text hover:bg-surface-raised"
            disabled
          >
            All Tags
          </button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.slug} href={`/projects/${project.slug}`}>
            <h2 className="text-xl font-semibold text-primary mb-2">
              {project.title}
            </h2>
            <p className="text-muted-text mb-4">{project.summary}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs border border-primary/20 text-primary px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
