import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { getConferenceByYear } from "@/lib/content";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";

interface ConferenceYearPageProps {
  params: Promise<{ year: string }>;
}

export async function generateStaticParams() {
  const { getConferences } = await import("@/lib/content");
  const conferences = getConferences();
  return conferences.map((conf) => ({
    year: conf.year.toString(),
  }));
}

export async function generateMetadata({ params }: ConferenceYearPageProps) {
  const { year } = await params;
  const conference = getConferenceByYear(parseInt(year, 10));

  if (!conference) {
    return {};
  }

  return {
    title: `${conference.year} Conference`,
    description: conference.summary,
  };
}

export default async function ConferenceYearPage({
  params,
}: ConferenceYearPageProps) {
  const { year } = await params;
  const yearNum = parseInt(year, 10);
  const conference = getConferenceByYear(yearNum);

  if (!conference) {
    notFound();
  }

  return (
    <>
      <Section size="lg" className="bg-surface-raised">
        <div className="max-w-3xl">
          <div className="text-sm text-muted-text mb-4">{conference.year}</div>
          <h1 className="text-5xl font-bold text-primary mb-6">
            {conference.theme}
          </h1>
          <p className="text-xl text-muted-text mb-4">{conference.location}</p>
          <p className="text-muted-text mb-8">
            {new Date(conference.start_date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}{" "}
            -{" "}
            {new Date(conference.end_date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
          <p className="text-muted-text leading-relaxed">
            {conference.summary}
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          <Card href={`/conferences/${year}/program`}>
            <h2 className="text-xl font-semibold text-primary mb-2">Program</h2>
            <p className="text-muted-text text-sm">
              View the complete conference schedule and sessions
            </p>
          </Card>
          <Card href={`/conferences/${year}/videos`}>
            <h2 className="text-xl font-semibold text-primary mb-2">Videos</h2>
            <p className="text-muted-text text-sm">
              Watch recorded sessions and presentations
            </p>
          </Card>
          <Card href={`/conferences/${year}/speakers`}>
            <h2 className="text-xl font-semibold text-primary mb-2">
              Speakers
            </h2>
            <p className="text-muted-text text-sm">
              Learn about conference speakers and presenters
            </p>
          </Card>
        </div>
      </Section>
    </>
  );
}
