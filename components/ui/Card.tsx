import { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";

interface CardProps {
  children: ReactNode;
  className?: string;
  href?: string;
  featured?: boolean;
}

export function Card({ children, className, href, featured }: CardProps) {
  const baseClasses =
    "rounded-lg border border-subtle-border bg-surface p-6 shadow-subtle transition-all relative";

  if (href) {
    return (
      <Link href={href} className="block no-underline hover:no-underline group">
        <div
          className={cn(
            baseClasses,
            featured
              ? "border-t-4 border-accent"
              : "hover:border-primary hover:shadow-soft",
            className
          )}
        >
          {children}
        </div>
      </Link>
    );
  }

  return (
    <div
      className={cn(
        baseClasses,
        featured && "border-t-4 border-accent",
        className
      )}
    >
      {children}
    </div>
  );
}
