"use client";

import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/content/site";

export function Hero() {
  const reduce = useReducedMotion() ?? false;

  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden px-5 pt-28 sm:px-8"
    >
      <div className="grid-backdrop" aria-hidden="true" />
      <div
        className="glow left-[-10%] top-[10%] h-[420px] w-[520px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <motion.p
          className="eyebrow mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          {site.wordmark} <b>//</b> {site.location}
        </motion.p>

        <h1
          className="max-w-[16ch] text-[length:var(--text-hero)]"
          aria-label={`${site.heroLead} ${site.heroProblem} ${site.heroResolved}.`}
        >
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: reduce ? 0 : "110%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {site.heroLead}
            </motion.span>
          </span>

          <span className="block overflow-hidden">
            <motion.span
              className="relative inline-block"
              initial={{ y: reduce ? 0 : "110%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.28, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* "problem" — struck through */}
              <span className="relative text-problem">
                {site.heroProblem}
                <motion.span
                  className="absolute left-0 top-1/2 h-[3px] w-full origin-left bg-problem"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: reduce ? 1 : 1 }}
                  transition={{ delay: reduce ? 0 : 1.15, duration: 0.4, ease: "easeInOut" }}
                  aria-hidden="true"
                />
              </span>{" "}
              {/* "solved" — fades up in mint */}
              <motion.span
                className="text-solve"
                initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: reduce ? 0 : 1.4, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {site.heroResolved}
              </motion.span>
              <span className="text-text">.</span>
            </motion.span>
          </span>
        </h1>

        <motion.p
          className="mt-10 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          initial={{ opacity: 0, y: reduce ? 0 : 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {site.heroSub}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <a
            href="#work"
            className="rounded-full bg-solve px-6 py-3 font-mono text-sm text-[#08201d] transition-transform hover:-translate-y-0.5"
          >
            See the work
          </a>
          <a
            href="#contact"
            className="link-underline font-mono text-sm text-muted hover:text-text"
          >
            Start a project →
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 font-mono text-[0.65rem] tracking-widest text-muted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        aria-hidden="true"
      >
        scroll ↓
      </motion.div>
    </section>
  );
}
