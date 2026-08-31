// Global site copy and links. Edit these values freely — nothing here is load-bearing.

export const site = {
  name: "Problexa",
  wordmark: "problexa",
  // One line that says what the studio is. Keep it short.
  positioning: "A software & design studio. We ship the hard parts.",
  // Hero headline is built from these three pieces: "We take the word ___ / ___ ."
  heroLead: "We take the word",
  heroProblem: "problem",
  heroResolved: "solved",
  heroSub:
    "Problexa is a small team of engineers and designers. Companies bring us the part of the build that's stuck — the migration nobody wants, the feature that keeps slipping, the product that needs to exist by Q3 — and we get it shipped.",
  email: "hello@problexa.com",
  location: "Remote · working across CET / EST",
  // Shown in the footer status pill.
  status: "All systems operational",
  socials: [
    { label: "GitHub", href: "https://github.com/problexa" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/problexa" },
    { label: "X", href: "https://x.com/problexa" },
  ],
  nav: [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Studio", href: "#studio" },
    { label: "Contact", href: "#contact" },
  ],
} as const;
