export type ReviewPlatform = "google" | "instagram" | "facebook" | "linkedin";

export const reviewPlatforms: ReviewPlatform[] = [
  "google",
  "instagram",
  "facebook",
  "linkedin",
];

export type PlatformReview = {
  id: string;
  platform: ReviewPlatform;
  name: string;
  initials: string;
  avatarColor: string;
  rating: number;
  date: string;
  text: string;
};

export const reviewsBusinessName = "Salik Groups & Co";

export const platformReviewSummaries: Record<
  ReviewPlatform,
  {
    label: string;
    averageRating: number;
    totalReviews: number;
    externalUrl: string;
  }
> = {
  google: {
    label: "Google",
    averageRating: 4.9,
    totalReviews: 128,
    externalUrl: "https://www.google.com/maps",
  },
  instagram: {
    label: "Instagram",
    averageRating: 4.8,
    totalReviews: 64,
    externalUrl: "https://www.instagram.com",
  },
  facebook: {
    label: "Facebook",
    averageRating: 4.8,
    totalReviews: 92,
    externalUrl: "https://www.facebook.com",
  },
  linkedin: {
    label: "LinkedIn",
    averageRating: 5.0,
    totalReviews: 47,
    externalUrl: "https://www.linkedin.com",
  },
};

export const allReviews: PlatformReview[] = [
  {
    id: "g1",
    platform: "google",
    name: "Ahmed Hassan",
    initials: "AH",
    avatarColor: "#1a73e8",
    rating: 5,
    date: "2 weeks ago",
    text: "Excellent solar installation for our factory in Lahore. Salik Groups & Co handled survey, design and commissioning professionally. Energy output is exactly as promised.",
  },
  {
    id: "g2",
    platform: "google",
    name: "Fatima Khan",
    initials: "FK",
    avatarColor: "#ea4335",
    rating: 5,
    date: "1 month ago",
    text: "We hired them for CCTV and networking at our office. Very disciplined team, clean cabling work and proper handover training. Highly recommended.",
  },
  {
    id: "g3",
    platform: "google",
    name: "Usman Ali",
    initials: "UA",
    avatarColor: "#34a853",
    rating: 5,
    date: "1 month ago",
    text: "Electric fence and perimeter security was completed on schedule. Safety standards were followed throughout. Good communication from project manager.",
  },
  {
    id: "i1",
    platform: "instagram",
    name: "Ayesha Malik",
    initials: "AM",
    avatarColor: "#E1306C",
    rating: 5,
    date: "3 days ago",
    text: "Posted about our video intercom install — Salik Groups & Co delivered exactly what they showed in the site walkthrough. Clean finish and responsive support.",
  },
  {
    id: "i2",
    platform: "instagram",
    name: "Bilal Raza",
    initials: "BR",
    avatarColor: "#F77737",
    rating: 5,
    date: "2 weeks ago",
    text: "Shared our 125 KW solar commissioning on stories. Transparent pricing, proper documentation and net-metering support from day one.",
  },
  {
    id: "i3",
    platform: "instagram",
    name: "Sana Tariq",
    initials: "ST",
    avatarColor: "#833AB4",
    rating: 4,
    date: "1 month ago",
    text: "Tagged them after generator and ATS integration — minor weather delay but the team kept us updated throughout. Quality work overall.",
  },
  {
    id: "f1",
    platform: "facebook",
    name: "Hamza Sheikh",
    initials: "HS",
    avatarColor: "#1877F2",
    rating: 5,
    date: "1 week ago",
    text: "Recommended Salik Groups & Co in our business group for enterprise wireless links. Stable signal between two Sheikhupura sites after professional alignment.",
  },
  {
    id: "f2",
    platform: "facebook",
    name: "Zainab Iqbal",
    initials: "ZI",
    avatarColor: "#4267B2",
    rating: 5,
    date: "3 weeks ago",
    text: "Left a review after our hospital CCTV upgrade. Minimal disruption, cameras and NVR configured properly. Trustworthy company for healthcare sites.",
  },
  {
    id: "f3",
    platform: "facebook",
    name: "Kamran Butt",
    initials: "KB",
    avatarColor: "#5890FF",
    rating: 5,
    date: "2 months ago",
    text: "IP-PBX telephone exchange for our call centre works flawlessly. Extensions and routing configured exactly as we needed. Great Facebook community feedback too.",
  },
  {
    id: "l1",
    platform: "linkedin",
    name: "Hira Nawaz",
    initials: "HN",
    avatarColor: "#0A66C2",
    rating: 5,
    date: "4 days ago",
    text: "Endorsed Salik Groups & Co for enterprise IT and security rollouts. Their repair centre support for existing infrastructure is fast and fairly priced.",
  },
  {
    id: "l2",
    platform: "linkedin",
    name: "Tariq Mehmood",
    initials: "TM",
    avatarColor: "#004182",
    rating: 5,
    date: "3 weeks ago",
    text: "Complete IT setup including servers and workstations for our new branch. One vendor for security and IT made coordination much easier for our ops team.",
  },
  {
    id: "l3",
    platform: "linkedin",
    name: "Rabia Ashraf",
    initials: "RA",
    avatarColor: "#378FE9",
    rating: 5,
    date: "2 months ago",
    text: "Biometric attendance across three floors with HR reporting software that is easy to adopt. Professional delivery from survey through handover.",
  },
  {
    id: "g4",
    platform: "google",
    name: "Mian Umar",
    initials: "MU",
    avatarColor: "#4285f4",
    rating: 5,
    date: "3 weeks ago",
    text: "Very professional installation of UPS backup systems and LED lighting. Excellent response time and highly trained technicians.",
  },
  {
    id: "l4",
    platform: "linkedin",
    name: "Engr. Naveed Ahmed",
    initials: "NA",
    avatarColor: "#0a66c2",
    rating: 5,
    date: "1 month ago",
    text: "Excellent experience working with Salik Groups & Co for our corporate network upgrade and firewall setup. Highly reliable partnership.",
  },
  {
    id: "f4",
    platform: "facebook",
    name: "Farhan Shah",
    initials: "FS",
    avatarColor: "#3b5998",
    rating: 5,
    date: "1 month ago",
    text: "Our industrial generator setup was installed and configured within the promised timeframe. Great post-installation support by the team.",
  },
  {
    id: "i4",
    platform: "instagram",
    name: "Zoya Butt",
    initials: "ZB",
    avatarColor: "#c13584",
    rating: 5,
    date: "2 weeks ago",
    text: "Great experience with their CCTV team. The cameras and monitoring software are very easy to use, and they did the cabling so neatly!",
  },
];

export function getReviewsByPlatform(platform: ReviewPlatform) {
  return allReviews.filter((review) => review.platform === platform);
}

export function getFeaturedReviews() {
  const featured: PlatformReview[] = [];
  reviewPlatforms.forEach((platform) => {
    const platformReviews = allReviews.filter((review) => review.platform === platform);
    if (platformReviews[0]) featured.push(platformReviews[0]);
    if (platformReviews[1]) featured.push(platformReviews[1]);
  });
  return featured;
}

export function getTotalReviewCount() {
  return Object.values(platformReviewSummaries).reduce(
    (total, summary) => total + summary.totalReviews,
    0,
  );
}

/** @deprecated Use platformReviewSummaries.google */
export const googleReviewsSummary = {
  businessName: reviewsBusinessName,
  averageRating: platformReviewSummaries.google.averageRating,
  totalReviews: platformReviewSummaries.google.totalReviews,
  googleMapsUrl: platformReviewSummaries.google.externalUrl,
} as const;

/** @deprecated Use allReviews */
export const googleReviews = getReviewsByPlatform("google");
