import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";

export const metadata = {
  title: "Produce Data Guidelines",
  description:
    "Standardized guidelines for produce data collection, documentation, and exchange.",
};

export default function ProduceDataPage() {
  return (
    <>
      <Section size="lg">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold text-primary mb-6">
            Produce Data Guidelines
          </h1>
          <p className="text-xl text-muted-text mb-8 leading-relaxed">
            Standardized guidelines for produce data collection, documentation,
            and exchange. These guidelines ensure consistent data quality and
            enable interoperability across supply chains.
          </p>
          <p className="text-muted-text mb-8">
            The Produce Data Guidelines provide comprehensive specifications for
            product naming, attributes, certifications, traceability, and
            digital identifiers. They are designed to support food safety,
            supply chain transparency, and data-driven decision making.
          </p>
        </div>
      </Section>

      <Section
        title="Downloads"
        eyebrow="Resources"
        className="bg-surface-raised"
      >
        <div className="grid gap-6 md:grid-cols-3">
          <Card href="/assets/resources/produce-data-template.xlsx">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Data Collection Template
            </h3>
            <p className="text-muted-text text-sm">
              Excel template for structured data collection
            </p>
          </Card>
          <Card href="/assets/resources/produce-data-report.pdf">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Implementation Report
            </h3>
            <p className="text-muted-text text-sm">
              Comprehensive PDF guide to implementing the guidelines
            </p>
          </Card>
          <Card href="/assets/resources/implementation-checklist.pdf">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Implementation Checklist
            </h3>
            <p className="text-muted-text text-sm">
              Step-by-step checklist for guideline adoption
            </p>
          </Card>
        </div>
      </Section>

      <Section>
        <div className="text-center">
          <Link href="/produce-data/guidelines" className="btn-primary">
            View Guidelines
          </Link>
        </div>
      </Section>
    </>
  );
}
