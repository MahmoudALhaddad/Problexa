// The Solve Log. Each entry is a shipped project framed as a problem we resolved.
//
// To add real work: replace the fields below. For images, drop a file in /public/work/
// and set `image` to "/work/your-file.png" — until then `image` can stay null and a
// generated panel is shown.

export type Project = {
  ref: string; // PRB-014 — stable id, also used as the React key
  year: string;
  client: string; // company or "Confidential" / "Internal"
  name: string; // the project name shown large
  problem: string; // one sentence: what was stuck
  resolution: string; // one or two sentences: what we shipped
  tags: string[];
  metric?: { value: string; label: string }; // optional headline result
  href?: string | null; // live link, or null
  image?: string | null; // "/work/foo.png" or null for a generated panel
  imageFit?: "cover" | "contain"; // "contain" = padded/centered, for a logo instead of a screenshot
};

export const projects: Project[] = [
  {
    ref: "PRB-025",
    year: "2026",
    client: "Doña · bowl restaurant",
    name: "Order & delivery platform",
    problem:
      "A bowl restaurant taking orders by phone, with a shared POS setup that regularly mixed up call numbers, lost new customers' names off the kitchen ticket, and had no way to verify who was actually placing an order.",
    resolution:
      "Built a full ordering site wired directly into their Revel POS in real time — live menu sync, per-zone delivery pricing across 170+ mapped areas, WhatsApp-verified checkout, and a driver dispatch view so deliveries stop getting missed.",
    tags: [
      "Next.js",
      "TypeScript",
      "Revel POS API",
      "WhatsApp Cloud API",
      "Google Maps API",
      "Tailwind CSS",
    ],
    metric: { value: "Real-time", label: "POS sync · zero manual order entry" },
    href: "https://www.donabowls.com/",
    image: "/ProjectsImages/Dona.jpg",
  },
  {
    ref: "PRB-026",
    year: "2025",
    client: "IEEE Computer Society · Texas Tech Student Branch",
    name: "IMPACT congress site",
    problem:
      "The branch was promoting the first fully immersive congress in the Middle East dedicated to VR, AR, and MR, but had no public home for it — no way to build anticipation before the date, show who was speaking, or lay out a full day of parallel workshops. Attendees had nowhere to check the schedule, and the keynote and workshop line-ups lived in scattered posts across Facebook, Instagram, and LinkedIn.",
    resolution:
      "Built a two-page static site: a hero landing page with a live countdown to the event, keynote and workshop speaker grids with hover-reveal bios, and a dedicated agenda page rendering the full 9:00 AM–5:00 PM timeline as an alternating left/right rail with scroll-triggered animations. A jQuery layout controller rebuilds the navigation, timeline geometry, and social links on the fly below 600px so the timeline stays readable on a phone. Social channels are consolidated into one footer.",
    tags: [
      "HTML5",
      "CSS3 (Grid & Flexbox)",
      "JavaScript",
      "jQuery",
      "AOS",
      "Bootstrap Icons",
    ],
    metric: {
      value: "Zero backend",
      label: "one source of truth · mobile-first timeline",
    },
    href: "https://impact.jordan.ieee.org/",
    image: "/ProjectsImages/Impact.svg",
    imageFit: "contain",
  },
  {
    ref: "PRB-021",
    year: "2025",
    client: "Fintech scale-up",
    name: "Ledger rebuild",
    problem:
      "Month-end close took four days of manual spreadsheet work and no one trusted the numbers.",
    resolution:
      "Rebuilt the ledger as an event-sourced service with a real audit trail. Close is now same-day and reconciles itself.",
    tags: ["Node", "PostgreSQL", "Event sourcing", "React"],
    metric: { value: "4d → 6h", label: "month-end close" },
    href: null,
    image: null,
  },
  {
    ref: "PRB-018",
    year: "2025",
    client: "B2B SaaS",
    name: "Assistant, shipped",
    problem:
      "An AI support assistant had been 'two weeks away' for six months — demos worked, production didn't.",
    resolution:
      "Added retrieval over their docs, an eval suite gating every deploy, and per-answer cost tracking. Live to all customers in five weeks.",
    tags: ["Claude API", "RAG", "Evals", "TypeScript"],
    metric: { value: "38%", label: "tickets deflected" },
    href: null,
    image: null,
  },
  {
    ref: "PRB-014",
    year: "2024",
    client: "Logistics",
    name: "Dispatch console",
    problem:
      "Dispatchers ran the operation from a 2015 jQuery app that broke under load every peak season.",
    resolution:
      "New real-time console — same workflow, rewritten. Handles 10x the concurrent routes and loads in under a second.",
    tags: ["Next.js", "WebSockets", "Redis", "Mapbox"],
    metric: { value: "10x", label: "concurrent routes" },
    href: null,
    image: null,
  },
  {
    ref: "PRB-009",
    year: "2024",
    client: "Healthcare startup",
    name: "Design system reset",
    problem:
      "Three product teams, three component libraries, no shared language — every screen looked like a different company.",
    resolution:
      "One accessible design system, documented and adopted. New features now start from tested components instead of scratch.",
    tags: ["Design systems", "React", "Radix", "Storybook"],
    metric: { value: "WCAG AA", label: "across the app" },
    href: null,
    image: null,
  },
  {
    ref: "PRB-006",
    year: "2023",
    client: "Media company",
    name: "The 14-year upgrade",
    problem:
      "A revenue-critical Rails app was pinned to an EOL version with no tests and one engineer who knew it.",
    resolution:
      "Wrote the missing test coverage first, then moved it four majors forward and onto managed infra. Zero downtime.",
    tags: ["Ruby on Rails", "RSpec", "AWS", "Terraform"],
    metric: { value: "0", label: "downtime minutes" },
    href: null,
    image: null,
  },
];
