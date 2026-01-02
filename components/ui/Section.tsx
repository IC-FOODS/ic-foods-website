import { ReactNode } from "react";
import { Container } from "./Container";
import { cn } from "@/lib/utils/cn";

interface SectionProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  eyebrow?: string;
  title?: string;
}

export function Section({
  children,
  className,
  size = "md",
  eyebrow,
  title,
}: SectionProps) {
  const sizeClasses = {
    sm: "py-8 lg:py-12",
    md: "py-12 lg:py-16",
    lg: "py-16 lg:py-24",
  };

  return (
    <section className={cn(sizeClasses[size], className)}>
      <Container>
        {(eyebrow || title) && (
          <div className="mb-8 lg:mb-12">
            {eyebrow && (
              <p className="text-sm font-medium text-muted-text uppercase tracking-wide mb-2">
                {eyebrow}
              </p>
            )}
            {title && (
              <div className="relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-accent"></div>
                <h2 className="text-3xl lg:text-4xl font-bold text-primary pl-6 border-b-4 border-accent pb-2 inline-block">
                  {title}
                </h2>
              </div>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
