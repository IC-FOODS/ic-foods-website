import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { getConferences } from "@/lib/content";

export const metadata = {
  title: "Conferences",
  description: "Archive of IC-FOODS annual conferences and events.",
};

export default function ConferencesPage() {
  const conferences = getConferences();

  if (conferences.length === 0) {
    return (
      <Section title="Conferences" eyebrow="Archive">
        <p className="text-lg text-muted-text mb-8 max-w-2xl">
          Annual conferences bringing together researchers, practitioners, and
          stakeholders to advance food systems innovation and collaboration.
        </p>
        <div className="text-center py-12">
          <p className="text-muted-text">
            No conferences available at this time.
          </p>
        </div>
      </Section>
    );
  }

  return (
    <Section title="Conferences" eyebrow="Archive">
      <p className="text-lg text-muted-text mb-8 max-w-2xl">
        Annual conferences bringing together researchers, practitioners, and
        stakeholders to advance food systems innovation and collaboration.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {conferences.map((conference) => (
          <Card key={conference.year} href={`/conferences/${conference.year}`}>
            <div className="text-sm text-muted-text mb-2">
              {conference.year}
            </div>
            <h2 className="text-xl font-semibold text-primary mb-2">
              {conference.theme}
            </h2>
            <p className="text-muted-text text-sm mb-3">
              {conference.location}
            </p>
            <p className="text-muted-text text-sm">
              {new Date(conference.start_date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
