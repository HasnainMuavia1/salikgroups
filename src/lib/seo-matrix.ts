import { pakistanCities } from "@/data/pakistan-cities";
import { getTopicOgImage } from "@/config/og-images";
import {
  brandSlugPrefixes,
  seoModifiers,
  seoTopics,
  topicBySlug,
  type SeoModifier,
  type SeoTopic,
} from "@/data/seo-topics";
import type { PakistanCity } from "@/data/pakistan-cities";

export const DISCOVER_URL_PREFIX = "/discover";
export const SEO_SITEMAP_CHUNK_SIZE = 500;

const MODIFIER_PAGE_COUNT =
  seoModifiers.length * seoTopics.length * pakistanCities.length;
const BRAND_PAGE_COUNT =
  brandSlugPrefixes.length * seoTopics.length * pakistanCities.length;
export const DISCOVER_PAGE_COUNT = MODIFIER_PAGE_COUNT + BRAND_PAGE_COUNT;

export type DiscoverPageKind = "modifier" | "brand";

export type DiscoverPage = {
  slug: string;
  kind: DiscoverPageKind;
  modifier?: SeoModifier;
  brand?: string;
  topic: SeoTopic;
  city: PakistanCity;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  subheadline: string;
  ogImage: string;
  keywords: string[];
  paragraphs: string[];
  faqs: Array<{ question: string; answer: string }>;
};

let cachedPages: DiscoverPage[] | null = null;
let cachedSlugSet: Set<string> | null = null;

