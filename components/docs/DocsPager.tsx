import Link from "next/link";
import { getGuidelines } from "@/lib/content";
import { cn } from "@/lib/utils/cn";

interface DocsPagerProps {
  currentSlug: string;
}

export function DocsPager({ currentSlug }: DocsPagerProps) {
  const guidelines = getGuidelines();
  const currentIndex = guidelines.findIndex((g) => g.slug === currentSlug);

  if (currentIndex === -1) {
    return null;
  }

  const prev = currentIndex > 0 ? guidelines[currentIndex - 1] : null;
  const next =
    currentIndex < guidelines.length - 1 ? guidelines[currentIndex + 1] : null;

  if (!prev && !next) {
    return null;
  }

  return (
    <nav className="mt-12 pt-8 border-t border-subtle-border">
      <div className="grid grid-cols-2 gap-4">
        {prev ? (
          <Link
            href={`/produce-data/guidelines/${prev.slug}`}
            className="group p-4 border border-subtle-border rounded-lg hover:border-primary transition-colors"
          >
            <div className="text-sm text-muted-text mb-1">Previous</div>
            <div className="text-primary font-medium group-hover:text-primary">
              {prev.title}
            </div>
          </Link>
        ) : (
          <div />
        )}

        {next ? (
          <Link
            href={`/produce-data/guidelines/${next.slug}`}
            className="group p-4 border border-subtle-border rounded-lg hover:border-primary transition-colors text-right"
          >
            <div className="text-sm text-muted-text mb-1">Next</div>
            <div className="text-primary font-medium group-hover:text-primary">
              {next.title}
            </div>
          </Link>
        ) : null}
      </div>
    </nav>
  );
}
