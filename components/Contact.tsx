"use client";

import { useState } from "react";
import { site } from "@/content/site";
import { Reveal } from "./Reveal";

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError(null);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) {
        throw new Error(json.error ?? "Something went wrong. Try again.");
      }
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section id="contact" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <hr className="rule-resolve mb-14" />
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <p className="eyebrow">
              // <b>got a problem?</b>
            </p>
            <h2 className="mt-4 max-w-[12ch] text-[length:var(--text-section)]">
              Tell us what&apos;s stuck.
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
              A real engineer reads every message. If it&apos;s a fit we&apos;ll
              reply within two working days with next steps — not a sales call.
            </p>
            <p className="mt-8 font-mono text-sm">
              <a
                href={`mailto:${site.email}`}
                className="link-underline text-solve"
              >
                {site.email}
              </a>
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            {status === "sent" ? (
              <div
                role="status"
                className="rounded-2xl border border-line bg-surface p-8"
              >
                <p className="font-mono text-xs lowercase text-solve">
                  resolution
                </p>
                <p className="mt-3 text-lg text-text">Message received.</p>
                <p className="mt-2 text-sm text-muted">
                  We&apos;ll be in touch at the address you gave us. Talk soon.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5" noValidate>
                <Field label="Name" name="name" autoComplete="name" required />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                />
                <Field label="Company" name="company" autoComplete="organization" />
                <div>
                  <label
                    htmlFor="message"
                    className="font-mono text-xs lowercase text-muted"
                  >
                    What&apos;s the problem?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="mt-2 w-full resize-y rounded-lg border border-line bg-bg px-4 py-3 text-sm text-text outline-none transition-colors placeholder:text-muted/60 focus:border-solve"
                    placeholder="The migration that keeps slipping. The feature due in six weeks. The thing only one person understands."
                  />
                </div>

                {status === "error" && (
                  <p role="alert" className="font-mono text-xs text-problem">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="rounded-full bg-solve px-6 py-3 font-mono text-sm text-[#08201d] transition-transform hover:-translate-y-0.5 disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : "Send it over"}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="font-mono text-xs lowercase text-muted">
        {label}
        {required && <span className="text-problem"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="mt-2 w-full rounded-lg border border-line bg-bg px-4 py-3 text-sm text-text outline-none transition-colors focus:border-solve"
      />
    </div>
  );
}
