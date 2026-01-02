import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { getTeam } from "@/lib/content";

export const metadata = {
  title: "About",
  description:
    "Learn about IC-FOODS mission, core activities, and team members.",
};

export default function AboutPage() {
  const team = getTeam();

  return (
    <>
      <Section title="About IC-FOODS" eyebrow="Organization">
        <div className="prose-content max-w-3xl">
          <h2 className="text-2xl font-semibold text-primary mb-4">Mission</h2>
          <p className="mb-8">
            IC-FOODS works to connect communities, data, and technology to build
            sustainable and resilient food systems worldwide. We focus on
            evidence-based approaches that support both smallholder farmers and
            broader food system stakeholders.
          </p>

          <h2 className="text-2xl font-semibold text-primary mb-4">
            Core Activities
          </h2>
          <ul className="list-disc list-inside space-y-2 mb-8">
            <li>Digital agriculture tools and platforms</li>
            <li>Food security data and analytics</li>
            <li>Community-led food initiatives</li>
            <li>Research and policy advocacy</li>
          </ul>
        </div>
      </Section>

      <Section title="Team" eyebrow="People" className="bg-surface-raised">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <Card key={member.slug}>
              <h3 className="text-lg font-semibold text-primary mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-muted-text mb-3">{member.title}</p>
              <p className="text-sm text-muted-text">{member.summary}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
