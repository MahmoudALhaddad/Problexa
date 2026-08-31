import { services } from "@/content/services";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section id="services" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow">
            // <b>what we do</b>
          </p>
          <h2 className="mt-4 max-w-[18ch] text-[length:var(--text-section)]">
            Five ways we get brought in.
          </h2>
        </Reveal>

        <hr className="rule-resolve my-14" />

        <ul className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal
              as="li"
              key={s.code}
              delay={i * 0.05}
              className="flex h-full flex-col gap-4 bg-bg p-7 transition-colors hover:bg-surface"
            >
              <span className="font-mono text-xs text-problem">{s.code}</span>
              <h3 className="text-xl font-semibold tracking-tight">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{s.body}</p>
              <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                {s.tags.map((t) => (
                  <span key={t} className="mono-chip">
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
