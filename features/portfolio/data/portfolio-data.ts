import type {
  ExperienceItem,
  Profile,
  Project,
  Skill,
} from "../types/portfolio.types";

export const profile: Profile = {
  name: "Kishan Shah",
  role: "Full Stack Web Developer",
  tagline: "Building scalable full-stack web apps with Next.js, Node.js & Firebase.",
  experience: "6+ months",
  email: "itsmekishan66@gmail.com",
  location: "Available for remote & on-site",
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
};

export const skills: Skill[] = [
  { name: "Next.js", level: 90 },
  { name: "Node.js", level: 88 },
  { name: "Express.js", level: 85 },
  { name: "REST APIs", level: 84 },
  { name: "Firebase", level: 80 },
  { name: "SQL & NoSQL Databases", level: 78 },
];

export const experience: ExperienceItem[] = [
  {
    period: "2026 — Present",
    title: "Full Stack Developer",
    company: "Web Product Teams",
    type: "Full-time",
    location: "Remote",
    points: [
      "Build and ship full-stack features with Next.js (App Router) and Express.js REST APIs — from data modeling to production deploys.",
      "Design SQL (PostgreSQL) and NoSQL (Firestore) schemas that power auth, dashboards, and real-time updates.",
      "Cut page load times ~35% with code-splitting, image optimization, and API response caching.",
      "Work in an agile team using Git flow, code reviews, and CI checks on every pull request.",
    ],
    stack: ["Next.js", "Node.js", "Express.js", "PostgreSQL", "Firebase"],
  },
  {
    period: "2025 — Present",
    title: "Open Source Contributor",
    company: "Community projects",
    type: "Open Source",
    location: "Remote",
    points: [
      "Contributed bug fixes and documentation to open-source Next.js and Node.js projects.",
      "Reproduced issues and opened pull requests with tests and clear changelogs.",
    ],
    stack: ["Next.js", "TypeScript", "Node.js", "Git"],
  },
];

export const projects: Project[] = [
  {
    title: "Sugandhit Perfume",
    description:
      "Custom perfume studio where customers design their own signature scent and browse handcrafted fragrance collections.",
    tags: ["Next.js", "Node.js", "REST APIs"],
    link: "https://sugandhit-perfume-frontend.vercel.app/",
    images: [
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    title: "Umesh Ghadi & Radio Marmat Pasal",
    description:
      "Premium watches e-commerce storefront with product browsing, cart, and checkout.",
    tags: ["Next.js", "Express.js", "MongoDB"],
    link: "https://myecommerceproject-frontend.vercel.app/",
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    title: "HamroAssets",
    description:
      "Password manager that stores and organizes credentials securely, with a guided first-time setup flow.",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
    link: "https://mero-assets-client.vercel.app/",
    images: [
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&w=1200&q=80",
    ],
  },
];
