import { ReactNode } from "react";
import { DocsNav } from "./DocsNav";
import { getGuidelines } from "@/lib/content";

interface DocsLayoutProps {
  children: ReactNode;
}

export function DocsLayout({ children }: DocsLayoutProps) {
  const guidelines = getGuidelines();

  return (
    <div className="flex">
      <div className="hidden lg:block w-64 flex-shrink-0">
        <DocsNav guidelines={guidelines} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="max-w-4xl mx-auto px-8 py-12">{children}</div>
      </div>
    </div>
  );
}
