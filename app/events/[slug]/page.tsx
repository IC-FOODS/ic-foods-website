import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { getEventBySlug, getEvents } from "@/lib/content";
import { EventSchema } from "@/lib/site/structured-data";

interface EventPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const events = getEvents();
  return events.map((event) => ({
    slug: event.slug,
  }));
}

export async function generateMetadata({ params }: EventPageProps) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    return {};
  }

  return {
    title: event.title,
    description: event.summary,
  };
}

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  const allEvents = getEvents();
  const relatedEvents = allEvents
    .filter(
      (e) =>
        e.slug !== event.slug && e.tags.some((tag) => event.tags.includes(tag))
    )
    .slice(0, 3);

  return (
    <>
      <EventSchema
        name={event.title}
        startDate={event.start_date}
        endDate={event.end_date}
        description={event.summary}
      />
      <Section>
        <div className="max-w-3xl">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            {event.title}
          </h1>
          <p className="text-xl text-muted-text mb-8">{event.summary}</p>

          <div className="mb-8 p-6 bg-surface-raised rounded-lg border border-subtle-border">
            <div className="space-y-2">
              <p className="text-primary">
                <strong>Start Date:</strong>{" "}
                {new Date(event.start_date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
              {event.end_date && (
                <p className="text-primary">
                  <strong>End Date:</strong>{" "}
                  {new Date(event.end_date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              )}
            </div>
          </div>

          <div className="prose-content">
            <p>{event.description}</p>
          </div>

          <div className="mt-8 pt-8 border-t border-subtle-border">
            <h2 className="text-lg font-semibold text-primary mb-4">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {event.tags.map((tag) => (
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
            {new Date(event.updated_at).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
      </Section>

      {relatedEvents.length > 0 && (
        <Section title="Related Events" className="bg-surface-raised" size="md">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedEvents.map((related) => (
              <Card key={related.slug} href={`/events/${related.slug}`}>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {related.title}
                </h3>
                <p className="text-muted-text text-sm mb-2">
                  {related.summary}
                </p>
                <p className="text-muted-text text-xs">
                  {new Date(related.start_date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </Card>
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
