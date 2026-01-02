import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { getGuidelines } from "@/lib/content";

export const metadata = {
  title: "Guidelines",
  description: "Complete list of produce data guidelines and specifications.",
};

export default function GuidelinesPage() {
  const guidelines = getGuidelines();

  return (
    <Section title="Guidelines" eyebrow="Produce Data">
      <p className="text-lg text-muted-text mb-8 max-w-2xl">
        Comprehensive guidelines covering all aspects of produce data
        collection, documentation, and exchange.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {guidelines.map((guideline) => (
          <Card
            key={guideline.slug}
            href={`/produce-data/guidelines/${guideline.slug}`}
          >
            <h2 className="text-xl font-semibold text-primary mb-2">
              {guideline.title}
            </h2>
            <p className="text-muted-text mb-4">{guideline.summary}</p>
            <div className="flex flex-wrap gap-2">
              {guideline.tags.map((tag) => (
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
