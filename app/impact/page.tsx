import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import {
  getGuidelines,
  getConferences,
  getResources,
  getMedia,
} from "@/lib/content";
import Link from "next/link";

export const metadata = {
  title: "Evidence & Impact",
  description:
    "How IC-FOODS demonstrates value through standards, resources, convenings, and practical implementation.",
};

export default function ImpactPage() {
  const guidelines = getGuidelines();
  const conferences = getConferences();
  const resources = getResources();
  const media = getMedia();

  return (
    <>
      <Section size="lg">
        <div className="max-w-3xl relative pl-8 border-l-4 border-accent">
          <h1 className="text-5xl font-bold text-primary mb-6">
            Evidence & Impact
          </h1>
          <p className="text-xl text-muted-text mb-8 leading-relaxed">
            IC-FOODS demonstrates value through open standards, practical
            resources, cross-sector convenings, and documented implementation
            outcomes.
          </p>
        </div>
      </Section>

      <Section
        title="What We Measure"
        eyebrow="Approach"
        className="bg-surface-raised"
      >
        <div className="max-w-3xl prose-content">
          <p className="mb-4">
            We track impact across four dimensions: standards adoption, resource
            utilization, community engagement, and implementation outcomes.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Standards adoption:</strong> Usage of Produce Data
              Guidelines in supply chain systems
            </li>
            <li>
              <strong>Resource utilization:</strong> Downloads and application
              of tools, templates, and frameworks
            </li>
            <li>
              <strong>Community engagement:</strong> Conference attendance,
              media reach, and partnership development
            </li>
            <li>
              <strong>Implementation outcomes:</strong> Documented use cases and
              pilot program results
            </li>
          </ul>
        </div>
      </Section>

      <Section title="Proof Points" eyebrow="Evidence">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card href="/produce-data/guidelines" featured>
            <h3 className="text-lg font-semibold text-primary mb-2">
              Produce Data Guidelines
            </h3>
            <p className="text-muted-text text-sm mb-3">
              {guidelines.length} comprehensive guidelines covering naming,
              attributes, traceability, and digital identifiers
            </p>
            <div className="text-sm text-muted-text">
              Open standards for supply chain data
            </div>
          </Card>

          <Card href="/conferences" featured>
            <h3 className="text-lg font-semibold text-primary mb-2">
              Conferences & Convenings
            </h3>
            <p className="text-muted-text text-sm mb-3">
              {conferences.length} annual conferences bringing together
              researchers, practitioners, and stakeholders
            </p>
            <div className="text-sm text-muted-text">
              Cross-sector collaboration
            </div>
          </Card>

          <Card href="/resources" featured>
            <h3 className="text-lg font-semibold text-primary mb-2">
              Open Resources
            </h3>
            <p className="text-muted-text text-sm mb-3">
              {resources.length} downloadable resources including templates,
              frameworks, and implementation guides
            </p>
            <div className="text-sm text-muted-text">
              Practical tools for implementation
            </div>
          </Card>

          <Card href="/media" featured>
            <h3 className="text-lg font-semibold text-primary mb-2">
              Media & Outreach
            </h3>
            <p className="text-muted-text text-sm mb-3">
              {media.length} videos, podcasts, and articles reaching diverse
              audiences
            </p>
            <div className="text-sm text-muted-text">
              Knowledge dissemination
            </div>
          </Card>

          <Card href="/standards" featured>
            <h3 className="text-lg font-semibold text-primary mb-2">
              Standards & Methods
            </h3>
            <p className="text-muted-text text-sm mb-3">
              Interoperability frameworks and semantic standards for food
              systems data
            </p>
            <div className="text-sm text-muted-text">Technical foundations</div>
          </Card>

          <Card href="/partners" featured>
            <h3 className="text-lg font-semibold text-primary mb-2">
              Partnerships
            </h3>
            <p className="text-muted-text text-sm mb-3">
              Collaborations with nonprofits, agencies, academic institutions,
              and industry partners
            </p>
            <div className="text-sm text-muted-text">Network effects</div>
          </Card>
        </div>
      </Section>

      <Section
        title="For Evaluators"
        eyebrow="Information"
        className="bg-surface-raised"
      >
        <div className="max-w-3xl space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-3">
              Mission & Theory of Change
            </h2>
            <p className="text-muted-text">
              IC-FOODS works to connect communities, data, and technology to
              build sustainable and resilient food systems. We believe that
              standardized data practices, open resources, and cross-sector
              collaboration enable better decision-making, improved
              traceability, and more equitable food systems.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-primary mb-3">
              Key Resources
            </h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/standards"
                  className="text-primary hover:underline"
                >
                  Standards & Methods
                </Link>
                {" — Technical approaches and interoperability frameworks"}
              </li>
              <li>
                <Link
                  href="/governance"
                  className="text-primary hover:underline"
                >
                  Governance & Principles
                </Link>
                {" — Decision-making processes and data ethics"}
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-primary hover:underline"
                >
                  Resources
                </Link>
                {" — Downloadable tools, templates, and documentation"}
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
