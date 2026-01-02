"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";

export default function PartnersPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqItems = [
    {
      question: "What data do you store?",
      answer:
        "IC-FOODS does not store proprietary partner data. We work with partners to implement standards and best practices using their own systems. We may aggregate anonymized usage statistics for impact measurement.",
    },
    {
      question: "What are your principles and limitations?",
      answer:
        "We operate with principles of transparency, openness, and responsible stewardship. We do not endorse commercial products, maintain vendor neutrality, and focus on standards and methods rather than proprietary solutions. See our Governance page for details.",
    },
    {
      question: "How do pilots work?",
      answer:
        "Pilot programs typically involve a 3-6 month collaboration to test implementation of Produce Data Guidelines or other standards in a partner&apos;s system. We provide technical guidance, documentation support, and facilitate knowledge sharing. Partners contribute use cases and feedback.",
    },
    {
      question: "What is a typical timeline?",
      answer:
        "Initial conversations typically take 1-2 weeks. Partnership agreements and planning take 2-4 weeks. Implementation timelines vary by project scope, typically 3-12 months for active collaborations.",
    },
  ];

  return (
    <>
      <Section size="lg">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold text-primary mb-6">
            Partner with IC-FOODS
          </h1>
          <p className="text-xl text-muted-text mb-8 leading-relaxed">
            We collaborate with nonprofits, government agencies, academic
            institutions, and industry partners to advance food systems data
            standards and implementation.
          </p>
        </div>
      </Section>

      <Section title="Who We Partner With" eyebrow="Partnerships">
        <div className="max-w-3xl">
          <ul className="list-disc list-inside space-y-2 text-muted-text">
            <li>
              <strong>Nonprofit organizations:</strong> Food security
              initiatives, community organizations, advocacy groups
            </li>
            <li>
              <strong>Government agencies:</strong> Federal, state, and local
              agencies working on food systems, agriculture, and data policy
            </li>
            <li>
              <strong>Academic institutions:</strong> Universities and research
              organizations conducting food systems research
            </li>
            <li>
              <strong>Industry partners:</strong> Technology companies, food
              distributors, and supply chain organizations
            </li>
          </ul>
        </div>
      </Section>

      <Section
        title="Partnership Models"
        eyebrow="How We Work"
        className="bg-surface-raised"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold text-primary mb-2">
              Data Standards Alignment
            </h3>
            <p className="text-muted-text text-sm">
              Adopt Produce Data Guidelines in your systems. We provide
              technical guidance, documentation, and support for implementation.
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-primary mb-2">
              Pilot Implementation Support
            </h3>
            <p className="text-muted-text text-sm">
              Test standards in your environment with structured support. We
              help design pilots, document outcomes, and share learnings.
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-primary mb-2">
              Research Collaboration
            </h3>
            <p className="text-muted-text text-sm">
              Collaborate on research projects related to food systems data,
              interoperability, or traceability. Joint publications and
              knowledge sharing.
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-primary mb-2">
              Convening & Co-hosting
            </h3>
            <p className="text-muted-text text-sm">
              Co-host workshops, webinars, or events. We provide content
              expertise and facilitate cross-sector dialogue.
            </p>
          </Card>
        </div>
      </Section>

      <Section title="What to Expect" eyebrow="Process">
        <div className="max-w-3xl">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-1">
                  Initial Conversation
                </h3>
                <p className="text-muted-text text-sm">
                  Discuss your goals, needs, and potential collaboration areas.
                  We&apos;ll identify alignment with IC-FOODS priorities.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-1">
                  Partnership Planning
                </h3>
                <p className="text-muted-text text-sm">
                  Define scope, timeline, and deliverables. Establish
                  communication protocols and success metrics.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-1">
                  Implementation
                </h3>
                <p className="text-muted-text text-sm">
                  Execute the partnership plan with regular check-ins, technical
                  support, and documentation.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                4
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-1">
                  Evaluation & Sharing
                </h3>
                <p className="text-muted-text text-sm">
                  Assess outcomes, document learnings, and share results with
                  the broader community when appropriate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Start a Conversation" className="bg-surface-raised">
        <div className="max-w-2xl text-center">
          <p className="text-muted-text mb-6">
            Ready to explore a partnership? Get in touch to discuss how we can
            work together.
          </p>
          <Link
            href="/contact?subject=Partnership%20Inquiry"
            className="btn-primary"
          >
            Contact Us
          </Link>
        </div>
      </Section>

      <Section title="Frequently Asked Questions" eyebrow="FAQ">
        <div className="max-w-3xl space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border border-subtle-border rounded-lg overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-surface-raised transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-inset"
                aria-expanded={openFaq === index}
              >
                <span className="font-semibold text-primary">
                  {item.question}
                </span>
                <svg
                  className={cn(
                    "h-5 w-5 text-muted-text transition-transform",
                    openFaq === index && "transform rotate-180"
                  )}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openFaq === index && (
                <div className="px-6 py-4 text-muted-text border-t border-subtle-border">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
