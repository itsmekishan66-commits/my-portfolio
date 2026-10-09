export type SocialLinks = {
  github: string;
  linkedin: string;
  twitter: string;
};

export type Profile = {
  name: string;
  role: string;
  tagline: string;
  experience: string;
  email: string;
  location: string;
  social: SocialLinks;
};

export type Skill = {
  name: string;
  level: number;
};

export type ExperienceItem = {
  period: string;
  title: string;
  company: string;
  type: string;
  location: string;
  points: string[];
  stack: string[];
  link?: string;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
};
