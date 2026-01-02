import { cn } from "@/lib/utils/cn";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface DocsTocProps {
  content: string;
}

export function DocsToc({ content }: DocsTocProps) {
  const headings = extractHeadings(content);

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav className="hidden xl:block sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto py-8 pl-8">
      <div className="border-l border-subtle-border pl-6">
        <h3 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wide">
          On this page
        </h3>
        <ul className="space-y-2">
          {headings.map((heading) => (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                className={cn(
                  "block text-sm transition-colors",
                  heading.level === 2
                    ? "text-slate-600 hover:text-primary font-medium"
                    : "text-muted-text hover:text-slate-600 pl-4"
                )}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function extractHeadings(content: string): TocItem[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings: TocItem[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");

    headings.push({ id, text, level });
  }

  return headings;
}