function hashString(value: string) {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function humanizeModifier(modifier: string) {
  if (modifier === "number-1") return "#1";
  return modifier;
}

function buildParagraphs(
  page: Pick<DiscoverPage, "kind" | "modifier" | "brand" | "topic" | "city">,
  variant: number,
) {
  const brand = "Salik Groups & Co";
  const city = page.city.name;
  const province = page.city.province;
  const topic = page.topic.label;
  const qualifier =
    page.kind === "brand"
      ? `${page.brand?.replace(/-/g, " ")} ${topic.toLowerCase()}`
      : `${humanizeModifier(page.modifier ?? "best")} ${topic.toLowerCase()}`;

  const templates = [
    [
      `${brand} delivers ${qualifier} in ${city}, ${province} — with survey-led design, certified installation, testing and structured handover for government, industrial and commercial clients.`,
      `Whether you are searching for Salik, Salik Groups services, or the ${qualifier} near ${city}, our Lahore-based engineering team supports projects across Pakistan with solar, CCTV, fencing, generators, networking and integrated electronic systems.`,
      `Contact ${brand} at +92 304 5050750 for a free technical survey, quotation and project timeline.`,
    ],
    [
      `Looking for ${qualifier} in ${city}? ${brand} is a trusted integrator for ${topic.toLowerCase()} with documented field deployments, Safe City CCTV experience and commercial solar installations nationwide.`,
      `We help facilities in ${city} and across ${province} reduce downtime through disciplined cabling, quality equipment selection and post-handover support from our repairing centre.`,
      `Request a survey on salikgroups.com — Salik Groups & Co has served Pakistan since 2021.`,
    ],
    [
      `${city} organisations choose ${brand} for ${topic.toLowerCase()} because we manage the full delivery path: assessment, BOQ, supply, installation, commissioning and training.`,
      `From ${topic.toLowerCase()} in ${city} to multi-site government programmes, Salik Groups & Co is among the most searched names for best electronic services in Pakistan.`,
      `Call ${brand} today to discuss your ${city} site requirements.`,
    ],
    [
      `${brand} provides ${qualifier} for ${city} clients who need reliable electronic infrastructure — not one-off product sales without engineering accountability.`,
      `Our portfolio includes solar panel salikgroups deployments, inverters salikgroups commissioning, CCTV surveillance, electric fencing and enterprise networking.`,
      `Visit salikgroups.com or WhatsApp our team for fast responses on ${topic.toLowerCase()} projects in ${city}.`,
    ],
    [
      `When ${city} businesses search for ${qualifier}, they need a partner with field proof. ${brand} publishes real project galleries, case studies and service documentation online.`,
      `We cover ${province} and all major Pakistani cities with the same standards: certified technicians, manufacturer guidelines and quality verification before handover.`,
      `Salik Groups services include ${topic.toLowerCase()} — reach out for a technical survey in ${city}.`,
    ],
  ];

  return templates[variant % templates.length];
}

function buildFaqs(page: Pick<DiscoverPage, "kind" | "modifier" | "brand" | "topic" | "city">) {
  const brand = "Salik Groups & Co";
  const city = page.city.name;
  const topic = page.topic.label;
  const qualifier =
    page.kind === "brand"
      ? `${page.brand?.replace(/-/g, " ")} ${topic.toLowerCase()}`
      : `${humanizeModifier(page.modifier ?? "best")} ${topic.toLowerCase()}`;

  return [
    {
      question: `Who provides ${qualifier} in ${city}?`,
      answer: `${brand} delivers ${topic.toLowerCase()} in ${city} and across Pakistan with survey, supply, installation and support. Call +92 304 5050750.`,
    },
    {
      question: `Does Salik Groups offer ${topic.toLowerCase()} in ${city}?`,
      answer: `Yes. Salik Groups & Co serves ${city}, ${page.city.province} and nationwide clients for ${topic.toLowerCase()} and related electronic services.`,
    },
    {
      question: `How do I contact Salik Groups for ${city} projects?`,
      answer: `Visit salikgroups.com, use the Request Survey form, or call +92 304 5050750 / +92 311 7475845.`,
    },
  ];
}

function buildKeywords(page: {
  kind: DiscoverPageKind;
  modifier?: SeoModifier;
  brand?: string;
  topic: SeoTopic;
  city: PakistanCity;
}) {
  const city = page.city.name;
  const base = [
    "Salik Groups & Co",
    "Salik Groups",
    "Salik Group",
    "Salik",
    "salikgroups",
    "salikgroups.com",
    "Salik Groups services",
    "Salik Group services",
    `Salik Groups ${city}`,
    `Salik ${city}`,
    ...page.topic.keywords,
    `${page.topic.label} ${city}`,
    `${page.topic.label} Pakistan`,
    "best electronic services in pakistan",
    "best electronic products in pakistan",
    "best solar panel service in pakistan",
    "solar panel salikgroups",
    "inverters salikgroups",
  ];

  if (page.kind === "brand" && page.brand) {
    base.push(
      `${page.brand.replace(/-/g, " ")} ${page.topic.shortLabel.toLowerCase()}`,
      `${page.brand.replace(/-/g, " ")} ${city}`,
      `${page.brand.replace(/-/g, " ")} services`,
    );
  } else if (page.modifier) {
    const mod = humanizeModifier(page.modifier);
    base.push(
      `${mod} ${page.topic.label.toLowerCase()} ${city}`,
      `${mod} ${page.topic.label.toLowerCase()} Pakistan`,
      `${mod} ${page.topic.shortLabel.toLowerCase()} near ${city}`,
    );
  }

  return [...new Set(base)];
}

function createModifierPage(modifier: SeoModifier, topic: SeoTopic, city: PakistanCity): DiscoverPage {
  const slug = `${modifier}-${topic.slug}-${city.slug}-pakistan`;
  const modLabel = humanizeModifier(modifier);
  const headline = `${modLabel} ${topic.label} in ${city.name} | Salik Groups & Co`;
  const subheadline = `${modLabel} ${topic.label.toLowerCase()} for ${city.name}, ${city.province} — delivered by Salik Groups & Co with survey, installation, testing and support.`;

  const page = {
    slug,
    kind: "modifier" as const,
    modifier,
    topic,
    city,
    metaTitle: `${headline}`,
    metaDescription: `Looking for ${modLabel.toLowerCase()} ${topic.label.toLowerCase()} in ${city.name}? Salik Groups & Co — best electronic services in Pakistan. Survey, supply, installation & support. Call +92 304 5050750.`,
    headline,
    subheadline,
    ogImage: getTopicOgImage(topic.slug),
    keywords: buildKeywords({ kind: "modifier", modifier, topic, city }),
    paragraphs: [] as string[],
    faqs: [] as Array<{ question: string; answer: string }>,
  };

  const variant = hashString(slug);
  page.paragraphs = buildParagraphs(page, variant);
  page.faqs = buildFaqs(page);

  return page;
}

function createBrandPage(brand: string, topic: SeoTopic, city: PakistanCity): DiscoverPage {
  const slug = `${brand}-${topic.slug}-${city.slug}-pakistan`;
  const brandLabel = brand.replace(/-/g, " ");
  const headline = `${brandLabel} ${topic.label} ${city.name} | Salik Groups & Co`;
  const subheadline = `${brandLabel} delivers ${topic.label.toLowerCase()} in ${city.name}, ${city.province} — trusted electronic services from Salik Groups & Co.`;

  const page = {
    slug,
    kind: "brand" as const,
    brand,
    topic,
    city,
    metaTitle: headline,
    metaDescription: `${brandLabel} ${topic.label.toLowerCase()} in ${city.name} — Salik Groups & Co. Solar, CCTV, fencing, generators & networking. Request a survey at salikgroups.com.`,
    headline,
    subheadline,
    ogImage: getTopicOgImage(topic.slug),
    keywords: buildKeywords({ kind: "brand", brand, topic, city }),
    paragraphs: [] as string[],
    faqs: [] as Array<{ question: string; answer: string }>,
  };

  const variant = hashString(slug);
  page.paragraphs = buildParagraphs(page, variant);
  page.faqs = buildFaqs(page);

  return page;
}

function buildSlugAtIndex(index: number): string {
  if (index < MODIFIER_PAGE_COUNT) {
    const cityIndex = index % pakistanCities.length;
    const topicIndex = Math.floor(index / pakistanCities.length) % seoTopics.length;
    const modifierIndex = Math.floor(index / (pakistanCities.length * seoTopics.length));
    const modifier = seoModifiers[modifierIndex];
    const topic = seoTopics[topicIndex];
    const city = pakistanCities[cityIndex];
    return `${modifier}-${topic.slug}-${city.slug}-pakistan`;
  }

  const brandIndex = index - MODIFIER_PAGE_COUNT;
  const cityIndex = brandIndex % pakistanCities.length;
  const topicIndex = Math.floor(brandIndex / pakistanCities.length) % seoTopics.length;
  const brandPrefixIndex = Math.floor(brandIndex / (pakistanCities.length * seoTopics.length));
  const brand = brandSlugPrefixes[brandPrefixIndex];
  const topic = seoTopics[topicIndex];
  const city = pakistanCities[cityIndex];
  return `${brand}-${topic.slug}-${city.slug}-pakistan`;
}

type ParsedDiscoverSlug =
  | { kind: "modifier"; modifier: SeoModifier; topic: SeoTopic; city: PakistanCity }
  | { kind: "brand"; brand: string; topic: SeoTopic; city: PakistanCity };

function parseDiscoverSlug(slug: string): ParsedDiscoverSlug | null {
  if (!slug.endsWith("-pakistan")) return null;

  const body = slug.slice(0, -"-pakistan".length);
  const citiesByLength = [...pakistanCities].sort((a, b) => b.slug.length - a.slug.length);
  const topicsByLength = [...seoTopics].sort((a, b) => b.slug.length - a.slug.length);

  for (const city of citiesByLength) {
    const citySuffix = `-${city.slug}`;
    if (!body.endsWith(citySuffix)) continue;

    const prefix = body.slice(0, -citySuffix.length);

    for (const topic of topicsByLength) {
      const topicSuffix = `-${topic.slug}`;
      let head: string;

      if (prefix.endsWith(topicSuffix)) {
        head = prefix.slice(0, -topicSuffix.length);
      } else if (prefix === topic.slug) {
        head = "";
      } else {
        continue;
      }

      if (head && seoModifiers.includes(head as SeoModifier)) {
        return { kind: "modifier", modifier: head as SeoModifier, topic, city };
      }

      if (head && brandSlugPrefixes.includes(head as (typeof brandSlugPrefixes)[number])) {
        return { kind: "brand", brand: head, topic, city };
      }
    }
  }

  return null;
}

function createPageFromParsed(parsed: ParsedDiscoverSlug): DiscoverPage {
  if (parsed.kind === "modifier") {
    return createModifierPage(parsed.modifier, parsed.topic, parsed.city);
  }
  return createBrandPage(parsed.brand, parsed.topic, parsed.city);
}

export function generateDiscoverPages(): DiscoverPage[] {
  if (cachedPages) return cachedPages;

  const pages: DiscoverPage[] = [];
  const slugs = new Set<string>();

  for (const modifier of seoModifiers) {
    for (const topic of seoTopics) {
      for (const city of pakistanCities) {
        const page = createModifierPage(modifier, topic, city);
        if (!slugs.has(page.slug)) {
          slugs.add(page.slug);
          pages.push(page);
        }
      }
    }
  }

  for (const brand of brandSlugPrefixes) {
    for (const topic of seoTopics) {
      for (const city of pakistanCities) {
        const page = createBrandPage(brand, topic, city);
        if (!slugs.has(page.slug)) {
          slugs.add(page.slug);
          pages.push(page);
        }
      }
    }
  }

  cachedPages = pages;
  cachedSlugSet = slugs;
  return pages;
}

export function getDiscoverPageCount() {
  return DISCOVER_PAGE_COUNT;
}

export function getDiscoverPageBySlug(slug: string) {
  const parsed = parseDiscoverSlug(slug);
  if (!parsed) return null;
  return createPageFromParsed(parsed);
}

export function getAllDiscoverSlugs() {
  return Array.from({ length: DISCOVER_PAGE_COUNT }, (_, index) => buildSlugAtIndex(index));
}

export function getDiscoverSitemapChunkCount() {
  return Math.ceil(DISCOVER_PAGE_COUNT / SEO_SITEMAP_CHUNK_SIZE);
}

export function getDiscoverSlugChunk(chunkIndex: number) {
  const start = chunkIndex * SEO_SITEMAP_CHUNK_SIZE;
  const end = Math.min(start + SEO_SITEMAP_CHUNK_SIZE, DISCOVER_PAGE_COUNT);
  const slugs: string[] = [];

  for (let index = start; index < end; index += 1) {
    slugs.push(buildSlugAtIndex(index));
  }

  return slugs;
}

export function getDiscoverPagesChunk(chunkIndex: number) {
  return getDiscoverSlugChunk(chunkIndex).map((slug) => {
    const page = getDiscoverPageBySlug(slug);
    if (!page) throw new Error(`Missing discover page for slug: ${slug}`);
    return page;
  });
}

export function getDiscoverPath(slug: string) {
  return `${DISCOVER_URL_PREFIX}/${slug}`;
}

export function getRelatedDiscoverPages(current: DiscoverPage, limit = 6) {
  const related: DiscoverPage[] = [];
  const topicIndex = seoTopics.findIndex((topic) => topic.slug === current.topic.slug);
  const cityIndex = pakistanCities.findIndex((city) => city.slug === current.city.slug);

  for (let offset = 1; offset <= limit * 2 && related.length < limit; offset += 1) {
    const nextCity = pakistanCities[(cityIndex + offset) % pakistanCities.length];
    const slug =
      current.kind === "brand" && current.brand
        ? `${current.brand}-${current.topic.slug}-${nextCity.slug}-pakistan`
        : `${current.modifier}-${current.topic.slug}-${nextCity.slug}-pakistan`;
    const page = getDiscoverPageBySlug(slug);
    if (page && page.slug !== current.slug) related.push(page);
  }

  for (let offset = 1; offset <= limit && related.length < limit; offset += 1) {
    const nextTopic = seoTopics[(topicIndex + offset) % seoTopics.length];
    const slug =
      current.kind === "brand" && current.brand
        ? `${current.brand}-${nextTopic.slug}-${current.city.slug}-pakistan`
        : `${current.modifier}-${nextTopic.slug}-${current.city.slug}-pakistan`;
    const page = getDiscoverPageBySlug(slug);
    if (page && page.slug !== current.slug && !related.some((item) => item.slug === page.slug)) {
      related.push(page);
    }
  }

  return related.slice(0, limit);
}

export function parseDiscoverTopic(slug: string) {
  return topicBySlug[slug] ?? null;
}
