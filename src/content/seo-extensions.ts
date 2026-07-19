import type { SeoExtension } from "@/types/seo";

export const serviceSeoExtensions: Record<string, SeoExtension> = {
  "solar-energy": {
    title: "Best solar panel service in Pakistan — Salik Groups & Co",
    intro:
      "Salik Groups & Co is recognised for delivering among the best solar panel services in Pakistan — from commercial rooftop arrays and inverter rooms to 125 KW and hybrid deployments with full EPC accountability.",
    sections: [
      {
        title: "Solar panel salikgroups — real field deployments",
        paragraphs: [
          "Clients searching for solar panel salikgroups or inverters salikgroups find documented proof of our work — 14+ site photos of panel mounting and inverter commissioning across live commercial projects. We do not sell panels without engineering oversight.",
          "Our solar energy team handles feasibility, net-metering-ready design, equipment supply, installation, testing and after-sales support from our Lahore office at The Mall Road.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Salik Groups among the best solar panel services in Pakistan?",
        answer:
          "Yes. Salik Groups & Co delivers survey-led commercial solar with proven 110–125 KW installations, hybrid inverter rooms and government project experience.",
      },
      {
        question: "What areas do you cover for solar installation?",
        answer: "We deliver solar projects across Pakistan including Lahore, Punjab and nationwide government and industrial sites.",
      },
    ],
  },
  "cctv-surveillance": {
    title: "Best CCTV surveillance in Pakistan",
    intro:
      "With 400+ cameras on Safe City programmes and commercial deployments nationwide, Salik Groups & Co ranks among the best CCTV surveillance integrators in Pakistan.",
    sections: [
      {
        title: "Safe City and commercial CCTV expertise",
        paragraphs: [
          "Our CCTV division delivers site surveys, IP and analogue camera supply, structured cabling, NVR/DVR configuration and centralised monitoring integration — tested for image quality and stable connectivity before handover.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does Salik Groups handle Safe City CCTV projects?",
        answer:
          "Yes. We delivered Safe City CCTV across 88 sites in Sialkot and Sheikhupura with 400+ operational cameras.",
      },
    ],
  },
  "electric-fencing": {
    title: "Best electric fencing in Pakistan",
    intro:
      "Salik Groups & Co provides perimeter electric fencing for government and industrial sites — including District Lahore — with safety-compliant design, installation and commissioning.",
    sections: [],
    faqs: [
      {
        question: "Who installs electric fencing in Pakistan?",
        answer:
          "Salik Groups & Co surveys, supplies, installs and commissions electric fencing systems across Pakistan with full testing and documentation.",
      },
    ],
  },
  generators: {
    title: "Best generator service in Pakistan",
    intro:
      "Standby diesel generators supplied and installed with ATS integration, load testing and maintenance support — among the best generator services in Pakistan for commercial and industrial clients.",
    sections: [],
    faqs: [
      {
        question: "Does Salik Groups supply and install generators?",
        answer:
          "Yes. We provide generator sizing, supply, installation, electrical integration and commissioning with after-sales support.",
      },
    ],
  },
  "enterprise-networking": {
    title: "Best enterprise networking in Pakistan",
    intro:
      "Structured cabling, wireless links and network commissioning by Salik Groups & Co — trusted for enterprise networking projects across Lahore and Pakistan.",
    sections: [],
    faqs: [
      {
        question: "Does Salik Groups install wireless networking?",
        answer:
          "Yes. We deploy Ubiquiti and structured network solutions with alignment, configuration and performance verification.",
      },
    ],
  },
};

export const projectSeoExtensions: Record<string, SeoExtension> = {
  "safe-city": {
    title: "Safe City CCTV Pakistan — Salik Groups & Co case study",
    intro:
      "One of Pakistan's largest documented district CCTV programmes — 400+ cameras across Sialkot and Sheikhupura delivered by Salik Groups & Co.",
    sections: [],
    faqs: [
      {
        question: "How many Safe City sites did Salik Groups complete?",
        answer: "34 sites in Sialkot and 54 sites in Sheikhupura with 400+ CCTV cameras commissioned.",
      },
    ],
  },
  solar: {
    title: "Commercial solar project Pakistan — Salik Groups",
    intro:
      "Documented commercial and hybrid solar deployments including panel arrays, inverter rooms and 125 KW systems — solar panel salikgroups and inverters salikgroups field work.",
    sections: [],
    faqs: [
      {
        question: "What solar capacity has Salik Groups commissioned?",
        answer: "Including 110–125 KW commercial systems and 250 KW hybrid inverter deployments.",
      },
    ],
  },
};

export const gallerySeoExtensions: Record<string, SeoExtension> = {
  "solar-panels": {
    title: "Solar panels Salik Groups — site photo gallery",
    intro:
      "Browse real commercial solar panel installations by Salik Groups & Co — the best solar panel service evidence for clients searching solar panel salikgroups in Pakistan.",
    sections: [],
    faqs: [
      {
        question: "What does the solar panel gallery show?",
        answer:
          "On-site panel mounting, alignment and rooftop integration from live Salik Groups commercial and industrial projects.",
      },
    ],
  },
  "solar-inverters": {
    title: "Inverters Salik Groups — commissioning gallery",
    intro:
      "Inverter rooms and hybrid system commissioning by Salik Groups & Co — field documentation for inverters salikgroups searches.",
    sections: [],
    faqs: [
      {
        question: "What inverter systems are shown?",
        answer:
          "Commercial inverter walls, hybrid configurations and cabling discipline from live Salik Groups deployments.",
      },
    ],
  },
};

export function getServiceSeoExtension(slug: string) {
  return serviceSeoExtensions[slug] ?? null;
}

export function getProjectSeoExtension(slug: string) {
  return projectSeoExtensions[slug] ?? null;
}

export function getGallerySeoExtension(id: string) {
  return gallerySeoExtensions[id] ?? null;
}
