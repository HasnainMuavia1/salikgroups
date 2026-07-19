export type NavLink = {
  label: string;
  href: string;
  sectionId: string;
};

export type ServiceIcon =
  | "solar"
  | "cctv"
  | "telephone"
  | "fence"
  | "generator"
  | "intercom"
  | "attendance"
  | "network"
  | "it"
  | "repair";

export type Project = {
  id: string;
  slug: string;
  tag: string;
  title: string;
  year: string;
  location: string;
  client: string;
  description: string;
  image: string;
  gallery: string[];
  overview: string[];
  highlights: string[];
  deliverables: string[];
  metaDescription: string;
  coverImage?: string;
};

export type Service = {
  id: string;
  slug: string;
  shortLabel: string;
  title: string;
  description: string;
  image: string;
  gallery?: string[];
  icon: ServiceIcon;
  metaDescription: string;
  tagline: string;
  overview: string[];
  capabilities: string[];
  deliverables: string[];
  industries: string[];
  coverImage?: string;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
};

export type FieldWorkShowcase = {
  id: string;
  tag: string;
  title: string;
  description: string;
  images: string[];
  coverImage?: string;
};

export type Industry = {
  title: string;
  subtitle: string;
};

export type PartnerGroup = {
  category: string;
  brands: string[];
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type WhyUsItem = {
  number: string;
  title: string;
  description: string;
};

export type HeroStat = {
  value: number;
  suffix?: string;
  accentSuffix?: string;
  label: string;
};
