import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { getEvents } from "@/lib/content";

export const metadata = {
  title: "Events",
  description:
    "Join us for workshops, webinars, conferences, and community gatherings.",
};

export default function EventsPage() {
  const events = getEvents();

  return (
    <Section title="Events" eyebrow="Get Involved">
      <p className="text-lg text-muted-text mb-8 max-w-2xl">
        Join us for workshops, webinars, conferences, and community gatherings
        focused on building sustainable food systems.
      </p>

      <div className="mb-8 flex flex-col sm:flex-row gap-4">
        <input
          type="search"
          placeholder="Search events..."
          className="flex-1 px-4 py-2 border border-subtle-border rounded-lg bg-surface text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent/20"
          disabled
          aria-label="Search events"
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

      <div className="grid gap-6 md:grid-cols-2">
        {events.map((event) => (
          <Card key={event.slug} href={`/events/${event.slug}`}>
            <h2 className="text-xl font-semibold text-primary mb-2">
              {event.title}
            </h2>
            <p className="text-muted-text mb-4">{event.summary}</p>
            <div className="text-sm text-muted-text mb-4">
              <p>
                <strong>Start:</strong>{" "}
                {new Date(event.start_date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
              {event.end_date && (
                <p>
                  <strong>End:</strong>{" "}
                  {new Date(event.end_date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {event.tags.map((tag) => (
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
