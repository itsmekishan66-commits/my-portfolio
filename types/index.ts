// Shared, app-wide types live here. Domain types are owned by the feature
// that uses them and are re-exported for convenience.
export type NavItem = {
  href: string;
  label: string;
};

export type * from "@/features/portfolio/types/portfolio.types";
