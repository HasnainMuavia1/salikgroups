import type { Project } from "@/types/content";
import { projectCoverImages, projectGalleries } from "@/content/media";

export const projects: Project[] = [
  {
    id: "safe-city",
    slug: "safe-city",
    tag: "Surveillance · Safe City",
    title: "Safe City — Sialkot & Sheikhupura",
    year: "2024",
    location: "District Sialkot & District Sheikhupura",
    client: "Government / Safe City Programme",
    description:
      "34 sites in Sialkot, 54 in Sheikhupura and 400+ CCTV cameras surveyed, installed and commissioned.",
    image: projectCoverImages["safe-city"],
    gallery: [...projectGalleries["safe-city"]],
    coverImage: "/media/ai/safe_city_cover.webp",
    overview: [
      "Salik Groups & Co implemented Safe City projects in District Sialkot (34 sites) and District Sheikhupura (54 sites), where more than 400+ CCTV cameras were installed and made fully operational.",
      "The work included site surveys, camera installation, structured cabling, network setup, and connection with centralized monitoring systems.",
      "All work was carried out by trained and certified technicians, following approved security and networking standards. Salik Groups & Co ensured high image quality, stable system operation, and reliable connectivity through proper testing and quality control.",
    ],
    highlights: [
      "400+ CCTV cameras installed and commissioned",
      "34 Safe City sites in Sialkot",
      "54 Safe City sites in Sheikhupura",
      "Structured cabling and network integration",
      "Centralized monitoring system connectivity",
    ],
    deliverables: [
      "Site surveys and camera placement planning",
      "CCTV supply, mounting and configuration",
      "Structured cabling and network setup",
      "Integration with centralized monitoring",
      "Testing, commissioning and handover",
    ],
    metaDescription:
      "Safe City surveillance project across 88 sites in Sialkot and Sheikhupura with 400+ CCTV cameras installed by Salik Groups & Co.",
  },
  {
    id: "video-wall",
    slug: "video-wall",
    tag: "Video Wall · 2025",
    title: "EPA & CCD Green Building — Lahore",
    year: "2025",
    location: "EPA & CCD Green Building, Lahore",
    client: "EPA & CCD Green Building",
    description:
      "63 HIKVISION LED panels supplied, programmed and commissioned for centralised real-time visual control.",
    image: projectCoverImages["video-wall"],
    gallery: [...projectGalleries["video-wall"]],
    coverImage: "/media/ai/video_wall_cover.webp",
    overview: [
      "Salik Groups & Co successfully completed the video wall installation project at EPA & CCD Green Building, Lahore, in 2025, involving the supply, installation, programming, and commissioning of 63 HIKVISION LED display panels.",
      "The project required precise alignment, structured power and data integration, system programming, and centralized control configuration to ensure smooth and uninterrupted display performance.",
      "The project was executed by trained and certified technical teams, following manufacturer guidelines and industry best practices, ensuring high display clarity, stable system operation, and long-term reliability.",
    ],
    highlights: [
      "63-unit HIKVISION LED video wall",
      "Precision alignment and seamless display",
      "Centralized monitoring and real-time visual control",
      "Structured power and data integration",
      "Completed within agreed timeline",
    ],
    deliverables: [
      "Supply of 63 HIKVISION LED display panels",
      "Installation and precision alignment",
      "Power and data infrastructure integration",
      "System programming and centralized control",
      "Testing, commissioning and documentation",
    ],
    metaDescription:
      "63-unit HIKVISION LED video wall installed and commissioned at EPA & CCD Green Building Lahore by Salik Groups & Co.",
  },
  {
    id: "electric-fence",
    slug: "electric-fence",
    tag: "Perimeter Security · 2025",
    title: "Electric Fence — District Lahore",
    year: "2025",
    location: "District Lahore",
    client: "Government / District Administration",
    description:
      "A durable, safety-compliant perimeter solution supplied, installed, tested and commissioned.",
    image: projectCoverImages["electric-fence"],
    gallery: [...projectGalleries["electric-fence"]],
    coverImage: "/media/ai/electric_fence_cover.webp",
    overview: [
      "Salik Groups & Co successfully completed the Electric Fence Installation Project in District Lahore during 2025, delivering a reliable and high-performance perimeter security solution.",
      "The project included site assessment, supply, installation, testing, and commissioning of electric fencing systems designed to enhance security and prevent unauthorized access.",
    ],
    highlights: [
      "High-performance perimeter security solution",
      "Safety-compliant modern equipment",
      "Site assessment and structured installation",
      "Reliability testing before handover",
      "Completed within committed timeline",
    ],
    deliverables: [
      "Site assessment and perimeter planning",
      "Supply of electric fencing systems",
      "Professional installation and integration",
      "System testing and commissioning",
      "Handover with quality assurance",
    ],
    metaDescription:
      "Electric fence perimeter security project in District Lahore delivered by Salik Groups & Co in 2025.",
  },
  {
    id: "uvss",
    slug: "uvss",
    tag: "UVSS · 2024",
    title: "Under-Vehicle Scanning — CTD",
    year: "2024",
    location: "Counter Terrorism Department (CTD)",
    client: "Counter Terrorism Department (CTD)",
    description:
      "UVSS integrated with monitoring stations for real-time under-vehicle inspection and threat detection.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=72&auto=format&fit=crop",
    gallery: [],
    coverImage: "/media/ai/uvss_cover.webp",
    overview: [
      "Salik Groups & Co successfully completed the Under Vehicle Scanning System (UVSS) installation project for the Counter Terrorism Department (CTD), delivering a reliable and high-security vehicle inspection solution.",
      "The scope of work included supply, installation, system configuration, and commissioning of the UVSS, integrated with monitoring stations to enable real-time under-vehicle inspection and threat detection.",
    ],
    highlights: [
      "Mission-critical vehicle inspection system",
      "Real-time under-vehicle threat detection",
      "Integration with monitoring stations",
      "Accurate imaging and stable performance",
      "Completed within required timeline",
    ],
    deliverables: [
      "UVSS supply and installation",
      "Monitoring station integration",
      "System configuration and calibration",
      "Performance testing and quality assurance",
      "Commissioning and operator handover",
    ],
    metaDescription:
      "UVSS under-vehicle scanning system for CTD installed and commissioned by Salik Groups & Co in 2024.",
  },
  {
    id: "networking",
    slug: "networking",
    tag: "Networking · 2024",
    title: "Ubiquiti Wireless Links — Lahore",
    year: "2024",
    location: "District Lahore",
    client: "Commercial / Institutional Client",
    description:
      "Secure point-to-point and point-to-multipoint links planned, aligned, optimised and commissioned.",
    image: projectCoverImages.networking,
    gallery: [...projectGalleries.networking],
    coverImage: "/media/ai/networking_cover.webp",
    overview: [
      "Salik Groups & Co successfully completed the Ubiquiti wireless network link installation project in District Lahore during 2024, delivering a high-performance and reliable connectivity solution.",
      "The project involved site survey, link planning, installation, configuration, alignment, and commissioning of Ubiquiti wireless equipment to establish secure and stable point-to-point and point-to-multipoint communication links.",
    ],
    highlights: [
      "Point-to-point and point-to-multipoint links",
      "Signal optimization and bandwidth stability",
      "Long-distance connectivity performance",
      "Strict quality testing and verification",
      "Completed within assigned timeline",
    ],
    deliverables: [
      "Site survey and link planning",
      "Ubiquiti equipment supply and mounting",
      "Alignment and wireless configuration",
      "Performance testing and optimization",
      "Commissioning and handover documentation",
    ],
    metaDescription:
      "Ubiquiti wireless network links installed in District Lahore by Salik Groups & Co in 2024.",
  },
  {
    id: "solar",
    slug: "solar",
    tag: "Solar · 110–125 KW",
    title: "High-Capacity Solar System",
    year: "2024",
    location: "Industrial / Commercial Site, Pakistan",
    client: "Industrial / Commercial Client",
    description:
      "Load analysis, system design, panel & inverter supply, installation and commissioning for efficient power.",
    image: projectCoverImages.solar,
    gallery: [...projectGalleries.solar],
    coverImage: "/media/ai/solar_epc_cover.webp",
    overview: [
      "Salik Groups & Co delivers comprehensive high-capacity solar energy systems designed to meet the growing power demands of government institutions, industrial facilities, commercial complexes, and large infrastructures.",
      "This project covered load analysis, system design, panel and inverter supply, installation and commissioning — following international safety and engineering standards with strict quality control and performance testing.",
    ],
    highlights: [
      "110–125 KW high-capacity solar installation",
      "Grid-tied system with net metering readiness",
      "Premium panels and high-efficiency inverters",
      "International safety and engineering standards",
      "Reliable power output and long-term support",
    ],
    deliverables: [
      "Feasibility study and load analysis",
      "System design and equipment supply",
      "Panel and inverter installation",
      "Testing, commissioning and optimization",
      "Documentation and after-sales support",
    ],
    metaDescription:
      "High-capacity 110–125 KW solar energy system designed, installed and commissioned by Salik Groups & Co.",
  },
];
