export interface NavItem {
  label: string;
  href: string;
}

export const primaryNavigation: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Produce Data", href: "/produce-data" },
  { label: "Conferences", href: "/conferences" },
  { label: "Impact", href: "/impact" },
  { label: "Partner", href: "/partners" },
  { label: "Fellowship", href: "/fellowship" },
];

export const secondaryNavigation: NavItem[] = [
  { label: "Media", href: "/media" },
  { label: "Press", href: "/press" },
  { label: "Resources", href: "/resources" },
  { label: "Standards", href: "/standards" },
  { label: "Governance", href: "/governance" },
  { label: "Contact", href: "/contact" },
];

export const navigation: NavItem[] = [
  ...primaryNavigation,
  ...secondaryNavigation,
];
