import { studio } from "@/content/studio";
import { site } from "@/content/site";
import { Reveal } from "./Reveal";

export function Studio() {
  return (
    <section id="studio" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow">
            // <b>the studio</b>
          </p>
        </Reveal>

        <div className="mt-6 grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="space-y-6">
              {studio.story.map((para, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? "text-xl leading-relaxed text-text sm:text-2xl"
                      : "text-base leading-relaxed text-muted"
                  }
                >
                  {para}
                </p>
              ))}

              <div className="flex flex-wrap items-center gap-3 pt-2">
                {studio.team.map((m) => (
                  <div
                    key={m.initials}
                    title={m.name}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface font-mono text-xs text-muted"
                  >
                    {m.initials}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line">
              {studio.stats.map((s) => (
                <div key={s.label} className="bg-bg p-6">
                  <dt className="font-display text-4xl font-bold text-text">
                    {s.value}
                  </dt>
                  <dd className="mt-1 font-mono text-xs text-muted">{s.label}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 font-mono text-xs text-muted">
              {site.location}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
