"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function MarkdownContent({ content }: { content: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ node, ...props }: any) => (
          <h1
            className="text-4xl font-bold text-primary mt-8 mb-4"
            {...props}
          />
        ),
        h2: ({ node, ...props }: any) => {
          const text = String(props.children || "");
          const id = text
            .toLowerCase()
            .replace(/[^\w\s-]/g, "")
            .replace(/\s+/g, "-");
          return (
            <h2
              id={id}
              className="text-3xl font-semibold text-primary mt-8 mb-4 scroll-mt-16 border-b-2 border-accent/30 pb-2"
              {...props}
            />
          );
        },
        h3: ({ node, ...props }: any) => (
          <h3
            className="text-2xl font-semibold text-primary mt-6 mb-3"
            {...props}
          />
        ),
        p: ({ node, ...props }: any) => (
          <p className="text-muted-text mb-4 leading-relaxed" {...props} />
        ),
        ul: ({ node, ...props }: any) => (
          <ul
            className="list-disc list-inside mb-4 space-y-2 text-muted-text"
            {...props}
          />
        ),
        ol: ({ node, ...props }: any) => (
          <ol
            className="list-decimal list-inside mb-4 space-y-2 text-muted-text"
            {...props}
          />
        ),
        li: ({ node, ...props }: any) => <li className="ml-4" {...props} />,
        strong: ({ node, ...props }: any) => (
          <strong className="font-semibold text-primary" {...props} />
        ),
        a: ({ node, ...props }: any) => (
          <a className="text-primary hover:underline" {...props} />
        ),
        code: ({ node, inline, ...props }: any) =>
          inline ? (
            <code
              className="bg-surface-raised px-1.5 py-0.5 rounded text-sm font-mono text-primary"
              {...props}
            />
          ) : (
            <code
              className="block bg-surface-raised p-4 rounded-lg overflow-x-auto text-sm font-mono text-primary mb-4"
              {...props}
            />
          ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
