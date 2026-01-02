import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import Link from "next/link";

export const metadata = {
  title: "Standards & Methods",
  description:
    "Technical approaches, interoperability frameworks, and standards for food systems data.",
};

export default function StandardsPage() {
  return (
    <>
      <Section size="lg">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold text-primary mb-6">
            Standards & Methods
          </h1>
          <p className="text-xl text-muted-text mb-8 leading-relaxed">
            IC-FOODS develops and promotes standards, ontologies, and
            interoperability frameworks to enable consistent data exchange
            across food systems.
          </p>
        </div>
      </Section>

      <Section title="The Role of Standards" eyebrow="Approach">
        <div className="max-w-3xl prose-content">
          <p className="mb-4">
            Standards provide common vocabularies, data structures, and
            protocols that enable different systems to understand and exchange
            information. In food systems, standards enable:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>
              <strong>Interoperability:</strong> Systems can exchange data
              without custom integrations
            </li>
            <li>
              <strong>Traceability:</strong> Products can be tracked across
              supply chains using consistent identifiers
            </li>
            <li>
              <strong>Analytics:</strong> Aggregated data from multiple sources
              can be analyzed together
            </li>
            <li>
              <strong>Efficiency:</strong> Reduced need for data transformation
              and reconciliation
            </li>
          </ul>
          <p>
            IC-FOODS focuses on semantic web technologies, ontologies, and
            practical implementation standards that balance technical rigor with
            real-world usability.
          </p>
        </div>
      </Section>

      <Section
        title="How We Approach Interoperability"
        eyebrow="Methods"
        className="bg-surface-raised"
      >
        <div className="max-w-3xl space-y-6">
          <div>
            <h3 className="font-semibold text-primary mb-2">
              Semantic Standards
            </h3>
            <p className="text-muted-text text-sm">
              We use semantic web technologies (RDF, OWL) to create
              machine-readable vocabularies that define concepts, relationships,
              and properties in food systems. This enables automated reasoning
              and data integration.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-primary mb-2">
              Practical Guidelines
            </h3>
            <p className="text-muted-text text-sm">
              Standards must be implementable. We provide concrete guidelines,
              examples, and templates that organizations can adopt without
              requiring specialized technical expertise.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-primary mb-2">
              Incremental Adoption
            </h3>
            <p className="text-muted-text text-sm">
              We design standards to work with existing systems. Organizations
              can adopt standards incrementally, starting with core data
              elements and expanding over time.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-primary mb-2">
              Community-Driven
            </h3>
            <p className="text-muted-text text-sm">
              Standards are developed through collaboration with practitioners,
              researchers, and implementers. Real-world use cases inform
              standard design and evolution.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Key Resources" eyebrow="Documentation">
        <div className="grid gap-6 md:grid-cols-2">
          <Card href="/produce-data/guidelines">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Produce Data Guidelines
            </h3>
            <p className="text-muted-text text-sm">
              Comprehensive guidelines covering product naming, attributes,
              traceability, digital identifiers, and implementation.
            </p>
          </Card>

          <Card href="/resources">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Technical Resources
            </h3>
            <p className="text-muted-text text-sm">
              Downloadable templates, frameworks, and technical documentation
              for implementing standards.
            </p>
          </Card>

          <Card href="/conferences">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Conference Presentations
            </h3>
            <p className="text-muted-text text-sm">
              Technical talks and workshops on standards, interoperability, and
              implementation approaches.
            </p>
          </Card>

          <Card href="/governance">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Governance
            </h3>
            <p className="text-muted-text text-sm">
              Learn about how standards are developed, maintained, and evolved
              through transparent processes.
            </p>
          </Card>
        </div>
      </Section>
    </>
  );
}
