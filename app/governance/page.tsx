import { Section } from "@/components/ui/Section";
import Link from "next/link";

export const metadata = {
  title: "Governance & Principles",
  description:
    "IC-FOODS governance structure, principles, data ethics, and decision-making processes.",
};

export default function GovernancePage() {
  return (
    <>
      <Section size="lg">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold text-primary mb-6">
            Governance & Principles
          </h1>
          <p className="text-xl text-muted-text mb-8 leading-relaxed">
            IC-FOODS operates with principles of transparency, collaboration,
            openness, and responsible stewardship of data and standards.
          </p>
        </div>
      </Section>

      <Section title="Principles" eyebrow="Values">
        <div className="max-w-3xl space-y-6">
          <div>
            <h3 className="font-semibold text-primary mb-2">Transparency</h3>
            <p className="text-muted-text text-sm">
              We make our processes, decisions, and standards development
              visible and accessible. Documentation is open, and stakeholders
              can understand how and why decisions are made.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-primary mb-2">Collaboration</h3>
            <p className="text-muted-text text-sm">
              We work with diverse stakeholders across sectors. Standards and
              resources are developed through inclusive processes that
              incorporate multiple perspectives.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-primary mb-2">Openness</h3>
            <p className="text-muted-text text-sm">
              Standards, guidelines, and resources are openly available. We
              prioritize open-source approaches and avoid proprietary
              dependencies that limit adoption.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-primary mb-2">
              Responsible Stewardship
            </h3>
            <p className="text-muted-text text-sm">
              We recognize the social, economic, and environmental implications
              of data systems. We consider equity, privacy, and sustainability
              in our work.
            </p>
          </div>
        </div>
      </Section>

      <Section
        title="Data Limitations & Scope"
        eyebrow="Boundaries"
        className="bg-surface-raised"
      >
        <div className="max-w-3xl prose-content">
          <p className="mb-4">
            IC-FOODS focuses on data standards, guidelines, and interoperability
            frameworks. We do not:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Store or manage proprietary partner data</li>
            <li>Endorse specific commercial products or vendors</li>
            <li>
              Provide direct implementation services (we provide guidance and
              resources)
            </li>
            <li>Make policy recommendations beyond data standards</li>
          </ul>
          <p>
            Our scope is technical standards and methods. We work within
            existing regulatory and policy frameworks rather than advocating for
            specific policy positions.
          </p>
        </div>
      </Section>

      <Section title="Decision-Making" eyebrow="Process">
        <div className="max-w-3xl prose-content">
          <p className="mb-4">
            Standards and major decisions are made through structured processes:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>
              <strong>Standards development:</strong> Community input, technical
              review, pilot testing, and iterative refinement
            </li>
            <li>
              <strong>Resource prioritization:</strong> Based on community
              needs, implementation feedback, and strategic alignment
            </li>
            <li>
              <strong>Partnership decisions:</strong> Evaluated against mission
              alignment, resource capacity, and potential impact
            </li>
            <li>
              <strong>Governance changes:</strong> Transparent discussion,
              documented rationale, and stakeholder input
            </li>
          </ul>
          <p>
            Major decisions are documented and communicated. We maintain records
            of rationale and stakeholder input to ensure accountability.
          </p>
        </div>
      </Section>

      <Section
        title="Data Ethics"
        eyebrow="Responsibility"
        className="bg-surface-raised"
      >
        <div className="max-w-3xl prose-content">
          <p className="mb-4">
            IC-FOODS recognizes that data systems have ethical implications. We
            commit to:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>
              <strong>Privacy:</strong> We do not collect or store personal data
              beyond what is necessary for operations. Partner data remains with
              partners.
            </li>
            <li>
              <strong>Equity:</strong> We design standards to be accessible to
              organizations of all sizes, avoiding requirements that favor large
              enterprises.
            </li>
            <li>
              <strong>Transparency:</strong> We are clear about data practices,
              limitations, and how information is used.
            </li>
            <li>
              <strong>Accountability:</strong> We document decisions,
              acknowledge limitations, and provide pathways for feedback and
              correction.
            </li>
          </ul>
        </div>
      </Section>

      <Section title="Questions & Feedback" eyebrow="Contact">
        <div className="max-w-2xl">
          <p className="text-muted-text mb-6">
            Questions about governance, principles, or decision-making? We
            welcome feedback and inquiries.
          </p>
          <Link
            href="/contact?subject=Governance%20Inquiry"
            className="text-primary font-medium hover:underline"
          >
            Contact IC-FOODS →
          </Link>
        </div>
      </Section>
    </>
  );
}
