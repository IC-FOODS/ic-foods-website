import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { getResources } from "@/lib/content";

export const metadata = {
  title: "Resources",
  description: "Download guides, toolkits, frameworks, and other resources.",
};

export default function ResourcesPage() {
  const resources = getResources();

  return (
    <Section title="Resources" eyebrow="Downloads">
      <p className="text-lg text-muted-text mb-8 max-w-2xl">
        Download guides, toolkits, frameworks, and other resources to support
        your work in food systems.
      </p>

      <div className="mb-8 flex flex-col sm:flex-row gap-4">
        <input
          type="search"
          placeholder="Search resources..."
          className="flex-1 px-4 py-2 border border-subtle-border rounded-lg bg-surface text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent/20"
          disabled
          aria-label="Search resources"
        />
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            className="px-4 py-2 text-sm border border-subtle-border rounded-lg bg-surface text-muted-text hover:bg-surface-raised"
            disabled
          >
            All Categories
          </button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource) => (
          <Card key={resource.slug} href={resource.file_url}>
            <div className="mb-2">
              <span className="text-xs font-semibold text-accent uppercase tracking-wide">
                {resource.category}
              </span>
            </div>
            <h2 className="text-xl font-semibold text-primary mb-2">
              {resource.title}
            </h2>
            <p className="text-muted-text mb-4">{resource.summary}</p>
            <div className="flex flex-wrap gap-2">
              {resource.tags.map((tag) => (
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
