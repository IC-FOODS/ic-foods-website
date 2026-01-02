import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { getConferenceByYear, getConferenceSpeakers } from "@/lib/content";

interface ConferenceSpeakersPageProps {
  params: Promise<{ year: string }>;
}

export async function generateStaticParams() {
  const { getConferences } = await import("@/lib/content");
  const conferences = getConferences();
  return conferences.map((conf) => ({
    year: conf.year.toString(),
  }));
}

export default async function ConferenceSpeakersPage({
  params,
}: ConferenceSpeakersPageProps) {
  const { year } = await params;
  const yearNum = parseInt(year, 10);
  const conference = getConferenceByYear(yearNum);

  if (!conference) {
    notFound();
  }

  const speakers = getConferenceSpeakers(yearNum);

  return (
    <Section title="Speakers" eyebrow={`${conference.year} Conference`}>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {speakers.map((speaker, index) => (
          <Card key={index} href={speaker.url || undefined}>
            <h3 className="text-lg font-semibold text-primary mb-1">
              {speaker.name}
            </h3>
            {speaker.role && (
              <p className="text-sm text-muted-text mb-1">{speaker.role}</p>
            )}
            {speaker.org && (
              <p className="text-sm text-muted-text mb-2">{speaker.org}</p>
            )}
            {speaker.bio_short && (
              <p className="text-sm text-muted-text">{speaker.bio_short}</p>
            )}
            {speaker.tags && speaker.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {speaker.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs border border-primary/20 text-primary px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
}
