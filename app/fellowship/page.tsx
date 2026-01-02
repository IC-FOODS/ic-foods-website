import { Section } from "@/components/ui/Section";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";

export const metadata = {
  title: "IC-FOODS Fellowship",
  description:
    "Fellowship opportunities for researchers and practitioners working on food systems data and standards.",
};

export default function FellowshipPage() {
  return (
    <>
      <Section size="lg">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold text-primary mb-6">
            IC-FOODS Fellowship
          </h1>
          <p className="text-xl text-muted-text mb-8 leading-relaxed">
            Fellowship program for researchers and practitioners advancing food
            systems data standards, interoperability, and implementation.
          </p>
        </div>
      </Section>

      <Section title="Who It's For" eyebrow="Eligibility">
        <div className="max-w-3xl">
          <p className="text-muted-text mb-4">
            The IC-FOODS Fellowship is designed for:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-text">
            <li>
              Graduate students and postdoctoral researchers working on food
              systems data, traceability, or interoperability
            </li>
            <li>
              Practitioners implementing data standards in supply chains,
              nonprofits, or government agencies
            </li>
            <li>
              Early-career professionals seeking to deepen expertise in food
              systems technology and standards
            </li>
          </ul>
        </div>
      </Section>

      <Section
        title="What Fellows Do"
        eyebrow="Responsibilities"
        className="bg-surface-raised"
      >
        <div className="max-w-3xl">
          <p className="text-muted-text mb-4">
            Fellows typically engage in one or more of the following:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-text">
            <li>
              <strong>Research:</strong> Contribute to standards development,
              interoperability frameworks, or implementation case studies
            </li>
            <li>
              <strong>Implementation:</strong> Support pilot programs or
              real-world deployments of Produce Data Guidelines
            </li>
            <li>
              <strong>Documentation:</strong> Create resources, guides, or
              technical documentation
            </li>
            <li>
              <strong>Community engagement:</strong> Facilitate workshops,
              contribute to conferences, or support partner collaborations
            </li>
          </ul>
        </div>
      </Section>

      <Section title="What Fellows Gain" eyebrow="Benefits">
        <div className="max-w-3xl">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-primary mb-2">Skills</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-text text-sm">
                <li>Data standards and interoperability</li>
                <li>Supply chain traceability</li>
                <li>Technical documentation</li>
                <li>Cross-sector collaboration</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-2">Network</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-text text-sm">
                <li>Access to IC-FOODS partner network</li>
                <li>Conference participation</li>
                <li>Mentorship opportunities</li>
                <li>Professional development</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-2">Outcomes</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-text text-sm">
                <li>Published work and contributions</li>
                <li>Portfolio of implementation projects</li>
                <li>Recognition in IC-FOODS resources</li>
                <li>Career advancement support</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-2">Resources</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-text text-sm">
                <li>Access to tools and frameworks</li>
                <li>Technical support and guidance</li>
                <li>Workshop and training opportunities</li>
                <li>Research collaboration</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section
        title="Application Process"
        eyebrow="How to Apply"
        className="bg-surface-raised"
      >
        <div className="max-w-3xl">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-1">
                  Review Program Information
                </h3>
                <p className="text-muted-text text-sm">
                  Familiarize yourself with IC-FOODS mission, standards, and
                  current projects. Review fellowship expectations and
                  deliverables.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-1">
                  Prepare Application Materials
                </h3>
                <p className="text-muted-text text-sm">
                  Prepare a statement of interest, resume or CV, and a brief
                  proposal outlining your proposed contribution or research
                  focus.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-1">
                  Submit Application
                </h3>
                <p className="text-muted-text text-sm">
                  Contact IC-FOODS with your application materials. Include
                  &quot;Fellowship Application&quot; in the subject line.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                4
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-1">
                  Review & Selection
                </h3>
                <p className="text-muted-text text-sm">
                  Applications are reviewed by IC-FOODS team. Selected
                  candidates will be contacted for follow-up conversations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Expectations" eyebrow="Commitment">
        <div className="max-w-3xl">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-primary mb-2">Time</h3>
              <p className="text-muted-text text-sm">
                Fellowship commitments vary by project scope. Typical
                engagements range from 3-12 months, with flexible scheduling to
                accommodate academic or professional obligations.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-2">Communication</h3>
              <p className="text-muted-text text-sm">
                Regular check-ins with IC-FOODS team, participation in relevant
                meetings or workshops, and timely responses to requests for
                updates or deliverables.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-2">Deliverables</h3>
              <p className="text-muted-text text-sm">
                Specific deliverables are defined per project, but may include
                research reports, documentation, code contributions, case
                studies, or presentations.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-surface-raised">
        <div className="max-w-2xl text-center">
          <p className="text-muted-text mb-6">
            Interested in applying? Get in touch to learn more about current
            fellowship opportunities.
          </p>
          <Link
            href="/contact?subject=Fellowship%20Inquiry"
            className="btn-primary"
          >
            Contact Us
          </Link>
        </div>
      </Section>
    </>
  );
}
