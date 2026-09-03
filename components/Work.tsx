import Image from "next/image";
import { projects, type Project } from "@/content/projects";
import { Reveal } from "./Reveal";

function Panel({ project }: { project: Project }) {
  if (project.image) {
    const contain = project.imageFit === "contain";
    return (
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-line bg-surface">
        {contain && (
          <div
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "radial-gradient(120% 120% at 15% 15%, rgba(255,90,54,0.22), transparent 55%), radial-gradient(120% 120% at 85% 85%, rgba(125,249,228,0.18), transparent 55%)",
            }}
          />
        )}
        <Image
          src={project.image}
          alt={
            contain ? `${project.name} — logo` : `${project.name} — screenshot`
          }
          fill
          sizes="(min-width: 1024px) 45vw, 100vw"
          className={contain ? "object-contain p-12" : "object-cover"}
        />
      </div>
    );
  }

  // Generated stand-in until a real screenshot is dropped in /public/work/
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-line bg-surface">
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(120% 120% at 15% 15%, rgba(255,90,54,0.28), transparent 55%), radial-gradient(120% 120% at 85% 85%, rgba(125,249,228,0.22), transparent 55%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(#282c32 1px, transparent 1px), linear-gradient(90deg, #282c32 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute left-5 top-5 font-mono text-xs text-muted">
        {project.ref}
      </div>
      <div className="absolute bottom-5 left-5 right-5 font-display text-2xl font-bold leading-tight text-text/90">
        {project.name}
      </div>
    </div>
  );
}

export function Work() {
  return (
    <section id="work" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="max-w-[20ch] text-[length:var(--text-section)]">
            Selected problems, and what we shipped.
          </h2>
        </Reveal>

        <hr className="rule-resolve my-14" />

        <div className="flex flex-col gap-24 sm:gap-32">
          {projects.map((p, i) => {
            const flip = i % 2 === 1;
            return (
              <Reveal key={p.ref}>
                <article className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                  <div className={flip ? "lg:order-2" : ""}>
                    <Panel project={p} />
                  </div>

                  <div className={flip ? "lg:order-1" : ""}>
                    <div className="flex items-center gap-3 font-mono text-xs text-muted">
                      <span className="text-problem">{p.ref}</span>
                      <span aria-hidden="true">·</span>
                      <span>{p.year}</span>
                      <span aria-hidden="true">·</span>
                      <span>{p.client}</span>
                    </div>

                    <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                      {p.name}
                    </h3>

                    <dl className="mt-6 space-y-4 text-sm leading-relaxed">
                      <div>
                        <dt className="font-mono text-xs lowercase text-problem">
                          problem
                        </dt>
                        <dd className="mt-1 text-muted">{p.problem}</dd>
                      </div>
                      <div>
                        <dt className="font-mono text-xs lowercase text-solve">
                          resolution
                        </dt>
                        <dd className="mt-1 text-text/90">{p.resolution}</dd>
                      </div>
                    </dl>

                    {p.metric && (
                      <p className="mt-6 font-display text-2xl font-bold text-text">
                        {p.metric.value}{" "}
                        <span className="font-sans text-sm font-normal text-muted">
                          {p.metric.label}
                        </span>
                      </p>
                    )}

                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <span key={t} className="mono-chip">
                          {t}
                        </span>
                      ))}
                    </div>

                    {p.href && (
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noreferrer"
                        className="link-underline mt-6 inline-block font-mono text-sm text-solve"
                      >
                        Visit live →
                      </a>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
