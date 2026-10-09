import type { NavItem } from "@/types";

export const siteConfig: {
  name: string;
  role: string;
  title: string;
  description: string;
  keywords: string[];
} = {
  name: "Kishan Shah",
  role: "Full Stack Web Developer",
  title: "Kishan Shah — Full Stack Web Developer",
  description:
    "Portfolio of Kishan Shah, Full Stack Web Developer with 6+ months experience in Next.js, Node.js, Express.js, and Firebase.",
  keywords: [
    "Kishan Shah",
    "Full Stack Developer",
    "Next.js",
    "Node.js",
    "Express.js",
    "Firebase",
    "REST APIs",
    "Web Developer",
  ],
};

export const navItems: NavItem[] = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];
