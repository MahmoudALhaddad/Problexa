"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { site } from "@/content/site";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-line bg-bg/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" aria-label={`${site.name} — home`} className="shrink-0">
          {/* full wordmark on desktop */}
          <Image
            src="/logoImages/problexa-wordmark-transparent_1.png"
            alt={site.name}
            width={158}
            height={20}
            priority
            className="hidden h-5 w-auto sm:block"
          />
          {/* compact bracket mark on mobile */}
          <Image
            src="/logoImages/problexa-px-transparent.png"
            alt={site.name}
            width={80}
            height={24}
            priority
            className="block h-6 w-auto sm:hidden"
          />
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="link-underline font-mono text-xs tracking-wide text-muted hover:text-text"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-full border border-line px-4 py-1.5 font-mono text-xs text-text transition-colors hover:border-solve hover:text-solve"
        >
          Start a project
        </a>
      </nav>
    </header>
  );
}
