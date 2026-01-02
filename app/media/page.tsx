import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { getMedia } from "@/lib/content";
import { cn } from "@/lib/utils/cn";

export const metadata = {
  title: "Media",
  description:
    "Videos, podcasts, articles, and other media content from IC-FOODS.",
};

export default function MediaPage() {
  const media = getMedia();

  return (
    <Section title="Media" eyebrow="Content">
      <p className="text-lg text-muted-text mb-8 max-w-2xl">
        Videos, podcasts, articles, and other media content exploring food
        systems, technology, and community initiatives.
      </p>

      <div className="mb-8 flex flex-col sm:flex-row gap-4">
        <input
          type="search"
          placeholder="Search media..."
          className="flex-1 px-4 py-2 border border-subtle-border rounded-lg bg-surface text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent/20"
          disabled
          aria-label="Search media"
        />
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            className="px-4 py-2 text-sm border border-subtle-border rounded-lg bg-surface text-muted-text hover:bg-surface-raised"
            disabled
          >
            All Types
          </button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {media.map((item) => (
          <Card key={item.slug} href={item.url}>
            <div className="mb-2">
              <span
                className={cn(
                  "text-xs font-semibold uppercase tracking-wide",
                  item.type === "video" && "text-blue-600",
                  item.type === "podcast" && "text-purple-600",
                  item.type === "article" && "text-green-600"
                )}
              >
                {item.type}
              </span>
            </div>
            <h2 className="text-xl font-semibold text-primary mb-2">
              {item.title}
            </h2>
            <p className="text-muted-text mb-4">{item.summary}</p>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
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
