import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { getProjectBySlug, getProjects } from "@/lib/content";
import Link from "next/link";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const allProjects = getProjects();
  const relatedProjects = allProjects
    .filter(
      (p) =>
        p.slug !== project.slug &&
        p.tags.some((tag) => project.tags.includes(tag))
    )
    .slice(0, 3);

  return (
    <>
      <Section>
        <div className="max-w-3xl">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-muted-text mb-8">{project.summary}</p>

          <div className="prose-content">
            <p>{project.description}</p>
          </div>

          <div className="mt-8 pt-8 border-t border-subtle-border">
            <h2 className="text-lg font-semibold text-primary mb-4">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-primary/20 text-primary px-3 py-1 rounded text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <p className="text-sm text-muted-text mt-8">
            Last updated:{" "}
            {new Date(project.updated_at).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
      </Section>

      {relatedProjects.length > 0 && (
        <Section
          title="Related Projects"
          className="bg-surface-raised"
          size="md"
        >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedProjects.map((related) => (
              <Card key={related.slug} href={`/projects/${related.slug}`}>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {related.title}
                </h3>
                <p className="text-muted-text text-sm">{related.summary}</p>
              </Card>
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
