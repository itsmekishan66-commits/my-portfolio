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
    title: "DevConnect",
    description:
      "Full-stack collaboration platform with Next.js, Express.js REST APIs, and PostgreSQL — including auth and real-time updates.",
    tags: ["Next.js", "Express.js", "PostgreSQL"],
  },
  {
    title: "ShopStream",
    description:
      "E-commerce storefront with server-side rendering, secure checkout, and a Node.js admin dashboard backed by MongoDB.",
    tags: ["Next.js", "Node.js", "MongoDB"],
  },
  {
    title: "TaskFlow",
    description:
      "Team task manager with Firebase Auth, Firestore, and a React dashboard featuring role-based access.",
    tags: ["React", "Firebase", "REST APIs"],
  },
];
