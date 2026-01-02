import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { getProjects, getEvents, getPress } from "@/lib/content";
import Link from "next/link";

export const metadata = {
  title: "IC-FOODS - Internet of Food Systems",
  description:
    "Connecting communities, data, and technology to build sustainable and resilient food systems through standards, implementation, and collaboration.",
};

export default function HomePage() {
  const projects = getProjects();
  const events = getEvents();
  const press = getPress();

  const featuredProjects = projects.slice(0, 3);
  const upcomingEvents = events
    .filter((e) => new Date(e.start_date) >= new Date())
    .sort(
      (a, b) =>
        new Date(a.start_date).getTime() - new Date(b.start_date).getTime()
    )
    .slice(0, 3);
  const latestPress = press
    .sort(
      (a, b) =>
        new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
    )
    .slice(0, 3);

  return (
    <>
      {/* Hero Section - Dark Blue Background */}
      <section className="bg-primary text-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              IC-<span className="text-accent">FOODS</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-200 mb-4 leading-relaxed">
              We develop standards and methods that enable consistent data
              exchange across food systems.
            </p>
            <p className="text-lg text-slate-200 mb-10">
              Our work helps organizations improve traceability, enable better
              decision-making, and build more resilient supply chains.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/projects" className="btn-primary">
                Explore Projects
              </Link>
              <Link
                href="/impact"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 no-underline hover:no-underline transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
              >
                Evidence & Impact
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Bar */}
      <Section className="bg-surface">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          <div className="text-center border-t-4 border-accent pt-4">
            <div className="text-3xl font-bold text-primary mb-2">
              Standards-aligned
            </div>
            <div className="w-12 h-1 bg-accent mx-auto my-3"></div>
            <p className="text-sm text-muted-text">
              Open frameworks and protocols
            </p>
          </div>
          <div className="text-center border-t-4 border-accent pt-4">
            <div className="text-3xl font-bold text-primary mb-2">
              Open resources
            </div>
            <div className="w-12 h-1 bg-accent mx-auto my-3"></div>
            <p className="text-sm text-muted-text">
              Public tools and documentation
            </p>
          </div>
          <div className="text-center border-t-4 border-accent pt-4">
            <div className="text-3xl font-bold text-primary mb-2">
              Cross-sector collaboration
            </div>
            <div className="w-12 h-1 bg-accent mx-auto my-3"></div>
            <p className="text-sm text-muted-text">
              Partnerships across sectors
            </p>
          </div>
          <div className="text-center border-t-4 border-accent pt-4">
            <div className="text-3xl font-bold text-primary mb-2">
              Practical implementation
            </div>
            <div className="w-12 h-1 bg-accent mx-auto my-3"></div>
            <p className="text-sm text-muted-text">Guidelines and tools</p>
          </div>
        </div>
      </Section>

      <Section title="What We Do" eyebrow="Our Work">
        <div className="grid gap-6 md:grid-cols-3">
          <Card href="/projects">
            <h3 className="text-xl font-semibold text-primary mb-2">
              Projects
            </h3>
            <p className="text-muted-text text-sm">
              Initiatives and programs that advance food systems data standards
              and implementation.
            </p>
          </Card>
          <Card href="/produce-data">
            <h3 className="text-xl font-semibold text-primary mb-2">
              Produce Data Guidelines
            </h3>
            <p className="text-muted-text text-sm">
              Comprehensive guidelines for product naming, attributes,
              traceability, and digital identifiers.
            </p>
          </Card>
          <Card href="/conferences">
            <h3 className="text-xl font-semibold text-primary mb-2">
              Events & Convenings
            </h3>
            <p className="text-muted-text text-sm">
              Annual conferences, workshops, and webinars bringing together
              stakeholders across sectors.
            </p>
          </Card>
        </div>
      </Section>

      {featuredProjects.length > 0 && (
        <Section
          title="Featured Projects"
          eyebrow="Latest"
          className="bg-surface-raised"
        >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <Card
                key={project.slug}
                href={`/projects/${project.slug}`}
                featured
              >
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-text mb-4">{project.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
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
          <div className="mt-8 text-center">
            <Link
              href="/projects"
              className="text-primary font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded"
            >
              View all projects →
            </Link>
          </div>
        </Section>
      )}

      {upcomingEvents.length > 0 && (
        <Section title="Upcoming Events" eyebrow="Get Involved">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event) => (
              <Card key={event.slug} href={`/events/${event.slug}`} featured>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {event.title}
                </h3>
                <p className="text-muted-text mb-4">{event.summary}</p>
                <div className="text-sm text-muted-text mb-4">
                  <p>
                    {new Date(event.start_date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {event.tags.slice(0, 2).map((tag) => (
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
          <div className="mt-8 text-center">
            <Link
              href="/events"
              className="text-primary font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded"
            >
              View all events →
            </Link>
          </div>
        </Section>
      )}

      {latestPress.length > 0 && (
        <Section
          title="Latest Press"
          eyebrow="News"
          className="bg-surface-raised"
        >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {latestPress.map((item) => (
              <Card key={item.slug} href={item.url} featured>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-text mb-2">
                  {item.publication}
                </p>
                <p className="text-muted-text text-sm">{item.summary}</p>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/press"
              className="text-primary font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded"
            >
              View all press →
            </Link>
          </div>
        </Section>
      )}

      <Section className="bg-primary">
        <div className="max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Partner with <span className="text-accent">IC-FOODS</span>
          </h2>
          <p className="text-slate-200 mb-6">
            Collaborate on standards implementation, research, or convenings.
            Learn how we work with nonprofits, agencies, academic institutions,
            and industry partners.
          </p>
          <Link href="/partners" className="btn-primary">
            Learn More
          </Link>
        </div>
      </Section>
    </>
  );
}
