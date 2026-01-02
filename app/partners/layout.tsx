import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner with IC-FOODS",
  description:
    "Partnership opportunities for nonprofits, agencies, academic institutions, and industry partners.",
};

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
