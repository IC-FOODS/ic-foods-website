import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { getPress } from "@/lib/content";

export const metadata = {
  title: "Press",
  description: "News coverage and press releases about IC-FOODS.",
};

export default function PressPage() {
  const press = getPress();

  return (
    <Section title="Press" eyebrow="News">
      <p className="text-lg text-muted-text mb-8 max-w-2xl">
        News coverage and press releases about IC-FOODS initiatives,
        partnerships, and research.
      </p>

      <div className="mb-8 flex flex-col sm:flex-row gap-4">
        <input
          type="search"
          placeholder="Search press..."
          className="flex-1 px-4 py-2 border border-subtle-border rounded-lg bg-surface text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent/20"
          disabled
          aria-label="Search press"
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

      <div className="grid gap-6 md:grid-cols-2">
        {press.map((item) => (
          <Card key={item.slug} href={item.url}>
            <h2 className="text-xl font-semibold text-primary mb-2">
              {item.title}
            </h2>
            <p className="text-sm text-muted-text mb-2">{item.publication}</p>
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
