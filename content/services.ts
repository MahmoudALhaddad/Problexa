// What Problexa does. Order is the display order. `code` is the mono marker shown beside each.

export type Service = {
  code: string;
  title: string;
  body: string;
  tags: string[];
};

export const services: Service[] = [
  {
    code: "S1",
    title: "Product engineering",
    body: "Web apps built to last — from a blank repo to production. TypeScript front to back, tests that mean something, CI that stays green.",
    tags: ["Next.js", "React", "Node", "PostgreSQL"],
  },
  {
    code: "S2",
    title: "Design & interface",
    body: "Interface design that respects the engineering. We work in the browser, not just Figma, so what you approve is what ships.",
    tags: ["Design systems", "Prototyping", "Accessibility"],
  },
  {
    code: "S3",
    title: "AI & automation",
    body: "LLM features that hold up in production: retrieval, evals, guardrails, and a cost model you can defend to finance.",
    tags: ["Claude API", "RAG", "Evals", "Agents"],
  },
  {
    code: "S4",
    title: "Rescue & migration",
    body: "The project that's late, the framework that's two majors behind, the codebase only one person understands. We stabilise it, then move it forward.",
    tags: ["Refactors", "Upgrades", "Perf", "Docs"],
  },
  {
    code: "S5",
    title: "Infrastructure",
    body: "Deploys that don't page you at 3am. Observability, IaC, and a rollback that actually works.",
    tags: ["AWS", "Vercel", "Terraform", "CI/CD"],
  },
];
