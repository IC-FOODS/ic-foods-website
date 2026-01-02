"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils/cn";
import type { Guideline } from "@/lib/content/types";

interface DocsNavProps {
  guidelines: Guideline[];
}

export function DocsNav({ guidelines }: DocsNavProps) {
  const pathname = usePathname();

  return (
    <nav className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto py-8 pr-8 border-r border-subtle-border">
      <div className="pr-6">
        <div className="mb-6 pb-4 border-b-2 border-accent">
          <h3 className="text-sm font-semibold text-primary uppercase tracking-wide">
            Guidelines
          </h3>
        </div>
        <ul className="space-y-1">
          {guidelines.map((guideline) => {
            const href = `/produce-data/guidelines/${guideline.slug}`;
            const isActive = pathname === href;
            return (
              <li key={guideline.slug}>
                <Link
                  href={href}
                  className={cn(
                    "block px-3 py-2 rounded-md text-sm transition-colors",
                    isActive
                      ? "bg-accent/10 text-primary font-medium border-l-4 border-accent"
                      : "text-slate-600 hover:text-primary hover:bg-surface-raised"
                  )}
                >
                  {guideline.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
