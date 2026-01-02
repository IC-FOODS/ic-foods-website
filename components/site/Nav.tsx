"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNavigation, secondaryNavigation } from "@/lib/site/nav";
import { cn } from "@/lib/utils/cn";

export function Nav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
        setIsMoreOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const allNav = [...primaryNavigation, ...secondaryNavigation];

  return (
    <>
      <nav
        className="hidden md:flex items-center space-x-6"
        aria-label="Main navigation"
        role="navigation"
      >
        {primaryNavigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors relative",
                isActive
                  ? "text-primary after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-accent"
                  : "text-slate-600 hover:text-primary"
              )}
              aria-current={isActive ? "page" : undefined}
            >
              {item.label}
            </Link>
          );
        })}

        <div className="relative" ref={moreRef}>
          <button
            type="button"
            onClick={() => setIsMoreOpen(!isMoreOpen)}
            className={cn(
              "text-sm font-medium transition-colors",
              isMoreOpen ||
                secondaryNavigation.some((item) => pathname === item.href)
                ? "text-primary"
                : "text-slate-600 hover:text-primary"
            )}
            aria-expanded={isMoreOpen}
            aria-haspopup="true"
          >
            More
            <svg
              className="inline-block ml-1 h-4 w-4"
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

          {isMoreOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-surface border border-subtle-border rounded-lg shadow-soft py-2 z-50">
              {secondaryNavigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMoreOpen(false)}
                    className={cn(
                      "block px-4 py-2 text-sm transition-colors",
                      isActive
                        ? "text-primary bg-accent/10 border-l-4 border-accent"
                        : "text-slate-600 hover:text-primary hover:bg-surface-raised"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </nav>

      <div className="md:hidden">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="text-slate-600 hover:text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {isOpen && (
          <nav
            id="mobile-menu"
            className="absolute left-0 right-0 top-16 z-50 border-b border-subtle-border bg-surface shadow-soft"
            aria-label="Mobile navigation"
            role="navigation"
          >
            <div className="px-4 py-4 space-y-4">
              {allNav.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block text-base font-medium",
                      isActive
                        ? "text-primary border-l-4 border-accent pl-3"
                        : "text-slate-600 hover:text-primary"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </nav>
        )}
      </div>
    </>
  );
}
