import Link from "next/link";
import { Section } from "@/components/ui/Section";

export default function NotFound() {
  return (
    <Section>
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-muted-text mb-8">Page not found</p>
        <Link
          href="/"
          className="text-primary font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded"
        >
          Return to home
        </Link>
      </div>
    </Section>
  );
}
